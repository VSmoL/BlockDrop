#pragma strict

//GameOver
static var GameOver = false;

//Score
static var currentScore = 0.0;
static var endScore = 0.0;
static var endMultiplier = 1.5;
static var endMultipliedScore = 0;
static var multiplyScore = 0;
static var multiplier = 0;

//Coins
static var endGameSilverCoins = 0;

//EnemyAttributes
static var enemySpawnRate : float = 1.0;
static var enemySpawnRateIncrease : float = 0.015;

static var enemyMovementSpeed : float = -3.0;
static var enemyMovementSpeedIncrease : float = 0.015;

static var enemySize : float = 1.0;
static var enemySizeIncrease : float = 0.01;

//LastScreen
static var LastScreenName = "";

//GameMode
static var StageMode = false;
static var CustomMode = false;
static var RandomMode = false;

//StageSelect
static var zoneNumber : int = 0;
static var stageNumber : int;
static var enemySpawnRateArray = [1, 0.95, 0.90, 0.85, 0.80, 0.75, 0.70, 0.65, 0.60, 0.55, 0.50];
static var enemyMovementSpeedArray = [-3.0, -3.5, -4.0, -4.5, -5.0, -5.5, -6.0, -6.5, -7.0, -7.5, -8.0];
static var enemySizeArray = [1.5, 1.4, 1.3, 1.2, 1.1, 1.0, 0.9, 0.8, 0.7, 0.6, 0.5];

//GameAttributes
//ZigZag
static var gameZigZag : boolean = false;
static var zigZagSpeedModifier : float = 1.5;

//Shredder
static var gameShredder : boolean = false;
static var shredderMultiplySpawn : int;
static var shredderMin : int = 1;
static var shredderMax : int = 4;


//Random Game Mode Values
//Random SpawnRate
static var enemySpawnRateRandomMin = 0.2;
static var enemySpawnRateRandomMax = 1.0;

//Random MovementSpeed Random.Range(-10.0,-2.0);
static var enemyMovementSpeedRandomMin = -10.0;
static var enemyMovementSpeedRandomMax = -2.0;

//Random Size Random.Range(0.1,0.3);
static var enemySizeRandomMin = 0.1;
static var enemySizeRandomMax = 1;

//Menu
static var mousePressDown;
static var backgroundIndex : int;
static var backgroundColor : Color;
static var backgroundTimer : float = 0.0;

//Shop
//ShopColor
static var shopColorName;