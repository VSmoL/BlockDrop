﻿#pragma strict

public var Press : Sprite;
public var NoPress : Sprite;

function OnMouseDown(){

	animation["ButtonPress"].speed = 2.5;
	animation.Play("ButtonPress");
}

function OnMouseUp(){

	animation["ButtonPress"].speed = -1.5;
	animation.Play("ButtonPress");
}