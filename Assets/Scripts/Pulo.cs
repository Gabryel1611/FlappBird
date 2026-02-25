using UnityEngine;

public class Pulo : MonoBehaviour
{
    [SerializeField] private float jumpforce = 1;

    private Rigidbody2D rigidbody;

    private void Awake()
    {
        rigidbody = GetComponent<Rigidbody2D>();
    }

    private void FixedUpdate()
    {
        if (Input.GetButtonDown("Fire1"))
        {
            rigidbody.linearVelocity += Vector2.up * jumpforce;

        }
    }
}
    
