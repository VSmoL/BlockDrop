#pragma strict

// Function called when the enemy is created
function Start () { 
    // Add a vertical speed to the enemy
    rigidbody2D.velocity.y = GameStart.enemyMovementSpeed;
    
    gameObject.transform.transform.localScale.y = GameStart.enemySizeY;
    gameObject.transform.transform.localScale.x = GameStart.enemySizeX;
    
    // Make the enemy rotate on itself
    rigidbody2D.angularVelocity = Random.Range(-200, 200);
}