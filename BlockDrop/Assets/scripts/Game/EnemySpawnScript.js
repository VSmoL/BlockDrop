#pragma strict

// Variable to store the enemy prefab
public var enemy : GameObject;
public var bottomSpawn : GameObject;
public var bottomEnemy : GameObject;
var spawnX1 : float;
var spawnX2 : float;
var spawnBottomX1 : float;
var spawnBottomX2 : float;
var spawnPoint;


function startSpawn(){
	if(GameMaster.RandomMode){
		addRandomValues();
		getSpawnArea();
		getBottomSpawnArea();
		addEnemy();
	}
	else{
		getSpawnArea();
		getBottomSpawnArea();
		addEnemy();
		InvokeRepeating("increaseSpawnRate", 1, 1);
		InvokeRepeating("increaseMovementSpeed", 1, 1);
		InvokeRepeating("decreaseEnemySize", 1, 1);
	}
};

// New function to spawn an enemy
function addEnemy() {
	while (!GameMaster.GameOver){
	   spawnEnemy();
	   yield WaitForSeconds(GameStart.enemySpawnRate);
    }
}

function increaseSpawnRate(){
	GameStart.enemySpawnRate *= (1 - GameMaster.enemySpawnRateIncrease);
}

function increaseMovementSpeed(){
	GameStart.enemyMovementSpeed *= (1 + GameMaster.enemyMovementSpeedIncrease);
}

function decreaseEnemySize(){
	GameStart.enemySizeY *= (1 - GameMaster.enemySizeIncrease);
	GameStart.enemySizeX *= (1 - GameMaster.enemySizeIncrease);
}

function addRandomValues(){
	while(true){
		GameStart.enemySpawnRate = Random.Range(GameMaster.enemySpawnRateRandomMin,GameMaster.enemySpawnRateRandomMax);
		GameStart.enemyMovementSpeed = Random.Range(GameMaster.enemyMovementSpeedRandomMin,GameMaster.enemyMovementSpeedRandomMax);
		GameStart.enemySizeY = GameStart.enemySizeX = Random.Range(GameMaster.enemySizeRandomMin,GameMaster.enemySizeRandomMax);
		yield WaitForSeconds(GameStart.enemySpawnRate);
	}
}

function spawnEnemy(){
	if (GameMaster.gameShredder){
		GameMaster.shredderMultiplySpawn = Random.Range(GameMaster.shredderMin, GameMaster.shredderMax);
		for(var i=0; i <= GameMaster.shredderMultiplySpawn; i++){
			// Randomly pick a point within the spawn object
		    spawnPoint = new Vector3(Random.Range(spawnX1, spawnX2), transform.position.y,i);

		    // Create an enemy at the 'spawnPoint' position
		    Instantiate(enemy, spawnPoint, Quaternion.identity);
		}	
	}
	else if(GameMaster.gameTopBottom){
		var TopBottom = Random.Range(0,2);
		if (TopBottom == 0){
			// Randomly pick a point within the spawn object
	    	spawnPoint = new Vector3(Random.Range(spawnX1, spawnX2), transform.position.y,1);
	    	
	    	// Create an enemy at the 'spawnPoint' position
	   		Instantiate(enemy, spawnPoint, Quaternion.identity);
		}
		else if (TopBottom == 1){
			// Randomly pick a point within the spawn object
			spawnPoint = new Vector3(Random.Range(spawnBottomX1, spawnBottomX2), bottomSpawn.transform.position.y,1);
			
			// Create an enemy at the 'spawnPoint' position
	    	Instantiate(bottomEnemy, spawnPoint, Quaternion.identity);
		}
	}
	else{
		// Randomly pick a point within the spawn object
	    spawnPoint = new Vector3(Random.Range(spawnX1, spawnX2), transform.position.y,1);

	    // Create an enemy at the 'spawnPoint' position
	    Instantiate(enemy, spawnPoint, Quaternion.identity);
	}
}

function getSpawnArea(){
	// Variables to store the X position of the spawn object
   	spawnX1 = transform.position.x - renderer.bounds.size.x/2;
    spawnX2 = transform.position.x + renderer.bounds.size.x/2;
}
function getBottomSpawnArea(){
	// Variables to store the X position of the spawn object
   	spawnBottomX1 = bottomSpawn.transform.position.x - renderer.bounds.size.x/2;
    spawnBottomX2 = bottomSpawn.transform.position.x + renderer.bounds.size.x/2;
}