function setMap() {
    var map;
    for(var i = 0; i < 200; i ++) {
        for(var j = 0; j < 200; j ++) {
            map[i][j] = 1;
        }
    }
    return map;
}

function printMap(map) {
    for(var i = 0; i < 200; i ++) {
        $("#pagina").append("<p>");
        for(var j = 0; j < 200; j ++) {
            if(map[i][j] == 0) {
                $("#pagina").append(" ");
            } else {
                $("#pagina").append("X");
            }
        }
        $("#pagina").append("<p>");
    }
    
}

$(document).ready(function() {
    var map = setMap();
    printMap(map);
});