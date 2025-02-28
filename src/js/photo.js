window.onload = function() {
    loadImages();
  };

function loadImages(){
  document.getElementById("cb_chat").addEventListener("change", function() {
    console.log("change chat");
    document.getElementById("galleryChat").style.display = this.checked ? "block" : "none";
  });

  document.getElementById("cb_chien").addEventListener("change", function() {
    console.log("change chien");
    document.getElementById("galleryChien").style.display = this.checked ? "block" : "none";
  });

  document.getElementById("cb_avantapres").addEventListener("change", function() {
    console.log("change av-ap");
    document.getElementById("galleryAvantApres").style.display = this.checked ? "block" : "none";
  });
}
