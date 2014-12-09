#pragma strict

function Start () {
	guiText.fontSize = Mathf.Min(Screen.height,Screen.width)/10;
	guiText.text = "SELECTED";
}