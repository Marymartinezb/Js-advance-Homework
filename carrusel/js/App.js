// Utility functions
function log(arg){ console.log(arg); }
function out(arg){ document.getElementById("debug").innerHTML = arg; }
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




// 3D JS,CSS Carousel
var Carousel = function(){
	// Var defs and init
	var me = this; // to scope

	// Configuration variables
	var carouselW = 700;
	var carouselH = 400;
	var itemW = 100;
	var itemH = 200;
	var noOfItemsToAdd = 10;

	// Working variables (DO NOT MODIFY)
	var carousel = document.getElementById("carousel");
	var itemContainer = carousel.getElementsByClassName("item-container")[0];
	var items = [];
	var deg = 0;
	var rangeX = carouselW - itemW;
	var rangeY = carouselH - itemH;
	var itemDegreeSperation = 360 / (noOfItemsToAdd-1);
	var itemCount = 0;

	// Simulate constructor from other languages
	init();
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



	// Constructor (not a js constructor!);
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	function init(){
		log("Carousel.init()");

		// Add items
		for (var i=0; i < noOfItemsToAdd; i++){
			addItem();
		}

		// Start animation
		animate();
	}

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	function addItem(){
		// 

		var item = document.createElement("div");
		item.classList.add("item");

		itemContainer.appendChild(item);

		var itemObject = {
			carouselItem:item
		};

		items.push(itemObject);
		itemCount++;
	}
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	function animate(){
		deg += 0.5;

		for (var i=0; i < items.length; i++){

			var itemDeg = deg + (itemDegreeSperation * i);

			var sin = 0.5 + (Math.sin(degToRad(itemDeg)) * 0.5);
			var cos = 0.5 + (Math.cos(degToRad(itemDeg)) * 0.5);

			var itemObject = items[i];
			var posX = sin * rangeX;
			var posY = cos * rangeY;
			itemObject.carouselItem.style.left = posX + "px";
			itemObject.carouselItem.style.top = posY + "px";

			var zIndex = 1 + Math.round(cos * 100);
			itemObject.carouselItem.style.zIndex = zIndex;

			var scale = 0.5 + (cos * 0.5);
			itemObject.carouselItem.style.transform = "scale(" + scale + ")";

			var opacity = 0.3 + (cos * 0.7);
			itemObject.carouselItem.style.opacity = opacity;
		}

		requestAnimationFrame(animate);
	}
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



	// Utility functions
	function degToRad(input) { return input * (Math.PI / 180); }
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





// Init page load
function pageLoadInit(){
	var myCarousel = new Carousel();
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -