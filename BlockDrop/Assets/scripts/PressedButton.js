#pragma strict

function OnMouseDown(){
	GameMaster.mousePressDownObjectScale = transform.localScale;
	transform.localScale *= 0.95;
}

function OnMouseUp(){
	transform.localScale = GameMaster.mousePressDownObjectScale;
}