#pragma strict

static var enemyMovementSpeed : float;
static var enemySpawnRate : float;
static var enemySizeX : float;
static var enemySizeY : float;
public var score : GUIText;
public var scanner : GameObject;
public var countDown : GameObject;
public var pause : GameObject;

var enemySpawn : EnemySpawnScript;
var countDownTime = 3;
//var fontSize = 30.00;

// Use this for initialization
function Start () {
	enemyMovementSpeed = GameMaster.enemyMovementSpeed;
	enemySpawnRate = GameMaster.enemySpawnRate;
	enemySizeY = enemySizeX = GameMaster.enemySize;
    
    while(countDownTime > 0){
		while(countDown.GetComponent.<GUIText>().color.a > 0){
		
			countDown.GetComponent.<GUIText>().text = countDownTime.ToString();
//			countDown.GetComponent.<GUIText>().fontSize = Mathf.Min(Screen.height,Screen.width)/fontSize;
			countDown.GetComponent.<GUIText>().color.a -= 0.02;
//			fontSize -= 0.4;
			
			for(var childText : Transform in countDown.transform){
				childText.gameObject.GetComponent(GUIText).color.a = countDown.GetComponent(GUIText).color.a;
//				childText.gameObject.GetComponent(GUIText).fontSize = countDown.GetComponent(GUIText).fontSize;
				childText.gameObject.GetComponent(GUIText).text = countDown.GetComponent.<GUIText>().text;
			}
			yield WaitForSeconds(0.01);
		}
		countDownTime--;
		countDown.GetComponent.<GUIText>().color.a = 1;
//		fontSize = 30.00;
    }
	
	countDown.SetActive(false);
	pause.SetActive(true);
	
	GameMaster.GameOver = false;
	startCountDown();
}

function startCountDown(){
    
    if(GameMaster.gameScanner){
		scanner.SetActive(true);
	}
    
    enemySpawn.startSpawn();
}