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
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8">
        <p>Ons atelier staat in de <strong>Bredepleinstraat in Boortmeerbeek</strong>. Van daaruit zijn we binnen het half uur in Leuven, Mechelen, Kampenhout, Haacht en de omliggende gemeenten. Die nabijheid is geen detail: ze bepaalt hoe snel we kunnen opmeten, hoe vlot we kunnen bijsturen tijdens de plaatsing, en hoe eenvoudig we later langskomen voor nazorg.</p>

        <p>Hieronder vindt u per gemeente wat we er gerealiseerd hebben en waar we op letten bij de bouwstijlen die er voorkomen.</p>
      </div>
    </div>

    <div class="row mt-4">
      {% assign regios = site.regio | sort: "name" %}
      {% for regio in regios %}
        {% assign projecten = site.werk | where: "location", regio.name %}
        <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
          <div class="card h-100 border-0 shadow-sm regio-card">
            <div class="card-body">
              <h2 class="h5 card-title"><a href="{{ regio.url | relative_url }}">Schrijnwerker {{ regio.name }}</a></h2>
              <p class="card-text">{{ regio.subheader }}</p>
              <p class="text-muted mb-0">
                <small>
                  {% if projecten.size > 0 %}
                    <i class="fa-solid fa-hammer" aria-hidden="true"></i>
                    {{ projecten.size }} {% if projecten.size == 1 %}realisatie{% else %}realisaties{% endif %}
                  {% else %}
                    <i class="fa-solid fa-location-dot" aria-hidden="true"></i> Actief in deze gemeente
                  {% endif %}
                </small>
              </p>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>

    <div class="row mt-3">
      <div class="col-md-8">
        <p>Staat uw gemeente er niet bij? We werken in heel Vlaams-Brabant en daarbuiten — onder meer in Haacht, Keerbergen, Tremelo, Holsbeek, Huldenberg, Melsbroek en Rijmenam. <a href="{{ '/contact/' | relative_url }}">Vraag gerust na</a> of we bij u aan de slag kunnen.</p>
      </div>
    </div>

  </div>
</section>

{% include cta-banner.liquid %}
