/* popup write us */ 

var writeUs = document.querySelector(".popup-write-us");
var popupWriteUs = document.querySelector(".modal-content-write-us");
var closeWriteUs = document.querySelector(".close-write-us");
var FormWriteUs = document.querySelector(".modal-content-write-us form");	
var yourName = document.querySelector("[name=name]");
var yourEmail = document.querySelector("[name=e-mail]");
var yourMessage = document.querySelector("[name=textarea]");

writeUs.addEventListener("click", function(evt) {
	evt.preventDefault();	
	popupWriteUs.classList.add("modal-show");
	yourName.focus();
});

closeWriteUs.addEventListener("click", function(evt) {
	evt.preventDefault();	
	popupWriteUs.classList.remove("modal-show");
	popupWriteUs.classList.remove("modal-error");
});

FormWriteUs.addEventListener("submit", function(evt) {
	if (!yourName.value || !yourEmail.value || !yourMessage.value) {
		evt.preventDefault();
		popupWriteUs.classList.add("modal-error");		
	} 		
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popupWriteUs.classList.contains("modal-show")) {
			popupWriteUs.classList.remove("modal-show");
			popupWriteUs.classList.remove("modal-error");
		}	
	}
});

/* popup map */

var map = document.querySelector(".popup-map");
var popupMap = document.querySelector(".modal-content-map");
var closeMap = document.querySelector(".close-map");

map.addEventListener("click", function(evt) {
	evt.preventDefault();	
	popupMap.classList.add("modal-show");
	closeMap.focus();
});

closeMap.addEventListener("click", function(evt) {
	evt.preventDefault();	
	popupMap.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popupMap.classList.contains("modal-show")) {
			popupMap.classList.remove("modal-show");
		}	
	}
});

/* services */

var btnDelivery = document.querySelector(".services-main-btn .btn-delivery");
var btnGuarantee = document.querySelector(".services-main-btn .btn-guarantee");
var btnCredit = document.querySelector(".services-main-btn .btn-credit");
var servicesDelivery = document.querySelector(".services-main-delivery");
var servicesGuarantee = document.querySelector(".services-main-guarantee");
var servicesCredit = document.querySelector(".services-main-credit");

btnDelivery.addEventListener("click", function(evt) {
	evt.preventDefault();
	btnDelivery.classList.add("btn-checked");
	btnGuarantee.classList.remove("btn-checked");
	btnCredit.classList.remove("btn-checked");
	servicesDelivery.classList.remove("services-none");
	servicesGuarantee.classList.add("services-none");
	servicesCredit.classList.add("services-none");
});

btnGuarantee.addEventListener("click", function(evt) {
	evt.preventDefault();
	btnDelivery.classList.remove("btn-checked");	
	btnGuarantee.classList.add("btn-checked");
	btnCredit.classList.remove("btn-checked");
	servicesDelivery.classList.add("services-none");
	servicesGuarantee.classList.remove("services-none");
	servicesCredit.classList.add("services-none");
});

btnCredit.addEventListener("click", function(evt) {
	evt.preventDefault();
	btnDelivery.classList.remove("btn-checked");	
	btnGuarantee.classList.remove("btn-checked");
	btnCredit.classList.add("btn-checked");
	servicesDelivery.classList.add("services-none");
	servicesGuarantee.classList.add("services-none");
	servicesCredit.classList.remove("services-none");
});

/* Слайдер */

var sliderFirst = document.querySelector(".slider-first");
var sliderSecond = document.querySelector(".slider-second");
var moveSlideLeft = document.querySelector(".slider-second .move-slide-btn-left");
var moveSlideRight = document.querySelector(".slider-first .move-slide-btn-right");

moveSlideRight.addEventListener("click", function(evt) {
	evt.preventDefault();
	sliderFirst.classList.add("slider-none");	
	sliderSecond.classList.remove("slider-none");
})

;moveSlideLeft.addEventListener("click", function(evt) {
	evt.preventDefault();
	sliderFirst.classList.remove("slider-none");	
	sliderSecond.classList.add("slider-none");
});