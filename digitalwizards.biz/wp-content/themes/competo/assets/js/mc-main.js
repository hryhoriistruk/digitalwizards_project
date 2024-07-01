(function($){
    'use strict';



    /* Mobile Menu */
    $.fn.mobileMenu = function() {
        $(this).next('ul').toggleClass('open-mobmenu-child' );

        if($(this).hasClass('fa-plus')){

            $(this).removeClass('fa-plus');
            $(this).addClass('fa-minus');

        }else if($(this).hasClass('fa-minus')){

            $(this).addClass('fa-plus');
            $(this).removeClass('fa-minus');

        }
    };

    $('.mc-open-childmenu').on('click',function(){
        $(this).mobileMenu();
    });

    $('.mc-mobile-menu .megamenu').removeClass('megamenu');
    /* Header search */

    $('.head-elem-search').on('click',function(){

        if($(this).hasClass('fa-search')){

            $(this).removeClass('fa-search');
            $(this).addClass('fa-times');

            $('.mc-header-searchblock').css({
                'transition':'300ms',
                'opacity':'1',
                'visibility':'visible',
                'top':'75px'
            });

            $(this).siblings('.search_fullscreen').css({
                'transition':'300ms',
                'opacity':'1',
                'visibility':'visible',
                'top':'0px'
            });
            if($(this).hasClass('ontop')){
                $('body').css({
                    'overflow' :'hidden'
                })

            }




        }else if($(this).hasClass('fa-times')){

            $(this).removeClass('fa-times');
            $(this).addClass('fa-search');

            $('.mc-header-searchblock').css({
                'transition':'300ms',
                'opacity':'0',
                'visibility':'hidden',
                'top':'60px'
            });

        }

    });

    $('.fsc-close').on('click',function(){

        $(this).parent().css({
            'transition' : '399ms',
            'top' : '-70px',
            'opacity':'0',
            'visibility':'hidden'
        });

        $('.head-elem-search').addClass('fa-search');
        $('.head-elem-search').removeClass('fa-times');

        $('body').css({
            'overflow' :'visible'
        })

    })


    /* Mobile Menu */



    $('.mc-mobile-menu .megamenu').removeClass('megamenu');

    /* Sticky sidebar */

    $('.header-sidebar').on('click',function(){
        $(".mc-sticly-sidebar-layer").css({
            'transition' : '500ms',
            'opacity' : '1',
            'visibility' : 'visible'
        });

        $(".mc-sticky-sidebar-main").css({
            'transition' : '500ms' ,
            'transition-delay' : '200ms',
            'right' : '0'
        });

        $('body').css({
            'overflow' :'hidden'
        })

        $(".st-sidebar-header i.fa").on('click',function(){

            $(".mc-sticly-sidebar-layer").css({
                'transition' : '500ms',
                'transition-delay' : '200ms',
                'opacity' : '0',
                'visibility' : 'hidden'
            });

            $(".mc-sticky-sidebar-main").css({
                'transition' : '400ms' ,
                'right' : '-100%'
            });
            $('body').css({
                'overflow' :'visible'
            })


        });


    });

    /* Sticky header */

    $(document).on('scroll',function(){
        var currentScroolValue = $(document).scrollTop();
        if(currentScroolValue > 240){
            $('.header-sticky').addClass('enable-sticky-header');
        }else if(currentScroolValue <= 240){
            $('.header-sticky').removeClass('enable-sticky-header');
        }
    });


    /* Banner categories */
    $('.mc-banner-slot-left .post-categories').addClass('mc-banner-categories');


    $(window).on('load',function(){
        $('.mc-preloader').css({ 'opacity':'0', 'visibility' : 'hidden'});
    });


    $('.widget ul li').removeClass('megamenu');



    try{
        var checkWpHome    = document.querySelector('.home.blog');
        var checkWpSearch  = document.querySelector('.search');
        var checkWpArchive = document.querySelector('.archive');

        if(checkWpHome != null || checkWpArchive != null || checkWpSearch !=null){
            var findSidebar = document.querySelector('.style_grid .mc-sidebar');
            if(findSidebar == null){
                var mc_post_listing_container = document.querySelector('.style_grid .mc-post-listing');
                mc_post_listing_container.classList.add('mc-grid-3')
            }

        }
    }catch(e){
        /*  you can add your "error" messages here */
    }


    $(".divided-header-slide.owl-carousel").owlCarousel({
        items:3 ,
        loop:true,
        margin:0,
        nav : false,
        dots : false,
        autoplay:false

    });

    /* footer spaces */

    try{
        if(document.querySelector('.mc-footer-container .mc-content-limiter').childElementCount==0){
            document.querySelector('.mc-footer-container .mc-content-limiter').classList.add('no-footer-widgets');
        }
    }catch(e){
        /*  you can add your "error" messages here */

    }

    if(document.querySelector('.mc-banner-description')){
        document.querySelector('.mc-banner-description').textContent.length<1 ? document.querySelector('.mc-banner-description').style.display='none' : '' ;
    }


})( jQuery );


