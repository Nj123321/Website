var annflag = true;

function changeAnn() {
    var image = document.getElementById('announce');
    if (annflag) {
        image.src = "../images/WorkExperience/Adobe/annDesign.png";
    } else {
        image.src = "../images/WorkExperience/Adobe/announcement.png";
    }
    annflag = !annflag;
}
