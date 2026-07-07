/* ============================================================
   广州市哥哈德贸易有限公司 / Guangzhou Gehad Trading Co., Ltd
   网站脚本 - 重建版 2026-07-01
   ============================================================ */

(function() {
  'use strict';

  // --- Mobile menu toggle ---
  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('open');
    });
    // Close on link click
    nav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        nav.classList.remove('open');
      });
    });
  }

  // --- Header scroll effect ---
  var header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.style.background = 'rgba(26, 26, 46, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
      } else {
        header.style.background = 'rgba(26, 26, 46, 0.95)';
        header.style.boxShadow = 'none';
      }
    });
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- Active nav highlight ---
  var currentPath = window.location.pathname;
  var navLinks = document.querySelectorAll('.nav a:not(.nav-lang a)');
  navLinks.forEach(function(link) {
    var href = link.getAttribute('href');
    if (href && currentPath.indexOf(href.replace(/^\.\//, '').replace(/\.html$/, '')) !== -1) {
      link.classList.add('active');
    } else if ((currentPath === '/' || currentPath.endsWith('/index.html') || currentPath.endsWith('/')) && href === 'index.html') {
      link.classList.add('active');
    }
  });

})();
