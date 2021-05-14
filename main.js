// slider
var index = 1;
	show(index);
	
	function slide(n) {
		show(index += n);
	}
	
	function show(n) {
		var i;
		var slides = document.getElementsByClassName("slider");
				  
		if (n > slides.length) {
			index = 1
		}    
		if (n < 1) {
			index = slides.length
		}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";  
		}
		
		slides[index-1].style.display = "grid";  
}


// ham
// const btn = document.getElementById("btn");
// const Ham = document.getElementById("ham-menu");

// 		btn.addEventListener("click", () => {
// 		    Ham.classList.toggle("active");
// 		    btn.classList.toggle("active");
// 		});



		