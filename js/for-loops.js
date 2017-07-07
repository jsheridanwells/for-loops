//select buttons to assign functions
var byTenButton = document.getElementById('by-ten-button');
var byDivButton = document.getElementById('by-div-button');
var arrItButton = document.getElementById('arr-it-button');
var objItButton = document.getElementById('obj-it-button');

//select <p>s for adding output
var byTenOutput = document.getElementById('by-ten-out');
var byDivOutput = document.getElementById('by-div-out');
var arrItOutput = document.getElementById('arr-it-out');
var objItOutput = document.getElementById('obj-it-out');

//variable to hold output content
var content;

//functions to...
//Increment by 10
function incrementByTen(start, end) {
	content = '';
	for (var i = start; i <= end; i += 10) {
		content += i + '<br>';
	}
	byTenOutput.innerHTML = content;
}

//Decrement by division
function decrementByDivision(start, divisor) {
	content = '';
	for (var i = start; i >= 1; i = i / 2) {
		content += i + '<br>';
	}
	byDivOutput.innerHTML = content;
}


//Array iteration


//Object iteration

//bind functions to buttons and add arguments
byTenButton.onclick = function() {
	incrementByTen(5, 250);
};

byDivButton.onclick = function() {
	decrementByDivision(4096, 2);
}
