$(document).ready(function() { 
    //swiper in product page   
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        // loop: true,
        effect: "slide",
        speed: 2000
    });
    initMap();
    pagination();

    $('#myNavbar li a, .navbar-header a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 800);
        return false;
    });
    //unable the overflow if the device is less than 768 px
    if ($(window).width() < 768) {
        $("body").css("overflow-y", "auto");
        $("section").css("height", "auto");
         $(window).scroll(function() {
            if ($(".navbar-nav>li.about, .navbar-nav>li.contact, .navbar-nav>li.career").hasClass("active")) {
                $(".navbar-brand .icon-logoGVM").css("color", "#0475bc");
                $(".icon-hamburger_menu").css("color", "#0475bc");
                $(".container-fluid>.navbar-header").css("background-color", "white");  
                $(".navbar-inverse .navbar-toggle .icon-bar").css("background-color", "#0475bc");             
                // $(".navbar-inverse .navbar-nav>li>a").css("opacity", "0.5");
                // $(".navbar-inverse .navbar-nav>li>a").css("color", "#0475bc"); 
                // $(".navbar-inverse .navbar-nav>.active>a").css("opacity", "1");
            }
            else if ($(".navbar-nav>li.product").hasClass("active")) {
                $(".navbar-brand .icon-logoGVM").css("color", "white");
                $(".icon-hamburger_menu").css("color", "white"); 
                $(".container-fluid>.navbar-header").css("background-color", "transparent"); 
                $(".navbar-inverse .navbar-toggle .icon-bar").css("background-color", "white");               
                // $(".navbar-inverse .navbar-nav>li>a").css("color", "#ffffff");
                // $(".navbar-inverse .navbar-nav>li>a").css("opacity", "0.5");        
                // $(".navbar-inverse .navbar-nav>.active>a").css("color", "#0475bc");
            }
            else {
                $(".navbar-brand .icon-logoGVM").css("color", "white"); 
                $(".icon-hamburger_menu").css("color", "white"); 
                $(".container-fluid>.navbar-header").css("background-color", "transparent"); 
                $(".navbar-inverse .navbar-toggle .icon-bar").css("background-color", "white");               
                // $(".navbar-inverse .navbar-nav>li>a").css("color", "#ffffff");
                // $(".navbar-inverse .navbar-nav>li>a").css("opacity", "0.5");        
                // $(".navbar-inverse .navbar-nav>.active>a").css("color", "#0475bc");
            }
        });
         $("#myNavbar .btn-back, .navbar-inverse .navbar-nav>li>a").click(function() {
            console.log("tutup");
            $("#myNavbar").removeClass("in");
            $(".navbar-inverse .navbar-toggle").css("display","block");
            $(".navbar-brand .icon-logoGVM").removeClass("hide");
            $("#myNavbar .back img").css("display","none");
            // $(".navbar-brand .icon-logoGVM").css("margin-left","0");
            // $(".navbar-brand .icon-logoGVM").css("margin-top","-30px");
      
        });

         $(".navbar-inverse .navbar-toggle").click(function() {
            $("#myNavbar .btn-back").css("display", "block");
         });
         $("#myNavbar .btn-back").click(function() {
            $("#myNavbar .btn-back").css("display", "none");
         });

    }
    else {
        Scroll();
        $('.navbar-nav>li.product>a').click(function(){
            //alert($(".navbar-inverse .navbar-nav>.product>a").length);
            $(".navbar-brand .icon-logoGVM").css("color", "white"); 
            $(".navbar-inverse .navbar-nav>li>a").css("color", "#ffffff");
            $(".navbar-inverse .navbar-nav>li>a").css("opacity", "0.5");        
            $(".navbar-inverse .navbar-nav>.product>a").css("color", "#ffffff"); 
            $(".navbar-inverse .navbar-nav>.product>a").css("opacity", "1");
            $(".navbar-inverse .navbar-nav>.product>a>hr").css("border-color", "white");
        });
        $('.navbar-nav>li.about>a, #home .btn-default').click(function(){
            //alert($(".navbar-inverse .navbar-nav>.about>a").length);
            $(".navbar-brand .icon-logoGVM").css("color", "#0475bc");
                $(".navbar-inverse .navbar-nav>li>a").css("opacity", "0.5");
                $(".navbar-inverse .navbar-nav>li>a").css("color", "#0475bc"); 
                $(".navbar-inverse .navbar-nav>.about>a").css("opacity", "1");
                $(".navbar-inverse .navbar-nav>.about>a>hr").css("border-color", "#0475bc");
        });
        $('.navbar-nav>li.career>a').click(function(){
            //alert($(".navbar-inverse .navbar-nav>.career>a").length);
            $(".navbar-brand .icon-logoGVM").css("color", "#0475bc");
                $(".navbar-inverse .navbar-nav>li>a").css("opacity", "0.5");
                $(".navbar-inverse .navbar-nav>li>a").css("color", "#0475bc"); 
                $(".navbar-inverse .navbar-nav>.career>a").css("opacity", "1");
                $(".navbar-inverse .navbar-nav>.career>a>hr").css("border-color", "#0475bc");
        });
        $('.navbar-nav>li.contact>a').click(function(){
            //alert($(".navbar-inverse .navbar-nav>.contact>a").length);
            $(".navbar-brand .icon-logoGVM").css("color", "#0475bc");
                $(".navbar-inverse .navbar-nav>li>a").css("opacity", "0.5");
                $(".navbar-inverse .navbar-nav>li>a").css("color", "#0475bc"); 
                $(".navbar-inverse .navbar-nav>.contact>a").css("opacity", "1");
                $(".navbar-inverse .navbar-nav>.contact>a>hr").css("border-color", "#0475bc");
        });

        // $(".navbar-nav>li.product>a, .navbar-nav>li.about>a, .navbar-nav>li.contact>a, .navbar-nav>li.career>a, #career-one button, #career .job-detail").click(function() {
        //     if ($(".navbar-nav>li.about").hasClass("active")) {
        //         // console.log("product");
        //         $(".navbar-brand .icon-logoGVM").css("color", "#0475bc");
        //         $(".navbar-inverse .navbar-nav>li>a").css("opacity", "0.5");
        //         $(".navbar-inverse .navbar-nav>li>a").css("color", "#0475bc"); 
        //         $(".navbar-inverse .navbar-nav>.active>a").css("opacity", "1");
        //         $(".navbar-inverse .navbar-nav>.active>a>hr").css("border-color", "#0475bc");
        //     }
        //     else if ($(".navbar-nav>li.product").hasClass("active")) {
        //         $(".navbar-brand .icon-logoGVM").css("color", "white"); 
        //         $(".navbar-inverse .navbar-nav>li>a").css("color", "#ffffff");
        //         $(".navbar-inverse .navbar-nav>li>a").css("opacity", "0.5");        
        //         $(".navbar-nav>li.product").css("color", "#ffffff");
        //         $(".navbar-nav>li.product").css("opacity", "1");
        //         $(".navbar-inverse .navbar-nav>.active>a>hr").css("border-color", "white");
        //     }
        // });
        $(".icon-logoGVM").click(function() {
            $(".navbar-brand .icon-logoGVM").css("color", "white"); 
            $(".navbar-inverse .navbar-nav>li>a").css("color", "#ffffff");
            $(".navbar-inverse .navbar-nav>li>a").css("opacity", "0.5");  
        });
        // $(".navbar-inverse .navbar-nav>li.about>a").click(function() {
        //     // alert("alert");
        //     $(".navbar-inverse .navbar-nav>li>a").css("color", "#0475bc");
        //     $(".navbar-inverse .navbar-nav>li>a").css("opacity", "0.5");
        //     $(".navbar-brand .icon-logoGVM").css("color", "#0475bc");
        //     $(".navbar-inverse .navbar-nav>li.active>a").css("opacity","1");
        // });
        // $(".navbar-inverse .navbar-nav>li.product>a").click(function() {
        //     // alert("alert");
        //     $(".navbar-inverse .navbar-nav>li>a").css("color", "white");
        //     $(".navbar-inverse .navbar-nav>li>a").css("opacity", "0.5");
        //     $(".navbar-brand .icon-logoGVM").css("color", "white");
        //     $(".navbar-inverse .navbar-nav>li.active>a").css("opacity","1");
        // });
        // $(".navbar-nav>li.about>a, .navbar-nav>li.contact>a, .navbar-nav>li.career>a, #career-one button, #career .job-detail").click(function() {
        // //alert("cek");
        //  if ($(".navbar-nav>li.about, .navbar-nav>li.contact, .navbar-nav>li.career").hasClass("active")) {
        //     $(".navbar-brand .icon-logoGVM").css("color", "#0475bc");
        //     $(".navbar-inverse .navbar-nav>li>a").css("opacity", "0.5");
        //     $(".navbar-inverse .navbar-nav>li>a").css("color", "#0475bc"); 
        //     $(".navbar-inverse .navbar-nav>.active>a").css("opacity", "1");
        //     $(".navbar-inverse .navbar-nav>.active>a>hr").css("border-color", "#0475bc");
        // }
        
        // });
        // $(".navbar-nav>li.product>a, .navbar-brand .icon-logoGVM").click(function() {
        //     //alert("cek");
        //      if ($(".navbar-nav>li.product").hasClass("active")) {
        //         $(".navbar-brand .icon-logoGVM").css("color", "white"); 
        //         $(".navbar-inverse .navbar-nav>li>a").css("color", "#ffffff");
        //         $(".navbar-inverse .navbar-nav>li>a").css("opacity", "0.5");        
        //         $(".navbar-inverse .navbar-nav>.active>a").css("color", "white");
        //         $(".navbar-inverse .navbar-nav>.active>a").css("opacity", "1");
        //         $(".navbar-inverse .navbar-nav>.active>a>hr").css("border-color", "white");
        //      }
        // });

    }
    if ($(window).height() < 570) {
        $("#contact").css("height","auto");
        // $("#contact .contact-image img").css("margin-bottom", "-60px");
    }

    $("#career-one button").click(function() {
        $("#career-one").css("display","none");
        $("#jobs").css("display","block");
        console.log("klik button");
    });
    
    $("#jobs a").click(function() {
        $("#jobs").css("display","none");
        $("#mobileAndroid").css("display","block");
    });
    $("#mobileAndroid .backto").click(function() {
            $("#mobileAndroid").css("display","none");
            $("#jobs").css("display","block");
    });
    $("#mobileAndroid .apply").click(function() {
        $("#mobileAndroid").css("display","none");
        $("#formLamaran").css("display","block");
    });
    $("#formLamaran .backto, #formLamaran .cancel").click(function() {
        $("#mobileAndroid").css("display","block");
        $("#formLamaran").css("display","none");
    });

    $(".navbar-inverse .navbar-toggle").click(function() {
        $(".navbar-inverse .navbar-toggle").css("display","none");
        $(".navbar-brand .icon-logoGVM").addClass("hide");
        $("#myNavbar .back img").css("display","block");
        // $(".navbar-brand .icon-logoGVM").css("margin-left","0");
    });

    $("#mobileAndroid .open-popup").click(function() {
        $(".overlay").removeClass("hide");
        $(".popup").removeClass("hide");
        // $(".overlay").addClass("show");
        // $(".popup").addClass("show");
    });

    $(".overlay, .cancel").click(function() {
        $(".overlay").removeClass("show");
        $(".popup").removeClass("show");
        $(".overlay").addClass("hide");
        $(".popup").addClass("hide");
    });

    
    //Fungsi Cek ukuran file
    $(function(){
        var fileInput = $('.upload-file');
        var maxSize = fileInput.data('max-size');
        $('.upload-form').submit(function(e){
            if(fileInput.get(0).files.length){
                var fileSize = fileInput.get(0).files[0].size; // in bytes
                if(fileSize>maxSize){
                    alert('File harus kurang dari 5Mb bytes');
                    return false;
                }else{
                    alert('Thank you :)');
                }
            }else{
                alert('choose file, please');
                return false;
            }

        });
    });

});

// Fungsi Zooming maps
 function initMap() {
        var location = {lat: -6.189990, lng: 106.798748};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: location
        });
        var marker = new google.maps.Marker({
          position: location,
          map: map
        });
      }

// Fungsi pagination avalaible jobs
function pagination() {
    var pageList = new List('jobs', {
        valueNames: ['name'],
        page: 6,
        pagination: true
    });
    if ($(window).width() < 768) {
       page = 4;
    }
}

//Fungsi Scroll
function Scroll() {
    var section = $("section")
        .ready(function() {
            // var position = $("section").attr("id");
            // if (position == "home") {
            //     console.log(position);
            //     $(".navbar-brand .icon-logoGVM").css("color", "white");
            // }
        })
        .on('mousewheel DOMMouseScroll', function(e) {
            var position = $(window).scrollTop();
            var currentSection = $(this).attr("id");
            var prevSection = $(this).prev().attr("id");
            //$(this).removeClass("allowScroll");
            if (!$(this).hasClass("disableScroll")) {
                if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
                    var height = (position-$(window).height());
                    if (position == 0) {
                        height = (4 * $(window).height());
                    }
                    $("html, body").animate({ scrollTop: height }, {
                        duration: 800, 
                        start:function(){
                            $("section").addClass("disableScroll");
                        }, 
                        done:function() {
                            $("section").removeClass("disableScroll");
                            if ($(".navbar-nav>li.about, .navbar-nav>li.contact, .navbar-nav>li.career").hasClass("active")) {
                                $(".navbar-brand .icon-logoGVM").css("color", "#0475bc");
                                $(".navbar-inverse .navbar-nav>li>a").css("opacity", "0.5");
                                $(".navbar-inverse .navbar-nav>li>a").css("color", "#0475bc"); 
                                $(".navbar-inverse .navbar-nav>.active>a").css("opacity", "1");
                                console.log("ini about");
                            }
                            else if ($(".navbar-nav>li.product").hasClass("active")) {
                                $(".navbar-brand .icon-logoGVM").css("color", "white"); 
                                $(".navbar-inverse .navbar-nav>li>a").css("color", "#ffffff");
                                $(".navbar-inverse .navbar-nav>li>a").css("opacity", "0.5");        
                                $(".navbar-inverse .navbar-nav>.active>a").css("color", "white");
                                $(".navbar-inverse .navbar-nav>.active>a").css("opacity", "1");                                
                                $(".navbar-inverse .navbar-nav>.active>a>hr").css("border-color", "white");
                            }
                            else {
                                $(".navbar-brand .icon-logoGVM").css("color", "white"); 
                                $(".navbar-inverse .navbar-nav>li>a").css("color", "#ffffff");
                                $(".navbar-inverse .navbar-nav>li>a").css("opacity", "0.5");        
                                $(".navbar-inverse .navbar-nav>.active>a").css("color", "#0475bc");
                            }
                        }
                    });
                    //$(this).prev().addClass("allowScroll");
                }
                else {
                    var height = ($(window).height())+position;
                    if (position == (4 * $(window).height())) {
                        height = 0;
                    }
                    $("html, body").animate({ scrollTop: height }, {
                        duration: 800, 
                        start:function(){
                            $("section").addClass("disableScroll");
                        }, 
                        done:function() {
                            $("section").removeClass("disableScroll"); 
                            if ($(".navbar-nav>li.about, .navbar-nav>li.contact, .navbar-nav>li.career").hasClass("active")) {
                                $(".navbar-brand .icon-logoGVM").css("color", "#0475bc");
                                $(".navbar-inverse .navbar-nav>li>a").css("opacity", "0.5");
                                $(".navbar-inverse .navbar-nav>li>a").css("color", "#0475bc"); 
                                $(".navbar-inverse .navbar-nav>.active>a").css("opacity", "1");
                                console.log("ini about");
                            }
                            else if ($(".navbar-nav>li.product").hasClass("active")) {
                                $(".navbar-brand .icon-logoGVM").css("color", "white"); 
                                $(".navbar-inverse .navbar-nav>li>a").css("color", "#ffffff");
                                $(".navbar-inverse .navbar-nav>li>a").css("opacity", "0.5");        
                                $(".navbar-inverse .navbar-nav>.active>a").css("color", "white");
                                $(".navbar-inverse .navbar-nav>.active>a").css("opacity", "1");                                
                                $(".navbar-inverse .navbar-nav>.active>a>hr").css("border-color", "white");
                            }
                            else {
                                $(".navbar-brand .icon-logoGVM").css("color", "white"); 
                                $(".navbar-inverse .navbar-nav>li>a").css("color", "#ffffff");
                                $(".navbar-inverse .navbar-nav>li>a").css("opacity", "0.5");        
                                $(".navbar-inverse .navbar-nav>.active>a").css("color", "#0475bc");
                            }
                        }
                    }); 
                }
            }
            
        });
}

// (function() {
  
//   'use strict';

//   $('.input-file').each(function() {
//     var $input = $(this),
//         $label = $input.next('.js-labelFile'),
//         labelVal = $label.html();
    
//    $input.on('change', function(element) {
//       var fileName = '';
//       if (element.target.value) fileName = element.target.value.split('\\').pop();
//       fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
//    });
//   });

// })();