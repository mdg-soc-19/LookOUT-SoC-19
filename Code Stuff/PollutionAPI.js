var data = null;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://air-quality.p.rapidapi.com/current/airquality?lon=28.6665&lat=77.2333");
xhr.setRequestHeader("x-rapidapi-host", "air-quality.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "abff33a3c8msh6af28fab7643e9cp10482bjsn88ab038a786d");

xhr.send(data);
