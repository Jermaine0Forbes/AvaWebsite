$(document).ready(function(){

    var
    positionY,
    originalHeaderClass,
    stickyHeaderClass;



    // console.log("debug")

  var header = document.getElementById('header-block-2');
    function getOffset(header) {
      let h = header.getBoundingClientRect();
      return {
        left: h.left + window.scrollX,
        top: h.top + window.scrollY
      }
    }

    let position = getOffset(header).top;

    console.log("The top position is ... "+position)
    originalHeaderClass = header.className;
    stickyHeaderClass = originalHeaderClass+" sticky-top container wide";
    window.addEventListener('scroll', function(){
        positionY = window.scrollY;

        if(positionY > position){
            header.className = stickyHeaderClass ;
            header.style.position ="fixed";
        }else{

            header.style.position = "static";
            header.className = originalHeaderClass;
        }
    })//scroll

    $('.slick').slick({
        infinite:true,
        autoplay:true,
        slidesToShow:4,
        slidesToScroll:2,
        autoplaySpeed:10000,
        prevArrow:"<button class='fa fa-angle-left slick-arrow slick-left'></button>",
        nextArrow:"<button class='fa fa-angle-right slick-arrow slick-right'></button>",
        responsive:[
            {
                breakpoint:768,
                settings:{
                    slidesToShow:3
                }
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow:2
                }
            }
        ]
    })



})// end ready
