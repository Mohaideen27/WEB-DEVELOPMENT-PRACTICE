let box = document.querySelector(".box").innertext;
box.style.color = "red";

let div = document.createElement("div");
div.innerHTML = "I have been inserted div";
div.setAttribute("class", "created");
document.querySelector(".container").append(div);

document.querySelector(".container").outerHTML;
document.querySelector(".container").tagName;
document.querySelector(".container").nodeName;
document.querySelector(".container").textContent;
document.querySelector(".box").hidden = true;
document.querySelector(".box").innerHTML = "hey i am sameer";
document.querySelector(".box").hasAttribute("style");
document.querySelector(".box").getAttribute("style");
document.querySelector(".box").setAttribute("style", "display:inline");
document.querySelector(".box").attributes;
document.querySelector(".box").removeAttribute("sytle");
document.designMode = "on";
document.querySelector(".container").dataset;
document.querySelector(".box").dataset;
