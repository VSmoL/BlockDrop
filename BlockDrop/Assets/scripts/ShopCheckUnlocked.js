#pragma strict

function Start () {
	//Get childs of ShopColorList
	for (var child : Transform in transform){
	
		//Get childs of ColorRow
		for (var childColorGroup : Transform in child){
		
			//Get childs of ColorGroup
			for (var childColor : Transform in childColorGroup){
			
				//Check if color is unlocked
				if (!EditorPrefsX.GetBool("Unlocked"+childColor.name)){
					childColor.renderer.material.color.a = 0.5;
					for (var locked : Transform in childColor){
						locked.gameObject.SetActive(true);
					}
				}
			}		
		}
	}
}