#pragma strict

// Variable to store the enemy prefab
public var enemy : GameObject;
enemy.transform.localScale.x = GameMaster.enemyXSize;
enemy.transform.localScale.y = GameMaster.enemyYSize;

function startSpawn(){
    addEnemy();
    InvokeRepeating("increaseSpawnRate", 1, 1);
    InvokeRepeating("increaseMovementSpeed", 1, 1);
    InvokeRepeating("decreaseEnemySize", 1, 1);
};

// New function to spawn an enemy
function addEnemy() {
	while (true){
	    // Variables to store the X position of the spawn object
	    var x1 = transform.position.x - renderer.bounds.size.x/2;
	    var x2 = transform.position.x + renderer.bounds.size.x/2;

	    // Randomly pick a point within the spawn object
	    var spawnPoint = new Vector3(Random.Range(x1, x2), transform.position.y,8);

	    // Create an enemy at the 'spawnPoint' position
	    Instantiate(enemy, spawnPoint, Quaternion.identity);
	    yield WaitForSeconds(GameMaster.enemySpawnRate);
    }
}

function increaseSpawnRate(){
	GameStart.enemySpawnRate *= (1 - 0.1);
	return GameStart.enemySpawnRate;
}

function increaseMovementSpeed(){
	GameStart.enemyMovementSpeed *= (1 + 0.01);
}

function decreaseEnemySize(){
	enemy.transform.localScale.y *= (1 - 0.01);
	enemy.transform.localScale.x *= (1 - 0.01);
}