#pragma strict

function Start(){

	Debug.Log("toimii");

	guiText.fontSize = Mathf.Min(Screen.height,Screen.width)/20;

	for(var childText : Transform in transform){
		childText.gameObject.GetComponent(GUIText).fontSize = Mathf.Min(Screen.height,Screen.width)/20;
	}
	
	while(GameMaster.endGameSilverCoins > parseInt(guiText.text)){
		guiText.text = "+"+((parseInt(guiText.text)) + Mathf.Ceil((GameMaster.endGameSilverCoins * 0.01))).ToString();
		for(var childText : Transform in transform){
			childText.gameObject.GetComponent(GUIText).text = guiText.text;
		}
		if(parseInt(guiText.text) >= GameMaster.endGameSilverCoins){
			guiText.text = "+"+GameMaster.endGameSilverCoins.ToString();
			for(var childText : Transform in transform){
				childText.gameObject.GetComponent(GUIText).text = guiText.text;
			}
		}
		yield WaitForSeconds(0.01);
	}
		
	Debug.Log("toimii");
}