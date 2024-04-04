---
layout: single-page
image: assets/img/social_schrijnwerkerijtobback.png
title: Schrijnwerkerij Tobback
description: Traditioneel vakmanschap met hedendaagse precisie. Uw houtbewerker. Uw vakman.
header: Schrijnwerkerij Tobback
subheader: Traditioneel vakmanschap met hedendaagse precisie.
permalink: /
nav: false
nav_order: 1
hero: hero-1
social: true 
---

{% assign diensten_sorted = site.diensten | sort: "importance" %}

<section id="section-home-diensten">
  <div class="container pt-5 pb-5">
    <div class="row">
      <div class="col-md-12">
        <h2 class="text-white">Sterk werk.</h2>
      </div>
    </div>
    <div class="row">
      {% for dienst in diensten_sorted %}
        <div class="col-xs-12 col-md-6 col-lg-4 mb-5">
          <h3 class="text-white">{{dienst.title}}</h3>
          <div class="dienst-sub text-white">{{dienst.subtitle}}</div>
          <p class="text-white">{{dienst.description}}</p>
          <a href="{{dienst.url}}" class="btn btn-outline-light btn-sm" role="button" aria-pressed="true" alt="Ontdek meer over {{dienst.title}}">Lees verder...</a>
        </div>
      {% endfor %}
    </div>
  </div>
</section>


<section id="section-home-overons">
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm">
        <h2>Traditioneel vakmanschap met hedendaagse precisie.</h2>
        <p>Bij Schrijnwerkerij Tobback, gevestigd in het hart van <strong>Boortmeerbeek</strong>, combineren we traditionele vakmanschap met hedendaagse precisie om uw droomprojecten in hout tot leven te brengen.</p>
        <p>Opgericht in 1933, heeft onze familiezaak de kunst van houtbewerking van generatie op generatie doorgegeven, een traditie die met trots wordt voortgezet door onze huidige zaakvoerder, <strong>Kris Tobback</strong>.</p>

        
      </div>
      <div class="col-sm">
        <h3>Grootste zorg en precisie</h3>
        <p>Onze specialisatie in maatwerk omvat alles van sfeervolle ramen en robuuste deuren tot elegante trappen en unieke interieuroplossingen. Of het nu gaat om binnenschrijnwerk of buitenschrijnwerk, elk project krijgt onze volle aandacht en wordt met de grootste zorg en precisie uitgevoerd.</p>

        <h3>Specifieke wensen, maatwerk</h3>
        <p>Door de jaren heen hebben we een sterke reputatie opgebouwd in eigen regio en ver daarbuiten. Wij zijn er trots op dat wij onze klanten unieke, op maat gemaakte houten creaties kunnen aanbieden die zowel qua stijl als functionaliteit aan hun specifieke wensen voldoen.</p>

        <h3>Bouwen, verbouwen? Wij staan klaar!</h3>
        <p>Wij geloven dat elk stuk hout een verhaal te vertellen heeft. Laat ons uw verhaal tot leven brengen met onze deskundige handen en jarenlange ervaring. Neem vandaag nog contact met ons op voor uw project op maat!</p>
      </div>
    </div>
  </div>
</section>

{% include latest_werk.liquid %}



  





