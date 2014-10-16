#pragma strict

// Variable to store the enemy prefab
public var enemy : GameObject;
var countdown : GUIText;

function Start() {   
	startCountDown();
}

function startCountDown(){
 	countdown.fontSize = Mathf.Min(Screen.height,Screen.width)/1;
 
    countdown.text = "3";    
    yield WaitForSeconds (1.5);  
 
    countdown.text = "2";    
    yield WaitForSeconds (1.5);
 
    countdown.text = "1";    
    yield WaitForSeconds (1.5);
 
    countdown.text = "GO";    
    yield WaitForSeconds (1.5);
 
    countdown.enabled = false; 
    
    startGame();
}

function startGame(){
    addEnemy();
    InvokeRepeating("increaseSpawnRate", 1, 5);
    InvokeRepeating("increaseMovementSpeed", 1, 5);
}

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
	GameMaster.enemySpawnRate *= (1 - 0.01);
	return GameMaster.enemySpawnRate;
}

function increaseMovementSpeed(){
	GameMaster.enemyMovementSpeed *= (1 + 0.01);
}