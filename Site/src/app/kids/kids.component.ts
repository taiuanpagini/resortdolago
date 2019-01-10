import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
declare var $: any;
@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.scss']
})
export class KidsComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Resort do Lago - Espaço dedicado a criançada');
    $(".loader").fadeOut("slow");
    $(".loaders").delay(300).fadeOut("slow");

    document.getElementById('btn-leo').onclick = function() {
      var conteudo = document.getElementById('leo-imprimir').innerText,
          tela_impressao = window.open('about:blank');

      tela_impressao.document.write(conteudo);
      tela_impressao.window.print();
      tela_impressao.window.close();
    };

    (function(){
      var src = "//widget-be.pmweb.com.br/2.0/pmweb-widget.min.js?v=" + Math.floor(Math.random() * 10000);
      var script_tag = document.createElement('script');
      script_tag.setAttribute('type','text/javascript');
      script_tag.setAttribute('src', src);
      script_tag.setAttribute('async', 'true');
      (document.getElementsByTagName('head')[0] || document.documentElement).appendChild(script_tag);
    })();
    
  }

}
