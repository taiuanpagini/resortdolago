import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

declare var WOW: any;
declare var $: any;
@Component({
  selector: 'app-caldas-novas',
  templateUrl: './caldas-novas.component.html',
  styleUrls: ['./caldas-novas.component.scss']
})
export class CaldasComponent implements OnInit {

  public sliderOptionsHalf: any = {items: 1, dots: false, nav: true, margin: 0, loop: true};

  sliderCaldas = [
    {
      src: 'assets/images/caldas/caldas3.jpg',
      alt: 'Fotos de Caldas Novas'
    }
  ];

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Resort do Lago - Conheça Caldas Novas');
    $(".loader").fadeOut("slow");
    var wow = new WOW(
      {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
      }
    );
    wow.init();

    (function(){
      var src = "//widget-be.pmweb.com.br/2.0/pmweb-widget.min.js?v=" + Math.floor(Math.random() * 10000);
      var script_tag = document.createElement('script');
      script_tag.setAttribute('type','text/javascript');
      script_tag.setAttribute('src', src);
      script_tag.setAttribute('async', 'true');
      (document.getElementsByTagName('head')[0] || document.documentElement).appendChild(script_tag);
    })();
    
    $(".loaders").delay(300).fadeOut("slow");
  }

}
