#pragma strict

// Function called when the enemy is created
function Start () { 
    // Add a vertical speed to the enemy
    rigidbody2D.velocity.y = GameStart.enemyMovementSpeed;
    
   	transform.transform.localScale.y = GameStart.enemySizeY;
    transform.transform.localScale.x = GameStart.enemySizeX;
}