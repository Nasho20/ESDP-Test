function addUser() {
  var users = document.getElementById('users');
  var name = document.getElementById('name').value;
  var list = document.getElementById('list').value;
  // var profileImage = document.getElementsByClassName('profile-image').value
  var entry = document.createElement('li');
  entry.appendChild(document.createTextNode(name + ' ' + list));
  users.appendChild(entry);
  return false;
}

// var myNodelist = document.getElementsByTagName("UL");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onClick = function () {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }


// <form id="myform">
//   <h2>Add a User:</h2>
//   <input id="username" type="text" name="username" placeholder="name">
//     <input id="email" type="email" name="email" placeholder="email">
//       <button onclick='return addUser();' type="submit">add user</button>
//     </form>


//     <h2>UsersList:</h2>
//     <ul id="users"></ul>

// function pushRules(list){
//     var rules = "";

//     var w1 = document.getElementById('name').value;
//     var w = w1+'-->'+w2;
//     var li = document.createElement("li");
//     var rule = document.createTextNode(w);
//     li.appendChild(rule);

//     var removeBtn = document.createElement("input");
//     removeBtn.type = "button";
//     removeBtn.value = "Remove";
//     removeBtn.onclick = remove;
//     li.appendChild(removeBtn);
//     document.getElementById("list").appendChild(li);
// }

// function remove(e) {
//   var el = e.target;
//   el.parentNode.remove();
// }