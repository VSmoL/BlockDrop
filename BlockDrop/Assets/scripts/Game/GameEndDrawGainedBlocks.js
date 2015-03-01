#pragma strict

public var endGameTotalCoin : GameObject;

function Start(){

	guiText.fontSize = Mathf.Min(Screen.height,Screen.width)/20;
	endGameTotalCoin.guiText.fontSize = Mathf.Min(Screen.height,Screen.width)/20;
	
	endGameTotalCoin.guiText.text = (PlayerPrefs.GetInt("TotalGoldBlock") - GameMaster.endGameGoldCoins).ToString();

	for(var childText : Transform in endGameTotalCoin.transform){
		childText.GetComponent(GUIText).text = endGameTotalCoin.transform.guiText.text;
	}

	for(var childText : Transform in transform){
		childText.GetComponent(GUIText).fontSize = transform.guiText.fontSize;
	}
	

	
	while(GameMaster.endGameGoldCoins > parseInt(guiText.text)){
		guiText.text = "+"+((parseInt(guiText.text)) + Mathf.Ceil((GameMaster.endGameGoldCoins * 0.01))).ToString();
		for(var childText : Transform in transform){
			childText.GetComponent(GUIText).text = guiText.text;
		}
		if(parseInt(guiText.text) >= GameMaster.endGameGoldCoins){
			guiText.text = "+"+GameMaster.endGameGoldCoins.ToString();
			for(var childText : Transform in transform){
				childText.GetComponent(GUIText).text = guiText.text;
			}
		}
		yield WaitForSeconds(0.01);
	}
		

	
	for(var childText : Transform in endGameTotalCoin.transform){
		childText.GetComponent(GUIText).fontSize = endGameTotalCoin.guiText.fontSize;
	}
	
	while(PlayerPrefs.GetInt("TotalGoldBlock") > parseInt(endGameTotalCoin.guiText.text)){
		endGameTotalCoin.guiText.text = ((parseInt(endGameTotalCoin.guiText.text)) + Mathf.Ceil((GameMaster.endGameGoldCoins * 0.01))).ToString();
		for(var childText : Transform in endGameTotalCoin.transform){
			childText.gameObject.GetComponent(GUIText).text = endGameTotalCoin.guiText.text;
		}
		if(parseInt(endGameTotalCoin.guiText.text) >= PlayerPrefs.GetInt("TotalGoldBlock")){
			endGameTotalCoin.guiText.text = PlayerPrefs.GetInt("TotalGoldBlock").ToString();
			for(var childText : Transform in endGameTotalCoin.transform){
				childText.gameObject.GetComponent(GUIText).text = endGameTotalCoin.guiText.text;
			}
		}
		yield WaitForSeconds(0.01);
	}
}