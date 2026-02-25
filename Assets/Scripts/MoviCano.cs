using UnityEngine;

public class PipeBehaviour : MonoBehaviour
{
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    [SerializeField] private float moveSpead = 2f;

    private void Update()
    {
        transform.Translate(translation: Vector2.left * moveSpead * Time.deltaTime);
    }
}

// Update is called once per frame
    //void Update()
