$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
  $(".toc").addClass("media text-muted");
  $(".toc>ul").addClass("list-unstyled  mb-0 p-3");
})
