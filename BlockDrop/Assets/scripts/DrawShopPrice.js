#pragma strict

function Start () {
	GetComponent.<GUIText>().fontSize = Mathf.Min(Screen.height,Screen.width)/10;
	GetComponent.<GUIText>().text = ShopPrice.normalColorPrice.ToString();
}