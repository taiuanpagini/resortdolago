import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Lightbox } from 'ngx-lightbox';
declare var Rellax: any;
declare var WOW: any;
declare var $: any;
@Component({
  selector: 'app-resort',
  templateUrl: './resort.component.html',
  styleUrls: ['./resort.component.scss']
})
export class ResortComponent implements OnInit {

  public sliderOptionsHalf: any = {items: 1, dots: false, nav: true, margin: 0, loop: true};
  public _album: Array<any> = [];

  galeria = [
    {
      srcUrl: 'assets/images/resort/galeria/galeria9.jpg',
      previewUrl: 'assets/images/resort/galeria/galeria9.jpg'
    },
    {
      srcUrl: 'assets/images/resort/galeria/galeria10.jpg',
      previewUrl: 'assets/images/resort/galeria/galeria10.jpg'
    },
    {
      srcUrl: 'assets/images/resort/galeria/galeria11.jpg',
      previewUrl: 'assets/images/resort/galeria/galeria11.jpg'
    },
    {
      srcUrl: 'assets/images/resort/galeria/galeria12.jpg',
      previewUrl: 'assets/images/resort/galeria/galeria12.jpg'
    },
    {
      srcUrl: 'assets/images/resort/galeria/galeria13.jpg',
      previewUrl: 'assets/images/resort/galeria/galeria13.jpg'
    },
    {
      srcUrl: 'assets/images/resort/galeria/galeria14.jpg',
      previewUrl: 'assets/images/resort/galeria/galeria14.jpg'
    },
    {
      srcUrl: 'assets/images/resort/galeria/galeria.jpg',
      previewUrl: 'assets/images/resort/galeria/galeria.jpg'
    },
    {
      srcUrl: 'assets/images/resort/galeria/galeria2.jpg',
      previewUrl: 'assets/images/resort/galeria/galeria2.jpg'
    },
    {
      srcUrl: 'assets/images/resort/galeria/galeria3.jpg',
      previewUrl: 'assets/images/resort/galeria/galeria3.jpg'
    },
    {
      srcUrl: 'assets/images/resort/galeria/galeria4.jpg',
      previewUrl: 'assets/images/resort/galeria/galeria4.jpg'
    },
    {
      srcUrl: 'assets/images/resort/galeria/galeria5.jpg',
      previewUrl: 'assets/images/resort/galeria/galeria5.jpg'
    },
    {
      srcUrl: 'assets/images/resort/galeria/galeria6.jpg',
      previewUrl: 'assets/images/resort/galeria/galeria6.jpg'
    },
    {
      srcUrl: 'assets/images/resort/galeria/galeria7.jpg',
      previewUrl: 'assets/images/resort/galeria/galeria7.jpg'
    },
    {
      srcUrl: 'assets/images/resort/galeria/galeria8.jpg',
      previewUrl: 'assets/images/resort/galeria/galeria8.jpg'
    }
  ];

  sliderParque = [
    {
      src: 'assets/images/resort/parque5.jpg',
      alt: 'Fotos do parque aquatico'
    },
    {
      src: 'assets/images/resort/parque2.jpg',
      alt: 'Fotos do parque aquatico'
    },
    {
      src: 'assets/images/resort/parque3.jpg',
      alt: 'Fotos do parque aquatico'
    }
  ];

  sliderAcomodacoes = [
    {
      src: 'assets/images/resort/acomodacoes4.jpg',
      alt: 'Fotos das acomodações'
    },
    {
      src: 'assets/images/resort/acomodacoes.jpg',
      alt: 'Fotos das acomodações'
    },
    {
      src: 'assets/images/resort/acomodacoes2.jpg',
      alt: 'Fotos das acomodações'
    },
    {
      src: 'assets/images/resort/acomodacoes3.jpg',
      alt: 'Fotos das acomodações'
    }
  ];

  sliderGastronomia = [
    {
      src: 'assets/images/resort/gastronomia2.jpg',
      alt: 'Fotos da gastronomia'
    },
    {
      src: 'assets/images/resort/gastronomia3.jpg',
      alt: 'Fotos da gastronomia'
    },
    {
      src: 'assets/images/resort/gastronomia.jpg',
      alt: 'Fotos da gastronomia'
    }
  ];

  sliderLago = [
    {
      src: 'assets/images/resort/lago.jpg',
      alt: 'Fotos do lago corumba'
    },
    {
      src: 'assets/images/resort/lago2.jpg',
      alt: 'Fotos do lago corumba'
    },
    {
      src: 'assets/images/resort/lago3.jpg',
      alt: 'Fotos do lago corumba'
    }
  ];

  constructor(
    private title: Title,
    public _lightbox: Lightbox
    ) {
      for (let i = 13; i >= 2; i--) {
        const src = 'assets/images/resort/galeria/galeria' + i + '.jpg';
        const caption = 'O Resort';
        const album = {
           src: src,
           caption: caption
        };
   
        this._album.push(album);
      }
    }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._album, index);
  }
 
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  ngOnInit() {
    this.title.setTitle('Resort do Lago - Conheça as atrações do nosso resort');
    $(".loader").fadeOut("slow");
    let rellax = new Rellax('.rellax');

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
