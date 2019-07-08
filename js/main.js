'use strict'

var i;
var x;
var menuItems = document.getElementsByClassName("menu-item");

function clickLink(link) {
    for (i = 0; i < menuItems.length; i++){
        menuItems[i].className = "menu-item"
    }
    document.getElementById(link).className = "menu-item active"
};
function clickMainLink() {
    for (i = 0; i < menuItems.length; i++){
        menuItems[i].className = "menu-item"
    }
}

let cart = [],
		lsCart;

function contains(arr, elem) {
   return arr.indexOf(elem) != -1;
};