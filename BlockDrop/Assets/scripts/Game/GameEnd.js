#pragma strict

public var popupbackground : GameObject;
public var score : GameObject;

function OnTriggerExit2D(obj : Collider2D) {  
    var collideObject = obj.gameObject;

	// Ends game if 'enemy' collides 'bottomheader'
	switch(collideObject.name){		
		case "Enemy(Clone)":
			Destroy(collideObject);
			if(!GameMaster.GameOver){
				
				GameMaster.GameOver = true;
				Destroy(GameObject.Find(collideObject.name).gameObject);
//				Time.timeScale = 0.5;
//				yield WaitForSeconds(1);
//				Time.timeScale = 1;
		    	fadeScore();
				GameOver();
			}
			break;
		case "ExtraEnemy(Clone)":
	    	Destroy(collideObject);
			break;
	}
}

function GameOver(){
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
	while(score.guiText.color.a  > 0){
		score.guiText.color.a -= 0.05;
		for(var text : Transform in score.transform){
			text.gameObject.guiText.color.a -= 0.05;
		}
		yield WaitForSeconds(0.01);
	}
	score.guiText.color.a = 0.0;
	for(var text : Transform in score.transform){
		text.gameObject.guiText.color.a -= 0.0;
	}
}