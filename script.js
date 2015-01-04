function replaceStuff(){
	var inputBox = document.getElementById("stuffs");
	var resultSpiel = document.getElementById("result");
	var text = inputBox.value;
	resultSpiel.innerHTML=""; //blank it!
	
	var x = "";
	var clippings = "";
	var urls = "";
	var works = "";
	var workLength = 0;
	var clippingLength;
		
	// Finds a whole clipping
	var findWholeClipping = /(.*\s-\s.*\nhttp.*|January.*|February.*|March.*|April.*|May.*|June.*|July.*|August.*|September.*|October.*|November.*|December.*)/g;
	
	// Finds the work-title thing (or the date)
	var findClipping = /(.*\s-\s.*|^January.*|^February.*|^March.*|^April.*|^May.*|^June.*|^July.*|^August.*|^September.*|^October.*|^November.*|^December.*)/m;
	
	// Finds the URL
	var findURL = /http.*/g;
  
	// Finds the hyphen separator
	var findWork = /(.*?)\s-\s/;
	
	// put clippings in array
	var wholes = text.match(findWholeClipping);
	console.log(wholes); //debugging yay
	for (var i = 0; i < wholes.length; i++) {
		// put clipping details in array
		clippings = wholes[i].match(findClipping); 
		// put url in array
		urls = wholes[i].match(findURL);
		// put work in array
		works = wholes[i].match(findWork);
		// To catch the clipping length
		clippingLength = clippings[0].length; 
		// If this is null it means it's found a date, not a clipping...
		if (works !== null) {
  			// To catch the work length
			workLength = works[0].length; 
			x = "*" + works[0] + "[" + urls[0] + " " + clippings[0].substring(workLength, clippingLength) + "]\n";
		} else { 
  			// ...So it should just paste the date in verbatim
			workLength = 0;
			x = "\n;" + clippings[0] + "\n";
		}
		resultSpiel.innerHTML += x;
	}
}