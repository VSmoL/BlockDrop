#pragma strict

function Start () {
	renderer.material.color = EditorPrefsX.GetColor("enemyColor");
}