onload = function () {
  var input;
  input = document.getElementById('input');
  input.onchange = onchange;
};

var onchange = function (event) {
  var file;
  var image;
  var output;
  var reader;
  output = document.getElementById('output');
  file = input.files[0];
  reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = function () {
    image = reader.result;
    document.getElementById('image').src = image;
    output.innerText = OCRAD(document.getElementById('image'));
  };
};
