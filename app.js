// classList - shows/gets all classes
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    // console.log(links.classList);
    // console.log(links.classList.contains("random"));
    // console.log(links.classList.contains("links"));

    // if and else act as a toggle seperately preforming the action of adding 
    // or removing the the css class
if (links.classList.contains('show-links')) {
    links.classList.remove('show-links');
} else {
  links.classList.add('show-links');  
}
// this works the same as above, except in one line. toggle does the work 
// essentially of hte .add and .remove
links.classList.toggle('toggle-links')
})
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
