#pragma strict

public var popupbackground : GameObject;

function OnTriggerExit2D(obj : Collider2D) {  
    var collideObject = obj.gameObject;

    // Ends game if 'enemy' collides 'bottomheader'
    if (collideObject.name == "Enemy(Clone)") {
    	Destroy(collideObject);
		GameOver();
    }
}

function GameOver(){
	if(!GameMaster.GameOver){
		popupbackground.SetActive(true);
		GameMaster.endScore = GameMaster.currentScore;	
		GameMaster.endMultipliedScore = Mathf.Ceil(GameMaster.endScore * GameMaster.endMultiplier);	
		GameMaster.currentScore = 0;	
		GameMaster.GameOver = true;
	}
}