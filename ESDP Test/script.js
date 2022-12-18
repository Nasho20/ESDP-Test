// function addUser() {
//   // var showProfile = document.getElementsByClassName("profile");
//   var users = document.getElementByClassName('users');
//   var name = document.getElementById('name').value;
//   var list = document.getElementById('list').value;
//   var entry = document.createElement('li');
//   // var entryPhoto = document.createElement('photo');
//   // entryPhoto.appendChild(document.createTextNode(profile));
//   entry.appendChild(document.createTextNode(name + ' ' + list));
//   // showProfile.appendChild(entryPhoto);
//   users.appendChild(entry);
//   return false;
// }




function addUser() {
  var users = document.getElementsByClassName("users");
  var name = document.getElementById("name").value;
  var list = document.getElementById('list').value;
  var entry = document.createElement('li');
  entry.classList.add('userRow');
  entry.classList.add("user");
  const newDiv = document.createElement("div");
  const userName = document.createElement("p");
  const userPosition = document.createElement("p");
  userName.classList.add('username');
  userPosition.classList.add('userposition');

  newDiv.classList.add("close");
  const userImage = document.createElement("img");
  userImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png");
  userImage.setAttribute("class", "userImage");

  const newContent = document.createTextNode("X");
  newDiv.appendChild(newContent);
  entry.appendChild(userImage);
  userName.appendChild(document.createTextNode(name));
  userPosition.appendChild(document.createTextNode(list));
  entry.appendChild(userName);
  entry.appendChild(userPosition);

  entry.appendChild(newDiv);
  users[0].appendChild(entry);

}

function filterUsers() {
  var input, filter, ul, li, p, i, txtValue;
  input = document.getElementById('name');
  filter = input.value.toUpperCase();
  var ul = document.getElementsByClassName('user');
  var li = document.getElementsByTagName('userRow');

  for (i = 0; i < ul.length; i++) {
    p = li[i].getElementsByClassName('username');
    txtValue = p.txtContent || p.innerText;

    var filters = filter.split(" ")
    filter = filters.filter(f => f.length)

    var shouldAppear = true
    filters.forEach(filt => {
      shouldAppear = shouldAppear && txtValue.toUpperCase().includes(filt)
    })
    li[i].style.display = (shouldAppear || filters.length === 0) ? "" : "none";


    if (!filter) {
      console.log('')
      // } else {
      // console.log('is not')
    }
  }
}
// function myFunction() {
//   console.log('here')
// }

// Search button
// function myFunction() {
//   // Declare variables
//   var input, filter, ul, li, a, i, txtValue;
//   input = document.getElementById('myInput');
//   filter = input.value.toUpperCase();
//   ul = document.getElementById("myUL");
//   li = ul.getElementsByTagName('li');

//   // Loop through all list items, and hide those who don't match the search query
//   for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("a")[0];
//     txtValue = a.textContent || a.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//   }
// }


// function addUser() {
//   var items = document.getElementById('name').value
//   var text = document.createTextNode(items)
//   var newItem = document.createElement("li");
//   newItem.appendChild(text)
// }
// // var profile = document.getElementsByClassName('profile').style.display = 'block';
// var clickButton = document.getElementById('button').style.display = 'none';

// var myList = document.getElementsByTagName('li');
// var i;
// for (i = 0; i < myList.length; i++) {
//   var span = document.createElement("span");
//   var txt = document.createTextNode('\u00D7');
//   span.className = "close";
//   span.appendChild(txt);
//   myList[i].appendChild(span);
// }

// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onClick = function () {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// function addUser() {
//   var li = document.createElement("li");
//   var inputName = document.getElementById("name").value;
//   var t = document.createTextNode(inputName);
//   li.appendChild(t);

//   document.getElementById("name").value = "";

//   var span = document.createElement("span");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onClick = function () {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }

// }


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