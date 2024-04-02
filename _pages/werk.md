---
layout: single-page
permalink: /werk/
title: Werk
description: Hout, Aluminium of PVC. We zijn fier op al onze recente realisaties.
nav: true
nav_order: 2
hero: hero-2

social: true # includes social icons at the bottom of the page
---

{% assign werk_sorted = site.werk | sort: "date" | reverse %}

<section id="section-home-overons">
  <div class="container mt-5">
  <div class="row">
      <div class="col-md-12">
        <h2>Maak kennis met onze nieuwe realisaties.</h2>
      </div>
    </div>
    <div class="row">
      {% for werk in werk_sorted %}
        <div class="col-xs-12 col-md-6 col-lg-3 mt-5">
          <div class="card rounded-lg shadow-sm">
            <img class="card-img-top" src="../{{werk.img_thumb}}" alt="{{werk.title}}">
            <div class="card-body">
              <a href="{{werk.url}}" class="card-link"><h5 class="card-title">{{werk.title}}</h5></a>
              <p class="card-text">{{werk.description}}</p>
              <div class="fs-4 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"></path>
                  </svg>
                  {{werk.location}}
                </div>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</section>
