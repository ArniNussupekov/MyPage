function load() {

   var ratut = $(".icon"), degree = 0, timer;
    rotate();
    function rotate() {
      ratut.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});  
      ratut.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});                      
        timer = setTimeout(function() {
            ++degree; rotate();
        },10);
    }
}



let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}


function previousSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    
    let slides = document.getElementsByClassName("item");
    
 
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
    
    for (let slide of slides) {
        slide.style.display = "none";
    }
   
    slides[slideIndex - 1].style.display = "block";    
}


function changeToHunt(){

    document.getElementById("sliderZ").style.display = "block";

          document.getElementById("image1").src = "assets/img/Hobby/h1.jpg";   
          document.getElementById("sText1").innerHTML = "Hunting";

          document.getElementById("image2").src = "assets/img/Hobby/h3.jpg";
          document.getElementById("sText2").innerHTML = "Hunting";

          document.getElementById("image3").src = "assets/img/Hobby/h4.jpg";
          document.getElementById("sText3").innerHTML = "Hunting";

          document.getElementById("image4").src = "assets/img/Hobby/h5.jpg";
          document.getElementById("sText4").innerHTML = "Hunting";
     

}

function changeToJapan(){

    document.getElementById("sliderZ").style.display = "block";

          document.getElementById("image1").src = "assets/img/Hobby/j1.jpg";   
          document.getElementById("sText1").innerHTML = "日本";

          document.getElementById("image2").src = "assets/img/Hobby/j2.jpg";
          document.getElementById("sText2").innerHTML = "日本";

          document.getElementById("image3").src = "assets/img/Hobby/j3.jpg";
          document.getElementById("sText3").innerHTML = "日本";

          document.getElementById("image4").src = "assets/img/Hobby/j4.jpg";
          document.getElementById("sText4").innerHTML = "日本";
     

}

function changeToSnow(){

    document.getElementById("sliderZ").style.display = "block";

          document.getElementById("image1").src = "assets/img/Hobby/s1.jpg";   
          document.getElementById("sText1").innerHTML = "SnowBoard";

          document.getElementById("image2").src = "assets/img/Hobby/s2.jpg";
          document.getElementById("sText2").innerHTML = "SnowBoard";

          document.getElementById("image3").src = "assets/img/Hobby/s3.jpg";
          document.getElementById("sText3").innerHTML = "SnowBoard";

          document.getElementById("image4").src = "assets/img/Hobby/s4.jpg";
          document.getElementById("sText4").innerHTML = "SnowBoard";
}


function changeToVolley(){

    document.getElementById("sliderZ").style.display = "block";

          document.getElementById("image1").src = "assets/img/Hobby/v1.jpg";   
          document.getElementById("sText1").innerHTML = "Volleyball";

          document.getElementById("image2").src = "assets/img/Hobby/v2.jpg";
          document.getElementById("sText2").innerHTML = "Volleyball";

          document.getElementById("image3").src = "assets/img/Hobby/v3.jpg";
          document.getElementById("sText3").innerHTML = "Volleyball";

          document.getElementById("image4").src = "assets/img/Hobby/v4.jpg";
          document.getElementById("sText4").innerHTML = "Volleyball";
}

function changeToCS(){

    document.getElementById("sliderZ").style.display = "block";

          document.getElementById("image1").src = "assets/img/Hobby/c1.png";   
          document.getElementById("sText1").innerHTML = "CS:GO";

          document.getElementById("image2").src = "assets/img/Hobby/c2.jpg";
          document.getElementById("sText2").innerHTML = "CS:GO";

          document.getElementById("image3").src = "assets/img/Hobby/c3.jpg";
          document.getElementById("sText3").innerHTML = "CS:GO";

          document.getElementById("image4").src = "assets/img/Hobby/c4.jpg";
          document.getElementById("sText4").innerHTML = "CS:GO";
}

function changeToDBD(){

    document.getElementById("sliderZ").style.display = "block";

          document.getElementById("image1").src = "assets/img/Hobby/d1.jpg";   
          document.getElementById("sText1").innerHTML = "Dead By Daylight";

          document.getElementById("image2").src = "assets/img/Hobby/d2.jpg";
          document.getElementById("sText2").innerHTML = "Dead By Daylight";

          document.getElementById("image3").src = "assets/img/Hobby/d3.jpg";
          document.getElementById("sText3").innerHTML = "Dead By Daylight";

          document.getElementById("image4").src = "assets/img/Hobby/d4.jpg";
          document.getElementById("sText4").innerHTML = "Dead By Daylight";
}

function exitSlidez(){
    document.getElementById("sliderZ").style.display = "none";
}


function elementInView(elem){
    return $(window).scrollTop() < $(elem).offset().top + $(elem).height() ;
  };
  
  $(window).scroll(function(){
    if (elementInView($('#conSection')))
    //fire at will!
    document.getElementById("formA").style.display = "none";
    $('#formA').show(1000);

    document.getElementById("formA2").style.display = "none";
    $('#formA2').show(1000);
  });

 
  $(document).ready(function() {
    document.getElementById("main").style.display = "none";
    $('#main').show(1000);

    document.getElementById("mPhot").style.display = "none";
    $('#mPhot').show(1000);

    document.getElementById("ACDC").style.display = "none";
    $('#ACDC').show(1000);
});

  