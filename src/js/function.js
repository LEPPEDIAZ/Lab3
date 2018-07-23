function addItem(){
    var ul = document.getElementById("dynamic-list");
    var checkBox = document.getElementById("myCheck");
    checkbox.setAttribute('id',checkbox.value);
    checkbox.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(checkbox);
}

function removeItem(){
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var item = document.getElementById(candidate.value);
    ul.removeChild(item);
}