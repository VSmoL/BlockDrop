#pragma strict

public var tilePrefab : GameObject;
public var tileText : GameObject;

function Start () {
	CreateTiles();
}

function CreateTiles(){
	var xOffset: float = -1.75;
	var yOffset: float = 3.0;
	var numberOfTiles: int = 9;
	var distanceBetweenTiles: float = 1.75;
	
	for(var tilesCreated: int = 0; tilesCreated < numberOfTiles; tilesCreated += 1)
	{
		Instantiate(tilePrefab, Vector3(xOffset, yOffset, 0), transform.rotation);
		var pos : Vector3 = Camera.main.WorldToViewportPoint(Vector3(xOffset, yOffset, 0));
		
		var tileTextScript : DrawStageSelectNumber = tileText.GetComponent("DrawStageSelectNumber");	
		
		tileTextScript.stageSelectNumber = tilesCreated + 1;

		Instantiate (tileText, pos , Quaternion.identity);
		
    	xOffset += distanceBetweenTiles;
    	
    	if((tilesCreated + 1) % 3 == 0 ) {
			xOffset = -1.75;
			yOffset -= 1.5;
    	}
	}
}