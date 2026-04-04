---
layout: single-page
name: Drongene
image: assets/img/social_schrijnwerkerijtobback.png
title: Uw schrijnwerker in de buurt van Drongene
description: Uw lokale schrijnwerker in Drongene voor op maat gemaakte houten constructies. Kwaliteit en vakmanschap in elk project
header: Schrijnwerkerij Projecten in Drongene
subheader: Ontdek ons vakmanschap van onze schrijnwerkerij met projecten in de regio Drongene.
hero: hero-2
---

{% assign werk_sorted = site.werk | where:"location","Drongene" | sort: "date" | reverse %}

<section class="fade-in-up">
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8">
        <p>In Drongene hebben we al meerdere projecten mogen realiseren. De streek heeft een eigen bouwstijl met veel aandacht voor detail, en dat sluit perfect aan bij onze filosofie van vakmanschap. Bekijk hieronder onze realisaties in Drongene en omgeving.</p>
      </div>
    </div>
  </div>
</section>

<section id="section-regio">
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
              <a href="{{werk.url}}" class="card-link"><img class="card-img-top" src="{{site.url}}/{{werk.img_thumb}}" alt="{{werk.title}}" loading="lazy"></a>
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

{% include cta-banner.liquid %}
