export const ELEMENTS = {
    WATER: { name: 'Água', color: '#4facfe', shadow: 'rgba(79, 172, 254, 0.5)', essence: 'Intuição e Emoção' },
    FIRE: { name: 'Fogo', color: '#f83600', shadow: 'rgba(248, 54, 0, 0.5)', essence: 'Energia e Ação' },
    EARTH: { name: 'Terra', color: '#0ba360', shadow: 'rgba(11, 163, 96, 0.5)', essence: 'Estabilidade e Matéria' },
    AIR: { name: 'Ar', color: '#e6e9f0', shadow: 'rgba(230, 233, 240, 0.5)', essence: 'Mente e Movimento' },
    TRUMP: { name: 'Trunfo', color: '#ffd700', shadow: 'rgba(255, 215, 0, 0.6)', essence: 'Modificador de Destino' }
};

export const CARDS = [
    // --- ÁGUA (WATER) - Focada em Cura e Buffs ---
    { id: 'w1', element: 'WATER', level: 1, name: 'Gota da Clareza', damage: 2, heal: 5, shield: 0, ability: 'Cura leve e dano mínimo.' },
    { id: 'w2', element: 'WATER', level: 2, name: 'Nascente', damage: 0, heal: 10, shield: 2, ability: 'Restaura as energias.' },
    { id: 'w3', element: 'WATER', level: 3, name: 'Névoa Calmante', damage: 0, heal: 5, shield: 8, ability: 'Proteção e serenidade.' },
    { id: 'w4', element: 'WATER', level: 4, name: 'Riacho Fluido', damage: 5, heal: 8, shield: 5, ability: 'Ataque equilibrado com cura.' },
    { id: 'w5', element: 'WATER', level: 5, name: 'Maré Alta', damage: 0, heal: 25, shield: 0, ability: 'Grande restauração vital.' },
    { id: 'w6', element: 'WATER', level: 6, name: 'Espelho d\'Água', damage: 10, heal: 10, shield: 10, ability: 'Equilíbrio total.' },
    { id: 'w7', element: 'WATER', level: 7, name: 'Chuva de Prata', damage: 0, heal: 15, shield: 15, ability: 'Benção defensiva.' },
    { id: 'w8', element: 'WATER', level: 8, name: 'Abismo Profundo', damage: 20, heal: 10, shield: 0, ability: 'Dano de pressão absoluta.' },
    { id: 'w9', element: 'WATER', level: 9, name: 'Gelo Atemporal', damage: 15, heal: 0, shield: 25, ability: 'Resfriamento e proteção.' },
    { id: 'w10', element: 'WATER', level: 10, name: 'Oceano Cósmico', damage: 10, heal: 40, shield: 10, ability: 'A derradeira fonte de vida.' },

    // --- FOGO (FIRE) - Focado em Dano Explosivo ---
    { id: 'f1', element: 'FIRE', level: 1, name: 'Faísca', damage: 8, heal: 0, shield: 0, ability: 'Pequena queimadura.' },
    { id: 'f2', element: 'FIRE', level: 2, name: 'Brasa Viva', damage: 12, heal: 0, shield: 0, ability: 'Dano constante.' },
    { id: 'f3', element: 'FIRE', level: 3, name: 'Labareda', damage: 15, heal: 0, shield: 0, ability: 'Incinerar.' },
    { id: 'f4', element: 'FIRE', level: 4, name: 'Calor Radiante', damage: 18, heal: 2, shield: 0, ability: 'Calor que energiza.' },
    { id: 'f5', element: 'FIRE', level: 5, name: 'Explosão', damage: 30, heal: 0, shield: 0, ability: 'Dano massivo imediato.' },
    { id: 'f6', element: 'FIRE', level: 6, name: 'Lava Fundida', damage: 25, heal: 0, shield: 5, ability: 'Calor protetor.' },
    { id: 'f7', element: 'FIRE', level: 7, name: 'Incêndio', damage: 35, heal: 0, shield: 0, ability: 'Chamas descontroladas.' },
    { id: 'f8', element: 'FIRE', level: 8, name: 'Raio de Sol', damage: 40, heal: 5, shield: 0, ability: 'Luz destrutiva e pura.' },
    { id: 'f9', element: 'FIRE', level: 9, name: 'Coração de Vulcão', damage: 45, heal: 0, shield: 10, ability: 'O poder da terra em chamas.' },
    { id: 'f10', element: 'FIRE', level: 10, name: 'Fênix', damage: 30, heal: 50, shield: 0, ability: 'Morte e Renascimento.' },

    // --- TERRA (EARTH) - Focada em Escudos e Defesa ---
    { id: 't1', element: 'EARTH', level: 1, name: 'Raiz', damage: 2, heal: 0, shield: 5, ability: 'Fixação defensiva.' },
    { id: 't2', element: 'EARTH', level: 2, name: 'Pedregulho', damage: 5, heal: 0, shield: 10, ability: 'Bloqueio básico.' },
    { id: 't3', element: 'EARTH', level: 3, name: 'Argila Moldável', damage: 8, heal: 2, shield: 8, ability: 'Adaptação terrosa.' },
    { id: 't4', element: 'EARTH', level: 4, name: 'Terremoto', damage: 20, heal: 0, shield: 0, ability: 'Abalo estrutural.' },
    { id: 't5', element: 'EARTH', level: 5, name: 'Montanha', damage: 0, heal: 0, shield: 35, ability: 'Muralha intransponível.' },
    { id: 't6', element: 'EARTH', level: 6, name: 'Diamante', damage: 15, heal: 0, shield: 25, ability: 'Dura e preciosa.' },
    { id: 't7', element: 'EARTH', level: 7, name: 'Floresta Viva', damage: 10, heal: 15, shield: 15, ability: 'Natureza regenerativa.' },
    { id: 't8', element: 'EARTH', level: 8, name: 'Vontade de Ferro', damage: 20, heal: 0, shield: 30, ability: 'Mentalidade inquebrável.' },
    { id: 't9', element: 'EARTH', level: 9, name: 'Placas Tectônicas', damage: 40, heal: 0, shield: 20, ability: 'Colisão de continentes.' },
    { id: 't10', element: 'EARTH', level: 10, name: 'Núcleo', damage: 20, heal: 20, shield: 50, ability: 'A base do mundo.' },

    // --- AR (AIR) - Focada em Dano Crítico e Versatilidade ---
    { id: 'a1', element: 'AIR', level: 1, name: 'Sopro', damage: 10, heal: 0, shield: 0, ability: 'Rajada fraca.' },
    { id: 'a2', element: 'AIR', level: 2, name: 'Brisa Leve', damage: 5, heal: 5, shield: 5, ability: 'Toque etéreo.' },
    { id: 'a3', element: 'AIR', level: 3, name: 'Zéfiro', damage: 12, heal: 0, shield: 3, ability: 'Corte rápido.' },
    { id: 'a4', element: 'AIR', level: 4, name: 'Rajada', damage: 18, heal: 0, shield: 0, ability: 'Vento cortante.' },
    { id: 'a5', element: 'AIR', level: 5, name: 'Tornado', damage: 25, heal: 0, shield: 0, ability: 'Caos aéreo.' },
    { id: 'a6', element: 'AIR', level: 6, name: 'Tempestade de Areia', damage: 15, heal: 0, shield: 15, ability: 'Erosão e proteção.' },
    { id: 'a7', element: 'AIR', level: 7, name: 'Eco do Vento', damage: 22, heal: 0, shield: 10, ability: 'Ressonância.' },
    { id: 'a8', element: 'AIR', level: 8, name: 'Voo das Garças', damage: 20, heal: 15, shield: 5, ability: 'Ascensão.' },
    { id: 'a9', element: 'AIR', level: 9, name: 'Aurora Boreal', damage: 30, heal: 10, shield: 15, ability: 'Espetáculo místico.' },
    { id: 'a10', element: 'AIR', level: 10, name: 'Vácuo', damage: 50, heal: 0, shield: 0, ability: 'Ausência total de existência.' },

    // --- TRUNFOS (TRUMP) - Modificadores de Jogo ---
    { id: 'tr1', element: 'TRUMP', level: 0, name: 'Visão de Águia', ability: 'Revela a mão do inimigo.', type: 'utility' },
    { id: 'tr2', element: 'TRUMP', level: 0, name: 'Mão Leve', ability: 'Rouba uma carta aleatória do inimigo.', type: 'steal' },
    { id: 'tr3', element: 'TRUMP', level: 0, name: 'Dobrar a Aposta', ability: 'Próxima carta tem efeito dobrado.', type: 'buff' },
    { id: 'tr4', element: 'TRUMP', level: 0, name: 'Troca de Destino', ability: 'Troca o seu HP pelo do inimigo.', type: 'swap' },
    { id: 'tr5', element: 'TRUMP', level: 0, name: 'Escudo Absoluto', ability: 'Fica imune no próximo turno.', type: 'shield' },
    { id: 'tr6', element: 'TRUMP', level: 0, name: 'Reciclar', ability: 'Troca toda a mão por novas cartas.', type: 'draw' },
    { id: 'tr7', element: 'TRUMP', level: 0, name: 'Paralisia', ability: 'O inimigo pula o próximo turno.', type: 'stun' },
    { id: 'tr8', element: 'TRUMP', level: 0, name: 'Sangue Elemental', ability: 'Suas cartas ganham +10 de poder fixo.', type: 'permanent_buff' },
    { id: 'tr9', element: 'TRUMP', level: 0, name: 'Vingança', ability: 'Causa dano igual ao seu HP perdido.', type: 'damage' },
    { id: 'tr10', element: 'TRUMP', level: 0, name: 'Caos Purificador', ability: 'Remove todos os escudos da mesa.', type: 'reset' }
];
