// suprisingly not as horrible looking as it used to be
function makeInvis(){ // makes all unlockables invisible
	document.getElementById("recipeBookSection").className = "invisible";
	document.getElementById("craftingStation").className = "invisible";
	document.getElementById("logDiv").className = "invisible";
	document.getElementById("currentlyStats").className = "invisible";
	document.getElementById("shopSection").className = "invisible";
	document.getElementById("darkArts").className = "invisible";
	document.getElementById("Automation").className = "invisible";
}
function gameStageRender() { //game unlocks
	var alreadyOutput = true;
	switch(gameStage){
		case 0:
			milestone("$5.50")
			console.log("0")
			break;
		case 6:
			if(alreadyOutput){milestone("That's everything right now! More coming soon.");
			document.getElementById("alertsBox").innerHTML = "Ah, the age of automation!";
			alreadyOutput = !alreadyOutput}
			document.getElementById("Automation").className = "column";	
			setTimeout(function() {autoMakerLoop();}, timeSpeed*1000)
		case 5:
			if(alreadyOutput){milestone("$150.00");
            document.getElementById("alertsBox").innerHTML = "Hmmm... I wonder what you can use excess ingredients for....";
			alreadyOutput = !alreadyOutput}
			document.getElementById("darkArts").className = "column";	
		case 4:
            if(alreadyOutput){milestone("$35.00");
            document.getElementById("alertsBox").innerHTML = "Shop unlocked! I wonder what's next?";
			alreadyOutput = !alreadyOutput}
			document.getElementById("shopSection").className = "column";
		case 3:
			if(alreadyOutput){milestone("$25.00")
			document.getElementById("alertsBox").innerHTML = "Reaching $25 would get you a shop. Or so they say.";
			alreadyOutput = !alreadyOutput}
			document.getElementById("recipeBookSection").className = "column";
			console.log("3")
		case 2:
			if(alreadyOutput){milestone("$15.00")
			document.getElementById("alertsBox").innerHTML = "Would be nice to have $15 for a recipe book..";
			alreadyOutput = !alreadyOutput}
			document.getElementById("logDiv").className = "column";
			console.log("2")
		case 1:
			if(alreadyOutput){milestone("Create a sandwich")}
			console.log("1")
			document.getElementById("currentlyStats").className = "column";
			document.getElementById("craftingStation").className = "column";

	}
}
function milestone(txt){document.getElementById("unlock").innerHTML = txt;}