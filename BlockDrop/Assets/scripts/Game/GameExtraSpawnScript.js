#pragma strict

// Variable to store the enemy prefab
public var enemyBomb : GameObject;
var extraSpawnOdd : int;
var extraSpawnRandomNumber : int;

var minWaitTime = 5.0;
var maxWaitTime = 15.0;
var time;

function startSpawn(){
	addExtra();
};

// New function to spawn an enemy
function addExtra() {
//	while (!GameMaster.GameOver){
//		
//		var time = Random.Range(minWaitTime, maxWaitTime);
//		
//		yield WaitForSeconds (time);
//		
////		extraSpawnOdd += 10;
////		extraSpawnRandomNumber = Random.Range(0,100);
////		
////		Debug.Log(extraSpawnRandomNumber);
//		
//	
//	    // Variables to store the X position of the spawn object
//	    var x1 = transform.position.x - renderer.bounds.size.x/2;
//	    var x2 = transform.position.x + renderer.bounds.size.x/2;
//
//	    // Randomly pick a point within the spawn object
//	    var spawnPoint = new Vector3(Random.Range(x1, x2), transform.position.y,9);
//
//	    // Create an enemy at the 'spawnPoint' position
//	    Instantiate(enemyBomb, spawnPoint, Quaternion.identity);
////	    yield WaitForSeconds(1);
//    }
}