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

<section class="fade-in-up">
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8">
        <p>In Leuven en omgeving zijn we regelmatig aan de slag. De stad met haar mix van historische panden en moderne architectuur vraagt om schrijnwerk dat zowel karakter als precisie heeft. Of het nu gaat om de restauratie van een herenhuis in het centrum of nieuw maatwerk voor een hedendaagse woning — ons team combineert traditioneel vakmanschap met de nieuwste technieken.</p>
      </div>
    </div>
  </div>
</section>

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
            {% include werk-card.liquid werk=werk %}
          </div>
      {% endfor %}
    </div>
  </div>
</section>

{% include cta-banner.liquid %}
