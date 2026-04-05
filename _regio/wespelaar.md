---
layout: single-page
name: Wespelaar
image: assets/img/social_schrijnwerkerijtobback.png
title: Uw schrijnwerker in de buurt van Wespelaar
description: Uw lokale schrijnwerker in Wespelaar voor op maat gemaakte houten constructies. Kwaliteit en vakmanschap in elk project
header: Schrijnwerkerij Projecten in Wespelaar
subheader: Ontdek ons vakmanschap van onze schrijnwerkerij met projecten in de regio Wespelaar.
hero: hero-2
---

{% assign werk_sorted = site.werk | where:"location","Wespelaar" | sort: "date" | reverse %}

<section class="fade-in-up">
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8">
        <p>Wespelaar, een deelgemeente van Haacht, ligt vlak bij ons atelier in Boortmeerbeek. De landelijke charme van deze buurt vraagt om schrijnwerk met karakter. Wij maken graag ramen, deuren en maatwerk dat naadloos past bij de typische architectuur van de streek.</p>
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
