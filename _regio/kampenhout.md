---
layout: single-page
name: Kampenhout
image: assets/img/social_schrijnwerkerijtobback.png
title: Uw schrijnwerker in de buurt van Kampenhout
description: Uw lokale schrijnwerker in Kampenhout voor op maat gemaakte houten constructies. Kwaliteit en vakmanschap in elk project
header: Schrijnwerkerij Projecten in Kampenhout
subheader: Ontdek ons vakmanschap van onze schrijnwerkerij met projecten in de regio Kampenhout.
hero: hero-2
---

{% assign werk_sorted = site.werk | where:"location","Kampenhout" | sort: "date" | reverse %}

<section class="fade-in-up">
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8">
        <p>Kampenhout ligt op amper een steenworp van ons atelier. We kennen de wijk en haar bewoners, en dat merk je aan onze persoonlijke aanpak. Voor ramen, deuren, poorten of volledige interieurafwerking bent u bij ons aan het juiste adres. Snel bereikbaar, altijd bereid om even langs te komen.</p>
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
