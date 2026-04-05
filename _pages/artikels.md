---
layout: single-page
image: assets/img/social_schrijnwerkerijtobback.png
permalink: /artikels/
title: Inspiratie en tips van uw schrijnwerker - Artikelen & Advies
description: "Lees onze uitgebreide artikelen en krijg advies van uw schrijnwerker. Ontdek tips over houten ramen, deuren, trappen en meer voor uw project."
header: Inspiratie en tips van uw schrijnwerker
subheader: Ontdek tips over houten ramen, deuren, trappen en meer
nav_title: Artikels
nav: true
nav_order: 5
hero: hero-1
---

{% assign artikels_sorted = site.artikels | sort: "date_created" | reverse %}

<section>
  <div class="container pt-5 pb-5">
    <div class="row">
      <div class="col-md-12">
        <h2>Artikelen &amp; Advies</h2>
        <p class="artikel-listing-intro">Tips, inzichten en inspiratie van onze schrijnwerkers. Van materiaalkeuze tot renovatietips.</p>
      </div>
    </div>
    <div class="row">
      {% for artikel in artikels_sorted %}
        <div class="col-md-6 mb-4">
          <a href="{{ artikel.url | relative_url }}" class="artikel-card-link">
            <div class="artikel-card">
              <h3 class="artikel-card-title">{{ artikel.header }}</h3>
              <p class="artikel-card-desc">{{ artikel.description }}</p>
              <div class="artikel-card-meta">
                {% assign words = artikel.content | number_of_words %}
                {% assign reading_time = words | divided_by: 200 %}
                {% if reading_time == 0 %}{% assign reading_time = 1 %}{% endif %}
                <span><i class="fa-regular fa-clock"></i> {{ reading_time }} min leestijd</span>
                <span class="artikel-card-arrow"><i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </div>
          </a>
        </div>
      {% endfor %}
    </div>
  </div>
</section>
