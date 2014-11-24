﻿#pragma strict

public var popupbackground : GameObject;

function OnTriggerExit2D(obj : Collider2D) {  
    var collideObject = obj.gameObject;

    // Ends game if 'enemy' collides 'bottomheader'
    if (collideObject.name == "Enemy(Clone)") {
    	Destroy(collideObject);
		GameOver();
    }
}

function GameOver(){
	if(!GameMaster.GameOver){
		popupbackground.SetActive(true);
		GameMaster.endScore = GameMaster.currentScore;	
		GameMaster.endMultipliedScore = Mathf.Ceil(GameMaster.endScore * GameMaster.endMultiplier);	
		GameMaster.endGameSilverCoins = Mathf.Ceil(GameMaster.endMultipliedScore * 0.1);
		GameMaster.currentScore = 0;	
		GameMaster.GameOver = true;
		
		//Save data
		PlayerPrefs.SetInt("TotalSilverBlock", PlayerPrefs.GetInt("TotalSilverBlock") + GameMaster.endGameSilverCoins);
	}
}