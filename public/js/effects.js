$(document).ready(function(){

    var
    positionY,
    originalHeaderClass,
    stickyHeaderClass,
    submenu ='#header-block-2 .nav-item .submenu.visible',
    sub = {0:0},
    x = 0;

    function hideMenus(selector){

        // console.log(selector.length)
        $(selector).hide();
        $(selector).removeClass('visible');
    }

    $('#desktop-nav .nav-item').hover( function(){

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
        sub.addClass('visible');
        sub.stop(true,true).slideDown(200);
    },function(){
        sub.stop(true,true).delay(200).hide();
        sub.removeClass('visible');
        // hideMenus(submenu);
    })


    $('#mobile-nav .nav-item').on('click', function(){

        let
        windowWidth = $(window).width(),
        oldSub = sub[0] ,
        left = $(this).offset().left;

        sub = $(this).find('.submenu');
        // console.log("oldSub: "+oldSub);
        // console.log(sub);
        console.log(left);
        console.log(oldSub == sub[0]);
        if(oldSub == sub[0]){
            hideMenus(submenu);
            console.log("hiding")
        }else{
            hideMenus(submenu);
            sub.css({'width':windowWidth, 'left':-left});
            sub.stop(true,true).slideDown(200);
            sub.addClass('visible');
        }
    })

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

    


})// end ready
