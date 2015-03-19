#pragma strict

function OnTriggerEnter2D(obj : Collider2D) {  
    var collideObject = obj.gameObject;
    var name = transform.name;

	if(GameMaster.gameZigZag){
		if(name == "leftwallcollider" && collideObject.GetComponent.<Rigidbody2D>().velocity.x < 0){
			collideObject.GetComponent.<Rigidbody2D>().velocity.x = -GameStart.enemyMovementSpeed * GameMaster.zigZagSpeedModifier;
		}
		else if(name == "rightwallcollider" && collideObject.GetComponent.<Rigidbody2D>().velocity.x > 0){
			collideObject.GetComponent.<Rigidbody2D>().velocity.x = GameStart.enemyMovementSpeed * GameMaster.zigZagSpeedModifier;
		}
	}
	else{
		if(name == "leftwallcollider" && collideObject.GetComponent.<Rigidbody2D>().velocity.x < 0){
			collideObject.GetComponent.<Rigidbody2D>().velocity.x = -GameStart.enemyMovementSpeed * GameMaster.zigZagSpeedModifier;
		}
		else if(name == "rightwallcollider" && collideObject.GetComponent.<Rigidbody2D>().velocity.x > 0){
			collideObject.GetComponent.<Rigidbody2D>().velocity.x = GameStart.enemyMovementSpeed * GameMaster.zigZagSpeedModifier;
		}
	}
}