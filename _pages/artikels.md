---
layout: single-page
image: assets/img/social_schrijnwerkerijtobback.png
permalink: /artikels/
title: Inspiratie en tips van uw schrijnwerker - Artikelen & Advies
description: Lees onze uitgebreide artikelen en krijg advies van uw schrijnwerker. Ontdek tips over houten ramen, deuren, trappen en meer voor jouw project.
header: Inspiratie en tips van uw schrijnwerker
subheader: Ontdek tips over houten ramen, deuren, trappen en meer
nav_title: Artikels
nav: true
nav_order: 4
hero: hero-1
---

{% assign artikels_sorted = site.artikels | sort: "date_created" | reverse %}

<section>
  <div class="container pt-5 pb-5">
    <div class="row">
      <div class="col-md-12">
        <h2>Artikelen & Advies</h2>
      </div>
    </div>
    {% for artikel in artikels_sorted %}
        <div class="row mt-5">
            <div class="col-md-12">
                <h3><a href="{{artikel.url}}">{{artikel.header}}</a></h3>
                <p>{{artikel.description}}</p>
            </div>
        </div>
    {% endfor %}
  </div>
</section>
