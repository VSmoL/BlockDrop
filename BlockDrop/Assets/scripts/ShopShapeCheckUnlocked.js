#pragma strict

var buyButton : GameObject;
public var spriteList : GameObject;

function Start(){
	checkUnlocks ();
}

public function checkUnlocks () {
	//Get childs of ShopColorList
	for (var child : Transform in transform){
	
		//Get childs of ColorRow
		for (var childShape : Transform in child){
			//Check if color is unlocked
			if (!EditorPrefsX.GetBool("Unlocked"+childShape.name)){
				childShape.GetComponent(SpriteRenderer).sprite = spriteList.GetComponent(SpriteList).spriteList[childShape.GetComponent(ShopShapeId).ShapeId];
				childShape.GetComponent.<Renderer>().material.color.a = 0.5;
				for (var locked : Transform in childShape){
					locked.gameObject.SetActive(true);
				}
			}
			else if (EditorPrefsX.GetBool("Unlocked"+childShape.name)){
				childShape.GetComponent(SpriteRenderer).sprite = spriteList.GetComponent(SpriteList).spriteList[childShape.GetComponent(ShopShapeId).ShapeId];
				childShape.GetComponent.<Renderer>().material.color.a = 1;
				for (var locked : Transform in childShape){
					locked.gameObject.SetActive(false);
				}
			}
		}
	}
}

public function checkEnoughMoney () {
	if(PlayerPrefs.GetInt("TotalGoldBlock") < ShopPrice.normalColorPrice){
		buyButton.GetComponent.<Renderer>().material.color.a = 0.5;
		buyButton.GetComponent.<Collider2D>().enabled = false;
	}
	else if(PlayerPrefs.GetInt("TotalGoldBlock") >= ShopPrice.normalColorPrice){
		buyButton.GetComponent.<Renderer>().material.color.a = 1;
		buyButton.GetComponent.<Collider2D>().enabled = true;
	}
}