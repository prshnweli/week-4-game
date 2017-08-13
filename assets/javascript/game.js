


// create four buttons with images


// add click event to buttons that adds to variable. 
var counter = 0;
var winNumber = 0;
var loseNumber = 0;

	// display random number at top between 19 - 120

	

	randomNumber = Math.floor(Math.random() * 102) + 19
	console.log(randomNumber);

	$("#guess").text(randomNumber);


// buttons are set to random value between 1-12

	var crystalNumber =[];
	for (i=0; i<4; i++) {
		crystalNumber.push(Math.floor(Math.random() * 12)+1);
	}

// removes duplicates https://stackoverflow.com/questions/5836833/create-a-array-with-random-values-in-javascript
//didnt work
	function shuffle(array) {
	  var tmp, current, top = array.length;
	  if(top) while(--top) {
	    current = Math.floor(Math.random() * (top + 1));
	    tmp = array[current];
	    array[current] = array[top];
 	   array[top] = tmp;
 	 }
	  return array;
	}

	crystalNumber = shuffle(crystalNumber);

	console.log(crystalNumber);


function startGame() {
	counter =0;
	$("#score").text(counter);

	// display random number at top between 19 - 120


	randomNumber = Math.floor(Math.random() * 102) + 19
	console.log(randomNumber);

	$("#guess").text(randomNumber);


// buttons are set to random value between 1-12

	var crystalNumber =[];
	for (i=0; i<4; i++) {
		crystalNumber.push(Math.floor(Math.random() * 12)+1);
	}

// removes duplicates https://stackoverflow.com/questions/5836833/create-a-array-with-random-values-in-javascript
//didnt work
	function shuffle(array) {
	  var tmp, current, top = array.length;
	  if(top) while(--top) {
	    current = Math.floor(Math.random() * (top + 1));
	    tmp = array[current];
	    array[current] = array[top];
 	   array[top] = tmp;
 	 }
	  return array;
	}

	crystalNumber = shuffle(crystalNumber);

	console.log(crystalNumber);

	

};

//Add image to button
  for (var i = 0; i < crystalNumber.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/7a5d7935-6177-4be8-8b72-2a95ad2bcdfe/3b295cc9-7b5e-412f-8b1f-8547edd8e66b.jpg");
    imageCrystal.attr("data-crystalvalue", crystalNumber[i]);
    $("#crystals").append(imageCrystal);
  }

//Click event

$(".crystal-image").on("click", function() {


    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    $("#score").text(counter);
    //alert("New score: " + counter);

    if (counter === randomNumber) {
      alert("You win!");
      winNumber++;
      $("#win").text(winNumber);
      startGame();
    }

    else if (counter >= randomNumber) {
      alert("You lose!!");
      loseNumber++;
      $("#lose").text(loseNumber);
      startGame();
    }

  });
