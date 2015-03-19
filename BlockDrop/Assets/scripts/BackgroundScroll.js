#pragma strict

var scrollSpeed : float = 0.25;

function Update () {
		var offset : float = Time.time * scrollSpeed;
		GetComponent.<Renderer>().material.SetTextureOffset ("_MainTex", Vector2(offset,offset));
	}