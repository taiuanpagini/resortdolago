import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Lightbox } from 'ngx-lightbox';
declare var Rellax: any;
declare var WOW: any;
declare var $:any;
@Component({
  selector: 'app-tranquilidade-lazer',
  templateUrl: './tranquilidade-lazer.component.html',
  styleUrls: ['./tranquilidade-lazer.component.scss']
})
export class TranquilidadeLazerComponent implements OnInit {

  public sliderOptionsHalf: any = {items: 1, dots: false, nav: true, margin: 0, loop: true};
  public _album: Array<any> = [];

  galeria = [
    {
      srcUrl: 'assets/images/tranquilidade-lazer/galeria/galeria10.jpg',
      previewUrl: 'assets/images/tranquilidade-lazer/galeria/galeria10.jpg'
    },
    {
      srcUrl: 'assets/images/tranquilidade-lazer/galeria/galeria11.jpg',
      previewUrl: 'assets/images/tranquilidade-lazer/galeria/galeria11.jpg'
    },
    {
      srcUrl: 'assets/images/tranquilidade-lazer/galeria/galeria12.jpg',
      previewUrl: 'assets/images/tranquilidade-lazer/galeria/galeria12.jpg'
    },
    {
      srcUrl: 'assets/images/tranquilidade-lazer/galeria/galeria13.jpg',
      previewUrl: 'assets/images/tranquilidade-lazer/galeria/galeria13.jpg'
    },
    {
      srcUrl: 'assets/images/tranquilidade-lazer/galeria/galeria14.jpg',
      previewUrl: 'assets/images/tranquilidade-lazer/galeria/galeria14.jpg'
    },
    {
      srcUrl: 'assets/images/tranquilidade-lazer/galeria/galeria15.jpg',
      previewUrl: 'assets/images/tranquilidade-lazer/galeria/galeria15.jpg'
    },
    {
      srcUrl: 'assets/images/tranquilidade-lazer/galeria/galeria16.jpg',
      previewUrl: 'assets/images/tranquilidade-lazer/galeria/galeria16.jpg'
    },
    {
      srcUrl: 'assets/images/tranquilidade-lazer/galeria/galeria17.jpg',
      previewUrl: 'assets/images/tranquilidade-lazer/galeria/galeria17.jpg'
    },
    {
      srcUrl: 'assets/images/tranquilidade-lazer/galeria/galeria1.jpg',
      previewUrl: 'assets/images/tranquilidade-lazer/galeria/galeria1.jpg'
    },
    {
      srcUrl: 'assets/images/tranquilidade-lazer/galeria/galeria3.jpg',
      previewUrl: 'assets/images/tranquilidade-lazer/galeria/galeria3.jpg'
    },
    {
      srcUrl: 'assets/images/tranquilidade-lazer/galeria/galeria4.jpg',
      previewUrl: 'assets/images/tranquilidade-lazer/galeria/galeria4.jpg'
    },
    {
      srcUrl: 'assets/images/tranquilidade-lazer/galeria/galeria5.jpg',
      previewUrl: 'assets/images/tranquilidade-lazer/galeria/galeria5.jpg'
    },
    {
      srcUrl: 'assets/images/tranquilidade-lazer/galeria/galeria6.jpg',
      previewUrl: 'assets/images/tranquilidade-lazer/galeria/galeria6.jpg'
    },
    {
      srcUrl: 'assets/images/tranquilidade-lazer/galeria/galeria7.jpg',
      previewUrl: 'assets/images/tranquilidade-lazer/galeria/galeria7.jpg'
    },
    {
      srcUrl: 'assets/images/tranquilidade-lazer/galeria/galeria8.jpg',
      previewUrl: 'assets/images/tranquilidade-lazer/galeria/galeria8.jpg'
    },
    {
      srcUrl: 'assets/images/tranquilidade-lazer/galeria/galeria9.jpg',
      previewUrl: 'assets/images/tranquilidade-lazer/galeria/galeria9.jpg'
    }
  ];

  sliderPiscina = [
    {
      src: 'assets/images/tranquilidade-lazer/borda3.jpg',
      alt: 'Fotos da piscina de borda infinita'
    },
    {
      src: 'assets/images/tranquilidade-lazer/borda.jpg',
      alt: 'Fotos da piscina de borda infinita'
    },
    {
      src: 'assets/images/tranquilidade-lazer/borda2.jpg',
      alt: 'Fotos da piscina de borda infinita'
    }
  ];

  sliderPrainha = [
    {
      src: 'assets/images/tranquilidade-lazer/prainha2.jpg',
      alt: 'Fotos da prainha'
    },
    {
      src: 'assets/images/tranquilidade-lazer/prainha3.jpg',
      alt: 'Fotos da prainha'
    },
    {
      src: 'assets/images/tranquilidade-lazer/prainha.jpg',
      alt: 'Fotos da prainha'
    }
  ];

  sliderSauna = [
    {
      src: 'assets/images/tranquilidade-lazer/academia5.jpg',
      alt: 'Fotos da sauna e da academia'
    },
    {
      src: 'assets/images/tranquilidade-lazer/academia.jpg',
      alt: 'Fotos da sauna e da academia'
    },
    {
      src: 'assets/images/tranquilidade-lazer/academia2.jpg',
      alt: 'Fotos da sauna e da academia'
    },
    {
      src: 'assets/images/tranquilidade-lazer/academia3.jpg',
      alt: 'Fotos da sauna e da academia'
    },
    {
      src: 'assets/images/tranquilidade-lazer/academia4.jpg',
      alt: 'Fotos da sauna e da academia'
    }
  ];

  sliderGastronomia = [
    {
      src: 'assets/images/tranquilidade-lazer/gastronomia-full-2.jpg',
      alt: 'Fotos da gastronomia'
    },
    {
      src: 'assets/images/tranquilidade-lazer/gastronomia-full-1.jpg',
      alt: 'Fotos da gastronomia'
    }
  ];

  sliderAcomodacoes = [
    {
      src: 'assets/images/tranquilidade-lazer/acomodacoes7.jpg',
      alt: 'Fotos das acomodações'
    },
    {
      src: 'assets/images/tranquilidade-lazer/acomodacoes6.jpg',
      alt: 'Fotos das acomodações'
    },
    {
      src: 'assets/images/tranquilidade-lazer/acomodacoes.jpg',
      alt: 'Fotos das acomodações'
    },
    {
      src: 'assets/images/tranquilidade-lazer/acomodacoes2.jpg',
      alt: 'Fotos das acomodações'
    },
    {
      src: 'assets/images/tranquilidade-lazer/acomodacoes3.jpg',
      alt: 'Fotos das acomodações'
    },
    {
      src: 'assets/images/tranquilidade-lazer/acomodacoes4.jpg',
      alt: 'Fotos das acomodações'
    },
    {
      src: 'assets/images/tranquilidade-lazer/acomodacoes5.jpg',
      alt: 'Fotos das acomodações'
    }
  ];

  constructor(
    private title: Title,
    public _lightbox: Lightbox
    ) {
      for (let i = 17; i >= 2; i--) {
        const src = 'assets/images/tranquilidade-lazer/galeria/galeria' + i + '.jpg';
        const caption = 'Tranquilidade e Lazer';
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
    this.title.setTitle('Resort do Lago - Tranquilidade e Lazer');
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
