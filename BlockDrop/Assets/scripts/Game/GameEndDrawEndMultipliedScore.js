﻿#pragma strict

public var endGameSilverCoins : GameObject;
public var endGameSilverCoinIcon : GameObject;
public var endGameGoldCoins : GameObject;
public var endGameGoldCoinIcon : GameObject;

function Start(){
	guiText.fontSize = Mathf.Min(Screen.height,Screen.width)/20;
}

function OnGUI()
{
	if(GameMaster.endMultipliedScore >= parseInt(guiText.text)){
		guiText.text = ((parseInt(guiText.text)) + Mathf.Ceil((GameMaster.endMultipliedScore * 0.01))).ToString();
		if(parseInt(guiText.text) >= GameMaster.endMultipliedScore){
			guiText.text = GameMaster.endMultipliedScore.ToString();
			showCoins();
		}
	}
}

function showCoins(){
	yield WaitForSeconds(1);
	endGameSilverCoins.SetActive(true);
	endGameSilverCoinIcon.SetActive(true);
	endGameGoldCoins.SetActive(true);
	endGameGoldCoinIcon.SetActive(true);
}