import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { HttpService } from '../providers/http';
import { GlobalsService } from '../providers/globals';
import { StorageService } from '../providers/storage';
import { ConnectService } from '../providers/connect';
import { SnotifyService } from 'ng-snotify';

declare var Rellax: any;
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  model: any = {
    Assunto: "Atendimento Personalizado Via Site"
  };
  arBanners: Array<any>;
  arDepoimentos: Array<any>;
  arVideos: Array<any>;
  arLogoAtracoes: Array<any>;
  arPrincipalAtracoes: Array<any>;
  arContatos: Array<any>;

  constructor(
    private title: Title,
    public HttpService: HttpService,
    public GlobalsService: GlobalsService,
    public StorageService: StorageService,
    public ConnectService: ConnectService,
    private snotifyService: SnotifyService
  ) {
  }

  public sliderOptionsPromotions: any = { items: 3, dots: false, nav: true, margin: 120, loop: true, responsive: { 0: { items: 1, margin: 60 }, 600: { items: 2, margin: 20 }, 767: { items: 2, margin: 40 }, 991: { items: 2, margin: 120 }, 1200: { items: 3 } } };

  banners = [
    {
      title: "Sua vida em",
      subtitle: "ritmo de férias!",
      img: "assets/images/banner-1.png",
      alt: "Sua vida em ritmo de férias"
    },
    {
      title: "Um lugar",
      subtitle: "paradisíaco",
      img: "assets/images/banner-3.png",
      alt: "Um lugar paradisíaco"
    },
    {
      title: "Às margens do",
      subtitle: "lago Corumbá",
      img: "assets/images/banner-4.png",
      alt: "As margens do lago Corumbá"
    },
    {
      title: "Simulador",
      subtitle: "de Surf",
      img: "assets/images/banner-5.png",
      alt: "O único simulador de surf de caldas novas"
    }
  ]

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

  depoimentos = [
    { id: 4, hashID: "8b201c00-f7ec-11e8-bdfb-b1ce8f99056a", sts: "A", nomePessoa: "Anderson Schulz", depoimento: "Um ótimo lugar para estar com a família e amigos, … final de semana muito bom, voltarei com certeza!" },
    { id: 2, hashID: "7800eff0-f7ec-11e8-bdfb-b1ce8f99056a", sts: "A", nomePessoa: "Huggo Nunez", depoimento: "Ótimo lugar para ficar, limpeza impecável e com fu…m ótimo lugar para curtir com a família e amigos." },
    { id: 3, hashID: "82f30fb0-f7ec-11e8-bdfb-b1ce8f99056a", sts: "A", nomePessoa: "Jéssica C.", depoimento: "Piscinas boas, brinquedos bons, apartamento limpo,… piscina sem borda. Funcionários muitos educados." },
    { id: 1, hashID: "6a437b30-f7ec-11e8-bdfb-b1ce8f99056a", sts: "A", nomePessoa: "Kensley W.", depoimento: "Muito bom o local com boas opções de lazer. Destaq…boáguas e half pipe pra quem gosta de adrenalina." }
  ]

  atracoes = [
    {
      logo: "assets/images/atracoes/logos/oasis.png",
      name: "Oásis",
      description: "Total conforto e relaxamento com vista privilegiada do Lago Corumbá.",
      imgBig: "assets/images/atracoes/oasis.jpg"
    },
    {
      logo: "assets/images/atracoes/logos/iarul.png",
      name: "Iarúl",
      description: "Encare uma queda de 10 metros de altura e compartilhe a emoção com outra pessoa.",
      imgBig: "assets/images/atracoes/iarul.jpg"
    },
    {
      logo: "assets/images/atracoes/logos/surfo.png",
      name: "Surfô",
      description: "Quer ter a experiência de surfar sem estar na praia? No Resort do Lago você pode com o único simulador de surf da região.",
      imgBig: "assets/images/atracoes/surfo.jpg"
    },
    {
      logo: "assets/images/atracoes/logos/moio.png",
      name: "Moiô",
      description: "Um balde gigante que proporciona uma experiência incrível de diversão.",
      imgBig: "assets/images/atracoes/moio.jpg"
    },
    {
      logo: "assets/images/atracoes/logos/triventura.png",
      name: "Triventura",
      description: "Aqui é diversão em dose tripla para a criançada! Três toboáguas que proporcionam experiências diferentes em cada descida.",
      imgBig: "assets/images/atracoes/triventura.jpg"
    },
    {
      logo: "assets/images/atracoes/logos/pequi.png",
      name: "Estação Pequi",
      description: "Se você ama experimentar comidas regionais, o Restaurante Estação Pequi é para você.",
      imgBig: "assets/images/atracoes/pequi.jpg"
    }
  ]

  getItensHome() {
    // /************
    // HEADER GERAL
    // *************/
    let headerConfig = {
      stsValue: "A",
      deleteValue: "N"
    }

    // /************
    // GET BANNERS ATIVOS
    // *************/
    // this.HttpService.JSON_GET(`/data/banners/ordem/asc/*/id,hashID,sts,nomePessoa,depoimento/*`, true, headerConfig)
    // this.HttpService.JSON_GET(`/data/banners,imagens/banners.ordem/asc/imagens.idItem=banners.hashID,imagens.ref=banners,banners.sts=A/banners.id,banners.hashID,imagens.ref,banners.sts,banners.titulo,banners.primeiraLinha,banners.segundaLinha,banners.corPrimaria,banners.corSecundaria,imagens.pathLarge as midia/*`, headerConfig)
    //   .then(
    //     (res) => {
    //       this.arBanners = res.json().data;
          // console.log(this.arBanners);

          // /************
          // GET DEPOIMENTOS
          // *************/
          this.HttpService.JSON_GET(`/data/depoimentos/nomePessoa/asc/*/id,hashID,sts,nomePessoa,depoimento/*`, headerConfig)
            .then(
              (res) => {
                this.arDepoimentos = res.json().data;
                // console.log(this.arDepoimentos);
                // console.log(this.depoimentos);

                // /************
                // GET VIDEOS
                // *************/
                // this.HttpService.JSON_GET(`/data/videos/id/asc/*/id,hashID,sts,titulo,descricao,idvideo/1`, headerConfig)
                //   .then(
                //     (res) => {
                //       this.arVideos = res.json().data;
                //       // console.log(this.arVideos);

                //       // /************
                //       // GET ATRAÇÕES
                //       // *************/
                //       this.HttpService.JSON_GET(`/data/atracoes,imagens/atracoes.ordem/asc/imagens.idItem=atracoes.hashID,imagens.ref=logo-atracoes/atracoes.titulo,imagens.pathLarge as midia/*`, headerConfig, true)
                //         .then(
                //           (res) => {
                //             this.arLogoAtracoes = res.json().data;
                //             // console.log(this.arLogoAtracoes);

                //             this.HttpService.JSON_GET(`/data/atracoes,imagens/atracoes.ordem/asc/imagens.idItem=atracoes.hashID,imagens.ref=principal-atracoes/atracoes.id,atracoes.hashID,imagens.ref,atracoes.sts,atracoes.titulo,atracoes.descricao,imagens.pathLarge as midia2/*`, headerConfig, true)
                //               .then(
                //                 (res) => {
                //                   this.arPrincipalAtracoes = res.json().data;

                //                   // console.log(this.arPrincipalAtracoes);
                //                 },
                //                 (error) => {
                //                   console.log(error);
                //                 }
                //               )
                //           },
                //           (error) => {
                //             console.log(error);
                //           })

                //     },
                    // (error) => {
                    //   console.log(error);
                    // })

              },
              (error) => {
                console.log(error);
              })

        // },
        // (error) => {
        //   console.log(error);
        // })
  }

  ngOnInit() {
    this.title.setTitle('Resort do Lago - Página Inicial');
    let rellax = new Rellax('.rellax');

    (function () {
      var src = "//widget-be.pmweb.com.br/2.0/pmweb-widget.min.js?v=" + Math.floor(Math.random() * 10000);
      var script_tag = document.createElement('script');
      script_tag.setAttribute('type', 'text/javascript');
      script_tag.setAttribute('src', src);
      script_tag.setAttribute('async', 'true');
      (document.getElementsByTagName('head')[0] || document.documentElement).appendChild(script_tag);
    })();
    $(window).load(function () {
      $(".loader").fadeOut("slow", function () {
        $(".loaders").delay(300).fadeOut("slow");
      });
    });

    this.getItensHome();
  }

  enviarEmail(form) {
    console.log(form.value);
    const successAction = Observable.create(observer => {

      observer.next({
        body: 'Enviando Mensagem.....',
      });
      this.HttpService.JSON_POST('/send/mail', form.value, true, false)
        .then(
          (res) => {
            console.log(res.json());
            setTimeout(() => {
              observer.next({
                title: 'Obrigado',
                body: 'Em breve entraremos em contato!!',
                config: {
                  closeOnClick: true,
                  timeout: 5000,
                  showProgressBar: true
                }
              });
              observer.complete();
            }, 5000);
          },
          (error) => {
            console.log(error);
            //this.AlertService.alertError(JSON.parse(error._body));
          }
        )
    });
    this.snotifyService.async('Sucesso!', successAction);
  }

}
