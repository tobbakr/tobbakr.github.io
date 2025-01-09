---
layout: single-page
name: Leuven
image: assets/img/social_schrijnwerkerijtobback.png
title: Uw schrijnwerker in de buurt van Leuven
description: Uw lokale schrijnwerker in Leuven voor op maat gemaakte houten constructies. Kwaliteit en vakmanschap in elk project
header: Schrijnwerkerij Projecten in Leuven
subheader: Ontdek ons vakmanschap van onze schrijnwerkerij met projecten in de regio Leuven.
hero: hero-2
---

{% assign werk_sorted = site.werk | where:"location","Leuven" | sort: "date" | reverse %}

<section id="section-regio">
  <div class="container mt-5">
  <div class="row">
      <div class="col-md-12">
        <h2>Maak kennis met onze nieuwe realisaties in de regio {{page.name}}.</h2>
      </div>
    </div>
    <div class="row">
      {% for werk in werk_sorted %}
        <div class="col-xs-12 col-md-6 col-lg-3 mt-5">
            <div class="card rounded-lg shadow-sm">
              <a href="{{werk.url}}" class="card-link"><img class="card-img-top" src="{{site.url}}/{{werk.img_thumb}}" alt="{{werk.title}}"></a>
              <div class="card-body">
                <a href="{{werk.url}}" class="card-link"><h3 class="card-title">{{werk.header}}</h3></a>
                <p class="card-text">{{werk.description}}</p>
                <div><i class="fa-solid fa-location-dot"></i><span class="werk-meta"> {{werk.location}}</span></div>
              </div>
            </div>
          </div>
      {% endfor %}
    </div>
  </div>
</section>
