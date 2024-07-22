$(".asphalt").on("click", function(e){
    e.preventDefault();
    var image = document.getElementById('materialPlot');
    if (image.src.match("../images/Projects/housing/materialPlot.png")) {
        image.src = "../images/Projects/housing/asphaltPlot.png";
    } else {
        image.src = "../images/Projects/housing/materialPlot.png";
    }
});

$(".gravel").on("click", function(e){
    e.preventDefault();
    var image = document.getElementById('materialPlot');
    if (image.src.match("../images/Projects/housing/materialPlot.png")) {
        image.src = "../images/Projects/housing/gravelPlot.png";
    } else {
        image.src = "../images/Projects/housing/materialPlot.png";
    }
});

$(".other").on("click", function(e){
    e.preventDefault();
    var image = document.getElementById('materialPlot');
    if (image.src.match("../images/Projects/housing/materialPlot.png")) {
        image.src = "../images/Projects/housing/otherPlot.png";
    } else {
        image.src = "../images/Projects/housing/materialPlot.png";
    }
});

$(".tile").on("click", function(e){
    e.preventDefault();
    var image = document.getElementById('materialPlot');
    if (image.src.match("../images/Projects/housing/materialPlot.png")) {
        image.src = "../images/Projects/housing/tilePlot.png";
    } else {
        image.src = "../images/Projects/housing/materialPlot.png";
    }
});

$(".shake").on("click", function(e){
    e.preventDefault();
    var image = document.getElementById('materialPlot');
    if (image.src.match("../images/Projects/housing/materialPlot.png")) {
        image.src = "../images/Projects/housing/shakePlot.png";
    } else {
        image.src = "../images/Projects/housing/materialPlot.png";
    }
});

$(".slate").on("click", function(e){
    e.preventDefault();
    var image = document.getElementById('materialPlot');
    if (image.src.match("../images/Projects/housing/materialPlot.png")) {
        image.src = "../images/Projects/housing/slatePlot.png";
    } else {
        image.src = "../images/Projects/housing/materialPlot.png";
    }
});