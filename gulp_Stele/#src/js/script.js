function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});

const tabLinks = document.querySelectorAll(".tabs__item_link");
const tabPanels = document.querySelectorAll(".tabs-panel");
 
for(let el of tabLinks) {
  el.addEventListener("click", e => {
    e.preventDefault();
     
    document.querySelector('.tabs__item.active').classList.remove("active");
    document.querySelector('.tabs-panel.active').classList.remove("active");
 
    const parentListItem = el.parentElement;
    parentListItem.classList.add("active");
    const index = [...parentListItem.parentElement.children].indexOf(parentListItem);
     
    const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
    panel[0].classList.add("active");
  });
};


$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        adaptiveHeight: true,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToScroll:  1,
              }
            },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,

            } 
          },
          {
            breakpoint: 389,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              autoplay: true,
              arrows: false
            }
          }
        ]
    });
});



function findOption(select) {
  const option = select.querySelector(`option[value="${select.value}"]`)
  // Действия над option
}
var select = document.querySelector('select');
select.addEventListener('change', () => {
  let k;
  switch (select.value) {
    case "one":
        k=200;
      break;
    case "two":
        k=200;
      break;
    case "three":
        k=500;
      break;
      case "four":
        k=700;
      break;
      case "five":
        k=800;
      break;
  };

 let x = document.getElementById('s').value;  
 let y = 100;
 y = k * x;
let result = document.getElementById('rezul');
result.style.color = ' #26273d';
result.style.fontSize = '40px';
result.innerHTML = `${y} грн.`;

});

