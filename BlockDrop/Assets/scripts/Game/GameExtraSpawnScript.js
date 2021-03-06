﻿#pragma strict

// Variable to store the enemy prefab
public var enemyRandom : GameObject;
public var bottomEnemyRandom : GameObject;
public var bottomSpawn : GameObject;

var minWaitTime = 5;
var maxWaitTime = 15;
var time;

var spawnX1 : float;
var spawnX2 : float;
var spawnBottomX1 : float;
var spawnBottomX2 : float;

var spawnPoint;

function startSpawn(){
	addExtra();
	getSpawnArea();
	getBottomSpawnArea();
};

// New function to spawn an enemy
function addExtra() {
	while (!GameMaster.GameOver){
	
	var time = Random.Range(minWaitTime, maxWaitTime);
	
		if(GameMaster.gameTopBottom){
			var TopBottom = Random.Range(0,2);
			if (TopBottom == 0){
				// Randomly pick a point within the spawn object
		    	spawnPoint = new Vector3(Random.Range(spawnX1, spawnX2), transform.position.y,9);
		    	
		    	// Create an enemy at the 'spawnPoint' position
		    	Instantiate(enemyRandom, spawnPoint, Quaternion.identity);
			}
			else if (TopBottom == 1){
				// Randomly pick a point within the spawn object
		   		spawnPoint = new Vector3(Random.Range(spawnBottomX1, spawnBottomX1), bottomSpawn.transform.position.y,9);
				
				// Create an enemy at the 'spawnPoint' position
		    	Instantiate(bottomEnemyRandom, spawnPoint, Quaternion.identity);
			}
		}
		else{
		    // Randomly pick a point within the spawn object
		   	spawnPoint = new Vector3(Random.Range(spawnX1, spawnX2), transform.position.y,9);

		    // Create an enemy at the 'spawnPoint' position
		    Instantiate(enemyRandom, spawnPoint, Quaternion.identity);
		}
    }
}

function getSpawnArea(){
	// Variables to store the X position of the spawn object
   	spawnX1 = transform.position.x - GetComponent.<Renderer>().bounds.size.x/2;
    spawnX2 = transform.position.x + GetComponent.<Renderer>().bounds.size.x/2;
}
function getBottomSpawnArea(){
	// Variables to store the X position of the spawn object
   	spawnBottomX1 = bottomSpawn.transform.position.x - GetComponent.<Renderer>().bounds.size.x/2;
    spawnBottomX2 = bottomSpawn.transform.position.x + GetComponent.<Renderer>().bounds.size.x/2;
}