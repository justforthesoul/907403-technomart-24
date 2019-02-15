/* popup add product */ 

var addProduct = document.querySelector(".perforators-catalog-list");
var popupAddProduct = document.querySelector(".modal-content-add-product");
var closeAddProduct = document.querySelector(".close-add-product");	

addProduct.addEventListener("click", function(evt) {
	if (evt.target.classList.contains("active-buy")) {
	popupAddProduct.classList.add("modal-show");
	closeAddProduct.focus();	
	}	
});

closeAddProduct.addEventListener("click", function(evt) {
	evt.preventDefault();	
	popupAddProduct.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popupAddProduct.classList.contains("modal-show")) {
			popupAddProduct.classList.remove("modal-show");
		}	
	}
});

