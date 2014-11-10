#pragma strict

public var fadeSpeed : float = 3.0f;  
private var sceneStarting : boolean = true;

function Awake (){
	var buttons = GameObject.FindGameObjectsWithTag("Button");

	for(var button in buttons){
		button.GetComponent(BoxCollider2D).enabled = false;
	}

    // Set the texture so that it is the the size of the screen and covers it.
    guiTexture.pixelInset = new Rect(0f, 0f, Screen.width, Screen.height);
}

function Update () {
	if(sceneStarting){
		StartScene();
	}
}

function StartScene (){
    // Fade the texture to clear.
    FadeToClear();
    
    // If the texture is almost clear...
    if(guiTexture.color.a <= 0.01f)
    {  
   		var buttons = GameObject.FindGameObjectsWithTag("Button");

    	for(var button in buttons){
    		button.GetComponent(BoxCollider2D).enabled = true;
    	}
    
        // ... set the colour to clear and disable the GUITexture.
        guiTexture.color = Color.clear;
        guiTexture.enabled = false;
        
        // The scene is no longer starting.
        sceneStarting = false;
    }
}

function FadeToClear (){
    // Lerp the colour of the texture between itself and transparent.
    guiTexture.color = Color.Lerp(guiTexture.color, Color.clear, fadeSpeed * Time.deltaTime);
}