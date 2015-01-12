#pragma strict

// Fade the color from red to green
// back and forth over the defined duration
var bgColor : Color[] = [Color(1,0,0,1), Color(1,0.5,0,1), Color(1,1,0,1), Color(0,1,0,1), Color(0,1,1,1), Color(0,0,1,1), Color(1,0,1,1)];	

var nextIndex : int;

var duration : float = 3.0;
var lastChange : float = 0.0;

function Start () {
	if (bgColor == null || bgColor.Length < 2){
		Debug.Log ("Need to setup colors array in inspector");
	}
	renderer.material.color = GameMaster.backgroundColor;
	
	nextIndex = (GameMaster.backgroundIndex + 1) % bgColor.Length;  
}
	
function Update(){
	GameMaster.backgroundTimer += Time.deltaTime;

	if (GameMaster.backgroundTimer > duration) {
		GameMaster.backgroundIndex = (GameMaster.backgroundIndex + 1) % bgColor.Length;
		nextIndex = (GameMaster.backgroundIndex + 1) % bgColor.Length;
		GameMaster.backgroundTimer = 0.0;

	}
	 renderer.material.color = Color.Lerp (bgColor[GameMaster.backgroundIndex], bgColor[nextIndex], GameMaster.backgroundTimer / duration );
	 GameMaster.backgroundColor = renderer.material.color;
}


//// Fade the color from red to green
//	// back and forth over the defined duration
//	var colorStart : Color = Color.red;
//	var colorEnd : Color = Color.green;
//	var duration : float = 3.0;
//	
//	function Start () {
//		// Set specular shader
//		renderer.material.shader = Shader.Find ("Transparent/Diffuse");
//		// Set red specular highlights
//		renderer.material.SetColor ("_SpecColor", Color.red);
//	}
//	
//	function Update () {
//		var lerp : float = Mathf.PingPong (Time.time, duration) / duration;
//		renderer.material.color = Color.Lerp (colorStart, colorEnd, lerp);
//	}
