#pragma strict

public var songList : AudioClip[];

function Start(){
	if(!EditorPrefsX.GetBool("isMusic")){
		GetComponent(AudioSource).Stop();
	}
}

function startMusic(){
	while(EditorPrefsX.GetBool("isMusic") && !GameMaster.GameOver){
	
		var randomNumber = Random.Range(0,songList.length-1);
		GameMaster.backgroundMusic = randomNumber;
		
		while(GameMaster.backgroundMusic == randomNumber){
			randomNumber = Random.Range(0,songList.length-1);
		}
		
		GetComponent(AudioSource).clip = songList[randomNumber];
		GetComponent(AudioSource).Play();
		
		GetComponent(AudioSource).loop = false;
		
		yield WaitForSeconds(songList[randomNumber].length + 1);
	}
}