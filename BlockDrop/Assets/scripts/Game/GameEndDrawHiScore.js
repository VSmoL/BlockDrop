#pragma strict

function Start () {

	var gameMode : String = GameMaster.gameMode + "_" + GameMaster.stageNumber.ToString();

	GetComponent.<GUIText>().fontSize = Mathf.Min(Screen.height,Screen.width)/15;
	for(var childText : Transform in transform){
		childText.GetComponent(GUIText).fontSize = transform.GetComponent.<GUIText>().fontSize;
	}

	GetComponent.<GUIText>().text = PlayerPrefs.GetInt("HiScore_"+gameMode).ToString();
	for(var childText : Transform in transform){
		childText.GetComponent(GUIText).text = GetComponent.<GUIText>().text;
	}

}