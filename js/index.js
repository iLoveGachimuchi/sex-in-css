var Dick = document.getElementById("Dick");

var MaxHeight = 120;

var CurrentHeight = 0;
var CurrentAnimation = 0;

var AnimationBack = setInterval(Back, 1)
var AnimationForward = setInterval(Forward, 0.01);

Dick.style.top = "348px";

function ToPixel(value) {
  return value + "px";
}

function FromPixel(pixel) {
  return parseInt(pixel.replace("px", "").replace(" ", ""));
}

function Back() {
  if (CurrentAnimation != 1) return;
  if (CurrentHeight <= 0) {
    CurrentAnimation = 0;
    return;
  }
  else {
    let top = FromPixel(Dick.style.top);
    CurrentHeight -= 2;
    Dick.style.top = ToPixel(top - 2);
  }
}

function Forward() {
  if (CurrentAnimation != 0) return;
  if (CurrentHeight >= MaxHeight) {
    CurrentAnimation = 1;
    return;
  }
  else {
    let top = FromPixel(Dick.style.top);
    CurrentHeight += 1;
    Dick.style.top = ToPixel(top + 1);
  }
}