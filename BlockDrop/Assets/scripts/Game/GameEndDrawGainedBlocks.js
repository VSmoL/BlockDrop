#pragma strict

public var endGameTotalCoin : GameObject;

function Start(){

	GetComponent.<GUIText>().fontSize = Mathf.Min(Screen.height,Screen.width)/20;
	endGameTotalCoin.GetComponent.<GUIText>().fontSize = Mathf.Min(Screen.height,Screen.width)/20;
	
	endGameTotalCoin.GetComponent.<GUIText>().text = (PlayerPrefs.GetInt("TotalGoldBlock") - GameMaster.endGameGoldCoins).ToString();

	for(var childText : Transform in endGameTotalCoin.transform){
		childText.GetComponent(GUIText).text = endGameTotalCoin.transform.GetComponent.<GUIText>().text;
	}

	for(var childText : Transform in transform){
		childText.GetComponent(GUIText).fontSize = transform.GetComponent.<GUIText>().fontSize;
	}
	

	
	while(GameMaster.endGameGoldCoins > parseInt(GetComponent.<GUIText>().text)){
		GetComponent.<GUIText>().text = "+"+((parseInt(GetComponent.<GUIText>().text)) + Mathf.Ceil((GameMaster.endGameGoldCoins * 0.01))).ToString();
		for(var childText : Transform in transform){
			childText.GetComponent(GUIText).text = GetComponent.<GUIText>().text;
		}
		if(parseInt(GetComponent.<GUIText>().text) >= GameMaster.endGameGoldCoins){
			GetComponent.<GUIText>().text = "+"+GameMaster.endGameGoldCoins.ToString();
			for(var childText : Transform in transform){
				childText.GetComponent(GUIText).text = GetComponent.<GUIText>().text;
			}
		}
		yield WaitForSeconds(0.01);
	}
		

	
	for(var childText : Transform in endGameTotalCoin.transform){
		childText.GetComponent(GUIText).fontSize = endGameTotalCoin.GetComponent.<GUIText>().fontSize;
	}
	
	while(PlayerPrefs.GetInt("TotalGoldBlock") > parseInt(endGameTotalCoin.GetComponent.<GUIText>().text)){
		endGameTotalCoin.GetComponent.<GUIText>().text = ((parseInt(endGameTotalCoin.GetComponent.<GUIText>().text)) + Mathf.Ceil((GameMaster.endGameGoldCoins * 0.01))).ToString();
		for(var childText : Transform in endGameTotalCoin.transform){
			childText.gameObject.GetComponent(GUIText).text = endGameTotalCoin.GetComponent.<GUIText>().text;
		}
		if(parseInt(endGameTotalCoin.GetComponent.<GUIText>().text) >= PlayerPrefs.GetInt("TotalGoldBlock")){
			endGameTotalCoin.GetComponent.<GUIText>().text = PlayerPrefs.GetInt("TotalGoldBlock").ToString();
			for(var childText : Transform in endGameTotalCoin.transform){
				childText.gameObject.GetComponent(GUIText).text = endGameTotalCoin.GetComponent.<GUIText>().text;
			}
		}
		yield WaitForSeconds(0.01);
	}
}