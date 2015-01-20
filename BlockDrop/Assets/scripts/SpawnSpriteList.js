#pragma strict

public var spriteList : GameObject;

function Start () {
	Instantiate(spriteList, new Vector2(0,0), Quaternion.identity);
}