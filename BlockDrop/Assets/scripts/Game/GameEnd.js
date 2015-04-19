﻿#pragma strict

public var popupbackground : GameObject;
public var score : GameObject;
public var pause : GameObject;

function OnTriggerExit2D(obj : Collider2D) {  
    var collideObject = obj.gameObject;

	// Ends game if 'enemy' collides 'bottomheader'
	switch(collideObject.name){		
		case "Enemy(Clone)":
			Destroy(collideObject);
			if(!GameMaster.GameOver){
				Destroy(collideObject);
				GameOver();
			}
			break;
		case "ExtraEnemy(Clone)":
	    	Destroy(collideObject);
			break;
	}
}

function GameOver(){
	fadeScore();
	fadePauseButton();

	popupbackground.SetActive(true);
	GameMaster.endScore = GameMaster.currentScore;
	//GameMaster.endMultipliedScore = Mathf.Ceil(GameMaster.endScore * GameMaster.endMultiplier);	
	GameMaster.endGameGoldCoins = Mathf.Ceil(GameMaster.endScore * 0.1);
	GameMaster.currentScore = 0;
	GameMaster.multiplyScore = 0;
	GameMaster.multiplier = 0;	
	GameMaster.GameOver = true;
	var gameMode : String = GameMaster.gameMode + "_" + GameMaster.stageNumber.ToString();
	GameMaster.previousBest = 100;
	GameMaster.previousBest = PlayerPrefs.GetInt("HiScore_"+gameMode);

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