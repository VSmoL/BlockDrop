#pragma strict

function OnTriggerExit2D(obj : Collider2D) {  
    var name = obj.gameObject.name;

    // Ends game if 'enemy' collides 'bottomheader'
    if (name == "bottomheader") {
        // Destroy itself (the enemy)
        Destroy(gameObject);
        GameMaster.currentScore = 0;
        Application.LoadLevel("MainMenu");
    }
}