/**
* This function retrieves a list of photos
* from public/images.json, and builds photo
* tiles for the #photos panel.
*/
function buildPhotos() {
    var image_list;

    // Get images.json
    $.getJSON("public/images.json", function(data) {
	image_list = data;

	for (image in image_list["images"]) {
	    // Create new photo tile for each image
	    var tile = document.createElement("img");
	    tile.setAttribute("src", "images/" + image_list["images"][image]);
	    tile.style.height = "50%";
	    tile.style.width = "50%";
	    
	    $("#photos").append(tile);
	}
	
	$("#photos img").addClass("my-photos");
	$(".my-photos").hide();
    });
}

/**
* This function creates previews of
* writings to show in the writing tiles.
* This is done by simply taking the first 100 characters
*/
function getWriting(link) {
    var data;
    
    $.ajax({
	url: link,
	data: data,
	success: function(data) { return data },
	dataType: "text"
    });
}


/**
* This function retrieves a list of writings
* from public/writings.json, and builds photo
* tiles for the #shorts panel.
*/
function buildWritings() {
    var writings_list;
    var content;

    // Get images.json
    $.getJSON("public/writings.json", function(data) {
	writings_list = data;

	for (writing in writings_list["writings"]) {
	    // Create new tile for each writing
	    content = getWriting("writings/" + writings_list["writings"][writing]);
	    $("#shorts").append("<div>" + content.substring(0,100) + "</div>");
	}
	
	$("#shorts div").addClass("my-writings");
	$(".my-writings").hide();
    });
}

/**
* This function animates the photo tiles.
* Photos will appear on the screen in a sequential
* order filling two columns in the panel.
*/
function animateTiles(type) {
    if (type == "photos") {
	var tiles = $(".my-photos");
    } else if (type == "writings") {
	var tiles = $(".my-writings");
    }
    
    var i = 0;
    var id = setInterval(frame, 25);
    
    tiles.hide();

    function frame() {
	if (i == tiles.length) {
	    clearInterval(id);
	} else {
	    $(tiles[i]).fadeToggle(800, "swing");
	    i++;
	}
    }
}


/**
* This function builds all components of the panel
* and populates it with content.
*/
function panelGo(name) {
    switch(name) {
    case "#photos":
	// reanimate photo tiles every time user
	// opens panel
	animateTiles("photos");
	break;
    case "#shorts":
	// reanimate writing tiles every time user
	// opens panel
	animateTiles("writings");
    default:
	// do nothing, there is no default panel
    }
}

/**
* This function displays the panel selected
* from the sidebar.
*/
function showPanel(name, element) {
    $(".panel-link").removeClass("activePanel");
    $(".major-panel").hide();
 
    $(name).fadeToggle(800, "swing");

    if (name != "#home") {
	element.addClass("activePanel");
	console.log("test1");
    }

    //panelGo(name);
}


/*
* When the document is ready, create the following 
* event handlers and execute the following functions.
*/
$(document).ready(function() {
    showPanel("#home", $("#billboard"));

    $(".panel-link").on("click", function() {
	showPanel($(this).children("a").attr("href"), $(this));
    });

    $("#billboard").on("click", function() {
	showPanel($(this).attr("href"), $(this));
    });

    //buildPhotos();
    //buildWritings();
});
