var colorData = genRGBJSON(500);

function genRGBJSON(num) {
	var rgb = "[";

	var numColors = num;

	for (var i = 1; i <= numColors; i++) {
		rgb += "{ \"r\":" + genColorVal() + ", \"g\":" + genColorVal() + ", \"b\":" + genColorVal() + " }";
		if (i < numColors) { rgb += ",\n"; }
	}

	rgb += "]";

	return JSON.parse(rgb);
}

function genColorVal() {
	return Math.round(Math.random() * 255);
}