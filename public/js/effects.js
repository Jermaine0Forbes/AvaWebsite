$(document).ready(function(){

    var
    positionY,
    originalHeaderClass,
    stickyHeaderClass,
    submenu ='#header-block-2 .nav-item .submenu.visible',
    sub,
    x = 0;

    function hideMenus(selector){

        // console.log(selector.length)
        $(selector).hide();
        $(selector).removeClass('visible');
    }

    $('#header-block-2 .nav-item').hover( function(){

        let
            parentWidth,
            childWidth,
            percentage,
            str,
            device;

            sub = $(this).find(".submenu");
            device = sub.closest('.navbar').attr('data-device');
            
            if(device === "desktop"){
                parentWidth = $(this).width();
                childWidth = sub.width();
                percentage = ((childWidth / 2) / parentWidth)*100;
                percentage = Math.round(percentage);
                str =`-${percentage}%`;
                sub.css('left',str);
            }

        sub.stop(true,true).slideDown(200);
    },function(){
        sub.stop(true,true).delay(200).hide();
        // hideMenus(submenu);
    })


    // class stickyMenu{
    //     constructor(){
    //
    //     }
    //
    // }

  var header = document.getElementById('header-block-2');
    function getOffset(header) {
      let h = header.getBoundingClientRect();
      return {
        left: h.left + window.scrollX,
        top: h.top + window.scrollY
      }
    }

    let position = getOffset(header).top;

    originalHeaderClass = header.className;
    stickyHeaderClass = originalHeaderClass+" sticky-top container wide";
    window.addEventListener('scroll', function(){
        positionY = window.scrollY;
        hideMenus(submenu);

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
    $('.slick:nth-of-type(2)').slick({
        infinite:true,
        autoplay:true,
        slidesToShow:4,
        slidesToScroll:2,
        autoplaySpeed:5000,
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
