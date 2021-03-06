﻿#pragma strict

public var popupbackground : GameObject;
public var EnemyFragmentClone : GameObject;
public var score : GameObject;
public var pause : GameObject;
var enemyUnits : GameObject[];

function OnTriggerExit2D(obj : Collider2D) {  
    var collideObject = obj.gameObject;

	// Ends game if 'enemy' collides 'bottomheader'
	switch(collideObject.name){		
		case "Enemy(Clone)":
		case "EnemyBoss(Clone)":
			Destroy(collideObject);
			if(!GameMaster.GameOver){
				GetComponent(AudioSource).Play();
				Destroy(collideObject);
				GameOver();
			}
			break;
		case "EnemyBad(Clone)":
	    	Destroy(collideObject);
			break;
		case "ExtraEnemy(Clone)":
	    	Destroy(collideObject);
			break;
	}
}

function GameOver(){
	fadeScore();
	fadePauseButton();
	fadeMusic();
	gameOverDestroyEnemy();


	popupbackground.SetActive(true);
	GameMaster.endScore = GameMaster.currentScore;
	//GameMaster.endMultipliedScore = Mathf.Ceil(GameMaster.endScore * GameMaster.endMultiplier);	
	GameMaster.endGameGoldCoins = Mathf.Ceil(GameMaster.endScore * 0.1);
	GameMaster.currentScore = 0;
	GameMaster.multiplyScore = 0;
	GameMaster.multiplier = 0;	
	GameMaster.GameOver = true;
	var gameMode : String = GameMaster.gameMode + "_" + GameMaster.stageNumber.ToString();
	GameMaster.previousBest = PlayerPrefs.GetInt("HiScore_"+gameMode);
	GameMaster.GameRetries += 1;

	if(GameMaster.endScore > PlayerPrefs.GetInt("HiScore_"+gameMode)){
		PlayerPrefs.SetInt("HiScore_"+gameMode, GameMaster.endScore);
		GameMaster.HiScore = true;
	}
	else{
		GameMaster.HiScore = false;
	}
	
	//Save data
	PlayerPrefs.SetInt("TotalGoldBlock", PlayerPrefs.GetInt("TotalGoldBlock") + GameMaster.endGameGoldCoins);
}

function fadeMusic(){
	var bgMusic = GameObject.Find("BackgroundMusic");
    
	while (bgMusic.GetComponent(AudioSource).volume > 0){
		bgMusic.GetComponent(AudioSource).volume -= 0.01;
		yield WaitForSeconds(0.01);
	}
}

function fadeScore(){
	while(score.GetComponent.<GUIText>().color.a  > 0){
		score.GetComponent.<GUIText>().color.a -= 0.05;
		for(var text : Transform in score.transform){
			text.gameObject.GetComponent.<GUIText>().color.a -= 0.05;
		}
		yield WaitForSeconds(0.01);
	}
	score.GetComponent.<GUIText>().color.a = 0.0;
	for(var text : Transform in score.transform){
		text.gameObject.GetComponent.<GUIText>().color.a -= 0.0;
	}
}
function fadePauseButton(){
	while(pause.GetComponent.<SpriteRenderer>().color.a  > 0){
		pause.GetComponent.<SpriteRenderer>().color.a -= 0.05;
		yield WaitForSeconds(0.01);
	}
}

function gameOverDestroyEnemy(){
	enemyUnits = GameObject.FindGameObjectsWithTag("Enemy");
	for (var enemyUnit : GameObject in enemyUnits){
		for(var d=0; d <= 3; d++){
			EnemyFragment(enemyUnit);
		}
		Destroy(enemyUnit);
	}
}

function EnemyFragment(hit : GameObject){

	    var spawnPoint = hit.GetComponent.<Renderer>().bounds.center;

	    Instantiate(EnemyFragmentClone, spawnPoint, Quaternion.identity);
}