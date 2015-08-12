#pragma strict

// Function called when the enemy is created
function Start () { 
    // Add a vertical speed to the enemy
    GetComponent.<Rigidbody2D>().velocity.y = GameStart.enemyMovementSpeed;
    
   	transform.transform.localScale.y = GameStart.enemySizeY;
    transform.transform.localScale.x = GameStart.enemySizeX;
    
    if (GameMaster.gameZigZag)
    {
    	var number = Random.Range(0,2);
    	if(number == 0){
    		GetComponent.<Rigidbody2D>().velocity.x = -GameStart.enemyMovementSpeed * GameMaster.zigZagSpeedModifier;
    	}
    	else if(number == 1){
    		GetComponent.<Rigidbody2D>().velocity.x = GameStart.enemyMovementSpeed * GameMaster.zigZagSpeedModifier;
    	}
    }
    if (GameMaster.gameMoveStop){
    	moveStop();
    }
    if (GameMaster.gameSwapPlace){
    	swapPlace();
    }
}

function moveStop(){
	yield WaitForSeconds(Random.Range(0.2, 1.0));
	while(GameMaster.gameMoveStop){
		GetComponent.<Rigidbody2D>().velocity.y = 0;
		yield WaitForSeconds(Random.Range(0.0, 1.0));
		
		GetComponent.<Rigidbody2D>().velocity.y = GameStart.enemyMovementSpeed;
		yield WaitForSeconds(Random.Range(0.0, 3.0));
	}
}

function swapPlace(){
	yield WaitForSeconds(Random.Range(0.2, 0.5));
	while(GameMaster.gameSwapPlace){
		transform.position.x = Random.Range(-2.5, 2.5);
		yield WaitForSeconds(Random.Range(0.5, 1.0));
	}
}