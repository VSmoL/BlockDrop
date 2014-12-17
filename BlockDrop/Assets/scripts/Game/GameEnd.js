#pragma strict

public var popupbackground : GameObject;

function OnTriggerExit2D(obj : Collider2D) {  
    var collideObject = obj.gameObject;

	// Ends game if 'enemy' collides 'bottomheader'
	switch(collideObject.name){		
			case "Enemy(Clone)":
		    	Destroy(collideObject);
				GameOver();
				break;
		}
}

function GameOver(){
	if(!GameMaster.GameOver){
		popupbackground.SetActive(true);
		GameMaster.endScore = GameMaster.currentScore;	
		GameMaster.endMultipliedScore = Mathf.Ceil(GameMaster.endScore * GameMaster.endMultiplier);	
		GameMaster.endGameSilverCoins = Mathf.Ceil(GameMaster.endMultipliedScore * 0.1);
		GameMaster.currentScore = 0;
		GameMaster.multiplyScore = 0;	
		GameMaster.GameOver = true;
		
		//Save data
		PlayerPrefs.SetInt("TotalGoldBlock", PlayerPrefs.GetInt("TotalGoldBlock") + GameMaster.endGameSilverCoins);
	}
}