function buildPhotos() {
    var image_list;
    $.getJSON("public/images.json", function(data) {
	image_list = data;

	for (image in image_list["images"]) {
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

function animatePhotos() {
    var photos = $(".my-photos");
    var i = 0;
    var id = setInterval(frame, 25);
    
    photos.hide();

    function frame() {
	if (i == photos.length) {
	    clearInterval(id);
	} else {
	    $(photos[i]).fadeToggle(800, "swing");
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
	animatePhotos();
	break;
    case "#shorts":

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
    }

    panelGo(name);
}

function showFilter(name, element) {
    var current = $(".activePanel");
    console.log(current[1]);
    console.log(element[0]);

    if (current[1] != element[0]) {
	element.addClass("activePanel");
    }
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

    buildPhotos();
});
