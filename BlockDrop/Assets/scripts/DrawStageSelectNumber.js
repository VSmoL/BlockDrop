#pragma strict

public var stageSelectNumber : int = 1;

function Start () {
	guiText.fontSize = Mathf.Min(Screen.height,Screen.width)/10;
	guiText.text = stageSelectNumber.ToString();
	
	for (var child : Transform in transform){
		child.guiText.fontSize = Mathf.Min(Screen.height,Screen.width)/10;
		child.guiText.text = stageSelectNumber.ToString();
	}
}