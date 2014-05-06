function replaceStuff(){
	var inputBox = document.getElementById("stuffs");
	var resultSpiel = document.getElementById("result");
	var text = inputBox.value;
	resultSpiel.innerHTML=""; //blank it!
	
	var x = "";
	var clippings = "";
	var urls = "";
	var works = "";
	workLength = 0;
		
	var findWholeClipping = /(.*\s-\s.*\nhttp.*|January.*|February.*|March.*|April.*|May.*|June.*|July.*|August.*|September.*|October.*|November.*|December.*)/g //Finds a whole clipping
	var findClipping = /(.*\s-\s.*|January.*|February.*|March.*|April.*|May.*|June.*|July.*|August.*|September.*|October.*|November.*|December.*)/ //Finds the work-title thing (or the date)
	var findURL = /http.*/g //Finds the URL
	var findWork = /(.*?)\s-\s/ //Finds the hyphen separator
		
	var wholes = text.match(findWholeClipping); //put clippings in array
	console.log(wholes); //debugging yay
	for (var i=0; i<wholes.length; i++) {
		clippings = wholes[i].match(findClipping); //put clipping details in array
		urls = wholes[i].match(findURL); //put url in array
		works = wholes[i].match(findWork); //put work in array
		clippingLength = clippings[0].length; // To catch the clipping length
		if (works != null){ //If this is null it means it's found a date, not a clipping...
			workLength = works[0].length; // To catch the work length
			x = "*" + works[0] + "[" + urls[0] + " " + clippings[0].substring(workLength,clippingLength) + "]\n";
		} else { //...So it should just paste the date in verbatim
			workLength = 0;
			x = "\n;" + clippings[0] + "\n";
		}
		resultSpiel.innerHTML+=(x);
	}
}