main = document.getElementById("main");
main.remove();
const newEl = document.createElement("newHeader");
document.body.append(newEl)
const element = document.createElement("h1");
element.setAttribute("h1", "Victory");
newEl.append(element);
element.textContent = "YOUR-NAME is the champion";


body.append(newEl);

//document.h1.append(newHeader);