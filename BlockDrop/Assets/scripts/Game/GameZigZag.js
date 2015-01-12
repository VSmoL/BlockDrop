#pragma strict

function OnTriggerEnter2D(obj : Collider2D) {  
    var collideObject = obj.gameObject;
    var name = transform.name;

	if(GameMaster.gameZigZag){
		if(name == "leftwallcollider" && collideObject.rigidbody2D.velocity.x < 0){
			collideObject.rigidbody2D.velocity.x = -GameStart.enemyMovementSpeed * GameMaster.zigZagSpeedModifier;
		}
		else if(name == "rightwallcollider" && collideObject.rigidbody2D.velocity.x > 0){
			collideObject.rigidbody2D.velocity.x = GameStart.enemyMovementSpeed * GameMaster.zigZagSpeedModifier;
		}
	}
	else{
		if(name == "leftwallcollider" && collideObject.rigidbody2D.velocity.x < 0){
			collideObject.rigidbody2D.velocity.x = -GameStart.enemyMovementSpeed * GameMaster.zigZagSpeedModifier;
		}
		else if(name == "rightwallcollider" && collideObject.rigidbody2D.velocity.x > 0){
			collideObject.rigidbody2D.velocity.x = GameStart.enemyMovementSpeed * GameMaster.zigZagSpeedModifier;
		}
	}
}