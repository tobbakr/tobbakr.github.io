---
layout: single-page
name: Boortmeerbeek
image: assets/img/social_schrijnwerkerijtobback.png
title: Uw schrijnwerker in de buurt van Boortmeerbeek
description: Uw lokale schrijnwerker in Boortmeerbeek voor op maat gemaakte houten constructies. Kwaliteit en vakmanschap in elk project
header: Schrijnwerkerij Projecten in Boortmeerbeek
subheader: Ontdek ons vakmanschap van onze schrijnwerkerij met projecten in de regio Boortmeerbeek.
hero: hero-2
---

{% assign werk_sorted = site.werk | where:"location","Boortmeerbeek" | sort: "date" | reverse %}

<section class="fade-in-up">
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8">
        <p>Als schrijnwerkerij gevestigd in het hart van Boortmeerbeek zijn wij uw buurtambachtsman. Sinds 1933 werken we vanuit ons atelier aan de Bredepleinstraat voor gezinnen en bedrijven in Boortmeerbeek en omstreken. Van maatwerk keukens en binnendeuren tot buitenramen en veranda's — wij kennen de lokale bouwstijlen en staan altijd dichtbij voor snelle service.</p>
        <a href="/contact/" class="btn btn-primary btn-green btn-sm mt-2">Contacteer ons voor uw project in Boortmeerbeek</a>
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
