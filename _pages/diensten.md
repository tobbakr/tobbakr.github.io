---
layout: single-page
image: assets/img/social_schrijnwerkerijtobback.png
permalink: /diensten/
title: Diensten
description: Wat we doen? Maak kennis met onze verschillende diensten.
header: Onze diensten
subheader: Maak kennis met onze verschillende diensten.
nav_title: Diensten
nav: true
nav_order: 3
hero: hero-3
---

{% assign diensten_sorted = site.diensten | sort: "importance" %}

<section>
  <div class="container pt-5 pb-5">
    <div class="row">
      <div class="col-md-12">
        <h2>Wat we doen? Maak kennis met onze diensten.</h2>
      </div>
    </div>
    {% for dienst in diensten_sorted %}
        <div class="row mt-5">
            <div class="col-md-6">
                {% include figure.liquid path=dienst.img sizes="(min-width: 768px) 156px, 50vw" alt=dienst.title %}
            </div>
            <div class="col-md-6">
                <h3 >{{dienst.title}}</h3>
                <div class="dienst-sub ">{{dienst.subtitle}}</div>
                <p >{{dienst.description}}</p>
                <a href="{{dienst.url}}" class="btn btn-outline-black btn-sm" role="button" aria-pressed="true" alt="Ontdek meer over {{dienst.title}}">Lees verder...</a>
            </div>
        </div>
    {% endfor %}
  </div>
</section>
