#pragma strict

//GameOver
static var GameOver = false;

//Score
static var currentScore = 0.0;
static var endScore = 0.0;
static var endMultiplier = 1.5;
static var endMultipliedScore = 0;
static var multiplyScore = 0;

//Coins
static var endGameSilverCoins = 0;

//EnemySpawn
static var enemySpawnRate = 1.0;
static var enemyMovementSpeed = -5.0;

//EnemyStartSize
static var enemySize = 0.5;

//LastScreen
static var LastScreenName = "";

//GameMode
static var StageMode = false;
static var CustomMode = false;
static var RandomMode = false;

//Random Game Mode Values
//Random SpawnRate
static var enemySpawnRateRandomMin = 0.2;
static var enemySpawnRateRandomMax = 1.0;

//Random MovementSpeed Random.Range(-10.0,-2.0);
static var enemyMovementSpeedRandomMin = -10.0;
static var enemyMovementSpeedRandomMax = -2.0;

//Random Size Random.Range(0.1,0.3);
static var enemySizeRandomMin = 0.1;
static var enemySizeRandomMax = 0.3;