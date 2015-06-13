#pragma strict

private var StageSelectStageNumberScript : StageSelectStageNumber;

function Start(){
	checkUnlocks ();
}

public function checkUnlocks () {
	//Get childs of ShopColorList
	for (var childStage : Transform in transform){
		
		StageSelectStageNumberScript = childStage.gameObject.GetComponent("StageSelectStageNumber");
		var playerHighScore = PlayerPrefs.GetInt("HiScore_Arcade_"+StageSelectStageNumberScript.stageNumber.ToString());
			
		if (playerHighScore >= childStage.GetComponent(StageSelectStarPoints).threePoints){			
			for (var childStageStar : Transform in childStage){			
				childStageStar.gameObject.SetActive(true);
			}
		}
		else if (playerHighScore >= childStage.GetComponent(StageSelectStarPoints).twoPoints){
			for (var childStageStar : Transform in childStage){			
				if(childStageStar.name == "StageStar1" || childStageStar.name == "StageStar2"){
					childStageStar.gameObject.SetActive(true);
				} 
			}
		}
		else if (playerHighScore >= childStage.GetComponent(StageSelectStarPoints).onePoints){
			for (var childStageStar : Transform in childStage){			
				if(childStageStar.name == "StageStar1"){
					childStageStar.gameObject.SetActive(true);
				} 
			}
		}
	}
}