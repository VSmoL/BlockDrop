#pragma strict

// Function called when the enemy is created
function Start () { 
    // Add a vertical speed to the enemy
    rigidbody2D.velocity.y = GameStart.enemyMovementSpeed;
    
   	transform.transform.localScale.y = GameStart.enemySizeY;
    transform.transform.localScale.x = GameStart.enemySizeX;
    
    if (GameMaster.gameZigZag)
    {
    	var number = Random.Range(0,2);
    	if(number == 0){
    		rigidbody2D.velocity.x -= GameStart.enemyMovementSpeed * 2;
    	}
    	else if(number == 1){
    		rigidbody2D.velocity.x = GameStart.enemyMovementSpeed * 2;
    	}
    	
    }
}