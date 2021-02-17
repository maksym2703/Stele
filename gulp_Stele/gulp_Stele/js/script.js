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
        slidesToScroll: 3,
        adaptiveHeight: true,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll:  1,
                dots: true
              }
            },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrow: false,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
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
  // alert(select.value);
  let k;
  switch (select.value) {
    case "one":
        k=200;
      // alert('k='+k);
      break;
    case "two":
        k=200;
      // alert('k='+k);
      break;
    case "three":
        k=500;
      // alert('k='+k);
      break;
      case "four":
        k=700;
      // alert('k='+k);
      break;
      // default:
      case "five":
        k=800;
      // alert('k='+k);
      break;
      // default:
    
  };

 let x = document.getElementById('s').value; 
//  alert('x='+x);
 
 let y;

 y = k * x;
//  alert( 'y='+ y );
 document.getElementById('rezul').innerHTML = "Стоимость потолка (грн.):" + y;
});

