﻿#pragma strict

public var spriteList : GameObject;

function Start(){
	GetComponent(SpriteRenderer).sprite = spriteList.GetComponent(SpriteList).spriteList[PlayerPrefs.GetInt("enemyBlockSpriteIndex")];
}