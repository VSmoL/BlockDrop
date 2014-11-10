#pragma strict

public var popupbackground : GameObject;

function OnTriggerExit2D(obj : Collider2D) {  
    var collideObject = obj.gameObject;

    // Ends game if 'enemy' collides 'bottomheader'
    if (collideObject.name == "Enemy(Clone)") {
   		popupbackground.SetActive(true);
        // Destroy itself (the enemy)
        Destroy(collideObject);
        GameMaster.currentScore = 0;
        //Application.LoadLevel("MainMenu");
    }
}