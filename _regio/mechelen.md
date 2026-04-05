---
layout: single-page
name: Mechelen
image: assets/img/social_schrijnwerkerijtobback.png
title: Uw schrijnwerker in de buurt van Mechelen
description: Uw lokale schrijnwerker in Mechelen voor op maat gemaakte houten constructies. Kwaliteit en vakmanschap in elk project
header: Schrijnwerkerij Projecten in Mechelen
subheader: Ontdek ons vakmanschap van onze schrijnwerkerij met projecten in de regio Mechelen.
hero: hero-2
---

{% assign werk_sorted = site.werk | where:"location","Mechelen" | sort: "date" | reverse %}

<section class="fade-in-up">
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8">
        <p>Mechelen en de ruime omgeving behoren tot ons vaste werkgebied. Van statige herenhuizen langs de Dijle tot nieuwbouwprojecten — wij leveren schrijnwerk op maat dat perfect past bij het karakter van elke woning. Onze vakmensen komen graag ter plaatse voor een vrijblijvend adviesgesprek en opmeting.</p>
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
            {% include werk-card.liquid werk=werk %}
          </div>
      {% endfor %}
    </div>
  </div>
</section>

{% include cta-banner.liquid %}
