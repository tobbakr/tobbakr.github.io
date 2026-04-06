---
layout: single-page
image: assets/img/social_schrijnwerkerijtobback.png
permalink: /diensten/
title: Houtbewerking. Binnen- en buitenschrijnwerkerij, maatwerk...
description: "Ontdek onze diensten: binnenschrijnwerkerij, buitenschrijnwerkerij en maatwerk in hout. Schrijnwerkerij Tobback, vakmanschap sinds 1933 in Boortmeerbeek."
date_updated: 2026-04-05
header: "Schrijnwerkerij Diensten — Binnen & Buitenschrijnwerk op Maat"
subheader: "Ramen, deuren, trappen, kasten en meer — vakmanschap sinds 1933"
nav_title: Diensten
nav: true
nav_order: 3
hero: hero-3
---

{% assign diensten_sorted = site.diensten | sort: "importance" %}

<section>
  <div class="container pt-5 pb-5">
    <div class="row">
      <div class="col-md-12">
        <h2>Onze diensten</h2>
        <p>Schrijnwerkerij Tobback biedt drie pijlers van vakmanschap: <strong>binnenschrijnwerkerij</strong> voor uw interieur, <strong>buitenschrijnwerkerij</strong> voor duurzame ramen, deuren en poorten, en volledig <strong>maatwerk</strong> voor unieke projecten. Sinds 1933 combineren we traditionele ambacht met hedendaagse technieken, vanuit ons atelier in Boortmeerbeek voor klanten in heel Vlaams-Brabant.</p>
      </div>
    </div>
    {% for dienst in diensten_sorted %}
        <div class="row mt-5">
            <div class="col-md-6">
                {% include figure.liquid path=dienst.img sizes="(min-width: 768px) 156px, 50vw" alt=dienst.title %}
            </div>
            <div class="col-md-6">
                <h3 >{{dienst.header}}</h3>
                <div class="dienst-sub ">{{dienst.subheader}}</div>
                <p >{{dienst.description}}</p>
                <a href="{{dienst.url}}" class="btn btn-outline-black btn-sm">Lees verder...</a>
            </div>
        </div>
    {% endfor %}
  </div>
</section>

{% include latest_posts.liquid %}
