// var list = document.getElementById('users');
//     function addUser(){
//         var username =document.getElementById('name').value;
//         var entry = document.createElement('li');
//         entry.appendChild(document.createTextNode(name + ''));
//         list.appendChild(entry);}

function pushRules(list){
    var rules = "";

    var w1 = document.getElementById('name').value;
    var w = w1+'-->'+w2;
    var li = document.createElement("li");
    var rule = document.createTextNode(w);
    li.appendChild(rule);

    var removeBtn = document.createElement("input");
    removeBtn.type = "button";
    removeBtn.value = "Remove";
    removeBtn.onclick = remove;
    li.appendChild(removeBtn);
    document.getElementById("list").appendChild(li);
}

function remove(e) {
  var el = e.target;
  el.parentNode.remove();
}