/*--------------
V 1.0.0 - Criado por Larner Diogo

DESCIÇÃO:
Component compartilhado NavBar Topo da aplicacao


COMPONENTS
***********************************************************/
import { Component, OnInit, Renderer, ViewChild, ElementRef, Directive } from '@angular/core';
import { ROUTES } from './../sidebar/routes';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

/**********************************************************
SERVICES
***********************************************************/
import { GlobalService } from '../../globals/global';
import { SessionService } from '../../globals/session';

var misc: any = {
  navbar_menu_visible: 0,
  active_collapse: true,
  disabled_collapse_init: 0,
  sidebar_mini_active: false
}
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html'
})
export class NavBarComponent implements OnInit {

  private listTitles: any[];
  location: Location;
  private nativeElement: Node;
  private toggleButton;
  private sidebarVisible: boolean;

  @ViewChild("app-navbar") button;

  constructor(
    location: Location,
    private renderer: Renderer,
    private element: ElementRef,
    public GlobalService: GlobalService,
    public SessionService: SessionService,
  ) {
    this.location = location;
    this.nativeElement = element.nativeElement;
    this.sidebarVisible = false;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);

    var navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    if ($('body').hasClass('sidebar-mini')) {
      misc.sidebar_mini_active = true;
    }

    //ajustando minimenu
    if (this.GlobalService.exibeMiniMenu === true) {
      setTimeout(function () {
        $('body').addClass('sidebar-mini');
        misc.sidebar_mini_active = true;
      }, 300);
    }

    this.isMobileMenu();

  }
  isMobileMenu() {
    if ($(window).width() < 991) {
      this.GlobalService.isDesktop = false;
      return false;
    }
    this.GlobalService.isDesktop = true;
    return true;
  }
  sidebarToggle() {
    var toggleButton = this.toggleButton;
    var body = document.getElementsByTagName('body')[0];

    if (this.sidebarVisible == false) {
      setTimeout(function () {
        toggleButton.classList.add('toggled');
      }, 500);
      body.classList.add('nav-open');
      this.sidebarVisible = true;
    } else {
      this.toggleButton.classList.remove('toggled');
      this.sidebarVisible = false;
      body.classList.remove('nav-open');
    }
  }

}
