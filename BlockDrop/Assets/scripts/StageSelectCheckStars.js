#pragma strict

private var StageSelectStageNumberScript : StageSelectStageNumber;

function Start(){
	checkUnlocks ();
}

public function checkUnlocks () {
	//Get childs of ShopColorList
	for (var childStage : Transform in transform){
		
		StageSelectStageNumberScript = childStage.gameObject.GetComponent("StageSelectStageNumber");
		
		if (PlayerPrefs.GetInt("HiScore_Arcade_"+StageSelectStageNumberScript.stageNumber.ToString()) >= 1000){			
			for (var childStageStar : Transform in childStage){			
				childStageStar.gameObject.SetActive(true);
			}
		}
		else if (PlayerPrefs.GetInt("HiScore_Arcade_"+StageSelectStageNumberScript.stageNumber.ToString()) >= 500){
			for (var childStageStar : Transform in childStage){			
				if(childStageStar.name == "StageStar1" || childStageStar.name == "StageStar2"){
					childStageStar.gameObject.SetActive(true);
				} 
			}
		}
		else if (PlayerPrefs.GetInt("HiScore_Arcade_"+StageSelectStageNumberScript.stageNumber.ToString()) >= 100){
			for (var childStageStar : Transform in childStage){			
				if(childStageStar.name == "StageStar1"){
					childStageStar.gameObject.SetActive(true);
				} 
			}
		}
	}
}