﻿#pragma strict

var shopUnlock : ShopShapeCheckUnlocked;
var rotatingEnemy : GameObject;
var shopShapeName;

public var buyButton : GameObject;
public var shapePrice : GameObject;
public var currencyGold : GameObject;
public var selectedText : GameObject;

public var totalGold : MenuDrawGoldBlock;

function Update(){
	if(Input.GetMouseButtonDown(0)){
		var hit : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
		GameMaster.mousePressDown = hit.collider;
	}
	if(Input.GetMouseButtonUp(0)){
		 	hit = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
			var hitObjectUp = hit.collider;
				
			if(GameMaster.mousePressDown == hitObjectUp){			
				switch(hitObjectUp.name){	
					//Shape shop
					case "ShopShapeBuyButton":
						shopShapeName = GameMaster.shopShapeName;
						if (!EditorPrefsX.GetBool("Unlocked"+shopShapeName)){
							if(PlayerPrefs.GetInt("TotalGoldBlock") >= ShopPrice.normalShapePrice){
									
								//Change rotating object
								rotatingEnemy.GetComponent.<Renderer>().material.color.a = 1;
								rotatingEnemy.transform.FindChild("Locked").gameObject.SetActive(false);
								
								buyButton.SetActive(false);
								shapePrice.SetActive(false);
								currencyGold.SetActive(false);
								selectedText.SetActive(true);
								
								//Reduce total goldblocks
								PlayerPrefs.SetInt("TotalGoldBlock", PlayerPrefs.GetInt("TotalGoldBlock") - ShopPrice.normalShapePrice);
								
								//Save bought shape
								EditorPrefsX.SetBool("Unlocked"+shopShapeName, true);
																
								shopUnlock.checkUnlocks();
								shopUnlock.checkEnoughMoney();
								
								var boughtShape : GameObject = GameObject.Find(shopShapeName);
								boughtShape.GetComponent.<Renderer>().material.color.a = 1;
								PlayerPrefs.SetInt("enemyBlockSpriteIndex", boughtShape.GetComponent(ShopShapeId).ShapeId);
								
								totalGold.refreshTotalGold();
							}
						}
					break;
				}			
			}
		}
}