var toggled=false;

function toggleMenu() {
  if (toggled == false) {
    var topBar = SVG.get("top-bar");
    var middleBar = SVG.get("middle-bar");
    var bottomBar = SVG.get("bottom-bar");

    middleBar.animate(50).attr({ 'fill-opacity': 0})

    topBar.animate(50).rotate(45,0,0).move(2.5, -2.4);
    bottomBar.animate(50).rotate(-45, 25, 14).move(6, 0);

    document.getElementById("menu").style.marginTop = "0px";
  } else {
    var topBar = SVG.get("top-bar");
    var middleBar = SVG.get("middle-bar");
    var bottomBar = SVG.get("bottom-bar");

    middleBar.animate(50).attr({ 'fill-opacity': 1})

    topBar.animate(50).rotate(0, 0, 0).move(0, 0);
    bottomBar.animate(50).rotate(0, 25, 14).move(0, 14);
    document.getElementById("menu").style.marginTop = "-270px";
  }

  toggled = !toggled;
}
