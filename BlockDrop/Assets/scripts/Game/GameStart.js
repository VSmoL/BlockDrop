#pragma strict

static var enemyMovementSpeed : float;
static var enemySpawnRate : float;
static var enemySizeX : float;
static var enemySizeY : float;

var enemySpawn : EnemySpawnScript;

var countdown : GUIText;

// Use this for initialization
function Start () {
	if(GameMaster.RandomMode){
		enemyMovementSpeed = Random.Range(-5.0,-1.0);
		enemySpawnRate = Random.Range(0.1,1.0);	
		enemySizeY = enemySizeX = Random.Range(0.05,0.5);
	}
	else{
		enemyMovementSpeed = GameMaster.enemyMovementSpeed;
		enemySpawnRate = GameMaster.enemySpawnRate;
		enemySizeY = enemySizeX = GameMaster.enemySize;
	}
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