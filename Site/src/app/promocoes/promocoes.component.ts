import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
declare var $: any;
@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.scss']
})
export class PromocoesComponent implements OnInit {

  constructor(private title: Title) { }

  promocoes = [
    {
      apartir: "348,00",
      nomepromocao: "Verão & Diversão",
      data: "02 a 27 de Janeiro",
      valor: "348,00",
      link: "https://resortdolago.letsbook.com.br/",
      img: "assets/images/promocoes/janeiro-verao.png"
    },
    {
      apartir: "242,00",
      nomepromocao: "Esquenta de Carnaval",
      data: "01 a 28 de Fevereiro",
      valor: "242,00",
      link: "https://resortdolago.letsbook.com.br/",
      img: "assets/images/promocoes/fevereiro-esquenta-carnaval.png"
    },
    {
      apartir: "1.045,00",
      nomepromocao: "Carnaval Temático",
      data: "02 a 05 de Março",
      valor: "1.045,00",
      link: "https://resortdolago.letsbook.com.br/",
      img: "assets/images/promocoes/marco-carnaval-tematico.png"
    },
    {
      apartir: "532,00",
      nomepromocao: "Páscoa em Família",
      data: "20 a 21 de Abril",
      valor: "532,00",
      link: "https://resortdolago.letsbook.com.br/",
      img: "assets/images/promocoes/abril-pascoa.png"
    },
    {
      apartir: "242,00",
      nomepromocao: "Mês das Mães",
      data: "01 a 31 de Maio",
      valor: "242,00",
      link: "https://resortdolago.letsbook.com.br/",
      img: "assets/images/promocoes/maio-maes.png"
    },
    {
      apartir: "242,00",
      nomepromocao: "Mês das Noivas",
      data: "01 a 31 de Maio",
      valor: "242,00",
      link: "https://resortdolago.letsbook.com.br/",
      img: "assets/images/promocoes/maio-noivas.png"
    },
    {
      apartir: "242,00",
      nomepromocao: "Arraiá Bão Bisurdo",
      data: "01 a 30 de Junho",
      valor: "242,00",
      link: "https://resortdolago.letsbook.com.br/",
      img: "assets/images/promocoes/junho-arraia.png"
    },
    {
      apartir: "242,00",
      nomepromocao: "Celebre o Amor",
      data: "9 a 15 de Junho",
      valor: "242,00",
      link: "https://resortdolago.letsbook.com.br/",
      img: "assets/images/promocoes/junho-namorados.png"
    },
    {
      apartir: "359,00",
      nomepromocao: "Férias Incríveis",
      data: "07 a 28 de Julho",
      valor: "359,00",
      link: "https://resortdolago.letsbook.com.br/",
      img: "assets/images/promocoes/julho-ferias.png"
    },
    {
      apartir: "242,00",
      nomepromocao: "É Primavera",
      data: "01 a 31 de Agosto",
      valor: "242,00",
      link: "https://resortdolago.letsbook.com.br/",
      img: "assets/images/promocoes/agosto-primavera.png"
    },
    {
      apartir: "532,00",
      nomepromocao: "Feriado de Independência",
      data: "07 a 08 de Setembro",
      valor: "532,00",
      link: "https://resortdolago.letsbook.com.br/",
      img: "assets/images/promocoes/setembro-independencia.png"
    },
    {
      apartir: "242,00",
      nomepromocao: "Outubro Rosa",
      data: "01 a 31 de Outubro",
      valor: "242,00",
      link: "https://resortdolago.letsbook.com.br/",
      img: "assets/images/promocoes/outubro-rosa.png"
    },
    {
      apartir: "242,00",
      nomepromocao: "Arrepiô no Halloween",
      data: "28 a 31 de Outubro",
      valor: "242,00",
      link: "https://resortdolago.letsbook.com.br/",
      img: "assets/images/promocoes/outubro-hallowen.png"
    },
    {
      apartir: "242,00",
      nomepromocao: "Novembro Azul",
      data: "01 a 30 de Novembro",
      valor: "242,00",
      link: "https://resortdolago.letsbook.com.br/",
      img: "assets/images/promocoes/novembro-azul.png"
    },
    {
      apartir: "1.045,00",
      nomepromocao: "Proclamação da República",
      data: "15 a 17 de Novembro",
      valor: "1.045,00",
      link: "https://resortdolago.letsbook.com.br/",
      img: "assets/images/promocoes/novembro-proclamacao.png"
    },
  ]

  ngOnInit() {
    this.title.setTitle('Resort do Lago - Veja nossas promoções para o ano todo');
    $(".loader").fadeOut("slow");
    $(".loaders").delay(300).fadeOut("slow");

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
