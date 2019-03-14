/*
* When the document is ready, create the following 
* event handlers.
*/
$(document).ready(function() {
    showPanel("#home", $("#billboard"));
    
    $(".panel-link").on("click", function() {
	showPanel($(this).attr("href"), $(this));
    });

    $("#billboard").on("click", function() {
	showPanel($(this).attr("href"), $(this));
    });
});

/**
* This function displays the panel selected
* from the sidebar.
*/
function showPanel(name, element) {
    console.log(name);
    console.log(element);
    $(".panel-link").removeClass("activePanel");
    $(".major-panel").hide();
    $(name).show();

    if (name != "#home") {
	element.addClass("activePanel");
    }
}
