---
layout: single-page
name: Wespelaar
image: assets/img/social_schrijnwerkerijtobback.png
title: "Schrijnwerker Wespelaar | Maatwerk Schrijnwerkerij Tobback"
description: "Schrijnwerker in Wespelaar (Haacht) voor maatwerk ramen, deuren en interieur. Schrijnwerkerij Tobback, vlakbij uw deur. Bel 0496 15 66 40."
header: "Schrijnwerker in Wespelaar — Maatwerk Schrijnwerkerij"
subheader: Ontdek ons vakmanschap van onze schrijnwerkerij met projecten in de regio Wespelaar.
hero: hero-2
---

{% assign werk_sorted = site.werk | where:"location","Wespelaar" | sort: "date" | reverse %}

<section class="fade-in-up">
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8">

        <p>Wespelaar is een charmante deelgemeente van Haacht, gelegen op slechts een paar kilometer van ons atelier in Boortmeerbeek. De landelijke charme van Wespelaar, met zijn statige kasteelparken, historische hoeves en karaktervolle woningen, vraagt om schrijnwerk dat dit karakter weerspiegelt. Schrijnwerkerij Tobback is letterlijk vlakbij uw deur en brengt al sinds 1933 ambachtelijk maatwerk in hout naar de regio.</p>

        <p>Van een dubbele voordeur in massief eikenhout tot nieuwe raamkozijnen die de authenticiteit van uw woning versterken — wij luisteren naar uw wensen en vertalen die naar een concreet ontwerp. In Wespelaar hebben we onder andere een prachtig dubbele voordeurproject mogen realiseren waarbij het ontwerp perfect aansloot bij de klassieke gevelstijl van de woning. Elke opdracht start met een gratis huisbezoek: we komen ter plaatse, nemen de maten op en bespreken materialen, stijl en budget.</p>

        <p>In ons eigen atelier werken ervaren vakmensen uitsluitend met traditionele houtbewerkingstechnieken en professioneel handgereedschap. Dat levert schrijnwerk op met een perfecte pasvorm en een duurzame afwerking. We gebruiken uitsluitend kwaliteitshout — van Europees eik en beuk tot tropische soorten zoals meranti en afzelia — en beschermen elk werkstuk met professionele lak- of beitsafwerking. Zo geniet u jarenlang van mooi en onderhoudsvriendelijk schrijnwerk.</p>

        <h3>Onze diensten in Wespelaar</h3>

        <ul>
          <li><strong>Binnenschrijnwerkerij</strong> — Maatwerk keukens, kasten, binnendeuren, trappen, wandbekleding en volledige interieurinrichting in massief hout of fineer.</li>
          <li><strong>Buitenschrijnwerkerij</strong> — Houten ramen, buitendeuren, garagepoorten, veranda's, carports, tuinhuizen en gevelbekleding, met optimale isolatie en duurzaamheid.</li>
          <li><strong>Maatwerk</strong> — Unieke meubels, inbouwkasten, bibliotheken, toonbanken en elk ander houtproject dat u zich kunt voorstellen, volledig op maat van uw ruimte en stijl.</li>
        </ul>

        <h3>Waarom kiezen voor Schrijnwerkerij Tobback in Wespelaar?</h3>

        <p>Wespelaar en Boortmeerbeek zijn buren — we kennen de streek, de architectuur en de mensen. Die nabijheid maakt het verschil: we zijn snel ter plaatse voor overleg, tussentijdse controles en eventuele aanpassingen. Onze klanten in Wespelaar waarderen onze rechtstreekse communicatie, vaste aanspreekpunten en transparante offertes. We werken nauw samen met lokale architecten en aannemers, zodat uw project vlot verloopt van ontwerp tot oplevering. Met meer dan negentig jaar ervaring bent u verzekerd van degelijk vakmanschap, recht bij u om de hoek.</p>

        <h3>Veelgestelde vragen over schrijnwerk in Wespelaar</h3>

        <div class="faq-item mb-3">
          <strong>Komt Schrijnwerkerij Tobback naar Wespelaar?</strong>
          <p>Absoluut. Wespelaar ligt op nauwelijks enkele minuten van ons atelier in Boortmeerbeek. We komen graag langs voor een gratis opmeting en adviesgesprek. Bel ons op 0496 15 66 40 of vul het contactformulier in.</p>
        </div>

        <div class="faq-item mb-3">
          <strong>Welke projecten heeft Schrijnwerkerij Tobback in Wespelaar gerealiseerd?</strong>
          <p>In Wespelaar hebben we onder meer dubbele voordeuren, houten raamkozijnen, maatwerk kasten en interieurinrichtingen uitgevoerd. Bekijk onze realisaties hieronder voor een overzicht van recent afgewerkte projecten in de buurt.</p>
        </div>

        <div class="faq-item mb-3">
          <strong>Wat kost schrijnwerk in Wespelaar?</strong>
          <p>De kostprijs varieert naargelang het type project, de gekozen houtsoort en de afwerking. Wij stellen altijd een gedetailleerde en vrijblijvende offerte op na een huisbezoek, zodat u exact weet wat u kunt verwachten. Neem gerust contact op voor een afspraak.</p>
        </div>

        <p>We werken ook in <a href="/regio/boortmeerbeek/">Boortmeerbeek</a>, <a href="/regio/kampenhout/">Kampenhout</a> en <a href="/regio/leuven/">Leuven</a>. Waar u ook woont in de regio, Schrijnwerkerij Tobback staat voor u klaar.</p>

        <a href="/contact/" class="btn btn-primary btn-green btn-sm mt-2">Contacteer ons voor uw project in Wespelaar</a>

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
      "name": "Komt Schrijnwerkerij Tobback naar Wespelaar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absoluut. Wespelaar ligt op nauwelijks enkele minuten van ons atelier in Boortmeerbeek. We komen graag langs voor een gratis opmeting en adviesgesprek. Bel ons op 0496 15 66 40 of vul het contactformulier in."
      }
    },
    {
      "@type": "Question",
      "name": "Welke projecten heeft Schrijnwerkerij Tobback in Wespelaar gerealiseerd?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Wespelaar hebben we onder meer dubbele voordeuren, houten raamkozijnen, maatwerk kasten en interieurinrichtingen uitgevoerd. Bekijk onze realisaties op de pagina voor een overzicht van recent afgewerkte projecten in de buurt."
      }
    },
    {
      "@type": "Question",
      "name": "Wat kost schrijnwerk in Wespelaar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "De kostprijs varieert naargelang het type project, de gekozen houtsoort en de afwerking. Wij stellen altijd een gedetailleerde en vrijblijvende offerte op na een huisbezoek, zodat u exact weet wat u kunt verwachten. Neem gerust contact op voor een afspraak."
      }
    }
  ]
}
</script>
