#pragma strict

public var fontSizeDivide : int;

function Start () {
	guiText.fontSize = Mathf.Min(Screen.height,Screen.width)/fontSizeDivide;
	for(var childText : Transform in transform){
		childText.gameObject.GetComponent(GUIText).fontSize = transform.guiText.fontSize;
	}
}