#pragma strict

// Function called when the enemy is created
function Start () { 
    // Add a vertical speed to the enemy
    rigidbody2D.velocity.y = GameStart.enemyMovementSpeed;
    
    gameObject.transform.transform.localScale.y = GameStart.enemySizeY;
    gameObject.transform.transform.localScale.x = GameStart.enemySizeX;
}