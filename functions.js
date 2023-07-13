//asigns id to values of events

function style_me() {
    document.getElementById("event1-name").textContent = "Event 1";
    document.getElementById("event1-location").textContent = "Location 1";
    document.getElementById("event1-date").textContent = "Date 1";

    document.getElementById("event2-name").textContent = "Event 2";
    document.getElementById("event2-location").textContent = "Location 2";
    document.getElementById("event2-date").textContent = "Date 2";

    document.getElementById("event3-name").textContent = "Event 3";
    document.getElementById("event3-location").textContent = "Location 3";
    document.getElementById("event3-date").textContent = "Date 3";
}
// styling button
function style_me() {
    var upcomingEvents = document.getElementsByClassName("upcoming-event");
// when pressed, it will change to the following
    for (var i = 0; i < upcomingEvents.length; i++) {
        var event = upcomingEvents[i];
        event.style.fontSize = "30px";
        event.style.color = "#FFFFFF";
        event.style.fontFamily = "Verdana, sans-serif";
        event.style.border = "2px dotted #FF9F1C";
        event.style.borderRadius = "10px";
        event.style.backgroundColor = "#CBF3F0";

        // Change text color for nested p elements
        var ptextcolor = event.getElementsByTagName("p");
        for (var j = 0; j < ptextcolor.length; j++) {
            ptextcolor[j].style.color = "#FFBF69";
        }
    }
}
// step 8 articles 
// creates a div in div
var containerDiv = document.createElement("div");
containerDiv.className = "container3";
document.body.appendChild(containerDiv);
// creates a header called articles in div
var header = document.createElement("h2");
header.textContent = "Articles";
containerDiv.appendChild(header);
// creates 3 div
for (var i = 0; i < 3; i++) {
    var div = document.createElement("div");
    div.className = "article";
    containerDiv.appendChild(div);
// creates 3 articles and description
    var articleName = "Article " + (i + 1);
    var description = "Insert Article Description " + (i + 1);
// assigns above into h3 and p
    var nameElement = document.createElement("h3");
    nameElement.textContent = articleName;
    div.appendChild(nameElement);

    var descriptionElement = document.createElement("p");
    descriptionElement.textContent = description;
    div.appendChild(descriptionElement);
}




function updatefav() {
    var sname = document.getElementById("scientist1").value;
 
    document.getElementById("favsci1").innerHTML = sname;
}

function addScientist() {
    var inputScientist = document.getElementById("scientist");
    var favsci = document.getElementById("favsci");
    favsci.value = inputScientist.value;
}