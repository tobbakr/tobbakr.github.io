---
layout: single-page
image: assets/img/social_schrijnwerkerijtobback.png
permalink: /werk/
title: Maatwerk Schrijnwerkerij - Binnen & Buiten Projecten
description: Bekijk ons uitgebreide portfolio van maatwerk schrijnwerkerij, inclusief zowel binnen- als buitenschrijnwerk
header: Maatwerk Schrijnwerkerij - Binnen & Buiten Projecten
subheader: Ontdek ons vakmanschap dat elk huis verwarmt
nav_title: Werk
nav: true
nav_order: 2
hero: hero-2
---

{% assign werk_sorted = site.werk | sort: "date" | reverse %}

<section id="section-regio">
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <h2>Maak kennis met onze nieuwe realisaties.</h2>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-md-12">
        <div class="werk-filters">
          <button class="btn btn-sm btn-green werk-filter active" data-filter="all">Alles</button>
          <button class="btn btn-sm btn-outline-secondary werk-filter" data-filter="binnenschrijnwerkerij">Binnenschrijnwerkerij</button>
          <button class="btn btn-sm btn-outline-secondary werk-filter" data-filter="buitenschrijnwerkerij">Buitenschrijnwerkerij</button>
          <button class="btn btn-sm btn-outline-secondary werk-filter" data-filter="maatwerk">Maatwerk</button>
        </div>
      </div>
    </div>
    <div class="row" id="werk-grid">
      {% for werk in werk_sorted %}
        <div class="col-xs-12 col-md-6 col-lg-3 mt-5 werk-item" data-categories="{{ werk.categories | join: ' ' }}">
          {% include werk-card.liquid werk=werk base_url=".." %}
        </div>
      {% endfor %}
    </div>
  </div>
</section>
