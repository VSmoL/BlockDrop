#pragma strict

public var PausePopUp : GameObject;
private var allAudioSources : AudioSource[];
private var bgMusic : GameObject;

function Update(){
	if(Input.GetMouseButtonDown(0)){
		var hit : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
		GameMaster.mousePressDown = hit.collider;
	}
	if(Input.GetMouseButtonUp(0)){
		hit = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
		var hitObjectUp = hit.collider;
			
			if(GameMaster.mousePressDown == hitObjectUp){
				switch(hitObjectUp.name){	
					case "PauseButton":
						Time.timeScale = 0;
						
						bgMusic = GameObject.Find("BackgroundMusic");
    					bgMusic.GetComponent(AudioSource).Pause();
    
					    
						PausePopUp.SetActive(true);
						GameMaster.GamePause = true;
						break;
					case "ContinueButton":
						Time.timeScale = 1;
						
						if(EditorPrefsX.GetBool("isMusic")){
							bgMusic = GameObject.Find("BackgroundMusic");
    						bgMusic.GetComponent(AudioSource).Play();
    					}
						
						PausePopUp.SetActive(false);
						GameMaster.GamePause = false;
						break;
			}
		}
	}
}