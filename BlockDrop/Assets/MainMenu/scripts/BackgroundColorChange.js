#pragma strict



// Fade the color from red to green
	// back and forth over the defined duration
	var colorStart : Color = Color.red;
	var colorEnd : Color = Color.green;
	var duration : float = 3.0;
	
	function Start () {
		// Set specular shader
		renderer.material.shader = Shader.Find ("Transparent/Diffuse");
		// Set red specular highlights
		renderer.material.SetColor ("_SpecColor", Color.red);
	}
	
	function Update () {
		var lerp : float = Mathf.PingPong (Time.time, duration) / duration;
		renderer.material.color = Color.Lerp (colorStart, colorEnd, lerp);
	}
