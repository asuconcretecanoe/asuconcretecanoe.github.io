
var imageList = [];
var imageLength;
var imageTiles;
var tileHeader = ["<div class=\"tile is-4 is-vertical is-parent\">", "</div>"]
const columnCount = 3;

document.addEventListener("DOMContentLoaded", function(){
    imageTiles = d3.select('#imageTiles');
      // Load both files before doing anything else
      Promise.all([d3.csv('website_images/website_images.csv')
                ])
              .then(function(values){

        imageList = values[0];
        imageLength = imageList.length;
        loadTeamMembers();
      })
});

function loadTeamMembers() {
    teamTiles = document.getElementById("imageTiles");
    var limit = imageLength / columnCount;
    var i = 1;
    var photo = 0;
    var photoLimit = 1;
    var html = "";

    for (i = 1; i < 4; i++) {
        photoLimit = limit * i;
        html += tileHeader[0];
        while (photo < photoLimit) {
            var person = imageList[photo];
            html += getTileHTML(person.image_names);
            photo+=1;
        }
        if (i != 3) {
            html += tileHeader[1];
        }
    }
    while (photo < imageLength.length) {
        var person = imageList[photo];
        html += getTileHTML(person.image_name);
        photo+=1;
    }

    html += tileHeader[1];
    teamTiles.innerHTML = html;
}

function getTileHTML(photo) {
    var imageName = "website_images\\"+ photo + "";

    return "<div class=\"tile is-child is-shadowless box\"><figure class=\"image is-1by1\" style=\"overflow: hidden;\"><img src="+ imageName + " onmousedown=\"toggleModal(this.src);\"></figure></div>"
}

function toggleModal(image) {
    var imageName = "website_images\\"+ image + "";

    if (image != null) {
        var imageName = document.getElementById("imageNameP");
        imageName.innerHTML = "<img src="+ image + " alt=\"Concrete Canoe Image\">"
    }

    var imageModal = document.getElementById("imageModal");
    if (imageModal.style.display === "none") {
        imageModal.style.display = "block";
    } else {
        imageModal.style.display = "none";
    }
}
