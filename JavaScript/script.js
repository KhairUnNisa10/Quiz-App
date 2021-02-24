// 1. Access input HTML element
// 2. Get value of HTML input element
// 3. Access <h1> Element
// 4. Change content of <h1> Element

function greetings(){
	//1. Access input HTML element >>> Query Selector
	let fname = document.querySelector('#fname')
	console.log(fname);

	// let lname = document.querySelector('#lname')
	// console.log(lname);

	//2. Get Value of HTML input element
	let fValue = fname.value;
	console.log(fValue);

	// let lValue = lname.value;
	// console.log(lValue);

	//3. Access <h1> Element
	let greetings = document.querySelector('h1 > span');
	console.log(greetings);

	//4. Change content of <h1> element
	greetings.innerHTML = fValue;

	let header = document.getElementById("header");
	var home = document.getElementById("home-btn");
	if (header.style.display === "none") {
		header.style.display = "block";
	} else {
		header.style.visibility = "hidden";
		header.style.display = "flex";
		home.style.display = "block";
		home.style.display = "flex";
	}
}