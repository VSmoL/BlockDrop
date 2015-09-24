#pragma strict

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
					case "OjisTwitter":
						Application.OpenURL ("https://twitter.com/Vsmoli");
						break;
					case "OjisGPlay":
						Application.OpenURL ("https://play.google.com/store/apps/developer?id=Timo+Ojaranta");
						break;
					case "OjisJoku":
						Application.OpenURL ("");	
						break;
					case "SparTwitter":
						Application.OpenURL ("https://twitter.com/Markymark665");
						break;
					case "SparHomepage":
						Application.OpenURL ("http://marksparling.com/");
						break;
					case "SparSoundCloud":
						Application.OpenURL ("https://soundcloud.com/mark-sparling-1");	
						break;
					case "BackButton":
						Application.LoadLevel("MainMenu");
						break;
				}			
			}
		}
}