import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Lightbox } from 'ngx-lightbox';

declare var Rellax: any;
declare var WOW: any;
declare var $: any;

@Component({
  selector: 'app-diversao-aventura',
  templateUrl: './diversao-aventura.component.html',
  styleUrls: ['./diversao-aventura.component.scss']
})
export class DiversaoAventuraComponent implements OnInit {

  public sliderOptionsHalf: any = {items: 1, dots: false, nav: true, margin: 0, loop: true};
  public _album: Array<any> = [];

  galeria = [
    {
      srcUrl: 'assets/images/diversao-aventura/galeria/galeria15.jpg',
      previewUrl: 'assets/images/diversao-aventura/galeria/galeria15.jpg'
    },
    {
      srcUrl: 'assets/images/diversao-aventura/galeria/galeria16.jpg',
      previewUrl: 'assets/images/diversao-aventura/galeria/galeria16.jpg'
    },
    {
      srcUrl: 'assets/images/diversao-aventura/galeria/galeria17.jpg',
      previewUrl: 'assets/images/diversao-aventura/galeria/galeria17.jpg'
    },
    {
      srcUrl: 'assets/images/diversao-aventura/galeria/galeria18.jpg',
      previewUrl: 'assets/images/diversao-aventura/galeria/galeria18.jpg'
    },
    {
      srcUrl: 'assets/images/diversao-aventura/galeria/galeria.jpg',
      previewUrl: 'assets/images/diversao-aventura/galeria/galeria.jpg'
    },
    {
      srcUrl: 'assets/images/diversao-aventura/galeria/galeria2.jpg',
      previewUrl: 'assets/images/diversao-aventura/galeria/galeria2.jpg'
    },
    {
      srcUrl: 'assets/images/diversao-aventura/galeria/galeria3.jpg',
      previewUrl: 'assets/images/diversao-aventura/galeria/galeria3.jpg'
    },
    {
      srcUrl: 'assets/images/diversao-aventura/galeria/galeria4.jpg',
      previewUrl: 'assets/images/diversao-aventura/galeria/galeria4.jpg'
    },
    {
      srcUrl: 'assets/images/diversao-aventura/galeria/galeria5.jpg',
      previewUrl: 'assets/images/diversao-aventura/galeria/galeria5.jpg'
    },
    {
      srcUrl: 'assets/images/diversao-aventura/galeria/galeria6.jpg',
      previewUrl: 'assets/images/diversao-aventura/galeria/galeria6.jpg'
    },
    {
      srcUrl: 'assets/images/diversao-aventura/galeria/galeria7.jpg',
      previewUrl: 'assets/images/diversao-aventura/galeria/galeria7.jpg'
    },
    {
      srcUrl: 'assets/images/diversao-aventura/galeria/galeria8.jpg',
      previewUrl: 'assets/images/diversao-aventura/galeria/galeria8.jpg'
    },
    {
      srcUrl: 'assets/images/diversao-aventura/galeria/galeria9.jpg',
      previewUrl: 'assets/images/diversao-aventura/galeria/galeria9.jpg'
    },
    {
      srcUrl: 'assets/images/diversao-aventura/galeria/galeria10.jpg',
      previewUrl: 'assets/images/diversao-aventura/galeria/galeria10.jpg'
    },
    {
      srcUrl: 'assets/images/diversao-aventura/galeria/galeria11.jpg',
      previewUrl: 'assets/images/diversao-aventura/galeria/galeria11.jpg'
    },
    {
      srcUrl: 'assets/images/diversao-aventura/galeria/galeria12.jpg',
      previewUrl: 'assets/images/diversao-aventura/galeria/galeria12.jpg'
    }
  ];

  sliderHalf = [
    {
      src: 'assets/images/diversao-aventura/half4.jpg',
      alt: 'Fotos do half pipe'
    },
    {
      src: 'assets/images/diversao-aventura/half.jpg',
      alt: 'Fotos do half pipe'
    },
    {
      src: 'assets/images/diversao-aventura/half2.jpg',
      alt: 'Fotos do half pipe'
    },
    {
      src: 'assets/images/diversao-aventura/half3.jpg',
      alt: 'Fotos do half pipe'
    }
  ];

  sliderLancha = [
    {
      src: 'assets/images/diversao-aventura/lancha.jpg',
      alt: 'Fotos do passeio de lancha'
    },
    {
      src: 'assets/images/diversao-aventura/lancha2.jpg',
      alt: 'Fotos do passeio de lancha'
    },
    {
      src: 'assets/images/diversao-aventura/lancha3.jpg',
      alt: 'Fotos do passeio de lancha'
    },{
      src: 'assets/images/diversao-aventura/lancha4.jpg',
      alt: 'Fotos do passeio de lancha'
    },
    {
      src: 'assets/images/diversao-aventura/lancha5.jpg',
      alt: 'Fotos do passeio de lancha'
    }
  ];

  sliderParque = [
    {
      src: 'assets/images/diversao-aventura/parque4.jpg',
      alt: 'Fotos do parque aquatico'
    },
    {
      src: 'assets/images/diversao-aventura/parque5.jpg',
      alt: 'Fotos do parque aquatico'
    },
    {
      src: 'assets/images/diversao-aventura/parque.jpg',
      alt: 'Fotos do parque aquatico'
    },
    {
      src: 'assets/images/diversao-aventura/parque2.jpg',
      alt: 'Fotos do parque aquatico'
    },
    {
      src: 'assets/images/diversao-aventura/parque3.jpg',
      alt: 'Fotos do parque aquatico'
    }
  ];

  sliderSimulador = [
    {
      src: 'assets/images/diversao-aventura/simulador.jpg',
      alt: 'Fotos do simulador de surf'
    },
    {
      src: 'assets/images/diversao-aventura/simulador2.jpg',
      alt: 'Fotos do simulador de surf'
    }
  ];

  sliderCaiaque = [
    {
      src: 'assets/images/diversao-aventura/caiaque2.png',
      alt: 'Fotos do passeio de caiaque'
    },{
      src: 'assets/images/diversao-aventura/caiaque.png',
      alt: 'Fotos do passeio de caiaque'
    }
  ];

  sliderStand = [
    {
      src: 'assets/images/diversao-aventura/standup.png',
      alt: 'Fotos do stand up paddle'
    }
  ]

  constructor(
    private title: Title,
    public _lightbox: Lightbox
    ) {
      for (let i = 1; i <= 18; i++) {
        const src = 'assets/images/diversao-aventura/galeria/galeria' + i + '.jpg';
        const caption = 'Diversão e Aventura';
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
    this.title.setTitle('Resort do Lago - Diversão e Aventura');
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
