try {

//log("Executing js");
// initialize random seed
getSeed = function(){
    return go4d.getIntRegistry(0);
}
setSeed = function(newSeed){
    log("setSeed(" + newSeed + ")");
    go4d.setIntRegistry(0,newSeed);
}
if(getSeed()==0){
    setSeed(42);
    go4d.setUserProgrammableText2("X: Black guitar, Y: White drums, Z: Blue sax, W: Red bells");

}



// floatRegistry(0) is the time of last collected hypergem
getStartTime = function(){
    return go4d.getFloatRegistry(0); 
}
setStartTime = function(){
    go4d.setFloatRegistry(0, go4d.getTime());
}
if(getStartTime() == 0){setStartTime();}
// floatRegistry(1) is the max time to collect next hypergem
getGemTimer = function() {
    return go4d.getFloatRegistry(1);
}
setGemTimer = function(newTarget){
    go4d.setFloatRegistry(1, newTarget);
}
if(getGemTimer()==0){setGemTimer(180.0);}


getTimeLeft = function(){
    return Math.floor(getStartTime() + getGemTimer() - go4d.getTime());
}
var timeLeft = getTimeLeft();
getGemCount = function(){
    return go4d.getIntRegistry(1);
}
setGemCount = function(newCount){
    go4d.setIntRegistry(1,newCount);
}
// state = 0: game running, 1: Game over
getGameState = function(){
    return go4d.getIntRegistry(2);
}
var gs = getGameState();
setGameState = function(newState){
    go4d.setIntRegistry(2,newState);
}




// generate list of thepositions
const point4dList = [
    [1,5,5,5],
    [9,5,5,5],
    [5,1,5,5],
    [5,9,5,5],
    [5,5,1,5],
    [5,5,9,5],
    [5,5,5,1],
    [5,5,5,9],
    [5,5,5,5]
];

const point4dNames =[
    "negative X face 1,5,5,5",
    "positive X face 9,5,5,5",
    "negative Y face 5,1,5,5",
    "positive Y face 5,9,5,5",
    "negative Z face 5,5,1,5",
    "positive Z face 5,5,9,5",
    "negative W face 5,5,5,1",
    "positive W face 5,5,5,9",
    "center          5,5,5,5",
    
];

getNextGemName = function(){
    return go4d.getStringRegistry(0);
}
setNextGemName = function(nameidx){
    go4d.setStringRegistry(0,point4dNames[nameidx]);
}



if(!getNextGemName()){
    var P4d = point4dList[0];
    go4d.jsSetPosition(P4d[0],P4d[1],P4d[2],P4d[3]);
    setNextGemName(0);
}
var nextGemName = getNextGemName();

// check timer. If negative, game over.
    if(gs < 1){
        go4d.setUserProgrammableText1(getGemCount() + ' Hypergems. Time left:' + timeLeft + " \nNext gem: " + nextGemName);
    //    log(getGemCount() + ' Hypergems. Time left:' + timeLeft + " next gem: " + nextGemName);
    }

    if (go4d.getTime() > getStartTime() + getGemTimer() && gs < 1) {
        // Game Over. 
        setGameState(1);
        go4d.setUserProgrammableText1('Game Over! You got ' + getGemCount() + ' hypergems. \nClick Restart to try again' );
        log('Game Over! You got ' + getGemCount() + ' hypergems. \nClick Restart to try again' );
    }

} catch (error) {
    // This block will execute if any error occurs in the try block
    log("################################################## Error in JavaScript execution First half: " + error.message);
    // Optionally log more details if needed
    log("Stack Trace: " + error.stack);
}

if (go4d.IsCollidedWithPlayer(0.0)) {
    if (getGameState() == 0){
        try {
            var seed = getSeed();
        const a = 1664525;
        const c = 1013904223;
        const m = Math.pow(2, 31) - 1;
        var randomIndex = seed % point4dList.length;
        var newRandomIndex;

        do {
            seed = (a * seed + c) % m;
            newRandomIndex = seed % point4dList.length;
        } while (newRandomIndex === randomIndex);
    } catch (error) {
        // This block will execute if any error occurs in the try block
        log("################################################## Error in JavaScript execution First half of the second half: " + error.message);
        // Optionally log more details if needed
        log("Stack Trace: " + error.stack);
    }
    log("seed before setSeed: " + seed);
    try {
    
        setSeed(seed); // Corrected the setSeed call
    } catch (error) {
        // This block will execute if any error occurs in the try block
        log("################################################## Error in JavaScript execution Setseed: " + error.message);
        // Optionally log more details if needed
        log("Stack Trace: " + error.stack);
    }
    try {
        var randomPoint4d = point4dList[newRandomIndex];
    } catch (error) {
        // This block will execute if any error occurs in the try block
        log("################################################## Error in JavaScript execution Read from point4dlist: " + error.message);
        // Optionally log more details if needed
        log("Stack Trace: " + error.stack);
    }
    try {
        
        // Move to the random Point4d
        go4d.jsSetPosition(randomPoint4d[0],randomPoint4d[1],randomPoint4d[2],randomPoint4d[3]);
    } catch (error) {
        // This block will execute if any error occurs in the try block
        log("################################################## Error in JavaScript execution jsSetposition: " + error.message);
        // Optionally log more details if needed
        log("Stack Trace: " + error.stack);
    }
    try {
        setNextGemName(newRandomIndex);
    } catch (error) {
        // This block will execute if any error occurs in the try block
        log("################################################## Error in JavaScript execution setnextgemname: " + error.message);
        // Optionally log more details if needed
        log("Stack Trace: " + error.stack);
    }
    try {
        // reset timer
        setStartTime();
    } catch (error) {
        // This block will execute if any error occurs in the try block
        log("################################################## Error in JavaScript execution setstarttime: " + error.message);
        // Optionally log more details if needed
        log("Stack Trace: " + error.stack);
    }
    try {
        var gemTimer = getGemTimer();
        setGemTimer(gemTimer * 0.95);   
        // add counter to intregistry(1)
        var curcount = getGemCount();
        setGemCount(curcount + 1);
        // print count to screen
    } catch (error) {
        // This block will execute if any error occurs in the try block
        log("################################################## Error in JavaScript execution Block2: " + error.message);
        // Optionally log more details if needed
        log("Stack Trace: " + error.stack);
    }
    }
}
 