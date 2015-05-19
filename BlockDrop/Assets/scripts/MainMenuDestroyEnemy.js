#pragma strict

function OnTriggerExit2D(obj : Collider2D) {  
    var collideObject = obj.gameObject;

	// Ends game if 'enemy' collides 'bottomheader'
	switch(collideObject.name){		
		case "EnemyMainMenu(Clone)":
	    	Destroy(collideObject);
			break;
	}
}