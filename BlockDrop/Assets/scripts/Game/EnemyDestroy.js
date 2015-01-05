#pragma strict

public var EnemyFragmentClone : GameObject;
public var gameEnd : GameEnd;
var countZigZagPressed : int = 0;

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
				
				Destroy(hitObject.gameObject);			
				break;
					
			case "EnemyBomb(Clone)":
			
				EnemyFragmentClone.GetComponent(SpriteRenderer).sprite = hitObject.gameObject.GetComponent(SpriteRenderer).sprite;
				
				for(var b=0; b <= 3; b++){
					EnemyFragment(hitObject.gameObject);
				}						
				Destroy(hitObject.gameObject);
				gameEnd.GameOver();
						
				break;
				
			case "EnemyZigZag(Clone)":
			
				EnemyFragmentClone.GetComponent(SpriteRenderer).sprite = hitObject.gameObject.GetComponent(SpriteRenderer).sprite;
			
				for(var c=0; c <= 3; c++){
					EnemyFragment(hitObject.gameObject);
				}			
				RemoveZigZag();				
				Destroy(hitObject.gameObject);		
					
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
				GameMaster.multiplyScore = 0;
				break;
		}
	}
}

function EnemyFragment(hit : GameObject){
		// Variables to store the X position of the spawn object
//	    var x = hit.renderer.bounds.center;
//	    var y = hit.renderer.bounds.center;
//
//	    // Randomly pick a point within the spawn object
//	    var spawnPoint = new Vector3(hit.point.x, hit.point.y,8);
	    var spawnPoint = hit.renderer.bounds.center;

	    // Create an enemy at the 'spawnPoint' position
	    Instantiate(EnemyFragmentClone, spawnPoint, Quaternion.identity);
}

function RemoveZigZag(){
	countZigZagPressed += 1;
	GameMaster.gameZigZag = true;	
	
	yield WaitForSeconds(5);
	
	if(countZigZagPressed == 1){
		GameMaster.gameZigZag = false;
	}
	countZigZagPressed -= 1;
}