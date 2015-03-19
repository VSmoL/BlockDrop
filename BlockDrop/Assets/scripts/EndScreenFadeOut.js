#pragma strict

public var fadeSpeed : float = 3.0f;  
var sceneEnding : boolean = false;
var sceneName : String = "";

function Update () {
    if(sceneEnding){
		EndScene();
	}
}

function EndScene(){
    // Make sure the texture is enabled.
    GetComponent.<GUITexture>().enabled = true;
    
	    // Start fading towards black.
	    FadeToBlack();
	   
	    // If the screen is almost black...
		if(GetComponent.<GUITexture>().color.a >= 0.5f){
		    // ... reload the level.
			//Application.LoadLevel(screenName.ToString());
			sceneEnding = false;
			Application.LoadLevel(sceneName);
		}
}

function FadeToBlack (){
    // Lerp the colour of the texture between itself and black.
    GetComponent.<GUITexture>().color = Color.Lerp(GetComponent.<GUITexture>().color, Color.black, fadeSpeed * Time.deltaTime);
}