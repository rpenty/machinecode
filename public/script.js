$(document).ready(function() {
    setInterval('getUpdates(useFile)',500);    
});

function getUpdates(filename) {
	$.getJSON(filename, function(json) {
		squareClear()
	    squareSet(json, 5);
	});
}

function squareSet(data, rows) {

    var counter = 0;
	
    for (var i = 0; i < data.length; i++) {

		var obj = data[i];

        if (i % rows == 0) {
            counter++;

            var columnDiv = document.createElement("div");
            columnDiv.id = "columnDiv" + counter;
            
            document.getElementsByTagName("section")[0].appendChild(columnDiv);
        }
    		
        var div = document.createElement("div");
        div.style.backgroundColor = "rgb(" + obj.r + "," + obj.g + "," + obj.b + ")";
        document.getElementById("columnDiv" + counter).appendChild(div);

	}
}

function squareClear() {
	document.getElementsByTagName("section")[0].innerHTML = "";
}

