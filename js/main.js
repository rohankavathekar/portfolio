$(document).ready(function(){
  var Main = {
    init: function() {
      this.bindUIActions();
    },
    bindUIActions: function() {
      this.cursor();
      this.cursorClick();
      this.changeLogo();
      this.rellax();
      this.workDetails();
      this.carousel();
    },
    cursor: function() {
      $(document).mousemove(function(event){
        $(".cursor").css("top",(event.clientY-10));
        $(".cursor").css("left",(event.clientX-10));
      });
    },
    cursorClick: function() {
      $(document).click(function() {
        $(".cursor").addClass("clicked");
        setTimeout(function(){
          $(".cursor").removeClass("clicked");
        },500);
      })
    },
    changeLogo: function() {
      $(window).on("scroll", function() {
        if($(window).scrollTop() > 400) {
          $(".logo").slideUp();
          $(".logo-min").slideDown();
          // $("body").css("background","#000")
        } else {
          $(".logo").slideDown();
          $(".logo-min").slideUp();
          // $("body").css("background","#fafafa")
      }
    });
    },
    rellax: function() {
      var rellax = new Rellax('.rellax');
    },
    workDetails: function() {
      $(".work-holder")
  	  .mouseenter( () => {
        $(".work-holder").addClass("hover");
        $(".details").addClass("hover");
  	  }) 
  	  .mouseleave( () => {
        $(".work-holder").removeClass("hover");
        $(".details").removeClass("hover");
  	  }
    );
    },
    carousel: function() {
      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: [
          "<i class='fa fa-caret-left'></i>",
          "<i class='fa fa-caret-right'></i>"
        ],
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1
          },
          1000: {
            items: 3
          }
        }
      })
    }
  }
  Main.init();
});