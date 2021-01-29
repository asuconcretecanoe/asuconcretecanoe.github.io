var teamList = [];
var teamLength;
var teamTiles;
var tileHeader = ["<div class=\"tile is-4 is-vertical is-parent\">", "</div>"]
const columnCount = 3;

document.addEventListener("DOMContentLoaded", function(){
    teamTiles = d3.select('#teamTiles');
      // Load both files before doing anything else
      Promise.all([d3.csv('team.csv')
                ])
              .then(function(values){

        teamList = values[0];
        teamLength = teamList.length;
        loadTeamMembers();
      })
});

function loadTeamMembers() {
    teamTiles = document.getElementById("teamTiles");
    var limit = teamLength / columnCount;
    var i = 1;
    var photo = 0;
    var photoLimit = 1;
    var html = "";

    for (i = 1; i < 4; i++) {
        photoLimit = limit * i;
        html += tileHeader[0];
        while (photo < photoLimit) {
            var person = teamList[photo];
            html += getTileHTML(person.name, person.pronouns, person.role, person.photo);
            photo+=1;
        }
        if (i != 3) {
            html += tileHeader[1];
        }
    }
    while (photo < teamLength.length) {
        var person = teamList[photo];
        html += getTileHTML(person.name, person.pronouns, person.role, person.photo);
        photo+=1;
    }

    html += tileHeader[1];
    teamTiles.innerHTML = html;
}

function getTileHTML(name, pronouns, position, photo) {
    if (!pronouns) {
        pronouns = "";
    } else {
        pronouns = ` (${pronouns})`;
    }
    return "<div class=\"tile is-child box is-shadowless\"><h1 class=\"title is-2\">" + name + pronouns +"</h1><h3 class=\"subtitle\">" + position + "</h3><figure  class=\"image is-1by1\" style=\"overflow: hidden;\"><img src="+ photo +"></figure></div>"
}
