#pragma strict

var buyButton : GameObject;
//Colors:							LRed				LOrange				LYellow			LGreen				LLBlue				LBlue				LPurple				LPink			Red				Orange				Yellow			Green			LBlue			Blue			Purple				Pink			DRed			DOrange						DYellow				DGreen				LDBlue				DBlue				DPurple				DPink					White			Grey			Black
var blockColors : Color[] = [Color(1,0.5,0.5,1), Color(1,0.75,0.5,1), Color(1,1,0.5,1), Color(0.5,1,0.5,1), Color(0.5,1,1,1), Color(0.5,0.5,1,1), Color(0.75,0.5,1,1), Color(1,0.5,1,1), Color(1,0,0,1), Color(1,0.5,0,1), Color(1,1,0,1), Color(0,1,0,1), Color(0,1,1,1), Color(0,0,1,1), Color(0.75,0,1,1), Color(1,0,1,1), Color(0.5,0,0,1), Color(0.5,0.25,0,1),   Color(0.5,0.5,0,1),   Color(0,0.5,0,1),   Color(0,0.5,0.5,1),   Color(0,0,0.5,1),   Color(0.5,0,0.5,1), Color(0.75,0,0.75,1), Color(1,1,1,1), Color(0.5,0.5,0.5,1), Color(0,0,0,1)]; 
var x : int;

function Start(){
	checkUnlocks ();
}

public function checkUnlocks () {
	x = 0;
	//Get childs of ShopColorList
	for (var child : Transform in transform){
	
		//Get childs of ColorRow
		for (var childColor : Transform in child){
			//Check if color is unlocke
			if (!EditorPrefsX.GetBool("Unlocked"+childColor.name)){
				childColor.renderer.material.color = blockColors[x];
				childColor.renderer.material.color.a = 0.5;
				for (var locked : Transform in childColor){
					locked.gameObject.SetActive(true);
				}
			}
			else if (EditorPrefsX.GetBool("Unlocked"+childColor.name)){
				childColor.renderer.material.color = blockColors[x];
				childColor.renderer.material.color.a = 1;
				for (var locked : Transform in childColor){
					locked.gameObject.SetActive(false);
				}
			}
			x++;
		}
	}
}

public function checkEnoughMoney () {
	if(PlayerPrefs.GetInt("TotalGoldBlock") < ShopPrice.normalColorPrice){
		buyButton.renderer.material.color.a = 0.5;
		buyButton.collider2D.enabled = false;
	}
	else if(PlayerPrefs.GetInt("TotalGoldBlock") >= ShopPrice.normalColorPrice){
		buyButton.renderer.material.color.a = 1;
		buyButton.collider2D.enabled = true;
	}
}