#pragma strict

public var EnemyFragmentClone : GameObject;
public var gameEnd : GameEnd;
public var enemySpawn : EnemySpawnScript;
public var drawMultiplierScore : GameObject;
public var bonusText : GameObject;
var countZigZagPressed : int = 0;
var countShredderPressed : int = 0;
public var pressEffect : GameObject;
public var hitObjectSound : AudioClip;
public var missObjectSound : AudioClip;
var comboCap : int;

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
				
				if(GameMaster.multiplier > 10){
					GameMaster.multiplier = 10;
				}
												
				GameMaster.multiplyScore = 10 * GameMaster.multiplier;
				GameMaster.currentScore += GameMaster.multiplyScore;
				
				EnemyFragmentClone.GetComponent(SpriteRenderer).sprite = hitObject.gameObject.GetComponent(SpriteRenderer).sprite;
				
				for(var a=0; a <= 3; a++){
					EnemyFragment(hitObject.gameObject);
				}
				DrawFloatingScore(hitObject.gameObject);
				
				pressEffect.GetComponent(ParticleSystem).startColor = Color(0,1,0,1);
				Instantiate(pressEffect, mousePos, Quaternion.identity);
				
				if(EditorPrefsX.GetBool("isSfx")){
					GetComponent(AudioSource).PlayOneShot(hitObjectSound, 1); 
				}
				
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
					
			case "EnemyBoss(Clone)":
			case "EnemyBossBottom(Clone)":	
				if(hitObject.gameObject.GetComponent(BossHealthAttr).bossHp > 1){
					hitObject.gameObject.GetComponent(BossHealthAttr).bossHp -= 1;
					hitObject.gameObject.GetComponent(BossHealthAttr).drawHP();
				}
				else{		
				
					GameMaster.multiplier += 1;
					
					if(GameMaster.multiplier > 10){
						GameMaster.multiplier = 10;
					}
					
					GameMaster.multiplyScore = 50 * GameMaster.multiplier;
					GameMaster.currentScore += GameMaster.multiplyScore;
				
				
					EnemyFragmentClone.GetComponent(SpriteRenderer).sprite = hitObject.gameObject.GetComponent(SpriteRenderer).sprite;
				
					for(var d=0; d <= 3; d++){
						EnemyFragment(hitObject.gameObject);
					}

					DrawFloatingScore(hitObject.gameObject);
					
					pressEffect.GetComponent(ParticleSystem).startColor = Color(0,1,0,1);
					Instantiate(pressEffect, mousePos, Quaternion.identity);
					
					if(EditorPrefsX.GetBool("isSfx")){
						GetComponent(AudioSource).PlayOneShot(hitObjectSound, 1); 
					}
					
					Destroy(hitObject.gameObject);
				}
				
				break;						
						
				
			case "PauseButton":
				break;
			case "RestartButton":
				break;
			case "MainMenuButton":
				break;
			case "ContinueButton":
				break;		
																																																																																																																								
			default:			
				if(!GameMaster.GamePause){
					GameMaster.multiplier = 0;
				}
				//spawn particle
				pressEffect.GetComponent(ParticleSystem).startColor = Color(1,0,0,1);
				if(!GameMaster.GameOver && !GameMaster.GamePause){
					Instantiate(pressEffect, mousePos, Quaternion.identity);
				}
				
				if(EditorPrefsX.GetBool("isSfx") && !GameMaster.GamePause && !GameMaster.GameOver){
					GetComponent(AudioSource).PlayOneShot(missObjectSound, 1); 
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
		rngNumber = Random.Range(0,91);
		rngNumber = 85;
		if(rngNumber <= 10){
			addEffect(0);
			GameMaster.bonusText = "ZigZag";
		}
		else if (rngNumber >= 11 && rngNumber <= 20){
			addEffect(1);
			GameMaster.bonusText = "MoveStop";
		}
		else if (rngNumber >= 21 && rngNumber <= 30){
			addEffect(2);
			GameMaster.bonusText = "Both ways";
		}
		else if (rngNumber >= 31 && rngNumber <= 40){
			addEffect(3);
			GameMaster.bonusText = "Fade";
		}
		else if (rngNumber >= 41 && rngNumber <= 50){
			addEffect(4);
			GameMaster.bonusText = "Swap";
		}
		else if (rngNumber >= 51 && rngNumber <= 60){
			addEffect(5);
			GameMaster.bonusText = "Bombs away";
		}
		else if (rngNumber >= 61 && rngNumber <= 70){
			addEffect(6);
			GameMaster.bonusText = "Scanner";
		}
		else if (rngNumber >= 71 && rngNumber <= 80){
			addEffect(7);
			GameMaster.bonusText = "Double Trouble";
		}
		else if (rngNumber >= 81 && rngNumber <= 90){
			addEffect(8);
			GameMaster.bonusText = "Boss Time";
		}
		DrawBonusEffectText();
	}
}

function addEffect(effectNumber : int){

	switch(effectNumber){
		case 0:
			GameMaster.gameZigZag = true;
			break;
			
		case 1:
			GameMaster.gameMoveStop = true;
			break;
			
		case 2:
			GameMaster.gameTopBottom = true;
			break;
			
		case 3:
			GameMaster.gameFade = true;
			break;
			
		case 4:
			GameMaster.gameSwapPlace = true;
			break;
			
		case 5:
			GameMaster.gameBomb = true;
			break;
		
		case 6:
			GameMaster.gameScanner = true;
			break;
	
		case 7:
			enemySpawn.spawnDouble();
			GameMaster.gameDouble = true;
			break;

		case 8:
			enemySpawn.spawnBoss();
			break;
	}
	yield WaitForSeconds(3);
	
			GameMaster.gameZigZag = false;
			GameMaster.gameMoveStop = false;
			GameMaster.gameTopBottom = false;
			GameMaster.gameFade = false;
			GameMaster.gameSwapPlace = false;
			GameMaster.gameBomb = false;
			GameMaster.gameScanner = false;
			GameMaster.gameDouble = false;
}
