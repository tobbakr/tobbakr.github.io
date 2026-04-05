---
layout: single-page
name: Antwerpen
image: assets/img/social_schrijnwerkerijtobback.png
title: Uw schrijnwerker in de buurt van Antwerpen
description: Uw lokale schrijnwerker in Antwerpen voor op maat gemaakte houten constructies. Kwaliteit en vakmanschap in elk project
header: Schrijnwerkerij Projecten in Antwerpen
subheader: Ontdek ons vakmanschap van onze schrijnwerkerij met projecten in de regio Antwerpen.
hero: hero-2
---

{% assign werk_sorted = site.werk | where:"location","Antwerpen" | sort: "date" | reverse %}

<section class="fade-in-up">
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8">
        <p>Ook in de provincie Antwerpen zijn we actief. Van herenhuizen in het Zurenborg-district tot moderne woningen in de rand — ons maatwerk schrijnwerk vindt zijn weg naar heel Antwerpen en omstreken. De iets langere verplaatsing compenseren we met extra zorgvuldig planwerk zodat elk bezoek maximaal rendeert.</p>
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
