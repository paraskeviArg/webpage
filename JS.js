var colorBG = "dark";
var currentPic = 0;
var date = 0;
var photos = ["angela.jpg", "times.jpg", "enemies.png","whiterose.jpg","joey.jpg","elliot_mother.png"];
var desc = ["Angela", "Elliot", "Elliot's enemies","Whiterose, Chinese minister of State Security", "Elliot's mysterious ally","Elliot's mother"];

function display() {
	var x = document.getElementById("explained");
	x.style.fontSize = "large";
	if (x.style.display === "none") {
		document.getElementById("showButton").innerText = "Hide";
		x.style.display = "block";
	} else {
		document.getElementById("showButton").innerText = "Click here to learn more about Dissociative identity disorder.";
		x.style.display = "none";
	}
}

function showDate(page) {
	//Changes for the first 5 days of the week, for the weekend go to nextPicture()
	var d = new Date();
	//document.getElementById("date").innerHTML = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
	date = d.getDay();
	document.getElementById("date").innerHTML = date;
	if(page==1) {
		if(date==2) {
			document.getElementById('elliot_ecorp').src="elliot_ecorp2.jpg";
		} else if(date==3) {
			document.getElementById('elliot_darlene').src="elliot_darlene2.jpg";
		} 
	} else if(page==2) {
		if(date==4) {
			document.getElementById('elliot_father').src="elliot_father2.jpg";
		} else if(date==5) {
			document.getElementById('fsociety').src="fsociety_2.png";
		} 
	} 
}

function changeBG(page) {
	if(colorBG == "dark") {
		colorBG = "light";
		document.body.style.backgroundColor = "#F5F5F5";
		document.body.style.color = "black";
		document.getElementsByClassName("menu")[0].style.backgroundColor = "#808080";
		document.getElementById("changeBG").style.color = 'black';
		document.getElementById("changeBG").style.backgroundColor = "white";
		document.getElementById("changeBG").innerText = "Use Dark Font"
		document.getElementById("row").style.backgroundColor = '#DCDCDC';
		if(page<4) {
			document.getElementById("next").style.color = 'black';
		}
		if(page>1) {
			document.getElementById("previous").style.color = 'black';
		}
		if(page == 3) {
			document.getElementById("showButton").style.backgroundColor = "black";
		}
	} else if(colorBG == "light"){
		colorBG = "dark";
		document.body.style.backgroundColor = "black";
		document.body.style.color = "white";
		document.getElementsByClassName("menu")[0].style.backgroundColor = "#4d0000";
		document.getElementById("changeBG").style.color = 'white';
		document.getElementById("changeBG").style.backgroundColor = "black";
		document.getElementById("changeBG").innerText = "Use Light Font";
		document.getElementById("row").style.backgroundColor = 'black';
		if(page<4) {
			document.getElementById("next").style.color = 'white';
		}
		if(page>1) {
			document.getElementById("previous").style.color = 'white';
		}
		if(page == 3) {
			document.getElementById("showButton").style.backgroundColor = "#4d0000";
		}
	}
}

function nextPicture() {
	//on monday you get two extra photos
	currentPic++;
	var d = new Date();
	date = d.getDay();
	var max = 4;
	if(date==6) {
		max = 6;
	}
	if(currentPic==max) {
		currentPic = 0;
	}
	document.getElementById('slideImage').src=photos[currentPic];
	document.getElementById('picD').innerHTML=desc[currentPic];
}

function hover() {
	if(colorBG == "dark") {
		document.getElementById("changeBG").style.backgroundColor = '#FFFAF0';
		document.getElementById("changeBG").style.color = 'black';
	} else if(colorBG == "light") {
		document.getElementById("changeBG").style.backgroundColor = 'black';
		document.getElementById("changeBG").style.color = 'white';
	}
}
function leave() {
	if(colorBG == "dark") {
		document.getElementById("changeBG").style.backgroundColor = 'black';
		document.getElementById("changeBG").style.color = 'white';
	} else if(colorBG == "light") {
		document.getElementById("changeBG").style.backgroundColor = '#FFFAF0';
		document.getElementById("changeBG").style.color = 'black';
	}
}
	
	
