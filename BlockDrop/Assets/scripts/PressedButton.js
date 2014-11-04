#pragma strict

function OnMouseDown(){

	animation["ButtonPress"].speed = 2.5;
	animation.Play("ButtonPress");
}

function OnMouseUp(){

	animation["ButtonPress"].speed = -1.5;
	animation.Play("ButtonPress");
}