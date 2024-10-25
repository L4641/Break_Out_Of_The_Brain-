let ra = 0;
let pons = 0;
let medulla = 0;
let thalamus = 0;
let cerebellum = 0;
let amygdala = 0;
let hippocampus = 0;
let pituitaryGland = 0;
let hypothalamus = 0;
let hemisphere = 0;
let lobes = 0;
let language = 0;

function closeAll() {
	console.log("hi: " + "hello!");
	if (ra % 2 == 1) {ra = ra - 1;}
	if (pons % 2 == 1) {pons = pons - 1;}
	if (medulla % 2 == 1) {medulla = medulla - 1;}
	if (thalamus % 2 == 1) {thalamus = thalamus - 1;}
	if (cerebellum % 2 == 1) {cerebellum = cerebellum - 1;}
	if (amygdala % 2 == 1) {amygdala = amygdala - 1;}
	if (hippocampus % 2 == 1) {hippocampus = hippocampus - 1;}
	if (pituitaryGland % 2 == 1) {pituitaryGland = pituitaryGland - 1;}
	if (hypothalamus % 2 == 1) {hypothalamus = hypothalamus - 1;}
	if (hemisphere % 2 == 1) {hemisphere = hemisphere - 1;}
	if (lobes % 2 == 1) {lobes = lobes - 1;}
	if (language % 2 == 1) {language = language - 1;}

}
function openRF() {
	ra = ra + 1;
	console.log("openRF: " + ra);
}
function openPons() {
	pons = pons + 1;
	console.log("openPons: " + pons);
}
function openMedulla() {
	medulla = medulla + 1;
	console.log("openMedulla: " + medulla);
}
function openThalamus() {
	thalamus = thalamus + 1;
	console.log("openThalamus: " + thalamus);
}
function openCerebellum() {
	cerebellum = cerebellum + 1;
	console.log("openCerebellum: " + cerebellum);
}

function checkBS() {
	if (ra % 2 == 1) {document.getElementById("RF").style.display = "block";}
	else {document.getElementById("RF").style.display = "none";}
	console.log("RA: " + ra);
	if (pons % 2 == 1) {document.getElementById("pons").style.display = "block";}
	else {document.getElementById("pons").style.display = "none";}
	console.log("Pon: " + pons);
	if (medulla % 2 == 1) {document.getElementById("medulla").style.display = "block";}
	else {document.getElementById("medulla").style.display = "none";}
	console.log("Medulla: " + medulla);
	if (thalamus % 2 == 1) {document.getElementById("thalamus").style.display = "block";}
	else {document.getElementById("thalamus").style.display = "none";}
	console.log("Thalamus: " + thalamus);
	if (cerebellum % 2 == 1) {document.getElementById("cerebellum").style.display = "block";}
	else {document.getElementById("cerebellum").style.display = "none";}
	console.log("Cerebellum: " + cerebellum);
	if (ra % 2 == 1 || pons % 2 == 1 || medulla % 2 == 1 || thalamus % 2 == 1 || cerebellum % 2 == 1) {
		document.getElementById("storyline").style.marginTop = "-37.2%";
		document.getElementById("timer").style.marginTop = "3.75%";
	} else {
		document.getElementById("storyline").style.marginTop = "-25%";
		document.getElementById("timer").style.marginTop = "16%";
	}
}

function openAmygdala() {
	amygdala = amygdala + 1;
	console.log("openAmygdala: " + amygdala);
}
function openHippocampus() {
	hippocampus = hippocampus + 1;
	console.log("openHippocampus: " + hippocampus);
}
function openPituitaryGland() {
	pituitaryGland = pituitaryGland + 1;
	console.log("openPituitaryGland: " + pituitaryGland);
}
function openHypothalamus() {
	hypothalamus = hypothalamus + 1;
	console.log("openHypothalamus : " + amygdala);
}

function checkLS() {
	if (amygdala % 2 == 1) {document.getElementById("amygdala").style.display = "block";}
	else {document.getElementById("amygdala").style.display = "none";}
	console.log("amygdala: " + amygdala);
	if (hippocampus % 2 == 1) {document.getElementById("hippocampus").style.display = "block";}
	else {document.getElementById("hippocampus").style.display = "none";}
	console.log("hippocampus: " + hippocampus);
	if (pituitaryGland % 2 == 1) {document.getElementById("pituitaryGland").style.display = "block";}
	else {document.getElementById("pituitaryGland").style.display = "none";}
	console.log("pituitaryGland: " + pituitaryGland);
	if (hypothalamus % 2 == 1) {document.getElementById("hypothalamus").style.display = "block";}
	else {document.getElementById("hypothalamus").style.display = "none";}
	console.log("Hypothalamus: " + hypothalamus);
	if (amygdala % 2 == 1) {
		document.getElementById("timer").style.marginTop = "3.725%";
	} else if (hippocampus % 2 == 1) {
		document.getElementById("timer").style.marginTop = "1.68%";
	} else if (pituitaryGland % 2 == 1) {
		document.getElementById("timer").style.marginTop = "1.68%";
	} else if(hypothalamus % 2 == 1) {
		document.getElementById("timer").style.marginTop = "3.725%";
	} else {
		document.getElementById("timer").style.marginTop = "16%";
	}
}

function openHemisphere() {
	hemisphere = hemisphere + 1;
	console.log("openHemisphere: " + hemisphere);
}
function openLobes() {
	lobes = lobes + 1;
	console.log("openLobes: " + lobes);
}
function openLanguage() {
	language = language + 1;
	console.log("openLanguage : " + language);
}

function getInputValueBrainStem() {
	let input = document.getElementById("myInput").value;
	if (input == "PRIMAL") {
		document.getElementById("openLimbic").style.display = "block";
		document.getElementById("feedback").innerHTML = "Correct, you are ready to move on!";
	} else {
		document.getElementById("feedback").innerHTML = "Incorrect, please try again.";
	}
}

function getInputValueLimbic() {
	let input = document.getElementById("myInput").value;
	if (input == "MOOD") {
		document.getElementById("openLimbic").style.display = "block";
		document.getElementById("feedback").innerHTML = "Correct, you are ready to move on!";
	} else {
		document.getElementById("feedback").innerHTML = "Incorrect, please try again.";
	}
}

/*let hLock = false;
let pLock = false;
let lLock = false;*/

function getInputValueH() {
	let input = document.getElementById("myInput").value;
	console.log("H Value: " + input);
	if (input == "ABEHCDFG") {
		sessionStorage.setItem("hLock", true);
		console.log("hLock: " + sessionStorage.getItem("hLock"));
		console.log("pLock: " + sessionStorage.getItem("pLock"));
		console.log("lLock: " + sessionStorage.getItem("lLock"));
		document.getElementById("rlh").style.visibility = "visible";
		document.getElementById("rlh").style.fontSize = "115%";
		document.getElementById("rlh").innerHTML = "<b><u>Correct!</u></b> The <u>right hemisphere</u> " + 
			"controls creativity, spatial ability, artistic, and musical. The <u>left hemisphere</u> controls " + 
			"speech, comprehension, arithmetic, and writing. You have unlocked this puzzle! You can return " + 
			"to the main room and continue unlocking the rest of the puzzles.";
	} else {
		document.getElementById("rlh").style.visibility = "visible";
		document.getElementById("rlh").style.fontSize = "105%";
		document.getElementById("rlh").innerHTML = "<u><b>Incorrect</u></b>, try again! Rmember to enter the " +
			"letters for the left hemisphere first and then the letters for the right hemisphere using all " +
			"caps and no spaces.";
	}
	if (sessionStorage.getItem("hLock") && sessionStorage.getItem("pLock") && sessionStorage.getItem("lLock")) {
		document.getElementById("back").href = "lobes2.html";
	}
}
function getInputValueP() {
	let input = document.getElementById("myInput").value;
	console.log("P Value: " + input);
	if (input == "CBGFEA") {
		sessionStorage.setItem("pLock", true);
		console.log("hLock: " + sessionStorage.getItem("hLock"));
		console.log("pLock: " + sessionStorage.getItem("pLock"));
		console.log("lLock: " + sessionStorage.getItem("lLock"));
		document.getElementById("description").innerHTML = "<b><u>Correct!</u></b> You have unlocked this " + 
			"puzzle! You can return to the main room and continue unlocking the rest of the puzzles.";
	} else {
		document.getElementById("description").innerHTML = "<u><b>Incorrect</b></u>, try again! Remeber to " +
			"enter the corresponding letters of each term in the order given by the numbers on the image and " +
			"enter in all caps.";
	}
	if (sessionStorage.getItem("hLock") && sessionStorage.getItem("pLock") && sessionStorage.getItem("lLock")) {
		document.getElementById("back").href = "lobes2.html";
	}
}
function getInputValueL() {
	let input = document.getElementById("myInput").value;
	console.log("L Value: " + input);
	if (input == "LANG") {
		sessionStorage.setItem("lLock", true);
		console.log("hLock: " + sessionStorage.getItem("hLock"));
		console.log("pLock: " + sessionStorage.getItem("pLock"));
		console.log("lLock: " + sessionStorage.getItem("lLock"));
		document.getElementById("description").innerHTML = "<b><u>Correct!</u></b> You have unlocked this " + 
			"puzzle! You can return to the main room and continue unlocking the rest of the puzzles.";
		document.getElementById("ac").style.display = "inline-block";
		document.getElementById("vc").style.display = "inline-block";
		document.getElementById("wa").style.display = "inline-block";
		document.getElementById("ba").style.display = "inline-block";
		document.getElementById("ag").style.display = "inline-block";
		document.getElementById("labelImage").style.display = "none";
	} else {
		document.getElementById("description").innerHTML = "<u><b>Incorrect</b></u>, try again! Remeber to " +
			"use the morse code key on the left to translate the morse code in the audio file to its message" + 
			" and enter the message in all caps to solve this puzzle!";
	}
	if (sessionStorage.getItem("hLock") && sessionStorage.getItem("pLock") && sessionStorage.getItem("lLock")) {
		document.getElementById("back").href = "lobes2.html";
	}
}









/*
sessionStorage.removeItem("timeLeft");
sessionStorage.removeItem("intervalId");
*/

let timeLeft = sessionStorage.getItem("timeLeft");

if (timeLeft) {
    startCountdown(parseInt(timeLeft, 10));
} else {
    let countDownDate = new Date().getTime() + 15 * 60 * 1000;
    startCountdown(countDownDate);
}

function startCountdown(countDownDate) {
    let x = setInterval(function () {
        let now = new Date().getTime();

        let distance = countDownDate - now;

        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (minutes < 10 && seconds < 10) {
			document.getElementById("timer").innerHTML = "Time Left: " + "0" + minutes + 
			":" + "0" + seconds;
		} else if (minutes < 10) {
			document.getElementById("timer").innerHTML = "Time Left: " + "0" + minutes + ":" 
			+ seconds;
		} else if (seconds < 10) {
			document.getElementById("timer").innerHTML = "Time Left: " + minutes + ":" + "0" 
			+ seconds;
		} else {
			document.getElementById("timer").innerHTML = "Time Left: " + minutes + ":" + seconds;
		}

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "Sadly, you have died. You can continue to solve " +
            	"these puzzles, but you will never wake up again.";
        }
    }, 1000);

    sessionStorage.setItem("timeLeft", countDownDate.toString());

    sessionStorage.setItem("intervalId", x.toString());
}

