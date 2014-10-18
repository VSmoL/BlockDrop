#pragma strict

static var enemyMovementSpeed : float;
static var enemySpawnRate : float;

var enemySpawn : EnemySpawnScript;

var countdown : GUIText;

// Use this for initialization
function Start () {
	enemyMovementSpeed = GameMaster.enemyMovementSpeed;
	enemySpawnRate = GameMaster.enemySpawnRate;
	
	startCountDown();
}

function startCountDown(){
 	countdown.fontSize = Mathf.Min(Screen.height,Screen.width)/1;
 
    countdown.text = "3";    
    yield WaitForSeconds (1.0);  
 
    countdown.text = "2";    
    yield WaitForSeconds (1.0);
 
    countdown.text = "1";    
    yield WaitForSeconds (1.0);
 
    countdown.text = "GO";    
    yield WaitForSeconds (1.0);
 
    countdown.enabled = false; 
    
    enemySpawn.startSpawn();
}