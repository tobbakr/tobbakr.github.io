---
layout: single-page
name: Wezemaal
image: assets/img/social_schrijnwerkerijtobback.png
title: "Schrijnwerker Wezemaal | Maatwerk Schrijnwerkerij Tobback"
description: "Schrijnwerker in Wezemaal voor houten ramen, deuren, tuinhuizen en maatwerk. Schrijnwerkerij Tobback, vakmanschap sinds 1933 in uw buurt."
header: "Schrijnwerker in Wezemaal — Maatwerk Schrijnwerkerij"
subheader: Ontdek ons vakmanschap van onze schrijnwerkerij met projecten in de regio Wezemaal.
hero: hero-2
---

{% assign werk_sorted = site.werk | where:"location","Wezemaal" | sort: "date" | reverse %}

<section class="fade-in-up">
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8">

        <p>Wezemaal, gelegen aan de voet van de Wijngaardberg, is een gemeente waar Schrijnwerkerij Tobback graag en regelmatig werkt. De omgeving biedt een mooie mix van renovatieprojecten in bestaande woningen en nieuwbouwprojecten in de groeiende woonwijken. Het groene, landelijke karakter van Wezemaal vraagt om schrijnwerk dat zowel functioneel als esthetisch op zijn plaats is. Al sinds 1933 leveren wij ambachtelijk maatwerk in hout voor bewoners in de ruime regio.</p>

        <p>In Wezemaal hebben we onder andere een tuinhuis in western red cedar mogen realiseren dat naadloos past in de groene omgeving aan de Wijngaardberg. Van robuuste tuinhuizen en carports tot verfijnde binnendeuren en volledige keukeninrichtingen — elk project wordt op maat ontworpen en vervaardigd in ons eigen atelier. We starten steeds met een gratis huisbezoek waarin we uw wensen bespreken, de situatie ter plaatse bekijken en een vrijblijvende offerte opstellen.</p>

        <p>Onze schrijnwerkers beheersen traditionele houtbewerkingstechnieken tot in de puntjes. Dat vakmanschap garandeert een perfecte pasvorm, een strakke afwerking en een lange levensduur. We werken met duurzame houtsoorten zoals Europees eik, meranti, afzelia en western red cedar, afgestemd op het gebruik en uw budget. Elk werkstuk wordt behandeld met hoogwaardige lak of beits, zodat uw schrijnwerk jarenlang mooi en onderhoudsvriendelijk blijft.</p>

        <h3>Onze diensten in Wezemaal</h3>

        <ul>
          <li><strong>Binnenschrijnwerkerij</strong> — Maatwerk keukens, kasten, binnendeuren, trappen, wandbekleding en volledige interieurinrichting in massief hout of fineer.</li>
          <li><strong>Buitenschrijnwerkerij</strong> — Houten ramen, buitendeuren, garagepoorten, veranda's, carports, tuinhuizen en gevelbekleding, met optimale isolatie en duurzaamheid.</li>
          <li><strong>Maatwerk</strong> — Unieke meubels, inbouwkasten, bibliotheken, toonbanken en elk ander houtproject dat u zich kunt voorstellen, volledig op maat van uw ruimte en stijl.</li>
        </ul>

        <h3>Waarom kiezen voor Schrijnwerkerij Tobback in Wezemaal?</h3>

        <p>Wezemaal ligt dichtbij ons atelier in Boortmeerbeek, waardoor we snel ter plaatse zijn voor opmetingen, tussentijds overleg en plaatsingen. We kennen de lokale bouwstijlen en werken al jarenlang samen met architecten en aannemers in de regio. Onze klanten waarderen onze persoonlijke aanpak: u heeft een vast aanspreekpunt, we communiceren transparant over planning en budget, en we leveren schrijnwerk dat tot in de details is afgewerkt. Met meer dan negentig jaar ervaring combineert Schrijnwerkerij Tobback traditioneel vakmanschap met hedendaagse technieken.</p>

        <h3>Veelgestelde vragen over schrijnwerk in Wezemaal</h3>

        <div class="faq-item mb-3">
          <strong>Komt Schrijnwerkerij Tobback naar Wezemaal?</strong>
          <p>Zeker. Wezemaal ligt dichtbij ons atelier en behoort tot ons vaste werkgebied. We komen graag langs voor een gratis opmeting en adviesgesprek. Bel ons op 0496 15 66 40 of vul het contactformulier in op onze website.</p>
        </div>

        <div class="faq-item mb-3">
          <strong>Welke projecten heeft Schrijnwerkerij Tobback in Wezemaal gerealiseerd?</strong>
          <p>In Wezemaal hebben we onder meer een ceder tuinhuis, houten raamkozijnen, maatwerk binnendeuren en interieurinrichtingen uitgevoerd. Bekijk onze realisaties hieronder voor een overzicht van recent afgewerkte projecten in de buurt.</p>
        </div>

        <div class="faq-item mb-3">
          <strong>Wat kost schrijnwerk in Wezemaal?</strong>
          <p>De kostprijs hangt af van het type project, de gekozen houtsoort en de gewenste afwerking. Wij stellen steeds een gedetailleerde en vrijblijvende offerte op na een huisbezoek, zodat u vooraf exact weet wat u kunt verwachten. Neem gerust contact op voor een afspraak.</p>
        </div>

        <p>We werken ook in <a href="/regio/boortmeerbeek/">Boortmeerbeek</a>, <a href="/regio/leuven/">Leuven</a> en <a href="/regio/kampenhout/">Kampenhout</a>. Waar u ook woont in de regio, Schrijnwerkerij Tobback staat voor u klaar.</p>

        <a href="/contact/" class="btn btn-primary btn-green btn-sm mt-2">Contacteer ons voor uw project in Wezemaal</a>

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
      "name": "Komt Schrijnwerkerij Tobback naar Wezemaal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zeker. Wezemaal ligt dichtbij ons atelier en behoort tot ons vaste werkgebied. We komen graag langs voor een gratis opmeting en adviesgesprek. Bel ons op 0496 15 66 40 of vul het contactformulier in op onze website."
      }
    },
    {
      "@type": "Question",
      "name": "Welke projecten heeft Schrijnwerkerij Tobback in Wezemaal gerealiseerd?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Wezemaal hebben we onder meer een ceder tuinhuis, houten raamkozijnen, maatwerk binnendeuren en interieurinrichtingen uitgevoerd. Bekijk onze realisaties op de pagina voor een overzicht van recent afgewerkte projecten in de buurt."
      }
    },
    {
      "@type": "Question",
      "name": "Wat kost schrijnwerk in Wezemaal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "De kostprijs hangt af van het type project, de gekozen houtsoort en de gewenste afwerking. Wij stellen steeds een gedetailleerde en vrijblijvende offerte op na een huisbezoek, zodat u vooraf exact weet wat u kunt verwachten. Neem gerust contact op voor een afspraak."
      }
    }
  ]
}
</script>
