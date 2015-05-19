#pragma strict

public var enemy : GameObject;
private var mainMenuEnemy : GameObject;
public var spriteList : GameObject;
var blockColors : Color[] = [Color(1,0.5,0.5,1), Color(1,0.75,0.5,1), Color(1,1,0.5,1), Color(0.5,1,0.5,1), Color(0.5,1,1,1), Color(0.5,0.5,1,1), Color(0.75,0.5,1,1), Color(1,0.5,1,1), Color(1,0,0,1), Color(1,0.5,0,1), Color(1,1,0,1), Color(0,1,0,1), Color(0,1,1,1), Color(0,0,1,1), Color(0.75,0,1,1), Color(1,0,1,1), Color(0.5,0,0,1), Color(0.5,0.25,0,1),   Color(0.5,0.5,0,1),   Color(0,0.5,0,1),   Color(0,0.5,0.5,1),   Color(0,0,0.5,1),   Color(0.5,0,0.5,1), Color(0.75,0,0.75,1), Color(1,1,1,1), Color(0.5,0.5,0.5,1), Color(0,0,0,1)]; 

function Start () {
	var spawnX1 = transform.position.x - GetComponent.<Renderer>().bounds.size.x/2;
    var spawnX2 = transform.position.x + GetComponent.<Renderer>().bounds.size.x/2;
    
	while(true){
		// Randomly pick a point within the spawn object
	    var spawnPoint = new Vector3(Random.Range(spawnX1, spawnX2), transform.position.y,1);
		
	    // Create an enemy at the 'spawnPoint' position
	   	mainMenuEnemy = Instantiate(enemy, spawnPoint, Quaternion.identity) as GameObject;
	    mainMenuEnemy.GetComponent.<Rigidbody2D>().velocity.y = Random.Range(-1.0,-6.0);
	    var rndSize = Random.Range(0.15,0.4);
	    mainMenuEnemy.transform.localScale = new Vector3(rndSize,rndSize,0);
	   	mainMenuEnemy.GetComponent(SpriteRenderer).sprite = spriteList.GetComponent(SpriteList).spriteList[Random.Range(0,spriteList.GetComponent(SpriteList).spriteList.length)];
	   	mainMenuEnemy.GetComponent(SpriteRenderer).color = blockColors[Random.Range(0,blockColors.length)];
	   	mainMenuEnemy.GetComponent(SpriteRenderer).color.a = 0.5;
	   	
	   	yield WaitForSeconds(Random.Range(0.75,1.5));
	}
}