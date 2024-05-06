$(document).ready(function() {
  // add toggle functionality to abstract and bibtex buttons
  $('a.abstract').click(function() {
    $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass('open');
  });
  $('a.bibtex').click(function() {
    $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass('open');
  });
  $('a').removeClass('waves-effect waves-light');
  // add toggle functionality to language buttons
  $('a.lang_en').click(function() {
    $(this).parent().parent().find(".lang_en.hidden").toggleClass('open');
    $(this).parent().parent().find(".lang_fr.hidden.open").toggleClass('open');
    $(this).parent().parent().find(".lang_ch.hidden.open").toggleClass('open');
  });
  $('a.lang_fr').click(function() {
    $(this).parent().parent().find(".lang_en.hidden.open").toggleClass('open');
    $(this).parent().parent().find(".lang_fr.hidden").toggleClass('open');
    $(this).parent().parent().find(".lang_ch.hidden.open").toggleClass('open');
  });
  $('a.lang_ch').click(function() {
    $(this).parent().parent().find(".lang_en.hidden.open").toggleClass('open');
    $(this).parent().parent().find(".lang_fr.hidden.open").toggleClass('open');
    $(this).parent().parent().find(".lang_ch.hidden").toggleClass('open');
  });

  // bootstrap-toc
  if($('#toc-sidebar').length){
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href  = "../css/jupyter.css";
  cssLink.rel   = "stylesheet";
  cssLink.type  = "text/css";

  let theme = localStorage.getItem("theme");
  if (theme == null || theme == "null") {
    const userPref = window.matchMedia;
    if (userPref && userPref("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    }
  }

  $('.jupyter-notebook-iframe-container iframe').each(function() {
    $(this).contents().find("head").append(cssLink);

    if (theme == "dark") {
      $(this).bind("load",function(){
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark"});
      });
    }
  });
});

