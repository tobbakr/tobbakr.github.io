---
layout: single-page
image: assets/img/social_schrijnwerkerijtobback.png
title: "Onze werkregio"
description: "Schrijnwerkerij Tobback werkt vanuit Boortmeerbeek in Leuven, Mechelen, Kampenhout, Haacht en omstreken. Bekijk onze realisaties per gemeente."
header: "Schrijnwerker in uw gemeente"
subheader: "Vanuit ons atelier in Boortmeerbeek zijn we snel ter plaatse in heel Vlaams-Brabant."
permalink: /regio/
nav_title: Regio
nav: true
nav_order: 4
hero: hero-2
date: 2026-08-23
---

<section>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <p>Ons atelier staat in de <strong>Bredepleinstraat in Boortmeerbeek</strong>. Van daaruit zijn we binnen het half uur in Leuven, Mechelen, Kampenhout, Haacht en de omliggende gemeenten. Die nabijheid is geen detail: ze bepaalt hoe snel we kunnen opmeten, hoe vlot we kunnen bijsturen tijdens de plaatsing, en hoe eenvoudig we later langskomen voor nazorg.</p>

        <p>Kies uw gemeente hieronder voor onze realisaties daar en wat de bouwstijlen ter plaatse vragen van het schrijnwerk.</p>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-md-8">
        <h2>Bekijk ons werk per gemeente</h2>
        <ul class="regio-lijst">
          {% assign regios = site.regio | sort: "name" %}
          {% for regio in regios %}
            <li><a href="{{ regio.url | relative_url }}">{{ regio.name }}</a></li>
          {% endfor %}
        </ul>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-md-8">
        <h2>Ook actief in</h2>
        <p>Haacht, Keerbergen, Tremelo, Rijmenam, Holsbeek, Huldenberg, Melsbroek, Grobbendonk en Wakkerzeel. Voor die gemeenten hebben we (nog) geen aparte pagina, maar we komen er wel degelijk aan huis.</p>

        <p>Staat uw gemeente er helemaal niet bij? <a href="{{ '/contact/' | relative_url }}">Vraag gerust na</a> — buiten deze regio komen we ook, afhankelijk van de omvang van het project.</p>
      </div>
    </div>

  </div>
</section>

{% include cta-banner.liquid %}
