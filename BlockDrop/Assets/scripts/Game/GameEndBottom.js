﻿#pragma strict

public var GameEnd : GameEnd;

function OnTriggerExit2D(obj : Collider2D) {  
    var collideObject = obj.gameObject;

	// Ends game if 'enemy' collides 'bottomheader'
	switch(collideObject.name){		
		case "EnemyBottom(Clone)":
	    	Destroy(collideObject);
			GameEnd.GameOver();
			break;
	}
}