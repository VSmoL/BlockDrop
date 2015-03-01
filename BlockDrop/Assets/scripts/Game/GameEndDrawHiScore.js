#pragma strict

function Start () {

	var gameMode : String = GameMaster.gameMode + "_" + GameMaster.stageNumber.ToString();

	guiText.fontSize = Mathf.Min(Screen.height,Screen.width)/15;
	for(var childText : Transform in transform){
		childText.GetComponent(GUIText).fontSize = transform.guiText.fontSize;
	}

	guiText.text = PlayerPrefs.GetInt("HiScore_"+gameMode).ToString();
	for(var childText : Transform in transform){
		childText.GetComponent(GUIText).text = guiText.text;
	}

}