---
layout: single-page
name: Kampenhout
image: assets/img/social_schrijnwerkerijtobback.png
title: "Schrijnwerker Kampenhout | Maatwerk Schrijnwerkerij Tobback"
description: "Uw schrijnwerker in Kampenhout, op een steenworp van ons atelier. Ramen, deuren, poorten en interieur op maat. Schrijnwerkerij Tobback sinds 1933."
header: "Schrijnwerker in Kampenhout — Maatwerk Schrijnwerkerij"
subheader: Ontdek ons vakmanschap van onze schrijnwerkerij met projecten in de regio Kampenhout.
hero: hero-2
---

{% assign werk_sorted = site.werk | where:"location","Kampenhout" | sort: "date" | reverse %}

<section class="fade-in-up">
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8">

        <p>Kampenhout is een buurgemeente van Boortmeerbeek en ligt op amper een steenworp van ons atelier aan de Bredepleinstraat. Dat betekent dat we snel ter plaatse zijn voor opmetingen, adviesgesprekken en plaatsingen. Het landelijke karakter van Kampenhout, met zijn villawijken, vrijstaande woningen en groene omgeving, vraagt om schrijnwerk dat zowel robuust als stijlvol is. Schrijnwerkerij Tobback kent de lokale bouwstijlen door en door en levert al sinds 1933 maatwerk in hout voor woningen en bedrijfspanden in de regio.</p>

        <p>Of u nu droomt van nieuwe hardhouten ramen voor uw villa, een op maat gemaakte eiken voordeur, een bi-sectionaalpoort voor uw garage of een volledig interieur in massief hout — wij realiseren het van ontwerp tot en met plaatsing. In Kampenhout hebben we onder andere een bi-sectionaal poortproject mogen uitvoeren waarbij de poort naadloos werd ge&iuml;ntegreerd in de bestaande gevelstijl. Elk project begint met een gratis huisbezoek waarin we uw wensen bespreken, opmeten en een vrijblijvende offerte opstellen.</p>

        <p>Onze schrijnwerkers werken uitsluitend met traditioneel handgereedschap en bewezen technieken. Dat vakmanschap garandeert een perfecte pasvorm, een strakke afwerking en een lange levensduur. We werken met duurzame Europese en tropische houtsoorten zoals eik, meranti, afzelia en western red cedar, steeds afgestemd op het gebruik en uw budget. Bovendien behandelen we elk werkstuk met hoogwaardige afwerkingsproducten zodat uw schrijnwerk jarenlang mooi en functioneel blijft.</p>

        <h3>Onze diensten in Kampenhout</h3>

        <ul>
          <li><strong>Binnenschrijnwerkerij</strong> — Maatwerk keukens, kasten, binnendeuren, trappen, wandbekleding en volledige interieurinrichting in massief hout of fineer.</li>
          <li><strong>Buitenschrijnwerkerij</strong> — Houten ramen, buitendeuren, garagepoorten, veranda's, carports, tuinhuizen en gevelbekleding, met optimale isolatie en duurzaamheid.</li>
          <li><strong>Maatwerk</strong> — Unieke meubels, inbouwkasten, bibliotheken, toonbanken en elk ander houtproject dat u zich kunt voorstellen, volledig op maat van uw ruimte en stijl.</li>
        </ul>

        <h3>Waarom kiezen voor Schrijnwerkerij Tobback in Kampenhout?</h3>

        <p>Omdat we letterlijk om de hoek zitten. Ons atelier in Boortmeerbeek ligt op nauwelijks enkele minuten rijden van Kampenhout, waardoor we snel bereikbaar zijn voor overleg, tussentijdse controles en snelle herstellingen. We kennen de lokale bouwstijlen en regelgeving, en werken al jarenlang samen met architecten en aannemers in de regio. Onze klanten waarderen onze persoonlijke aanpak: u heeft steeds een vast aanspreekpunt en we communiceren transparant over planning, materialen en budget. Vakmanschap sinds 1933, recht bij u om de hoek.</p>

        <h3>Veelgestelde vragen over schrijnwerk in Kampenhout</h3>

        <div class="faq-item mb-3">
          <strong>Hoe snel kan Schrijnwerkerij Tobback in Kampenhout starten?</strong>
          <p>Omdat ons atelier vlakbij Kampenhout ligt, kunnen we doorgaans binnen de week langskomen voor een eerste opmeting en adviesgesprek. De effectieve levertijd hangt af van de complexiteit van uw project en de gekozen materialen, maar gemiddeld rekent u op vier tot acht weken na goedkeuring van de offerte.</p>
        </div>

        <div class="faq-item mb-3">
          <strong>Welke projecten heeft Schrijnwerkerij Tobback in Kampenhout gerealiseerd?</strong>
          <p>In Kampenhout hebben we onder meer bi-sectionaalpoorten, hardhouten raamkozijnen, maatwerk binnendeuren en volledige keukeninrichtingen uitgevoerd. Bekijk onze realisaties hieronder voor een overzicht van recent afgewerkte projecten in de buurt.</p>
        </div>

        <div class="faq-item mb-3">
          <strong>Wat kost een schrijnwerker in Kampenhout?</strong>
          <p>De prijs hangt af van het type project, de gekozen houtsoort en de gewenste afwerking. Wij bieden steeds een gratis en vrijblijvende offerte op maat. Neem contact met ons op en we bespreken uw wensen en budget tijdens een huisbezoek.</p>
        </div>

        <p>We werken ook in <a href="/regio/boortmeerbeek/">Boortmeerbeek</a>, <a href="/regio/wespelaar/">Wespelaar</a> en <a href="/regio/leuven/">Leuven</a>. Waar u ook woont in de regio, Schrijnwerkerij Tobback staat voor u klaar.</p>

        <a href="/contact/" class="btn btn-primary btn-green btn-sm mt-2">Contacteer ons voor uw project in Kampenhout</a>

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

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Hoe snel kan Schrijnwerkerij Tobback in Kampenhout starten?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Omdat ons atelier vlakbij Kampenhout ligt, kunnen we doorgaans binnen de week langskomen voor een eerste opmeting en adviesgesprek. De effectieve levertijd hangt af van de complexiteit van uw project en de gekozen materialen, maar gemiddeld rekent u op vier tot acht weken na goedkeuring van de offerte."
      }
    },
    {
      "@type": "Question",
      "name": "Welke projecten heeft Schrijnwerkerij Tobback in Kampenhout gerealiseerd?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Kampenhout hebben we onder meer bi-sectionaalpoorten, hardhouten raamkozijnen, maatwerk binnendeuren en volledige keukeninrichtingen uitgevoerd. Bekijk onze realisaties op de pagina voor een overzicht van recent afgewerkte projecten in de buurt."
      }
    },
    {
      "@type": "Question",
      "name": "Wat kost een schrijnwerker in Kampenhout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "De prijs hangt af van het type project, de gekozen houtsoort en de gewenste afwerking. Wij bieden steeds een gratis en vrijblijvende offerte op maat. Neem contact met ons op en we bespreken uw wensen en budget tijdens een huisbezoek."
      }
    }
  ]
}
</script>
