#pragma strict

var shopitem : GameObject;

function Start () {
	for (var i : int = 0;i < 10; i++) {
		Instantiate (shopitem, Vector2(-2.0 + i, 2.0 - (i + 1.5)), Quaternion.identity);
	}
}