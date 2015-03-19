#pragma strict

function Start(){

	Debug.Log("toimii");

	GetComponent.<GUIText>().fontSize = Mathf.Min(Screen.height,Screen.width)/20;

	for(var childText : Transform in transform){
		childText.gameObject.GetComponent(GUIText).fontSize = transform.GetComponent.<GUIText>().fontSize;
	}
	
	GetComponent.<GUIText>().text = (PlayerPrefs.GetInt("TotalGoldBlock") - GameMaster.endGameGoldCoins).ToString();
	
	while(GameMaster.endGameGoldCoins > parseInt(GetComponent.<GUIText>().text)){
		GetComponent.<GUIText>().text = ((parseInt(GetComponent.<GUIText>().text)) + Mathf.Ceil((GameMaster.endGameGoldCoins * 0.01))).ToString();
		for(var childText : Transform in transform){
			childText.gameObject.GetComponent(GUIText).text = GetComponent.<GUIText>().text;
		}
		if(parseInt(GetComponent.<GUIText>().text) >= PlayerPrefs.GetInt("TotalGoldBlock")){
			GetComponent.<GUIText>().text = PlayerPrefs.GetInt("TotalGoldBlock").ToString();
			for(var childText : Transform in transform){
				childText.gameObject.GetComponent(GUIText).text = GetComponent.<GUIText>().text;
			}
		}
		yield WaitForSeconds(0.01);
	}
		
	Debug.Log("toimii");
}