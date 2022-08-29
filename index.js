function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

const mainFullpage = new fullpage("#fullpage", {
  anchors: [
    "page1",
    "page2",
    "page3",
    "page4",
    "page5",
    "page6",
    "page7",
    "page8",
  ],
  sectionsColor: [
    "#FFFFFF",
    "#FF976A",
    "#FFFFFF",
    "#F2F2F2",
    "#FFFFFF",
    "#000000",
    "#000000",
    "#000000",
  ],
  navigation: true,
  controlArrowColor: "#000000",
  // responsiveWidth: 1000,
});
