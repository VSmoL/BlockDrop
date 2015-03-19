#pragma strict

function Start () {
	GetComponent.<Renderer>().material.color = EditorPrefsX.GetColor("enemyColor");
}