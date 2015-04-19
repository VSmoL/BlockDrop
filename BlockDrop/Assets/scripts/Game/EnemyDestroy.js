#pragma strict

public var EnemyFragmentClone : GameObject;
public var gameEnd : GameEnd;
public var drawMultiplierScore : GameObject;
public var bonusText : GameObject;
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
			case "EnemyBottom(Clone)":
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
			
			case "EnemyRandom(Clone)":
			case "EnemyRandomBottom(Clone)":
				addRandomEffect();
				
				EnemyFragmentClone.GetComponent(SpriteRenderer).sprite = hitObject.gameObject.GetComponent(SpriteRenderer).sprite;
				
				for(var b=0; b <= 3; b++){
					EnemyFragment(hitObject.gameObject);
				}
				
				pressEffect.GetComponent(ParticleSystem).startColor = Color(0,1,0,1);
				Instantiate(pressEffect, mousePos, Quaternion.identity);
				
				Destroy(hitObject.gameObject);			
				break;
				
			case "EnemyBad(Clone)":
			case "EnemyBadBottom(Clone)":		
				EnemyFragmentClone.GetComponent(SpriteRenderer).sprite = hitObject.gameObject.GetComponent(SpriteRenderer).sprite;
				
				for(var c=0; c <= 3; c++){
					EnemyFragment(hitObject.gameObject);
				}
				
				pressEffect.GetComponent(ParticleSystem).startColor = Color(0,1,0,1);
				Instantiate(pressEffect, mousePos, Quaternion.identity);
				
				GameMaster.GameOver = true;
				gameEnd.GameOver();
				Destroy(hitObject.gameObject);
				break;						
					
			case "PauseButton":
				break;
			case "ContinueButton":
				break;		
																																																																																																																								
			default:
				GameMaster.multiplier = 0;
				
				//spawn particle
				pressEffect.GetComponent(ParticleSystem).startColor = Color(1,0,0,1);
				if(!GameMaster.GameOver && !GameMaster.GamePause){
					Instantiate(pressEffect, mousePos, Quaternion.identity);
				}

				break;
		}
	}
}

function EnemyFragment(hit : GameObject){

	    var spawnPoint = hit.GetComponent.<Renderer>().bounds.center;

	    Instantiate(EnemyFragmentClone, spawnPoint, Quaternion.identity);
}

function DrawFloatingScore(hit : GameObject){
	 var spawnPoint = Camera.main.WorldToViewportPoint(hit.GetComponent.<Renderer>().bounds.center);
	 Instantiate(drawMultiplierScore, spawnPoint, Quaternion.identity);
}

function DrawBonusEffectText(){
	Instantiate(bonusText, Vector3(0.5, 0.06, 0.0), Quaternion.identity);
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

function addRandomEffect(){
	var rngNumber : int = Random.Range(0,101);
	rngNumber = 71;
	if(rngNumber <= 70){
		rngNumber = Random.Range(0,101);
		rngNumber = 45;
		if(rngNumber <= 30){
			GameMaster.multiplyScore = (10 * GameMaster.multiplier) * 2;
			GameMaster.currentScore += GameMaster.multiplyScore;
			GameMaster.bonusText = "Double Points";
		}
		else if (rngNumber >= 31 && rngNumber <= 40){
			GameMaster.currentScore += Mathf.Ceil(GameMaster.currentScore * 0.05);
			GameMaster.bonusText = "Bonus points";
		}
		else if (rngNumber >= 41 && rngNumber <= 50){
			rngNumber = Random.Range(2,11);
			GameMaster.multiplier += rngNumber;
			GameMaster.bonusText = "Multiplier +" + rngNumber.ToString();
		}
		else if (rngNumber >= 51 && rngNumber <= 60){
			
		}
		DrawBonusEffectText();
	}
	else if(rngNumber >= 71){
		rngNumber = Random.Range(0,101);
		rngNumber = 10;
		if(rngNumber <= 10){
			GameMaster.bonusText = "ZigZag";
		}
		else if (rngNumber >= 11 && rngNumber <= 20){
			GameMaster.bonusText = "MoveStop";
		}
		else if (rngNumber >= 21 && rngNumber <= 30){
			GameMaster.bonusText = "Both ways";
		}
		else if (rngNumber >= 31 && rngNumber <= 40){
			GameMaster.bonusText = "Fade";
		}
		else if (rngNumber >= 41 && rngNumber <= 50){
			GameMaster.bonusText = "Swap";
		}
		DrawBonusEffectText();
	}
}