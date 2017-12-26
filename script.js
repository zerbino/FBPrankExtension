var newLogo = document.createElement("i");
newLogo.setAttribute("id", "new_prank_logo");
newLogo.innerHTML = 'facebouk';
newLogo.setAttribute("class", "img fb_logo");

var oldLogo = document.getElementsByClassName("fb_logo")[0];
oldLogo.setAttribute("id", "old_fb_logo")
var parent = oldLogo.parentNode;
parent.setAttribute("class", "logo_parent")
parent.appendChild(newLogo);

