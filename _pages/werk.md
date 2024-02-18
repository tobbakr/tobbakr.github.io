---
layout: single-page
permalink: /werk/
title: Ons werk
description: Uw schrijnwerker, ons werk. Een kleine greep uit onze recente realisaties. Meer info. Neem zeker contact op
nav: true
nav_order: 2
hero: hero-2

social: true # includes social icons at the bottom of the page
---

{% assign werk_sorted = site.werk | sort: "importance" %}

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
          <div class="card">
            <img class="card-img-top" src="../{{werk.img}}" alt="{{werk.title}}">
            <div class="card-body">
              <h5 class="card-title">{{werk.title}}</h5>
              <p class="card-text">{{werk.description}}</p>
              <a href="{{werk.url}}" class="card-link">Ontdek meer</a>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</section>
