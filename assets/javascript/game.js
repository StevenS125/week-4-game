	// Number generated to guess
	var number = Math.floor((Math.random() * 101) + 19);
	// Generates each crystal value
	var blue = Math.floor((Math.random() * 12) + 1);
	var red = Math.floor((Math.random() * 12) + 1);
	var yellow = Math.floor((Math.random() * 12) + 1);
	var green = Math.floor((Math.random() * 12) + 1);
	// Setting initial values to zero
	var guessTotal = 0;
	var wins = 0;
	var losses = 0;
	var currentStreak = 0;
	var longestStreak = 0;
	// Displays the ourNumber on page to guess
	$(".ourNumber").html(number);
	// On click events for each crystal
	$(".bluecrystal").click(function() {
		update(blue);
	});
	$(".redcrystal").click(function() {
		update(red);
	});
	$(".yellowcrystal").click(function() {
		update(yellow);
	});
	$(".greencrystal").click(function() {
		update(green);
	});
	// Enables dropDown menu to be activated/hidden
	$(".dropDown").click(function() {
		$(".instructions").toggle("slow");
	})
	// reset function called when game won or lost
	function reset() {
		// Calls new number for player to guess
		number = Math.floor((Math.random() * 101) + 19);
		// Displays ourNumber on page
		$(".ourNumber").html(number);
		// Generates new values for the crystals
		blue = Math.floor((Math.random() * 12) + 1);
		red = Math.floor((Math.random() * 12) + 1);
		yellow = Math.floor((Math.random() * 12) + 1);
		green = Math.floor((Math.random() * 12) + 1);
		// Resets the total guess to 0
		guessTotal = 0;
		// Displays the guess total
		$(".currentNumber").html(guessTotal);
	};
	// This function updates the user's total guess 
	function update(value) {
		// Increases the total guess by the value of the chosen crystal
		guessTotal += value;
		// Removes the old total and replaces it with the new total.
		$(".currentNumber").empty();
		$(".currentNumber").append(guessTotal);
		// Checks to see if you win or lose
		if (guessTotal > number) {
			// Adds a loss
			losses++;
			// Displays updated losses
			$("#lossesdisplay").html(losses);
			// Calls the reset function to reset the game
			reset();
			// Updates longest streak if it gets broken
			if (currentStreak > longestStreak) {
				longestStreak = currentStreak;
			};
			// Resets current streak
			currentStreak = 0
			// Displays the updated streak information
			$("#currentstreakdisplay").html(currentStreak);
			$("#longeststreakdisplay").html(longestStreak);
		} else if (guessTotal == number) {
			// Adds a win
			wins++;
			// Displays the updated wins
			$("#winsdisplay").html(wins);
			// Calls the reset function to reset the game
			reset();
			// Adds 1 to the current streak
			currentStreak++;
			// Displays the current streak
			$("#currentstreakdisplay").html(currentStreak);
			// Updates longest streak if it gets broken
			if (currentStreak > longestStreak) {
				longestStreak = currentStreak;
			};
			// Displays the updated streak information
			$("#longeststreakdisplay").html(longestStreak);
		};
	};