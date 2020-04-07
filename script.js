var input = document.getElementById("task-input");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li);
    input.value = "";

    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    li.prepend(checkBox);
    checkBox.onclick = underlineParent;

    var removeItem = document.createElement("button");
    removeItem.appendChild(document.createTextNode("Remove"));
    li.appendChild(removeItem);
    removeItem.onclick = removeParent;
}

function underlineParent(event) {
    event.target.parentNode.classList.toggle("done");
}

function removeParent(evt) {
    evt.target.parentNode.remove();
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);