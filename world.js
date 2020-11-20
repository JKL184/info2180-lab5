window.onload = function () {
	var countrybtn = document.getElementById("lookup");
	var citybtn = document.getElementById("citylookup");
	countrybtn.addEventListener("click", Za_Warudo);
	citybtn.addEventListener("click", CitySearch);
};

function Za_Warudo(e) {
	e.preventDefault();
	var request = new XMLHttpRequest();
	let submission = document.getElementById("country").value;
	var url = "world.php?country=" + submission;
	request.onreadystatechange = function () {
		if (request.readyState == XMLHttpRequest.DONE) {
			if (request.status == 200) {
				var resp = request.responseText;
				var msg = document.getElementById("result");
				msg.innerHTML = resp;
				console.log(resp);
			} else {
				console.log("Something went wrong with request");
			}
		}
	};
	request.open("GET", url, true);
	request.send();
}

function CitySearch(e) {
	console.log("click");
	var request = new XMLHttpRequest();
	e.preventDefault();
	let submission = document.getElementById("country").value;
	var url = "world.php?country=" + submission + "&context=cities";
	console.log(url);
	request.onreadystatechange = function () {
		if (request.readyState == XMLHttpRequest.DONE) {
			if (request.status == 200) {
				var resp = request.responseText;
				var msg = document.getElementById("result");
				msg.innerHTML = resp;
				console.log(resp);
			} else {
				console.log("Something went wrong with request");
			}
		}
	};
	request.open("GET", url, true);
	request.send();
}
