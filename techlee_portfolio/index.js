



function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);


$("document").ready(function(){
  toggleSlide();
});

function toggleSlide(){
  $(".projectTitle").click(function(){
    
    $(this).closest(".projectBlock").find(".projectList").stop().slideToggle();

    // $(".projectList").slideToggle();
  });
}