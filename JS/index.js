const springImage = document.getElementById("spring");

springImage.addEventListener("click", () => {
  // Change the image source to your animated GIF
  springImage.src = "../Images/Springs.gif" + new Date().getTime();
});
