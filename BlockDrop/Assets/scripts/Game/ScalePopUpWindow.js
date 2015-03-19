#pragma strict

public var GameOverText : GameObject;
public var ScoreText : GameObject;
public var GameEndScore : GameObject;
public var PreviousHiScore : GameObject;
public var GameEndPreviousBest : GameObject;
public var RestartButton : GameObject;
public var MainMenuButton : GameObject;

function Start () {
	GameOverText.SetActive(true);
	ScoreText.SetActive(true);
	GameEndScore.SetActive(true);
	PreviousHiScore.SetActive(true);
	GameEndPreviousBest.SetActive(true);
	RestartButton.SetActive(true);
	MainMenuButton.SetActive(true);
}