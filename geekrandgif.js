var GIFRANDURL = "https://api.giphy.com/v1/gifs/random?api_key=jxnqM4NGQnEqev6Qinj9RyJSO2024eM0&tag=geek&rating=G&fmt=json";

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", GIFRANDURL);
oReq.send();

function template(url) {
  var html = "<img style='width:100%; heigth:100%;' src='"+url+"'/>";
  return html;
}

function reqListener () {
  var jsonr = JSON.parse(this.response);
  console.log(jsonr, jsonr.data.image_original_url);
  document.body.innerHTML = template(jsonr.data.image_original_url);
  console.log('hola estoy')
}
