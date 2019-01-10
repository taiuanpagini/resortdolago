/*--------------
V 1.0.0 - Criado por Larner Diogo

DESCIÇÃO:
Component compartilhado SideBar Lateral da aplicacao


COMPONENTS
***********************************************************/
import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { ROUTES } from './routes';
import { GlobalService } from '../../globals/global';
import { HttpService } from '../../globals/http';
import { AlertService } from '../../globals/alert';
import { StorageService } from '../../globals/storage';

declare var $: any;
var sidebarTimer;

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.html'
})
export class SideBarComponent implements OnInit {

    public menuItems: any[];

    constructor(
        public GlobalService: GlobalService,
        public HttpService: HttpService,
        public AlertService: AlertService,
        public StorageService: StorageService
    ) { }

    isNotMobileMenu() {
        if ($(window).width() > 991) { return false; }
        return true;
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);

        const ps = new PerfectScrollbar('#area-menu');
        ps.update();
    }

    ngAfterViewInit() {
        // init Moving Tab after the view is initialisez
        setTimeout(() => {
            if (mda.movingTabInitialised == false) {
                mda.initMovingTab();
                mda.movingTabInitialised = true;
            }
        }, 10);
    }

}

var mda: any = {
    movingTab: '<div class="sidebar-moving-tab"/>',
    isChild: false,
    sidebarMenuActive: '',
    movingTabInitialised: false,
    distance: 0,

    setMovingTabPosition: function ($currentActive) {
        $currentActive = mda.sidebarMenuActive;
        //mda.distance = $currentActive.parent().position().top - 10;

        if ($currentActive.closest('.collapse').length != 0) {
            var parent_distance = $currentActive.closest('.collapse').parent().position().top;
            mda.distance = mda.distance + parent_distance;
        }

        //mda.moveTab();
    },
    initMovingTab: function () {
        mda.movingTab = $(mda.movingTab);

        mda.sidebarMenuActive = $('.sidebar .nav-container > .nav > li.active > a:not([data-toggle="collapse"]');

        if (mda.sidebarMenuActive.length != 0) {
            mda.setMovingTabPosition(mda.sidebarMenuActive);
        } else {
            mda.sidebarMenuActive = $('.sidebar .nav-container .nav > li.active .collapse li.active > a');
            mda.isChild = true;
            //this.setParentCollapse();
        }

        mda.sidebarMenuActive.parent().addClass('visible');

        var button_text = mda.sidebarMenuActive.html();
        mda.movingTab.html(button_text);

        //$('.sidebar .nav-container').append(mda.movingTab);

        if (window.history && window.history.pushState) {
            $(window).on('popstate', function () {

                setTimeout(function () {
                    mda.sidebarMenuActive = $('.sidebar .nav-container .nav li.active a:not([data-toggle="collapse"])');

                    if (mda.isChild == true) {
                        //this.setParentCollapse();
                    }
                    clearTimeout(sidebarTimer);

                    var $currentActive = mda.sidebarMenuActive;

                    $('.sidebar .nav-container .nav li').removeClass('visible');

                    var $movingTab = mda.movingTab;
                    $movingTab.addClass('moving');

                    $movingTab.css('padding-left', $currentActive.css('padding-left'));
                    var button_text = $currentActive.html();

                    //mda.setMovingTabPosition($currentActive);

                    sidebarTimer = setTimeout(function () {
                        $movingTab.removeClass('moving');
                        $currentActive.parent().addClass('visible');
                    }, 10);

                    setTimeout(function () {
                        $movingTab.html(button_text);
                    }, 10);
                }, 10);

            });
        }

        $('.sidebar .nav .collapse').on('hidden.bs.collapse', function () {
            var $currentActive = mda.sidebarMenuActive;

            //mda.distance = $currentActive.parent().position().top - 10;

            if ($currentActive.closest('.collapse').length != 0) {
                var parent_distance = $currentActive.closest('.collapse').parent().position().top;
                mda.distance = mda.distance + parent_distance;
            }

            mda.moveTab();
        });

        $('.sidebar .nav .collapse').on('shown.bs.collapse', function () {
            var $currentActive = mda.sidebarMenuActive;

            //mda.distance = $currentActive.parent().position().top - 10;

            if ($currentActive.closest('.collapse').length != 0) {
                var parent_distance = $currentActive.closest('.collapse').parent().position().top;
                mda.distance = mda.distance + parent_distance;
            }

            mda.moveTab();
        });

        $('.sidebar .nav-container .nav > li > a:not([data-toggle="collapse"])').click(function () {
            mda.sidebarMenuActive = $(this);
            var $parent = $(this).parent();

            if (mda.sidebarMenuActive.closest('.collapse').length == 0) {
                mda.isChild = false;
            }

            // we call the animation of the moving tab
            clearTimeout(sidebarTimer);

            var $currentActive = mda.sidebarMenuActive;

            $('.sidebar .nav-container .nav li').removeClass('visible');

            var $movingTab = mda.movingTab;
            $movingTab.addClass('moving');

            $movingTab.css('padding-left', $currentActive.css('padding-left'));
            var button_text = $currentActive.html();

            var $currentActive = mda.sidebarMenuActive;
            //mda.distance = $currentActive.parent().position().top - 10;

            if ($currentActive.closest('.collapse').length != 0) {
                var parent_distance = $currentActive.closest('.collapse').parent().position().top;
                mda.distance = mda.distance + parent_distance;
            }

            mda.moveTab();

            sidebarTimer = setTimeout(function () {
                $movingTab.removeClass('moving');
                $currentActive.parent().addClass('visible');
            }, 10);

            setTimeout(function () {
                $movingTab.html(button_text);
            }, 10);
        });
    },
    setParentCollapse: function () {
        if (mda.isChild == true) {
            var $sidebarParent = mda.sidebarMenuActive.parent().parent().parent();
            var collapseId = $sidebarParent.siblings('a').attr("href");

            $(collapseId).collapse("show");

            $(collapseId).collapse()
                .on('shown.bs.collapse', () => {
                    mda.setMovingTabPosition();
                })
                .on('hidden.bs.collapse', () => {
                    mda.setMovingTabPosition();
                });
        }
    },
    animateMovingTab: function () {
        clearTimeout(sidebarTimer);

        var $currentActive = mda.sidebarMenuActive;

        $('.sidebar .nav-container .nav li').removeClass('visible');

        var $movingTab = mda.movingTab;
        $movingTab.addClass('moving');

        $movingTab.css('padding-left', $currentActive.css('padding-left'));
        var button_text = $currentActive.html();

        mda.setMovingTabPosition($currentActive);

        sidebarTimer = setTimeout(function () {
            $movingTab.removeClass('moving');
            $currentActive.parent().addClass('visible');
        }, 10);

        setTimeout(function () {
            $movingTab.html(button_text);
        }, 10);
    },
    moveTab: function () {
        mda.movingTab.css({
            'transform': 'translate3d(0px,' + mda.distance + 'px, 0)',
            '-webkit-transform': 'translate3d(0px,' + mda.distance + 'px, 0)',
            '-moz-transform': 'translate3d(0px,' + mda.distance + 'px, 0)',
            '-ms-transform': 'translate3d(0px,' + mda.distance + 'px, 0)',
            '-o-transform': 'translate3d(0px,' + mda.distance + 'px, 0)'
        });
    }
};