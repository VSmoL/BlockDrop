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
    guiTexture.enabled = true;
    
	    // Start fading towards black.
	    FadeToBlack();
	   
	    // If the screen is almost black...
		if(guiTexture.color.a >= 0.5f){
		    // ... reload the level.
			//Application.LoadLevel(screenName.ToString());
			sceneEnding = false;
			Application.LoadLevel(sceneName);
		}
}

function FadeToBlack (){
    // Lerp the colour of the texture between itself and black.
    guiTexture.color = Color.Lerp(guiTexture.color, Color.black, fadeSpeed * Time.deltaTime);
}