#pragma strict

function Start () {
	// Make the enemy rotate on itself
    GetComponent.<Rigidbody2D>().angularVelocity = -20;
}