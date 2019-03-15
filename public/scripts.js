function buildPhotos() {
    var image_list;
    $.getJSON("./images.json", function(data) {
	image_list = data;
	console.log(image_list);
    });
}

/**
* This function builds all components of the panel
* and populates it with content.
*/
function buildPanel(name) {
    switch(name) {
    case "#photos":
	buildPhotos();
	break;
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

    buildPanel(name);
}

/*
* When the document is ready, create the following 
* event handlers.
*/
$(document).ready(function() {
    showPanel("#home", $("#billboard"));
    
    $(".panel-link").on("click", function() {
	showPanel($(this).children("a").attr("href"), $(this));
    });

    $("#billboard").on("click", function() {
	showPanel($(this).attr("href"), $(this));
    });
});
