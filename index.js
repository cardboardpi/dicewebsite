/**
*/
(function(){
	window.onload = function(){
		let rollButton = document.getElementById("roll");
		rollButton.onclick = roll;

		let roll2Button = document.getElementById("roll2");
		roll2Button.onclick = rollMultiple;

		let clearButton = document.getElementById("clear");
		clearButton.addEventListener("click", function(){
			removeFrom("dice");
		});

		let clear2Button = document.getElementById("clear2");
		clear2Button.addEventListener("click", function(){
			removeFrom("die");
			removeFrom("total");
		});
	};
	/**
	*/
	function rollMultiple(){
		removeFrom("die");
		removeFrom("total");
		let amount = document.getElementById("diceamount").value;
		let resultString = "";
		let min = document.getElementById("min2").value;
		let max = document.getElementById("max2").value;
		let sum = 0;

		for (let i = 0; i < amount; i++){
			if (i === amount - 1){
				let result = randomRange(min, max)
				sum += result;
				resultString += result.toString();
			}
			else{
				let result = randomRange(min, max)
				sum += result;
				resultString += result.toString() + ", ";
			}
		}
		writeTo(resultString, "die");
		writeTo("Total: " + sum.toString(), "total");
	}
	/**
	*/
	function roll(){
		removeFrom("dice")
		let min = document.getElementById("min").value;
		let max = document.getElementById("max").value;
		let result = randomRange(min, max);
		writeTo(result, "dice");

	}
	/**
	*/
	function randomRange(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	/**
	*/
	function writeTo(input, itemID){
		let item = document.getElementById(itemID);
		item.innerHTML = input;
	}
	/**
	*/
	function removeFrom(itemID){
		let item = document.getElementById(itemID);
		item.innerHTML = "";
	}
})();
