#pragma strict

public var EnemyFragmentClone : GameObject;
public var gameEnd : GameEnd;
public var drawMultiplierScore : GameObject;
var countZigZagPressed : int = 0;
var countShredderPressed : int = 0;

function Update(){
		if(Input.GetMouseButtonDown(0)){
		
		var hit : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
		var hitObject = hit.collider;
	
		switch(hitObject.name){		
			case "Enemy(Clone)":

				GameMaster.multiplier += 1;
				GameMaster.multiplyScore = 10 * GameMaster.multiplier;
				GameMaster.currentScore += GameMaster.multiplyScore;
				
				EnemyFragmentClone.GetComponent(SpriteRenderer).sprite = hitObject.gameObject.GetComponent(SpriteRenderer).sprite;
				
				for(var a=0; a <= 3; a++){
					EnemyFragment(hitObject.gameObject);
				}
				DrawFloatingScore(hitObject.gameObject);
				
				Destroy(hitObject.gameObject);			
				break;
					
			case "ExtraEnemy(Clone)":		
				switch(GameMaster.zoneNumber){
				
					//Debug
					case 0:
						EnemyFragmentClone.GetComponent(SpriteRenderer).sprite = hitObject.gameObject.GetComponent(SpriteRenderer).sprite;
	
						for(var x=0; x <= 3; x++){
							EnemyFragment(hitObject.gameObject);
						}		
										
						Destroy(hitObject.gameObject);
						break;
				
					//Bomb
					case 1:
						EnemyFragmentClone.GetComponent(SpriteRenderer).sprite = hitObject.gameObject.GetComponent(SpriteRenderer).sprite;
	
						for(var b=0; b <= 3; b++){
							EnemyFragment(hitObject.gameObject);
						}						
						Destroy(hitObject.gameObject);
						gameEnd.GameOver();
						break;
					
					//ZigZag
					case 2:
						EnemyFragmentClone.GetComponent(SpriteRenderer).sprite = hitObject.gameObject.GetComponent(SpriteRenderer).sprite;

						for(var c=0; c <= 3; c++){
							EnemyFragment(hitObject.gameObject);
						}			
						ZigZag();				
						Destroy(hitObject.gameObject);
						break;
					
					//Shredder
					case 3:
						EnemyFragmentClone.GetComponent(SpriteRenderer).sprite = hitObject.gameObject.GetComponent(SpriteRenderer).sprite;

						for(var d=0; d <= 3; d++){
							EnemyFragment(hitObject.gameObject);
						}			
						Shredder();				
						Destroy(hitObject.gameObject);	
						break;
				}						
				break;
				
//			case "EnemyNegative(Clone)":
//			
//				EnemyFragmentClone.GetComponent(SpriteRenderer).sprite = hitObject.gameObject.GetComponent(SpriteRenderer).sprite;
//			
//				for(var c=0; c <= 3; c++){
//					EnemyFragment(hitObject.gameObject);
//				}
//				
//				Destroy(hitObject.gameObject);			
//				break;
							
				
					
			default:
				GameMaster.multiplier = 0;
				break;
		}
	}
}

function EnemyFragment(hit : GameObject){

	    var spawnPoint = hit.renderer.bounds.center;

	    Instantiate(EnemyFragmentClone, spawnPoint, Quaternion.identity);
}

function DrawFloatingScore(hit : GameObject){
	 var spawnPoint = Camera.main.WorldToViewportPoint(hit.renderer.bounds.center);
	 Instantiate(drawMultiplierScore, spawnPoint, Quaternion.identity);
}

function ZigZag(){
	countZigZagPressed += 1;
	GameMaster.gameZigZag = true;	
	
	yield WaitForSeconds(5);
	
	if(countZigZagPressed == 1){
		GameMaster.gameZigZag = false;
	}
	countZigZagPressed -= 1;
}


function Shredder(){
	countShredderPressed += 1;
	GameMaster.gameShredder = true;	
	
	yield WaitForSeconds(5);
	
	if(countShredderPressed == 1){
		GameMaster.gameShredder = false;
	}
	countShredderPressed -= 1;
}