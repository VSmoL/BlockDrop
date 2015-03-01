#pragma strict

function Start(){

	Debug.Log("toimii");

	guiText.fontSize = Mathf.Min(Screen.height,Screen.width)/20;

	for(var childText : Transform in transform){
		childText.gameObject.GetComponent(GUIText).fontSize = transform.guiText.fontSize;
	}
	
	guiText.text = (PlayerPrefs.GetInt("TotalGoldBlock") - GameMaster.endGameGoldCoins).ToString();
	
	while(GameMaster.endGameGoldCoins > parseInt(guiText.text)){
		guiText.text = ((parseInt(guiText.text)) + Mathf.Ceil((GameMaster.endGameGoldCoins * 0.01))).ToString();
		for(var childText : Transform in transform){
			childText.gameObject.GetComponent(GUIText).text = guiText.text;
		}
		if(parseInt(guiText.text) >= PlayerPrefs.GetInt("TotalGoldBlock")){
			guiText.text = PlayerPrefs.GetInt("TotalGoldBlock").ToString();
			for(var childText : Transform in transform){
				childText.gameObject.GetComponent(GUIText).text = guiText.text;
			}
		}
		yield WaitForSeconds(0.01);
	}
		
	Debug.Log("toimii");
}