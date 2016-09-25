var slideIndex = 0;
var isStopped = false;
showSlides();

function showSlides(){
	if(!isStopped){
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
}

function currentSlide(clicked_id){
	isStopped = true;
	var sliderButtons = document.getElementsByClassName("sliderButton");
	var sliderButton = document.getElementById(clicked_id);
	var slide = document.getElementsByClassName("slide" + clicked_id);
	var slides = document.getElementsByClassName("mySlides");
	for(i = 0; i<slides.length; i++){
			slides[i].style.display = "none";
	}
	for(i = 0; i<sliderButtons.length; i++){
			sliderButtons[i].className = sliderButtons[i].className.replace(" active", "");
	}
	slide[0].style.display = "block";
	sliderButton.className += " active";
}

function mouseOut(){
	isStopped = false;
	console.log("out");
}