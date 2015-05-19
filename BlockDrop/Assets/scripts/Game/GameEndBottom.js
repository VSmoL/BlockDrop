#pragma strict

public var GameEnd : GameEnd;

function OnTriggerExit2D(obj : Collider2D) {  
    var collideObject = obj.gameObject;

	// Ends game if 'enemy' collides 'bottomheader'
	switch(collideObject.name){		
		case "EnemyBottom(Clone)":
			if(!GameMaster.GameOver){
		    	Destroy(collideObject);
		    	GetComponent(AudioSource).Play();
		    	GameEnd.fadeMusic();
				GameEnd.GameOver();
			}
			break;
	}
}