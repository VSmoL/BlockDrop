#pragma strict

static var enemyMovementSpeed : float;
static var enemySpawnRate : float;
static var enemySizeX : float;
static var enemySizeY : float;
public var score : GUIText;

var enemySpawn : EnemySpawnScript;

var countdown : GUIText;

// Use this for initialization
function Start () {
	enemyMovementSpeed = GameMaster.enemyMovementSpeed;
	enemySpawnRate = GameMaster.enemySpawnRate;
	enemySizeY = enemySizeX = GameMaster.enemySize;
	
	//score.GetComponent(SpriteRenderer).color.a = 1;
	
	GameMaster.GameOver = false;
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