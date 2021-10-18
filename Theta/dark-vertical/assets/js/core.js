/*
--------------------------------------------------------------
  Template Name: Theta - Responsive Admin Dashboard Template
  File: Core JS File
--------------------------------------------------------------
 */
"use strict";
$(document).ready(function() {
    /* -- Menu js -- */
    $.sidebarMenu($('.vertical-menu'));
    $(function() {
        for (var a = window.location, abc = $(".vertical-menu a").filter(function() {
            return this.href == a;
        }).addClass("active").parent().addClass("active"); ;) {
            if (!abc.is("li")) break;
            abc = abc.parent().addClass("in").parent().addClass("active");
        }
    });
    /* -- Infobar Notification Sidebar -- */
    $("#infobar-notifications-open").on("click", function(e) {
        e.preventDefault();
        $(".infobar-notifications-sidebar-overlay").css({"background": "rgba(0,0,0,0.4)", "position": "fixed"});
        $("#infobar-notifications-sidebar").addClass("sidebarshow");
    }); 
    $("#infobar-notifications-close").on("click", function(e) {
        e.preventDefault();
        $(".infobar-notifications-sidebar-overlay").css({"background": "transparent", "position": "initial"});
        $("#infobar-notifications-sidebar").removeClass("sidebarshow");
    });
    /* -- Infobar Setting Sidebar -- */
    $("#infobar-settings-open").on("click", function(e) {
        e.preventDefault();
        $(".infobar-settings-sidebar-overlay").css({"background": "rgba(0,0,0,0.4)", "position": "fixed"});
        $("#infobar-settings-sidebar").addClass("sidebarshow");
    }); 
    $("#infobar-settings-close").on("click", function(e) {
        e.preventDefault();
        $(".infobar-settings-sidebar-overlay").css({"background": "transparent", "position": "initial"});
        $("#infobar-settings-sidebar").removeClass("sidebarshow");
    });
    /* -- Menu Hamburger -- */
    $(".menu-hamburger").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("toggle-menu");
        $(".menu-hamburger img").toggle();
    });
    /* -- Menu Topbar Hamburger -- */    
    $(".topbar-toggle-hamburger").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("topbar-toggle-menu");
        $(".topbar-toggle-hamburger img").toggle();      
    });
    /* -- Menu Scrollbar -- */
    /*$('.vertical-menu').slimscroll({
        height: '580px',
        position: 'right',
        size: "7px",
        color: '#CFD8DC',
    });*/
    /* -- Media Size -- */
    function mediaSize() { 
        if (window.matchMedia('(max-width: 767px)').matches) {
            $("body").removeClass("toggle-menu");
            $(".menu-hamburger img.menu-hamburger-close").hide();
            $(".menu-hamburger img.menu-hamburger-collapse").show();          
        }
    };
    mediaSize();
    window.addEventListener('resize', mediaSize, false);
    /* -- Switchery -- */
    var night_mode = document.querySelector('.js-switch-night-mode');
    var switchery = new Switchery(night_mode, { color: '#6e81dc', size: 'small' });
    var navigation_sidebar = document.querySelector('.js-switch-navigation-sidebar');
    var switchery = new Switchery(navigation_sidebar, { color: '#6e81dc', size: 'small' });
    /* -- Bootstrap Popover -- */
    $('[data-toggle="popover"]').popover();
    /* -- Bootstrap Tooltip -- */
    $('[data-toggle="tooltip"]').tooltip();
});