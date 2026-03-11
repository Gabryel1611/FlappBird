import { CARDS, ELEMENTS } from './cards.js';

class OraculoTactical {
    constructor() {
        this.deck = [...CARDS];
        this.players = [
            {
                id: 1, name: "Você", hp: 100, maxHp: 100, shield: 0, hand: [],
                isImmune: false, stunnedTurns: 0, revealEnemyHand: false,
                damageMultiplier: 1, permanentDmgBonus: 0
            },
            {
                id: 2, name: "Oráculo Felino", hp: 100, maxHp: 100, shield: 0, hand: [],
                isImmune: false, stunnedTurns: 0, revealEnemyHand: false,
                damageMultiplier: 1, permanentDmgBonus: 0
            }
        ];
        this.currentTurn = 1; // 1 = Player, 2 = AI
        this.isProcessing = false;

        // DOM Elements
        this.playerHandEl = document.getElementById('player-hand');
        this.enemyHandEl = document.getElementById('enemy-hand');
        this.playerPlayedEl = document.getElementById('player-played');
        this.enemyPlayedEl = document.getElementById('enemy-played');
        this.battleLog = document.getElementById('battle-log');

        this.init();
    }

    init() {
        this.shuffleDeck();
        this.dealInitialHands();
        this.updateUI();
    }

    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }

    dealInitialHands() {
        for (let i = 0; i < 3; i++) {
            this.players[0].hand.push(this.deck.pop());
            this.players[1].hand.push(this.deck.pop());
        }
    }

    log(message) {
        const p = document.createElement('p');
        p.textContent = message;
        this.battleLog.prepend(p);
    }

    updateUI() {
        // Update HP Bars
        this.players.forEach(p => {
            const hpFill = document.getElementById(`hp-player-${p.id}`);
            const hpText = document.getElementById(`hp-val-${p.id}`);
            const percentage = (p.hp / p.maxHp) * 100;
            hpFill.style.width = `${Math.max(0, percentage)}%`;
            hpText.textContent = Math.ceil(p.hp);
        });

        // Update Player Hand
        this.playerHandEl.innerHTML = '';
        this.players[0].hand.forEach((card, index) => {
            const cardEl = this.createCardElement(card);
            cardEl.onclick = () => this.handleCardPlay(index);
            this.playerHandEl.appendChild(cardEl);
        });

        // Update Enemy Hand
        this.enemyHandEl.innerHTML = '';
        this.players[1].hand.forEach((card) => {
            if (this.players[0].revealEnemyHand) {
                const cardEl = this.createCardElement(card);
                cardEl.style.transform = 'scale(0.8)';
                cardEl.style.pointerEvents = 'none';
                this.enemyHandEl.appendChild(cardEl);
            } else {
                const back = document.createElement('div');
                back.className = 'card-back';
                this.enemyHandEl.appendChild(back);
            }
        });

        if (this.currentTurn === 1 && !this.isProcessing) {
            this.playerHandEl.style.pointerEvents = 'auto';
            this.playerHandEl.style.opacity = '1';
        } else {
            this.playerHandEl.style.pointerEvents = 'none';
            this.playerHandEl.style.opacity = '0.6';
        }
    }

    createCardElement(card) {
        const div = document.createElement('div');
        div.className = `revealed-card card-${card.element}`;
        const elementData = ELEMENTS[card.element];

        div.innerHTML = `
            <div class="card-header">
                <span class="card-level">${card.level || ''}</span>
                <span class="card-element-name">${elementData.name}</span>
            </div>
            <div class="card-body">
                <h3 class="card-name" style="font-size:0.9rem">${card.name}</h3>
                <div class="card-stats-row" style="font-size:0.8rem">
                    ${card.damage > 0 ? `<span class="stat-dmg">⚔️${card.damage}</span>` : ''}
                    ${card.heal > 0 ? `<span class="stat-heal">💚${card.heal}</span>` : ''}
                    ${card.shield > 0 ? `<span class="stat-shield">🛡️${card.shield}</span>` : ''}
                </div>
                <p class="card-ability" style="font-size:0.7rem; margin-top:5px; line-height:1.2">${card.ability}</p>
            </div>
        `;
        return div;
    }

    async handleCardPlay(cardIndex) {
        if (this.isProcessing || this.currentTurn !== 1) return;
        this.isProcessing = true;

        const player = this.players[0];
        const card = player.hand.splice(cardIndex, 1)[0];

        this.playerPlayedEl.innerHTML = '';
        this.playerPlayedEl.appendChild(this.createCardElement(card));

        await this.applyCardEffects(card, this.players[0], this.players[1]);

        if (this.deck.length > 0) player.hand.push(this.deck.pop());

        this.updateUI();

        if (this.players[1].hp > 0) {
            this.currentTurn = 2;
            setTimeout(() => this.aiTurn(), 1000);
        }
    }

    async aiTurn() {
        const ai = this.players[1];

        if (ai.stunnedTurns > 0) {
            this.log(`${ai.name} está paralisado e pula o turno!`);
            ai.stunnedTurns--;
            this.currentTurn = 1;
            this.isProcessing = false;
            this.updateUI();
            return;
        }

        let cardIndex = 0;
        // Basic AI AI: Trump cards first if possible, or context-based
        const trumpIdx = ai.hand.findIndex(c => c.element === 'TRUMP');
        if (trumpIdx !== -1 && Math.random() > 0.5) {
            cardIndex = trumpIdx;
        } else if (ai.hp < 40) {
            cardIndex = ai.hand.findIndex(c => c.heal > 0);
            if (cardIndex === -1) cardIndex = 0;
        } else {
            ai.hand.forEach((c, i) => {
                if ((c.damage || 0) > (ai.hand[cardIndex].damage || 0)) cardIndex = i;
            });
        }

        const card = ai.hand.splice(cardIndex, 1)[0];
        this.enemyPlayedEl.innerHTML = '';
        this.enemyPlayedEl.appendChild(this.createCardElement(card));

        await this.applyCardEffects(card, this.players[1], this.players[0]);

        if (this.deck.length > 0) ai.hand.push(this.deck.pop());

        this.currentTurn = 1;
        this.isProcessing = false;
        this.updateUI();
    }

    async applyCardEffects(card, attacker, defender) {
        return new Promise(resolve => {
            setTimeout(() => {
                attacker.isImmune = false; // Reset immunity at start of turn sequence

                if (card.element === 'TRUMP') {
                    this.executeTrumpEffect(card, attacker, defender);
                } else {
                    // Normal Card Logic
                    if (card.heal > 0) {
                        const healAmt = card.heal * attacker.damageMultiplier;
                        attacker.hp = Math.min(attacker.maxHp, attacker.hp + healAmt);
                        this.log(`${attacker.name} curou ${healAmt} HP.`);
                    }
                    if (card.shield > 0) {
                        attacker.shield += card.shield;
                        this.log(`${attacker.name} ganhou ${card.shield} de escudo.`);
                    }
                    if (card.damage > 0) {
                        if (defender.isImmune) {
                            this.log(`${defender.name} está imune! Dano anulado.`);
                        } else {
                            let dmg = (card.damage + attacker.permanentDmgBonus) * attacker.damageMultiplier;
                            if (defender.shield > 0) {
                                const block = Math.min(defender.shield, dmg);
                                defender.shield -= block;
                                dmg -= block;
                                this.log(`${defender.name} bloqueou ${block} com escudo.`);
                            }
                            if (dmg > 0) {
                                defender.hp -= dmg;
                                this.log(`${attacker.name} causou ${dmg} de dano.`);
                            }
                        }
                    }
                }

                attacker.damageMultiplier = 1; // Reset multiplier after use
                this.checkGameOver();
                resolve();
            }, 800);
        });
    }

    executeTrumpEffect(card, attacker, defender) {
        this.log(`${attacker.name} ativou o TRUNFO: ${card.name}!`);

        switch (card.id) {
            case 'tr1': // Visão de Águia
                attacker.revealEnemyHand = true;
                break;
            case 'tr2': // Mão Leve
                if (defender.hand.length > 0) {
                    const stolen = defender.hand.splice(Math.floor(Math.random() * defender.hand.length), 1)[0];
                    attacker.hand.push(stolen);
                    this.log(`${attacker.name} roubou ${stolen.name} da mão de ${defender.name}!`);
                }
                break;
            case 'tr3': // Dobrar a Aposta
                attacker.damageMultiplier = 2;
                break;
            case 'tr4': // Troca de Destino
                const tempHp = attacker.hp;
                attacker.hp = defender.hp;
                defender.hp = tempHp;
                this.log(`O destino foi trocado! HP de ${attacker.name} agora é ${attacker.hp}.`);
                break;
            case 'tr5': // Escudo Absoluto
                attacker.isImmune = true;
                break;
            case 'tr6': // Reciclar
                attacker.hand = [];
                for (let i = 0; i < 3; i++) if (this.deck.length > 0) attacker.hand.push(this.deck.pop());
                break;
            case 'tr7': // Paralisia
                defender.stunnedTurns++;
                break;
            case 'tr8': // Sangue Elemental
                attacker.permanentDmgBonus += 10;
                break;
            case 'tr9': // Vingança
                const missingHp = attacker.maxHp - attacker.hp;
                if (!defender.isImmune) {
                    defender.hp -= missingHp;
                    this.log(`Vingança! Causou ${missingHp} de dano.`);
                }
                break;
            case 'tr10': // Caos Purificador
                attacker.shield = 0;
                defender.shield = 0;
                this.log(`Todos os escudos foram transformados em poeira!`);
                break;
        }
    }

    checkGameOver() {
        const loser = this.players.find(p => p.hp <= 0);
        if (loser) {
            const winner = this.players.find(p => p.hp > 0);
            alert(`FIM DE JOGO! ${winner.name} venceu!`);
            location.reload();
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    new OraculoTactical();
});
