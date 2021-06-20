const htmlDocument = document.querySelector("html");


// only linux
if (navigator.userAgent.indexOf("Linux") != -1) {
	console.log("Linux");
	htmlDocument.style.fontSize = "20px";
}
//  (ios)

// only windows
if (navigator.userAgent.indexOf("Win") != -1) {
	console.log("Windows");
	htmlDocument.style.fontSize = "16px";
}

// only Mac
if (navigator.userAgent.indexOf("Mac") != -1) {
	console.log("Mac");
}

// only Android
if (navigator.userAgent.indexOf("Android") != -1) {
	console.log("Android");
	htmlDocument.style.fontSize = "18px";
}

// only ios
if (navigator.userAgent.indexOf("like Mac") != -1) {
	console.log("ios");
}