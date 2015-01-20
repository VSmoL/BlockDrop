#pragma strict

public var spriteListEvil : GameObject;

function Start(){
	GetComponent(SpriteRenderer).sprite = spriteListEvil.GetComponent(SpriteList).spriteListEvil[PlayerPrefs.GetInt("enemyBlockSpriteIndex")];
}