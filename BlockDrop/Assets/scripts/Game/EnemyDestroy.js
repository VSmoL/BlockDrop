#pragma strict

public var EnemyFragmentClone : GameObject;
public var gameEnd : GameEnd;
public var drawMultiplierScore : GameObject;
var countZigZagPressed : int = 0;
var countShredderPressed : int = 0;
public var pressEffect : GameObject;

function Update(){
		if(Input.GetMouseButtonDown(0)){
		
		var mouseHit = Input.mousePosition;
		var mousePos = Camera.main.ScreenToWorldPoint(mouseHit);
		mousePos.z = 1;
		
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
				
				pressEffect.GetComponent(ParticleSystem).startColor = Color(0,1,0,1);
				Instantiate(pressEffect, mousePos, Quaternion.identity);
				
				Destroy(hitObject.gameObject);			
				break;
				
			case "EnemyBottom(Clone)":

				GameMaster.multiplier += 1;
				GameMaster.multiplyScore = 10 * GameMaster.multiplier;
				GameMaster.currentScore += GameMaster.multiplyScore;
				
				EnemyFragmentClone.GetComponent(SpriteRenderer).sprite = hitObject.gameObject.GetComponent(SpriteRenderer).sprite;
				
				for(var b=0; b <= 3; b++){
					EnemyFragment(hitObject.gameObject);
				}
				DrawFloatingScore(hitObject.gameObject);
				
				pressEffect.GetComponent(ParticleSystem).startColor = Color(0,1,0,1);
				Instantiate(pressEffect, mousePos, Quaternion.identity);
				
				Destroy(hitObject.gameObject);			
				break;				
			default:
				GameMaster.multiplier = 0;
				
				//spawn particle
				pressEffect.GetComponent(ParticleSystem).startColor = Color(1,0,0,1);
				if(!GameMaster.GameOver){
					Instantiate(pressEffect, mousePos, Quaternion.identity);
				}

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