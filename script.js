
// Function to get the thumnail 

var imagedata = '';
function ytdownload(){
  const a = document.getElementById("linkinput").value;
  const b = a.trim();

  //if input field is empty;
  if(b==""){
    alert("Enter the Video URL");
    return;
  }

  const splitURL = a.toString().split("/");

  const imagePreview = document.querySelector(".img-box");
  if(splitURL[2]=="www.youtube.com"){
      const splitURL1 = a.toString().split('watch?v=');
      
      // Creating image url
      const imageURL = "https://img.youtube.com/vi/";
      const imageID = splitURL1[1];
      const imageQuality = "/maxresdefault.jpg";

      var imgPATH = imageURL + imageID + imageQuality;
      var downloadURL = "url("+""+ imgPATH +""+")";
 
      // Preview the Image
      imagePreview.style.backgroundImage = downloadURL;

      imagedata = imgPATH;
  }

  // unhide the download btn
  var ok = document.querySelector(".dbtn");
  ok.style.display = "block";
  
}


// To download the thumbnail
function downlodethumb(){
    window.open(imagedata);
}



















