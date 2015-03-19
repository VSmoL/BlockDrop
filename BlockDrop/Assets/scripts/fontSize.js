#pragma strict

public var fontSizeDivide : int;

function Start () {
	GetComponent.<GUIText>().fontSize = Mathf.Min(Screen.height,Screen.width)/fontSizeDivide;
	for(var childText : Transform in transform){
		childText.gameObject.GetComponent(GUIText).fontSize = transform.GetComponent.<GUIText>().fontSize;
	}
}