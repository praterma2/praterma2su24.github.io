function playCraps() {
    //this is a one line comment
    /*the is function to mplay craps in game.html
    rules for craps
    Roll two dice
    add up to 7 or 11, you lose!
    if they are doubles and even, you win!
    eveything else is a push
    Prof. Prater
    30May2024
    */
    console.log("playCraps() started");
    //roll the dice
    var die1 = Math.floor(Math.random() * 6) + 1;
    console.log(die1);
    document.getElementById("die1Res").innerHTML = "die1 result = " + die1;

    var die2 = Math.floor(Math.random() * 6) + 1;
    console.log(die2);
    document.getElementById("die2Res").innerHTML = "die2 result = " + die2;

    var sum = die1 + die2;
    console.log(sum);
    document.getElementById("sumRes").innerHTML = "sum result = " + sum;

    //look for a loss
    if (sum == 7 || sum == 11) {
        console.log("loss");
        document.getElementById("gameRes").innerHTML = "You lost to the Blade Runner!";
    } else if(die1 == die2 && die1 % 2 == 0){       //look for a win  
        console.log("win");
        document.getElementById("gameRes").innerHTML = "You beat the Blade Runner, try again for more wins!";
    }else{  //everything else is a push
        console.log("tie");
        document.getElementById("gameRes").innerHTML = "You did not win or lose, but who really wins anyway?";
    }
}

//for Assignment 7.1: Event Driven Programming
function startFun(){
    console.log("startFun() started");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById("myMarquee").start();
}

//for Assignment 7.1: Event Driven Programming
function stopFun(){
    console.log("stopFun() started");
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
    document.getElementById("myMarquee").stop();
}

function checkPalin(){
    console.log("checkPalin() started");

    //record the text input as a string
    var entStr;
    entStr = document.getElementById("palinInput").value;
    console.log("entStr is: " + entStr);

    //take away spaces
    var entStrNoSpace;
    entStrNoSpace = entStr.split(" ").join("");
    console.log("entStr with no spaces is: " + entStrNoSpace);

    //create new revArray var and reverse string
    var revStr;
    const revArray =[];
    var length = entStrNoSpace.length - 1;
    console.log("string length is " + length);

    //input into array and reverse it
    for(var i = length; i >= 0; i--){
        revArray.push(entStrNoSpace[i]);
    }

    //convert to a string from array
    revStr = revArray.join("");
    console.log("reversed is " + revStr);

    //compare rev to string and write to status
    var equal = 0;
    equal = (entStrNoSpace == revStr);
    console.log("the entry and reversed being equal is " + equal);

    //write to palindrome status
    if(equal == true){
        document.getElementById("palinStatus").innerHTML = entStr + " <b>is</b> a palindrome."
    } else {
        document.getElementById("palinStatus").innerHTML = entStr + " is <b>not</b> a palindrome."
    }
}

//assignment 11.1, play sound
function subSounds(){
    console.log("subSounds() started");
    mySound = new Sound("submarine-diving-alarm-daniel_simon.mp3");
    mySound.play();
}

function Sound(srcFile){
    console.log("sound function started with " + srcFile + " source file");
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.sound.setAttribute("preload","audio");
    //this.sound.setAttribute("controls","none");
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

function aniSounds(){
    console.log("subSounds() started");
    mySound = new Sound("Animaniacs___Noel.mp3");
    mySound.play();
}

function alarmSounds(){
    //this is the sound component for the alarm
    console.log("alarmSounds() started");
    //we choose the file for the alarm
    mySound = new Sound("dixie-horn_daniel-simion.mp3");
    mySound.play();
}

//code for 12-1 putting it all together
function startTimer(){
    console.log("startTimer() started");
    //get the values for vthe number of alarm steps
    var steps = document.getElementById("secInput").value;
    //set up the countdown timer
    var currtime = steps;
    for(var i = 0; i <= steps; i++)
        setTimeout(function(){
            if(currtime != 0){
                document.getElementById("timeLeft").innerHTML = currtime;
            } else {
                document.getElementById("timeLeft").innerHTML = "time is up!";
                alarmSounds();
            }   
            console.log(currtime);
            currtime--;
        }, i*1000)
}

function alarmSounds(){
    //this is the sound component for the alarm
    console.log("alarmSounds() started");
    //we choose the file for the alarm
    mySound = new Sound("dixie-horn_daniel-simion.mp3");
    mySound.play();
}