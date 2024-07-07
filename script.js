function removecolor() {
  var one = document.getElementById("colorselect");
  one.remove(one.selectedIndex);
}
function changecolor() {
  document.getElementById("txtcolorchange").style.color =
    document.getElementById("colorpick").value;
}

function getNames() {
  var form = document.getElementById("form1");
  var fname = form.elements["fname"].value;
  var lname = form.elements["lname"].value;
  alert("First name: " + fname + "\nLast name: " + lname);
}

function displayRandomImage() {
  var images = [
    {
      src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg&quot",
      width: "240",
      height: "160",
    },
    {
      src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg&quot",
      width: "320",
      height: "195",
    },
    {
      src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg&quot",
      width: "500",
      height: "343",
    },
  ];

  var randomIndex = Math.floor(Math.random() * images.length);
  var selectedImage = images[randomIndex];

  var imgElement = document.getElementById("randomImage");
  imgElement.src = selectedImage.src;
  imgElement.width = selectedImage.width;
  imgElement.height = selectedImage.height;
}
