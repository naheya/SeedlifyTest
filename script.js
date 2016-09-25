var slideIndex = 0;
showSlides();

function showSlides(){
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var sliderButton = document.getElementsByClassName("sliderButton");
	for(i = 0; i<slides.length; i++){
		slides[i].style.display = "none";
	}
	slideIndex++;
	if(slideIndex > slides.length){
		slideIndex = 1;
	}
	for(i = 0; i<sliderButton.length; i++){
		sliderButton[i].className = sliderButton[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	sliderButton[slideIndex-1].className += " active";
	setTimeout(showSlides, 2000);
}

// document.getElementsByClassName("sliderButton").addEventListener("click", showCurrentSlide);

// function showCurrentSlide(){

// }