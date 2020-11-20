window.onload = function () {
	var searchbtn = document.getElementById("lookup");
	searchbtn.addEventListener("click", Za_Warudo);
};
var request = new XMLHttpRequest();
function Za_Warudo(e) {
	e.preventDefault();
	let submission = document.getElementById("country").value;
	var url = "world.php?country=" + submission;
	request.onreadystatechange = Sending;
	request.open("GET", url, true);
	request.send();
}

function Sending() {
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
}
