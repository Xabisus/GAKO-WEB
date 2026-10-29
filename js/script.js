function toggleAccordion(id) {
  const item = document.getElementById(id);
  const panel = document.getElementById('panel-' + id);
  const btn = item.querySelector('.accordion-btn');
  const isOpen = item.classList.contains('open');

  // Close all
  document.querySelectorAll('.accordion-item').forEach(function(el) {
    el.classList.remove('open');
    el.querySelector('.accordion-panel').classList.remove('open');
    el.querySelector('.accordion-btn').setAttribute('aria-expanded', 'false');
  });

  // Open clicked if it was closed
  if (!isOpen) {
    item.classList.add('open');
    panel.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    // Smooth scroll to accordion
    setTimeout(function() {
      item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  }
}

(function initGakoMap() {
  var destinations = [
    {
      name: { eu: 'Berlin', es: 'Berlín', en: 'Berlin' },
      subtitle: { eu: 'Berrikuntza eta Egitura · Azaroa–Abendua 2023', es: 'Innovación y Estructura · Nov–Dic 2023', en: 'Innovation & Structure · Nov–Dec 2023' },
      flag: '🇩🇪', year: '2023', lat: 52.52, lng: 13.405,
      img: 'images/destinos/berlin.jpg',
      desc: {
        eu: 'Berlinen, oinarri teknologikoko proiektuen exekuzioan zentratu ginen, efizientzia eta zorroztasun estrukturaleko kultura baten baitan. Egonaldiak startup alemaniako ekosistema gertutik aztertzeko aukera eman zigun, eskalabilitate eta balidazio teknikoan oinarritutako ikuspegiarengatik ezaguna dena. Lan-metodologia finkatzeko eta Europako industria-berrikuntzako estandarrak ulertzeko etapa gakoa izan zen.',
        es: 'En Berlín, nos centramos en la ejecución de proyectos de base tecnológica bajo una cultura de alta eficiencia y rigor estructural. La estancia nos permitió estudiar de cerca el ecosistema de startups alemán, caracterizado por su enfoque en la escalabilidad y la validación técnica. Fue un periodo clave para consolidar nuestra metodología de trabajo y entender los estándares europeos de innovación industrial.',
        en: 'In Berlin, we focused on executing technology-based projects within a culture of high efficiency and structural rigour. The stay allowed us to study the German startup ecosystem up close, characterised by its focus on scalability and technical validation. It was a key period for consolidating our work methodology and understanding European industrial innovation standards.'
      },
      tags: { eu: ['Berrikuntza', 'Startupak', 'Teknologia'], es: ['Innovación', 'Startups', 'Tecnología'], en: ['Innovation', 'Startups', 'Technology'] }
    },
    {
      name: { eu: 'New York', es: 'Nueva York', en: 'New York' },
      subtitle: { eu: 'Dinamismoa eta Merkatu Globala · Mar–Api 2025', es: 'Dinamismo y Mercado Global · Mar–Abr 2025', en: 'Dynamism & Global Market · Mar–Apr 2025' },
      flag: '🇺🇸', year: '2025', lat: 40.7128, lng: -74.006,
      img: 'images/destinos/new-york.jpg',
      desc: {
        eu: 'New Yorkeko gure esperientzia lehiakortasun handieneneko ingurune batean proiektuen azelerazio bidez markatu zen. Helburua negozio-ekosistema newyorktarra esploratzea zen, non merkatuaren feedback zuzena eta aliantza estrategikoen prospeczioa lehenetsi genituen. Gure balio-proposamenak eskaera global azkar, dinamiko eta oso zorrotz batera egokitzen ikasi genuen.',
        es: 'Nuestra experiencia en Nueva York estuvo marcada por la aceleración de proyectos en un entorno de máxima competitividad. El objetivo fue explorar el ecosistema de business neoyorquino, donde priorizamos la captación de feedback directo del mercado y la prospección de alianzas estratégicas. Aprendimos a adaptar nuestras propuestas de valor a una demanda global rápida, dinámica y altamente exigente.',
        en: 'Our New York experience was defined by accelerating projects in a highly competitive environment. The goal was to explore the New York business ecosystem, where we prioritised gathering direct market feedback and prospecting strategic alliances. We learnt to adapt our value propositions to a fast, dynamic and highly demanding global market.'
      },
      tags: { eu: ['Negozioa', 'Merkatu Globala', 'Estrategia'], es: ['Negocio', 'Mercado Global', 'Estrategia'], en: ['Business', 'Global Market', 'Strategy'] }
    },
    {
      name: { eu: 'India', es: 'India', en: 'India' },
      subtitle: { eu: 'Moldagarritasuna eta Inpaktua · Urt–Ots 2026', es: 'Adaptabilidad y Soluciones de Impacto · Ene–Feb 2026', en: 'Adaptability & Impact Solutions · Jan–Feb 2026' },
      flag: '🇮🇳', year: '2026', lat: 20.5937, lng: 78.9629,
      img: 'images/destinos/india.jpg',
      desc: {
        eu: 'Indian, baliabideen optimizaziora eta inpaktuaren eskalabilitatera zuzendutako proiektuak garatu genituen. Frugalitatearen eta eskala handiko arazo konplexuak ebaztearen bidez definitutako ekosisteman murgilduz, heterogeneotasun handiko testuinguruetan soluzio arinak diseinatzen ikasi genuen. Eraginkortasun operatiboa garatzeko eta bolumen handiko merkatuetako negozio-eredu berriak ulertzeko etapa ezinbestekoa izan zen.',
        es: 'En India, desarrollamos proyectos orientados a la optimización de recursos y la escalabilidad de impacto. La inmersión en su ecosistema, definido por la frugalidad y la resolución de problemas complejos a gran escala, nos permitió aprender a diseñar soluciones ágiles en contextos de alta heterogeneidad. Fue una etapa esencial para desarrollar resiliencia operativa y entender los modelos de negocio emergentes en mercados de gran volumen.',
        en: 'In India, we developed projects focused on resource optimisation and impact scalability. Immersion in its ecosystem, defined by frugality and solving complex problems at scale, allowed us to learn to design agile solutions in highly heterogeneous contexts. It was an essential stage for developing operational resilience and understanding emerging business models in high-volume markets.'
      },
      tags: { eu: ['Frugaltasuna', 'Eragin Soziala', 'Eskala'], es: ['Frugalidad', 'Impacto Social', 'Escala'], en: ['Frugality', 'Social Impact', 'Scale'] }
    },
    {
      name: { eu: 'Hego Korea', es: 'Corea del Sur', en: 'South Korea' },
      subtitle: { eu: 'Teknologia eta Etorkizuneko Joerak · Mar–Api 2026', es: 'Tecnología y Tendencias de Futuro · Mar–Abr 2026', en: 'Technology & Future Trends · Mar–Apr 2026' },
      flag: '🇰🇷', year: '2026', lat: 37.5665, lng: 126.978,
      img: 'images/destinos/corea-del-sur.jpg',
      desc: {
        eu: 'Hego Korean gure egonaldia teknologia puntakorreko eta digitalizazio aurreratuko proiektuetan zentratu zen. Ekosistema aztertuz, kultura korporatibo tradizionalaren eta berrikuntza etenarrazalearen arteko integrazio naturala ikusi genuen. Esperientzia honek lan-metodologia agil eta zehaztasun handikoak txertatzen lagundu digu, datozen urteetan merkatu globalaren joerak aurreikusteko ezinbestekoak.',
        es: 'Nuestra estancia en Corea del Sur se centró en proyectos de vanguardia tecnológica y digitalización avanzada. Al analizar su ecosistema, fuimos testigos de la integración natural entre la cultura corporativa tradicional y la innovación disruptiva. Esta experiencia nos ha permitido incorporar metodologías de trabajo ágil y de alta precisión, esenciales para anticipar las tendencias del mercado global en los próximos años.',
        en: 'Our stay in South Korea focused on cutting-edge technology and advanced digitalisation projects. By analysing its ecosystem, we witnessed the natural integration between traditional corporate culture and disruptive innovation. This experience allowed us to incorporate agile, high-precision work methodologies essential for anticipating global market trends in the coming years.'
      },
      tags: { eu: ['Teknologia', 'Digitalizazioa', 'Berrikuntza'], es: ['Tecnología', 'Digitalización', 'Innovación'], en: ['Technology', 'Digitalisation', 'Innovation'] }
    }
  ];

  window._gakoDestinations = destinations;

  function buildMap() {
    if (window._gakoMapBuilt) return;
    window._gakoMapBuilt = true;

    var map = L.map('gako-map', {
      center: [28, 20],
      zoom: 2,
      zoomControl: true,
      scrollWheelZoom: false,
      attributionControl: true
    });

    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles © <a href="https://www.esri.com/">Esri</a> — Esri, HERE, Garmin, © OpenStreetMap contributors',
      maxZoom: 10
    }).addTo(map);

    var activeMarkerEl = null;
    var panelDefault = document.getElementById('panel-default');
    var countryPanel = document.getElementById('country-panel');

    destinations.forEach(function(dest) {
      var el = document.createElement('div');
      el.className = 'gako-marker';
      el.innerHTML = dest.flag;
      el.title = dest.name.es;

      var marker = L.marker([dest.lat, dest.lng], {
        icon: L.divIcon({ html: el, className: '', iconSize: [44, 44], iconAnchor: [22, 22] })
      }).addTo(map);

      marker.on('click', function() {
        if (activeMarkerEl) activeMarkerEl.classList.remove('active');
        el.classList.add('active');
        activeMarkerEl = el;
        window._gakoActiveDestination = dest;

        var lang = window.currentLang || 'eu';
        document.getElementById('country-img').src = dest.img;
        document.getElementById('country-img').alt = dest.name[lang] || dest.name.es;
        document.getElementById('country-flag').textContent = dest.flag;
        document.getElementById('country-year').textContent = dest.year;
        document.getElementById('country-name').textContent = dest.name[lang] || dest.name.es;
        document.getElementById('country-subtitle').textContent = dest.subtitle[lang] || dest.subtitle.es;
        document.getElementById('country-desc').textContent = dest.desc[lang] || dest.desc.es;

        var tagsEl = document.getElementById('country-tags');
        var tags = dest.tags[lang] || dest.tags.es;
        tagsEl.innerHTML = tags.map(function(t){ return '<span class="tag tag-blue">' + t + '</span>'; }).join('');

        panelDefault.style.display = 'none';
        countryPanel.classList.add('open');

        map.flyTo([dest.lat, dest.lng], 4, { duration: 1.2 });
      });
    });

    window._gakoMap = map;
  }

  // Build immediately if Leaflet is ready, otherwise wait
  function tryBuild() {
    if (typeof L !== 'undefined') {
      buildMap();
    } else {
      setTimeout(tryBuild, 100);
    }
  }

  // Also expose for the goTo() system
  window._gakoMapInit = function() {
    tryBuild();
    setTimeout(function() {
      if (window._gakoMap) window._gakoMap.invalidateSize();
    }, 400);
  };

  // Run on DOMContentLoaded or immediately
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', tryBuild);
  } else {
    tryBuild();
  }
})();

// --- Navbar scroll effect ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// --- Hamburger menu ---
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const hamBars = document.querySelectorAll('.ham-bar');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.contains('open');
  if (isOpen) {
    mobileMenu.classList.remove('open');
    hamBars[0].style.transform = '';
    hamBars[1].style.opacity = '1';
    hamBars[2].style.transform = '';
    hamBars[2].style.width = '1rem';
  } else {
    mobileMenu.classList.add('open');
    hamBars[0].style.transform = 'rotate(45deg) translate(4px, 5px)';
    hamBars[1].style.opacity = '0';
    hamBars[2].style.transform = 'rotate(-45deg) translate(4px, -5px)';
    hamBars[2].style.width = '1.5rem';
  }
});

function closeMobile() {
  mobileMenu.classList.remove('open');
  hamBars[0].style.transform = '';
  hamBars[1].style.opacity = '1';
  hamBars[2].style.transform = '';
  hamBars[2].style.width = '1rem';
}

// --- Fade-in on scroll (Intersection Observer) ---
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

fadeEls.forEach(el => observer.observe(el));

// --- Contact form validation ---
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  let valid = true;

  // Name
  const nameMsgs = nameInput.parentElement.querySelectorAll('.error-msg');
  if (!nameInput.value.trim()) {
    nameInput.classList.add('error');
    nameMsgs.forEach(m => m.classList.remove('hidden'));
    valid = false;
  } else {
    nameInput.classList.remove('error');
    nameMsgs.forEach(m => m.classList.add('hidden'));
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailMsgs = emailInput.parentElement.querySelectorAll('.error-msg');
  if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
    emailInput.classList.add('error');
    emailMsgs.forEach(m => m.classList.remove('hidden'));
    valid = false;
  } else {
    emailInput.classList.remove('error');
    emailMsgs.forEach(m => m.classList.add('hidden'));
  }

  // Message
  const msgMsgs = messageInput.parentElement.querySelectorAll('.error-msg');
  if (!messageInput.value.trim()) {
    messageInput.classList.add('error');
    msgMsgs.forEach(m => m.classList.remove('hidden'));
    valid = false;
  } else {
    messageInput.classList.remove('error');
    msgMsgs.forEach(m => m.classList.add('hidden'));
  }

  if (valid) {
    const btn = document.getElementById('submit-btn');
    btn.textContent = 'Enviando...';
    btn.disabled = true;
    btn.style.opacity = '0.7';

    setTimeout(() => {
      contactForm.style.display = 'none';
      formSuccess.classList.add('show');
    }, 1000);
  }
});

// Clear error on input
document.querySelectorAll('.form-input').forEach(input => {
  input.addEventListener('input', () => {
    input.classList.remove('error');
    const parent = input.parentElement;
    parent.querySelectorAll('.error-msg').forEach(m => m.classList.add('hidden'));
  });
});

function goTo(pageId) {
  // Nor Gara ya está dentro de Hasiera
  if (pageId === 'quienes') {
    goTo('inicio');
    setTimeout(() => document.getElementById('quienes').scrollIntoView({behavior: 'smooth'}), 350);
    return;
  }

  // Hide all pages
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active', 'page-enter');
  });

  // Show target page
  const target = document.getElementById('page-' + pageId);
  if (!target) return;
  target.classList.add('active', 'page-enter');

  // Update nav active state
  document.querySelectorAll('.nav-link').forEach(a => {
    a.classList.remove('current');
    const onclick = a.getAttribute('onclick') || '';
    if (onclick.includes("'" + pageId + "'")) a.classList.add('current');
  });

  // Ocultar navbar y footer en privacidad, legal y cookies
  const navbarEl = document.getElementById('navbar');
  if (navbarEl) navbarEl.style.display = (pageId === 'privacy' || pageId === 'legal' || pageId === 'cookies') ? 'none' : '';
  const mainFooter = document.getElementById('main-footer');
  if (mainFooter) mainFooter.style.display = (pageId === 'privacy' || pageId === 'legal' || pageId === 'cookies') ? 'none' : '';

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Re-trigger fade-in animations on the new page
  setTimeout(() => {
    target.querySelectorAll('.fade-in').forEach(el => {
      el.classList.remove('visible');
      setTimeout(() => el.classList.add('visible'), 50);
    });
    // Re-init map if going to extranjero
    if (pageId === 'extranjero' && window._gakoMapInit) window._gakoMapInit();
  }, 50);

  // Update browser URL hash
  history.pushState(null, '', '#' + pageId);
}

// Handle back/forward browser buttons
window.addEventListener('popstate', () => {
  const page = location.hash.replace('#', '') || 'inicio';
  goTo(page);
});

// Init on load based on hash
document.addEventListener('DOMContentLoaded', () => {
  const page = location.hash.replace('#', '') || 'inicio';
  goTo(page);
});

const translations = {
  eu: {
    "nav.inicio": "Hasiera",
    "nav.quienes": "Nor Gara",
    "nav.equipo": "Taldea",
    "nav.proyectos": "Proiektuak",
    "nav.extranjero": "Atzerrira",
    "nav.contacto": "Kontaktua",
    "nav.cta": "Lan egin dezagun",
    "hero.line1": "Pertsonak",
    "hero.line2": "Konektatzen.",
    "hero.line3": "Etorkizuna",
    "hero.line4": "Sortzen.",
    "hero.subtitle": "Talde ekintzaile bat gara, gure lurraldearen etorkizuna sormena, berrikuntza eta ilusioarekin sortu eta zaintzeko konpromiso sendoa duena.",
    "hero.btn1": "Gako ezagutu",
    "hero.btn2": "Proiektuak ikusi",
    "stats.projects": "Proiektu",
    "stats.countries": "Herrialde",
    "stats.edition": "Edizioa",
    "about.label": "Guri Buruz",
    "about.title1": "Nor",
    "about.title2": "Gara",
    "about.p1": "GAKO gara talde ekintzaile bat, gure lurraldearen etorkizuna <strong style=\"color:#598196;font-weight:600;\">sormena</strong>, <strong style=\"color:#598196;font-weight:600;\">berrikuntza</strong> eta <strong style=\"color:#598196;font-weight:600;\">ilusioa</strong>ren bidez sortu eta zaintzeko konpromiso sendoa duena.",
    "about.p2": "",
    "about.btn": "Gure lana ezagutu",
    "about.pillar1.title": "Maitasuna",
    "about.pillar1.desc": "Pasioa gure motorra da proiektu bakoitzean.",
    "about.pillar2.title": "Ilusioa",
    "about.pillar2.desc": "Berrikuntza sortzeko gogo bizia.",
    "about.pillar3.title": "Konpromezua",
    "about.pillar3.desc": "Lurraldearekiko eta pertsonekiko leialtasuna.",
    "about.pillar4.title": "Indarra",
    "about.pillar4.desc": "Erronka guztien aurrean ambizioz jokatzea.",
    "projects.label": "Gure Proiektuak",
    "projects.title1": "Gure",
    "projects.title2": "Proiektuak",
    "projects.subtitle": "Sormena, eragin soziala eta estrategia uztartzen dituzten proiektu errealak. Klikatu arlo bakoitzean ezagutzeko.",
    "contact.label": "Jarri Harremanetan",
    "contact.title1": "Hitz egin",
    "contact.title2": "dezagun",
    "contact.title3": "proiektuaz",
    "contact.desc": "Eskuartean duzun erronka kontaiguzu. Zure egoera aztertuko dugu eta zure erakundea eraldatzeko ikuspegi egokiena proposatuko dizugu.",
    "contact.form.name": "Izena *",
    "contact.form.name.ph": "Zure izena",
    "contact.form.email": "Emaila *",
    "contact.form.company": "Enpresa",
    "contact.form.company.ph": "Zure enpresaren izena",
    "contact.form.message": "Mezua *",
    "contact.form.message.ph": "Kontaiguzu zure erronka edo proiektua...",
    "contact.form.send": "Mezua bidali",
    "footer.desc": "Talde ekintzaile independentea, lurraldearen etorkizuna sormena eta ilusioarekin eraikitzen.",
    "footer.company": "Enpresa",
    "footer.about": "Nor Gara",
    "footer.team": "Gure Taldea",
    "footer.abroad": "Atzerriko Egonaldia",
    "footer.services": "Zerbitzuak",
    "footer.projects": "Proiektuak",
    "footer.contact": "Kontaktua",
    "footer.copy": "Gako © 2026 · Eskubide guztiak erreserbatuta · Irun, Gipuzkoa",
    "footer.privacy": "Pribatutasun Politika",
    "footer.legal": "Lege Oharra",
    "footer.cookies": "Cookieak",
    "cookiebar.text": "Web honek cookieak erabiltzen ditu nabigazio-esperientzia hobetzeko.",
    "cookiebar.more": "Informazio gehiago",
    "cookiebar.reject": "Ukatu",
    "cookiebar.accept": "Onartu",
    "legal.back": "Itzuli",
    "legal.label": "Informazio juridikoa",
    "legal.title1": "Lege",
    "legal.title2": "Oharra",
    "legal.s1.title": "Lege Oharra",
    "legal.s1.text": "Ongi etorri <strong style=\"color:#598196;\">ASOCIACIÓN ESTUDIANTIL JUNIOR EMPRESA GAKO<\/strong> (aurrerantzean, GAKO) erakundearen web orrialdera. G56586787 IFZ zenbakiarekin eta Leandro Agirretxe Plazatxoa, 1, 20304 Irun, Gipuzkoa helbidean. Kontaktua <a href=\"mailto:gakoteamcompany@gakotc.com\" class=\"text-[#598196] hover:underline\">gakoteamcompany@gakotc.com<\/a>, AS\/G\/25290\/2023 zenbakiarekin Elkarteen Erregistroan inskribatuta.",
    "legal.s2.title": "Jabetza Intelektuala",
    "legal.s2.text": "Web gune honetako edukiak, testuak, irudiak, soinuak, animazioak eta abar, baita haren diseinu grafikoa eta iturburu-kodea ere, jabetza intelektual eta industrialaren gaineko espainiar legediak babesten ditu GAKOren alde. Beraz, debekatuta dago haien erreprodukzioa, banaketa edo komunikazio publikoa, osorik nahiz zatika, GAKOren berariazko baimenik gabe.",
    "legal.s3.title": "Webeko edukia eta estekak",
    "legal.s3.text": "GAKOn ez gara arduratzen gure web orrialdearen edukien erabilera txarraz. Era berean, ez dugu inolako erantzukizunik hartzen web gune honetatik estekatuta dauden hirugarrenen web orrialdeetan dagoen informazioagatik.",
    "legal.s4.title": "Web orrialdearen eguneratzea eta aldaketa",
    "legal.s4.text": "GAKOk bere web guneko informazioa zein haren konfigurazioa eta aurkezpena aldatzeko edo ezabatzeko eskubidea gordetzen du, aurrez jakinarazi gabe eta inolako erantzukizunik hartu gabe.",
    "legal.s5.title": "Alderdi teknikoei buruzko argibideak",
    "legal.s5.text": "GAKOk ez du erantzukizunik hartzen Interneteko sarean konexio bitartean gerta litezkeen arazo teknikoetatik edo informatika-ekipoen hutsegiteetatik eratorri daitezkeen kalteegatik, ezta hirugarren pertsonek GAKOren kontroletik kanpoko legez kanpoko intromisio bidez eragin ditzaketen kalteegatik ere.",
    "legal.s6.title": "Arduradunaren identifikazioa",
    "legal.s6.text": "<strong style=\"color:#598196;\">ASOCIACIÓN ESTUDIANTIL JUNIOR EMPRESA GAKO<\/strong> · IFZ G56586787 · Leandro Agirretxe Plazatxoa, 1, 20304 Irun, Gipuzkoa.",
    "legal.s6.contact": "Kontaktua",
    "team.label": "Gure Taldea",
    "team.title1": "Gure",
    "team.title2": "Taldea",
    "team.subtitle": "Talde askotarikoa, pasioduna eta misio amankomunarekin: pertsonak eta erakundeak elkarrekin urrunago iristeko.",
    "abroad.label": "Atzerriko Egonaldia",
    "abroad.title1": "Gure Atzerriko",
    "abroad.title2": "Egonaldia",
    "abroad.title3": "Munduan",
    "abroad.desc": "Ikastera bidaiatzen dugu. Lau helmugatan berrikuntza, UX eta ongizate organizazionaleko ekosistemak esploratu ditugu.",
    "abroad.stat.countries": "Herrialdeak",
    "abroad.stat.years": "Urteak",
    "abroad.stat.people": "Pertsonak",
    "abroad.map.hint": "Egonaldia arakatzeko markagailu bat sakatu",
    "abroad.map.default": "Mapa gaineko herrialde bat<br>hautatu gure<br>esperientzia ikusteko",
    "contact.location": "Kokapena",
    "contact.success.title": "Mezua bidali da!",
    "contact.success.desc": "24 orduren buruan harremanetan jarriko gara.",
    "privacy.back": "Itzuli",
    "privacy.label": "Lege Informazioa",
    "privacy.title": "Pribatutasun Politika",
    "privacy.id.title": "Arduradunaren Identifikazioa",
    "privacy.contact": "Kontaktua",
    "privacy.who.title": "Nor da datu-tratamenduaren arduraduna?",
    "privacy.who.text": "Pribatutasun politika honek interesdunak GAKOri emandako izaera pertsonaleko datu guztiei eta GAKOk bere web orrien eta komunikazio-bitartekoen bidez eskaintzen dituen jarduera eta zerbitzuetan interesa duten pertsona fisiko guztiei aplikatzen zaie. GAKOren Pribatutasun Politikaren helburua da datu pertsonalen tratamenduari buruzko informazioa gardentasunez aurkeztea, indarreko araudia betez.",
    "privacy.purpose.title": "Zein helburutarako tratatzen ditugu zure datu pertsonalak?",
    "privacy.purpose.text": "GAKOk Tratamenduen Jardueren Erregistro bat du, arduradun gisa egiten dituen tratamendu bakoitza zehaztuz. Informazio gehiago nahi izanez gero, GAKOrekin jar zaitezke harremanetan identifikatutako edozein kanaletan.",
    "privacy.retention.title": "Zenbat denboran gordetzen ditugu zure datuak?",
    "privacy.retention.text": "GAKOk eragindakoen datuak gordeko ditu erakundearekin duten harremanak irauten duen bitartean eta, ondoren, aplikatu beharreko artxibo eta dokumentazio araudian ezarritakoaren arabera.",
    "privacy.access.title": "Nork du sarbidea zure datu pertsonaletara?",
    "privacy.access.text": "GAKOk datu pertsonalen lagapenak edo komunikazioak egin ditzake indarreko legeriaren arabera hala eskatzen den kasuetan Herri Administrazioekin dituen betebeharrak betetzeko.",
    "privacy.rights.title": "Zeintzuk dira eragindakoen eskubideak?",
    "privacy.rights.intro": "Ondorengo eskubideak erabil ditzakezula jakinarazten dizugu:",
    "privacy.rights.1": "Zure datu pertsonaletara sarbidea izateko eskubidea, zeintzuk tratatzen ari diren jakiteko.",
    "privacy.rights.2": "Datu pertsonal okerrak zuzentzeko eskubidea.",
    "privacy.rights.3": "Zure datu pertsonalak ezabatzeko eskubidea, hori posible denean.",
    "privacy.rights.4": "Zure datu pertsonalen tratamendua mugatzeko eskubidea.",
    "privacy.rights.5": "Zure datu pertsonalen tratamenduaren aurka egiteko eskubidea.",
    "privacy.rights.6": "Zure datuen eramangarritasun-eskubidea, legezko oinarria zure baimena denean.",
    "privacy.rights.contact": "Eskubide horiek doan erabil ditzakezu, idatzizko eskabide bidez:",
    "privacy.withdraw.title": "Baimena kentzea eta komunikazio komertzialak",
    "privacy.withdraw.text": "Interesdunak edozein unetan komunikazio komertzialak jasotzeko emandako baimena ezeztatu dezake, komunikazio bakoitzean dagoen esteka sakatuz edo infogako@gakotc.com-era idatziz.",
    "privacy.security.title": "Zer segurtasun neurri ditugu ezarrita?",
    "privacy.security.text": "GAKOk datu pertsonalen sekretu-betebeharra eta gorde-betebeharra betetzen ditu, eta aldaketa, galera, tratamendu edo baimenik gabeko sarbidea ekiditeko beharrezkoak diren neurriak hartzen ditu.",
    "privacy.links.title": "Estekak",
    "privacy.links.text": "GAKOren web orriak GAKOk kontrolatzen ez dituen beste gune batzuetara hiperloturen bidez egin dezake. GAKOk ez du bermatzen eta ez da erantzule bere gain hartzen atzerriko gune horien edukiengatik.",
    "privacy.update.title": "Pribatutasun Politikaren eguneratzea",
    "privacy.update.text": "GAKOk Pribatutasun Politika aldatu ahal izango du indarreko legeriaren arabera. Aldaketa oro Eragindakoari jakinaraziko zaio. Azken eguneraketa: 2025.",
    "rat.label": "Tratamenduen Jardueren Erregistroa",
    "rat.col.activity": "Jarduera",
    "rat.col.purpose": "Helburua",
    "rat.col.legal": "Oinarri juridikoa",
    "rat.col.source": "Jatorria",
    "rat.col.category": "Datu kategoria",
    "rat.col.recipients": "Hartzaileak",
    "rat.col.deletion": "Ezabatze epea",
    "rat.r1.activity": "Bazkide pertsonak",
    "rat.r1.purpose": "Bazkide pertsonaren kudeaketa",
    "rat.r1.source": "Interesduna bera",
    "rat.r1.category": "Identifikazio-, ekonomia-, lanbide- eta curriculum-datuak",
    "rat.r1.recipients": "Elkarte Erregistroa, Bankuak",
    "rat.r1.deletion": "6 urte harremanaren amaieratik",
    "rat.r2.activity": "Kontaktu pertsonak",
    "rat.r2.purpose": "Kontaktu-datu basea kudeatzea",
    "rat.r2.source": "Interesduna edo ordezkari legala",
    "rat.r2.category": "Identifikazio- eta kontaktu-datuak",
    "rat.r2.recipients": "Ez daude aurreikusita",
    "rat.r2.deletion": "Mugagabea / ezabatze eskaeraraino",
    "rat.r3.activity": "Ekitaldien kudeaketa",
    "rat.r3.purpose": "Bertaratzaileen inskripzioa eta kudeaketa (HSTLR)",
    "rat.r3.source": "Interesduna edo ordezkari legala",
    "rat.r3.category": "Identifikazio- eta kontaktu-datuak",
    "rat.r3.recipients": "Ez daude aurreikusita",
    "rat.r3.deletion": "5 urte exigigarritasunetik",
    "rat.r4.activity": "Web erabiltzaileak",
    "rat.r4.purpose": "Informazio-eskatzaileen eta web kontaktuaren kudeaketa",
    "rat.r4.source": "Interesduna edo ordezkari legala",
    "rat.r4.category": "Kontaktu-datuak",
    "rat.r4.recipients": "Ez daude aurreikusita",
    "rat.r4.deletion": "5 urte exigigarritasunetik",
    "rat.r5.activity": "Kontsumitzaileak eta bezero arreta",
    "rat.r5.purpose": "Lineako dendako kontsumitzaileen kudeaketa",
    "rat.r5.source": "Interesduna edo ordezkari legala",
    "rat.r5.category": "Identifikazio-, ekonomia- eta kontaktu-datuak",
    "rat.r5.recipients": "Zerga administrazioak, Bankuak",
    "rat.r5.deletion": "5 urte exigigarritasunetik",
    "rat.r6.activity": "Administrazioa",
    "rat.r6.purpose": "Bezeroen administrazio- eta kontabilitate-kudeaketa",
    "rat.r6.source": "Interesduna edo ordezkari legala",
    "rat.r6.category": "Identifikazio-, ekonomia- eta kontaktu-datuak",
    "rat.r6.recipients": "Zerga administrazioak, Bankuak, zerga aholkularitza",
    "rat.r6.deletion": "6 urte azken kontu-idazpenetik",
    "rat.r7.activity": "Sare sozialen kudeaketa (Arduraduna)",
    "rat.r7.purpose": "Sare sozialen kudeaketa — BAT IZAN",
    "rat.r7.source": "Interesduna bera",
    "rat.r7.category": "Identifikazio-, ekonomia- eta kontaktu-datuak",
    "rat.r7.recipients": "Ez daude aurreikusita",
    "rat.r7.deletion": "5 urte exigigarritasunetik",
    "cookies.back": "Itzuli",
    "cookies.label": "Informazio juridikoa",
    "cookies.title1": "Cookie",
    "cookies.title2": "Politika",
    "cookies.intro1": "<strong style=\"color:#598196;\">ASOCIACIÓN ESTUDIANTIL JUNIOR EMPRESA GAKO<\/strong>-k (aurrerantzean, GAKO) bere web guneetan cookien erabilerari buruz informatu nahi du.",
    "cookies.intro2": "Cookieak web orrien bidez zure gailuan deskargatu daitezkeen fitxategiak dira. Informazioaren gizarteko zerbitzu ugari eskaintzeko ezinbesteko tresnak dira. Besteak beste, web gune bati erabiltzailearen edo gailuaren nabigazio-ohiturei buruzko informazioa gordetzeko eta berreskuratzeko aukera ematen diote eta, lortutako informazioaren arabera, erabiltzailea ezagutzeko eta eskainitako zerbitzua hobetzeko erabil daitezke.",
    "cookies.types.title": "Cookie motak",
    "cookies.types.p1": "Bi cookie mota bereiz daitezke, cookieak bidaltzen diren domeinua kudeatzen duen eta lortutako datuak tratatzen dituen entitatearen arabera: cookie propioak eta hirugarrenen cookieak.",
    "cookies.types.p2": "Gainera, saioko cookieak edo iraunkorrak bereizten ditugu, bezeroaren nabigatzailean gordetzen diren denbora-epearen arabera.",
    "cookies.types.p3": "Azkenik, beste sailkapen bat dago lortutako datuak tratatzen diren helburuaren arabera bost cookie motarekin: cookie teknikoak, pertsonalizazio-cookieak, analisi-cookieak, publizitate-cookieak eta portaera-publizitate cookieak.",
    "cookies.types.p4": "LSSIren 22.2 artikuluan ezarritako betebeharretatik salbuetsita daude ondorengo helburuetako bat edo batzuetarako erabilitako cookieak:",
    "cookies.types.li1": "Erabiltzailearen ekipoa eta sarea arteko komunikazioa soilik ahalbidetzen dutenak.",
    "cookies.types.li2": "Erabiltzaileak berariaz eskatutako zerbitzu bat eskaintzeko.",
    "cookies.types.p5": "29. Artikuluko Lan Taldeak bere <a href=\"http://ec.europa.eu/justice/data-protection/article-29/documentation/opinion-recommendation/files/2012/wp194_es.pdf\" target=\"_blank\" class=\"text-[#598196] hover:underline\">4\/2012 Irizpenean<\/a> salbuetsitako cookieen artean honakoak daudela interpretatu du:",
    "cookies.types.li3": "«Erabiltzailearen sarrera» cookieak",
    "cookies.types.li4": "Erabiltzailearen autentifikazio edo identifikazio cookieak (saiokoak soilik)",
    "cookies.types.li5": "Erabiltzailearen segurtasun-cookieak",
    "cookies.types.li6": "Multimedia erreproduzitzailearen saio-cookieak",
    "cookies.types.li7": "Karga-orekatzeko saio-cookieak",
    "cookies.types.li8": "Erabiltzaile-interfazearen pertsonalizazio-cookieak",
    "cookies.types.li9": "Eduki sozialak trukatzeko osagarri (plug-in) cookieak",
    "cookies.used.title": "Webgunean erabilitako cookieak",
    "cookies.wp.cookillian": "Webgune honetan cookien erabilerari buruzko zure lehentasunak gordetzen ditu.",
    "cookies.wp.test": "WordPressentzat cookieak gorde daitezkeen ala ez zehazten laguntzen du. Gunearen funtzionamendurako beharrezkoa.",
    "cookies.wp.settings": "WordPressen zure lehentasun pertsonalak gogoratzen laguntzen du.",
    "cookies.wp.comment": "Zure azken iruzkina eta datuak (izena eta emaila) gordetzen ditu berriro idatzi behar ez izateko.",
    "cookies.wp.auth": "WordPressen xehetasunak gordetzen dituen autentifikazio-cookiea. Gunearen funtzionamendurako beharrezkoa.",
    "cookies.ga.text": "GAKOren webguneek Google Analytics erabiltzen dute, Google-ren web analitika-zerbitzu bat, nabigazioaren neurketa eta analisia ahalbidetzen duena. Cookie propioak, saiokoak eta analisi-cookieak dira. Erabiltzaile kopurua, ikusitako orrialdeak, bisita-maiztasuna, iraupena, nabigatzailea, hizkuntza, terminala eta hiria buruzko informazioa lortzen du.",
    "cookies.ga.more": "Informazio gehiago eta desgaitzea:",
    "cookies.maps.text": "GAKOren webguneek Google Maps erabiltzen dute. Informazio gehiago:",
    "cookies.accept.title": "Cookie Politikaren onarpena",
    "cookies.accept.p": "GAKOk ulertzen du cookieen erabilera onartzen duzula. Hala ere, saio bakoitzarekin edozein orriaren beheko aldean Cookie Politikari buruzko informazioa erakusten du. Informazio hori ikustean posible da:",
    "cookies.accept.li1": "<strong>Cookieak onartu.<\/strong> Abisu hau ez da berriro bistaratuko saio honetan zehar.",
    "cookies.accept.li2": "<strong>Ez onartu.<\/strong> Webgunea ez da ondo funtzionatuko eta ezingo da nabegatzen.",
    "cookies.manage.title": "Nola aldatu cookien konfigurazioa",
    "cookies.manage.p": "GAKOren cookieak edo beste edozein webgunekoak mugatu, blokeatu edo ezabatu ditzakezu zure nabigatzailea erabiliz:",
    "cookies.manage.tools": "Cookie biltegira <a href=\"https:\/\/www.ghostery.com\/\" target=\"_blank\" class=\"text-[#598196] hover:underline\">Ghostery<\/a> edo <a href=\"https:\/\/www.youronlinechoices.com\/es\/\" target=\"_blank\" class=\"text-[#598196] hover:underline\">Your Online Choices<\/a> bezalako tresnekin ere kudea dezakezu."
  },
  es: {
    "nav.inicio": "Inicio",
    "nav.quienes": "Quiénes Somos",
    "nav.equipo": "Equipo",
    "nav.proyectos": "Proyectos",
    "nav.extranjero": "Extranjero",
    "nav.contacto": "Contacto",
    "nav.cta": "Trabajemos juntos",
    "hero.line1": "Conectamos",
    "hero.line2": "Personas.",
    "hero.line3": "Creamos",
    "hero.line4": "Futuro.",
    "hero.subtitle": "Somos un equipo emprendedor con el firme compromiso de crear y cuidar el futuro de nuestro territorio a través de la creatividad, la innovación y la ilusión.",
    "hero.btn1": "Descubrir Gako",
    "hero.btn2": "Ver Proyectos",
    "stats.projects": "Proyectos",
    "stats.countries": "Países",
    "stats.edition": "Edición",
    "about.label": "Sobre Nosotros",
    "about.title1": "Quiénes",
    "about.title2": "Somos",
    "about.p1": "GAKO somos un equipo emprendedor con el firme compromiso de crear y cuidar el futuro de nuestro territorio a través de la <strong style=\"color:#598196;font-weight:600;\">creatividad</strong>, la <strong style=\"color:#598196;font-weight:600;\">innovación</strong> y la <strong style=\"color:#598196;font-weight:600;\">ilusión</strong>.",
    "about.p2": "Tenemos claro que el cliente es muy importante, pero también los trabajadores. En GAKO realizamos análisis profundos, detectamos problemas de desconexión interna y creamos soluciones.",
    "about.btn": "Conocer nuestro trabajo",
    "about.pillar1.title": "Amor",
    "about.pillar1.desc": "La pasión es nuestro motor en cada proyecto.",
    "about.pillar2.title": "Ilusión",
    "about.pillar2.desc": "Ganas vivas de crear e innovar.",
    "about.pillar3.title": "Compromiso",
    "about.pillar3.desc": "Lealtad con el territorio y las personas.",
    "about.pillar4.title": "Fuerza",
    "about.pillar4.desc": "Actuar con ambición ante cualquier reto.",
    "projects.label": "Nuestros Proyectos",
    "projects.title1": "Nuestros",
    "projects.title2": "Proyectos",
    "projects.subtitle": "Proyectos reales donde conectamos creatividad, impacto social y estrategia. Haz clic en cada ámbito para explorarlos.",
    "contact.label": "Ponte en Contacto",
    "contact.title1": "Hablemos",
    "contact.title2": "de tu",
    "contact.title3": "Proyecto",
    "contact.desc": "Cuéntanos el reto que tienes entre manos. Analizaremos tu situación y te propondremos el enfoque más adecuado para transformar tu organización.",
    "contact.form.name": "Nombre *",
    "contact.form.name.ph": "Tu nombre",
    "contact.form.email": "Email *",
    "contact.form.company": "Empresa",
    "contact.form.company.ph": "Nombre de tu empresa",
    "contact.form.message": "Mensaje *",
    "contact.form.message.ph": "Cuéntanos tu reto o proyecto...",
    "contact.form.send": "Enviar mensaje",
    "footer.desc": "Equipo emprendedor independiente, construyendo el futuro del territorio con creatividad e ilusión.",
    "footer.company": "Empresa",
    "footer.about": "Quiénes Somos",
    "footer.team": "Nuestro Equipo",
    "footer.abroad": "Estancia Extranjero",
    "footer.services": "Servicios",
    "footer.projects": "Proyectos",
    "footer.contact": "Contacto",
    "footer.copy": "Gako © 2026 · Todos los derechos reservados · Irun, Gipuzkoa",
    "footer.privacy": "Política de Privacidad",
    "footer.legal": "Aviso Legal",
    "footer.cookies": "Cookies",
    "cookiebar.text": "Esta web utiliza cookies para mejorar tu experiencia de navegación.",
    "cookiebar.more": "Más información",
    "cookiebar.reject": "Rechazar",
    "cookiebar.accept": "Aceptar",
    "legal.back": "Volver",
    "legal.label": "Información jurídica",
    "legal.title1": "Aviso",
    "legal.title2": "Legal",
    "legal.s1.title": "Aviso Legal",
    "legal.s1.text": "Bienvenido a la página Web de <strong style=\"color:#598196;\">ASOCIACIÓN ESTUDIANTIL JUNIOR EMPRESA GAKO<\/strong> (en adelante, GAKO) con NIF G56586787 y domicilio en Leandro Agirretxe Plazatxoa, 1, 20304 Irun, Gipuzkoa. Contacto mediante mail en <a href=\"mailto:gakoteamcompany@gakotc.com\" class=\"text-[#598196] hover:underline\">gakoteamcompany@gakotc.com<\/a> e inscrita en el Registro de Asociaciones con el número: AS\/G\/25290\/2023.",
    "legal.s2.title": "Propiedad Intelectual",
    "legal.s2.text": "Los contenidos de este sitio Web, textos, imágenes, sonidos, animaciones, etc. así como su diseño gráfico y su código fuente están protegidos por la legislación española sobre los derechos de propiedad intelectual e industrial a favor de las sociedades que conforman GAKO. Queda por tanto prohibida su reproducción, distribución o comunicación pública, total o parcial, sin la autorización expresa de GAKO.",
    "legal.s3.title": "Contenido de la Web y enlaces",
    "legal.s3.text": "En GAKO no nos responsabilizamos del mal uso que se realice de los contenidos de nuestra página Web, siendo exclusiva responsabilidad de la persona que accede a ellos o los utiliza. Tampoco asumimos ninguna responsabilidad por la información contenida en las páginas Web de terceros a las que se pueda acceder por enlaces o buscadores desde este sitio Web.",
    "legal.s4.title": "Actualización y modificación de la página Web",
    "legal.s4.text": "GAKO se reserva el derecho a modificar o eliminar, sin previo aviso, tanto la información contenida en su sitio Web como su configuración y presentación, sin asumir responsabilidad alguna por ello.",
    "legal.s5.title": "Indicaciones sobre aspectos técnicos",
    "legal.s5.text": "GAKO no asume ninguna responsabilidad que se pueda derivar de problemas técnicos o fallos en los equipos informáticos que se produzcan durante la conexión a la red de Internet, así como de daños que pudieran ser causados por terceras personas mediante intromisiones ilegítimas fuera del control de GAKO. También quedamos exonerados de toda responsabilidad ante posibles daños o perjuicios que pueda sufrir el usuario a consecuencia de errores, defectos u omisiones en la información que facilitemos cuando proceda de fuentes ajenas a nosotros.",
    "legal.s6.title": "Identificación del responsable",
    "legal.s6.text": "<strong style=\"color:#598196;\">ASOCIACIÓN ESTUDIANTIL JUNIOR EMPRESA GAKO<\/strong> · NIF G56586787 · Leandro Agirretxe Plazatxoa, 1, 20304 Irun, Gipuzkoa.",
    "legal.s6.contact": "Contacto",
    "team.label": "Nuestro Equipo",
    "team.title1": "Nuestro",
    "team.title2": "Equipo",
    "team.subtitle": "Un equipo diverso, apasionado y con una misión común: hacer que las personas y las organizaciones lleguen más lejos juntas.",
    "abroad.label": "Estancia en el Extranjero",
    "abroad.title1": "Nuestra Estancia",
    "abroad.title2": "en el",
    "abroad.title3": "Extranjero",
    "abroad.desc": "Viajamos para aprender. Exploramos ecosistemas de innovación, UX y bienestar organizacional en cuatro destinos que han marcado nuestra forma de trabajar.",
    "abroad.stat.countries": "Países",
    "abroad.stat.years": "Años",
    "abroad.stat.people": "Personas",
    "abroad.map.hint": "Haz clic en un marcador para explorar la estancia",
    "abroad.map.default": "Selecciona un país<br>en el mapa para ver<br>nuestra experiencia",
    "contact.location": "Ubicación",
    "contact.success.title": "¡Mensaje enviado con éxito!",
    "contact.success.desc": "Nos pondremos en contacto contigo en menos de 24h.",
    "privacy.back": "Volver",
    "privacy.label": "Información Legal",
    "privacy.title": "Política de Privacidad",
    "privacy.id.title": "Identificación del Responsable",
    "privacy.contact": "Contacto",
    "privacy.who.title": "¿Quién es el Responsable del tratamiento de sus datos?",
    "privacy.who.text": "La presente política de privacidad aplica a todos los datos de carácter personal que el interesado aporte a GAKO, así como a toda persona física interesada en las actividades y servicios que GAKO ofrece a través de sus páginas web y a través de cualquier otro medio de comunicación. El objetivo es dar transparencia a la información sobre cómo tratamos sus datos personales en cumplimiento de la normativa vigente.",
    "privacy.purpose.title": "¿Con qué finalidad tratamos sus datos personales?",
    "privacy.purpose.text": "GAKO dispone de un Registro de Actividades de Tratamiento donde se detallan cada uno de los tratamientos realizados como responsable de tratamiento. Si requiere mayor detalle, puede dirigirse a GAKO mediante cualquiera de los canales identificados.",
    "privacy.retention.title": "¿Por cuánto tiempo conservamos sus datos personales?",
    "privacy.retention.text": "GAKO conservará los datos de los afectados mientras dure su relación con la organización y posteriormente, se conservarán los datos acorde a lo dispuesto en la normativa de archivo y documentación aplicable.",
    "privacy.access.title": "¿Quién tiene acceso a sus datos personales?",
    "privacy.access.text": "GAKO podrá realizar cesiones o comunicaciones de datos personales para atender sus obligaciones con las Administraciones Públicas en los casos que así se requiera de acuerdo con la legislación vigente.",
    "privacy.rights.title": "¿Cuáles son los derechos de los afectados?",
    "privacy.rights.intro": "Le informamos de que podrá ejercer los siguientes derechos:",
    "privacy.rights.1": "Derecho de acceso a sus datos personales para saber cuáles están siendo objeto de tratamiento.",
    "privacy.rights.2": "Derecho de rectificación de cualquier dato personal inexacto.",
    "privacy.rights.3": "Derecho de supresión de sus datos personales, cuando esto sea posible.",
    "privacy.rights.4": "Derecho a solicitar la limitación del tratamiento de sus datos personales.",
    "privacy.rights.5": "Derecho de oposición al tratamiento de sus datos personales.",
    "privacy.rights.6": "Derecho a la portabilidad de sus datos, cuando la base legal sea su consentimiento.",
    "privacy.rights.contact": "Dichos derechos podrán ser ejercitados gratuitamente mediante solicitud escrita dirigida a:",
    "privacy.withdraw.title": "Baja en el servicio de comunicaciones comerciales",
    "privacy.withdraw.text": "El interesado tiene derecho a revocar en cualquier momento el consentimiento prestado para el envío de comunicaciones comerciales, pinchando en el enlace incluido en cada comunicación o mediante comunicado a infogako@gakotc.com.",
    "privacy.security.title": "¿Qué medidas de seguridad tenemos implementadas?",
    "privacy.security.text": "GAKO se compromete al cumplimiento de su obligación de secreto de los datos de carácter personal y adoptará las medidas necesarias para evitar su alteración, pérdida, tratamiento o acceso no autorizado.",
    "privacy.links.title": "Links",
    "privacy.links.text": "La página web de GAKO puede incluir hipervínculos a otros sitios que no son operados o controlados por GAKO. Por ello, GAKO no garantiza ni se hace responsable de los contenidos de tales sitios web o sus prácticas de privacidad.",
    "privacy.update.title": "Modificación de la Política de Privacidad",
    "privacy.update.text": "GAKO podrá modificar su Política de Privacidad de acuerdo con la legislación aplicable en cada momento. Cualquier modificación le será debidamente notificada al Afectado. Última actualización: 2025.",
    "rat.label": "Registro de Actividades de Tratamiento",
    "rat.col.activity": "Actividad",
    "rat.col.purpose": "Finalidad",
    "rat.col.legal": "Base jurídica",
    "rat.col.source": "Procedencia",
    "rat.col.category": "Categoría de datos",
    "rat.col.recipients": "Destinatarios",
    "rat.col.deletion": "Plazo de supresión",
    "rat.r1.activity": "Personas Asociadas",
    "rat.r1.purpose": "Gestión de las personas socias",
    "rat.r1.source": "El propio interesado",
    "rat.r1.category": "Identificativos, económicos, profesionales y curriculares",
    "rat.r1.recipients": "Registro de Asociaciones, Bancos",
    "rat.r1.deletion": "6 años tras fin relación social",
    "rat.r2.activity": "Personas de Contacto",
    "rat.r2.purpose": "Gestión base de datos de contactos",
    "rat.r2.source": "El propio interesado o su representante legal",
    "rat.r2.category": "Identificativos y de contacto",
    "rat.r2.recipients": "No previstos",
    "rat.r2.deletion": "Indefinida / hasta solicitud de supresión",
    "rat.r3.activity": "Gestión de Eventos",
    "rat.r3.purpose": "Inscripción y gestión de asistentes (HSTLR)",
    "rat.r3.source": "El propio interesado o su representante legal",
    "rat.r3.category": "Identificativos y de contacto",
    "rat.r3.recipients": "No previstos",
    "rat.r3.deletion": "5 años desde exigibilidad",
    "rat.r4.activity": "Usuarios Web",
    "rat.r4.purpose": "Gestión de solicitantes de información y contacto web",
    "rat.r4.source": "El propio interesado o su representante legal",
    "rat.r4.category": "Datos de contacto",
    "rat.r4.recipients": "No previstos",
    "rat.r4.deletion": "5 años desde exigibilidad",
    "rat.r5.activity": "Consumidores y Atención al Cliente",
    "rat.r5.purpose": "Gestión de consumidores de tienda online",
    "rat.r5.source": "El propio interesado o su representante legal",
    "rat.r5.category": "Identificativos, económicos, de contacto",
    "rat.r5.recipients": "Administraciones tributarias, Bancos",
    "rat.r5.deletion": "5 años desde exigibilidad",
    "rat.r6.activity": "Administración",
    "rat.r6.purpose": "Gestión administrativa y contable de clientes",
    "rat.r6.source": "El propio interesado o su representante legal",
    "rat.r6.category": "Identificativos, económicos, de contacto",
    "rat.r6.recipients": "Administraciones tributarias, Bancos, asesoría fiscal",
    "rat.r6.deletion": "6 años desde último asiento contable",
    "rat.r7.activity": "Gestión Redes Sociales (Encargado)",
    "rat.r7.purpose": "Gestión de Redes Sociales — BAT IZAN",
    "rat.r7.source": "El propio interesado",
    "rat.r7.category": "Identificativos, económicos, de contacto",
    "rat.r7.recipients": "No previstos",
    "rat.r7.deletion": "5 años desde exigibilidad",
    "cookies.back": "Volver",
    "cookies.label": "Información jurídica",
    "cookies.title1": "Política de",
    "cookies.title2": "Cookies",
    "cookies.intro1": "La <strong style=\"color:#598196;\">ASOCIACIÓN ESTUDIANTIL JUNIOR EMPRESA GAKO<\/strong> (en adelante, GAKO) quieren informarle sobre el uso de las cookies en sus sitios web.",
    "cookies.intro2": "Las cookies son archivos que se pueden descargar en su equipo a través de las páginas web. Son herramientas que tienen un papel esencial para la prestación de numerosos servicios de la sociedad de la información. Entre otros, permiten a un sitio web almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información obtenida, se pueden utilizar para reconocer al usuario y mejorar el servicio ofrecido.",
    "cookies.types.title": "Tipos de cookies",
    "cookies.types.p1": "Se pueden distinguir dos tipos de cookies, según quien sea la entidad que gestione el dominio desde donde se envían las cookies y trate los datos que se obtengan: cookies propias y cookies de terceros.",
    "cookies.types.p2": "Además, hablamos de cookies de sesión o cookies permanentes, cuando se trata del plazo de tiempo que permanecen almacenadas en el navegador del cliente.",
    "cookies.types.p3": "Por último, existe otra clasificación con cinco tipos de cookies según la finalidad para la que se traten los datos obtenidos: cookies técnicas, cookies de personalización, cookies de análisis, cookies publicitarias y cookies de publicidad comportamental.",
    "cookies.types.p4": "Quedan exceptuadas del cumplimiento de las obligaciones establecidas en el artículo 22.2 de la LSSI las cookies utilizadas para alguna de las siguientes finalidades:",
    "cookies.types.li1": "Permitir únicamente la comunicación entre el equipo del usuario y la red.",
    "cookies.types.li2": "Estrictamente prestar un servicio expresamente solicitado por el usuario.",
    "cookies.types.p5": "El Grupo de Trabajo del Artículo 29 en su <a href=\"http://ec.europa.eu/justice/data-protection/article-29/documentation/opinion-recommendation/files/2012/wp194_es.pdf\" target=\"_blank\" class=\"text-[#598196] hover:underline\">Dictamen 4\/2012<\/a> ha interpretado que entre las cookies exceptuadas estarían:",
    "cookies.types.li3": "Cookies de «entrada del usuario»",
    "cookies.types.li4": "Cookies de autenticación o identificación de usuario (únicamente de sesión)",
    "cookies.types.li5": "Cookies de seguridad del usuario",
    "cookies.types.li6": "Cookies de sesión de reproductor multimedia",
    "cookies.types.li7": "Cookies de sesión para equilibrar la carga",
    "cookies.types.li8": "Cookies de personalización de la interfaz de usuario",
    "cookies.types.li9": "Cookies de complemento (plug-in) para intercambiar contenidos sociales",
    "cookies.used.title": "Cookies utilizadas en la web",
    "cookies.wp.cookillian": "Almacena sus preferencias con respecto al uso de cookies en este sitio web.",
    "cookies.wp.test": "Ayuda a determinar si no se puede almacenar cookies para WordPress. Requerida para el funcionamiento del sitio.",
    "cookies.wp.settings": "Ayuda a recordar sus preferencias personales dentro de WordPress.",
    "cookies.wp.comment": "Recuerda su último comentario y sus datos (nombre y email) para no tener que escribirlos de nuevo.",
    "cookies.wp.auth": "Cookie de autenticación que almacena detalles de WordPress. Requerida para el funcionamiento del sitio.",
    "cookies.ga.text": "Los sitios web de GAKO utilizan Google Analytics, un servicio de analítica web de Google que permite la medición y análisis de la navegación. Se trata de cookies propias, de sesión y de análisis. Obtiene información sobre número de usuarios, páginas vistas, frecuencia de visitas, duración, navegador, idioma, terminal y ciudad.",
    "cookies.ga.more": "Más información e inhabilitación:",
    "cookies.maps.text": "Los sitios web de GAKO utilizan Google Maps. Más información:",
    "cookies.accept.title": "Aceptación de la Política de cookies",
    "cookies.accept.p": "GAKO asume que usted acepta el uso de cookies. No obstante, muestra información sobre su Política de cookies en la parte inferior de cualquier página con cada inicio de sesión. Ante esta información es posible:",
    "cookies.accept.li1": "<strong>Aceptar cookies.<\/strong> No se volverá a visualizar este aviso durante la presente sesión.",
    "cookies.accept.li2": "<strong>No aceptar.<\/strong> La web no funcionará correctamente y no se podrá navegar por ella.",
    "cookies.manage.title": "Cómo modificar la configuración de las cookies",
    "cookies.manage.p": "Puede restringir, bloquear o borrar las cookies de GAKO o cualquier otro sitio web utilizando su navegador:",
    "cookies.manage.tools": "También puede gestionar el almacén de cookies con herramientas como <a href=\"https:\/\/www.ghostery.com\/\" target=\"_blank\" class=\"text-[#598196] hover:underline\">Ghostery<\/a> o <a href=\"https:\/\/www.youronlinechoices.com\/es\/\" target=\"_blank\" class=\"text-[#598196] hover:underline\">Your Online Choices<\/a>."
  },
  en: {
    "nav.inicio": "Home",
    "nav.quienes": "Who We Are",
    "nav.equipo": "Team",
    "nav.proyectos": "Projects",
    "nav.extranjero": "Abroad",
    "nav.contacto": "Contact",
    "nav.cta": "Let's work together",
    "hero.line1": "Connecting",
    "hero.line2": "People.",
    "hero.line3": "Building",
    "hero.line4": "the Future.",
    "hero.subtitle": "We are an entrepreneurial team with a strong commitment to creating and nurturing the future of our territory through creativity, innovation and passion.",
    "hero.btn1": "Discover Gako",
    "hero.btn2": "See Projects",
    "stats.projects": "Projects",
    "stats.countries": "Countries",
    "stats.edition": "Edition",
    "about.label": "About Us",
    "about.title1": "Who",
    "about.title2": "We Are",
    "about.p1": "GAKO is an entrepreneurial team with a strong commitment to creating and nurturing the future of our territory through <strong style=\"color:#598196;font-weight:600;\">creativity</strong>, <strong style=\"color:#598196;font-weight:600;\">innovation</strong> and <strong style=\"color:#598196;font-weight:600;\">passion</strong>.",
    "about.p2": "We believe the customer matters deeply — but so do the people inside organizations. At GAKO we do deep analysis, detect internal disconnection and create real solutions.",
    "about.btn": "See our work",
    "about.pillar1.title": "Love",
    "about.pillar1.desc": "Passion drives us in every single project.",
    "about.pillar2.title": "Passion",
    "about.pillar2.desc": "An eager drive to create and innovate.",
    "about.pillar3.title": "Commitment",
    "about.pillar3.desc": "Loyalty to our territory and people.",
    "about.pillar4.title": "Strength",
    "about.pillar4.desc": "Acting ambitiously in the face of every challenge.",
    "projects.label": "Our Projects",
    "projects.title1": "Our",
    "projects.title2": "Projects",
    "projects.subtitle": "Real projects combining creativity, social impact and strategy. Click each area to explore them.",
    "contact.label": "Get in Touch",
    "contact.title1": "Let's talk",
    "contact.title2": "about your",
    "contact.title3": "Project",
    "contact.desc": "Tell us about the challenge you're facing. We'll analyse your situation and propose the best approach to transform your organisation.",
    "contact.form.name": "Name *",
    "contact.form.name.ph": "Your name",
    "contact.form.email": "Email *",
    "contact.form.company": "Company",
    "contact.form.company.ph": "Your company name",
    "contact.form.message": "Message *",
    "contact.form.message.ph": "Tell us about your challenge or project...",
    "contact.form.send": "Send message",
    "footer.desc": "Independent entrepreneurial team, building the future of the territory with creativity and passion.",
    "footer.company": "Company",
    "footer.about": "Who We Are",
    "footer.team": "Our Team",
    "footer.abroad": "International Stay",
    "footer.services": "Services",
    "footer.projects": "Projects",
    "footer.contact": "Contact",
    "footer.copy": "Gako © 2026 · All rights reserved · Irun, Gipuzkoa",
    "footer.privacy": "Privacy Policy",
    "footer.legal": "Legal Notice",
    "footer.cookies": "Cookies",
    "cookiebar.text": "This website uses cookies to improve your browsing experience.",
    "cookiebar.more": "More information",
    "cookiebar.reject": "Reject",
    "cookiebar.accept": "Accept",
    "legal.back": "Back",
    "legal.label": "Legal Information",
    "legal.title1": "Legal",
    "legal.title2": "Notice",
    "legal.s1.title": "Legal Notice",
    "legal.s1.text": "Welcome to the website of <strong style=\"color:#598196;\">ASOCIACIÓN ESTUDIANTIL JUNIOR EMPRESA GAKO<\/strong> (hereinafter, GAKO), with Tax ID G56586787 and registered address at Leandro Agirretxe Plazatxoa, 1, 20304 Irun, Gipuzkoa. Contact us by email at <a href=\"mailto:gakoteamcompany@gakotc.com\" class=\"text-[#598196] hover:underline\">gakoteamcompany@gakotc.com<\/a>, registered in the Association Register under number: AS\/G\/25290\/2023.",
    "legal.s2.title": "Intellectual Property",
    "legal.s2.text": "The contents of this website — texts, images, sounds, animations, etc. — as well as its graphic design and source code are protected by Spanish intellectual and industrial property law in favour of the organisations forming GAKO. Any reproduction, distribution or public communication, in whole or in part, without GAKO's express authorisation is therefore prohibited.",
    "legal.s3.title": "Website content and links",
    "legal.s3.text": "GAKO accepts no responsibility for any misuse of the contents of our website, which is the sole responsibility of the person accessing or using them. We also accept no responsibility for the information contained in third-party websites accessible via links or search engines from this site.",
    "legal.s4.title": "Updating and modifying the website",
    "legal.s4.text": "GAKO reserves the right to modify or remove, without prior notice, both the information contained on its website and its configuration and presentation, without assuming any liability for doing so.",
    "legal.s5.title": "Technical aspects",
    "legal.s5.text": "GAKO accepts no liability arising from technical problems or failures in computer equipment occurring during connection to the Internet, nor for damages that may be caused by third parties through illegitimate intrusions beyond GAKO's control. We are also exempt from any liability for possible damages or losses suffered by the user as a result of errors, defects or omissions in the information we provide when it originates from sources outside our control.",
    "legal.s6.title": "Controller identification",
    "legal.s6.text": "<strong style=\"color:#598196;\">ASOCIACIÓN ESTUDIANTIL JUNIOR EMPRESA GAKO<\/strong> · Tax ID G56586787 · Leandro Agirretxe Plazatxoa, 1, 20304 Irun, Gipuzkoa.",
    "legal.s6.contact": "Contact",
    "team.label": "Our Team",
    "team.title1": "Our",
    "team.title2": "Team",
    "team.subtitle": "A diverse, passionate team with a common mission: helping people and organisations go further together.",
    "abroad.label": "International Stay",
    "abroad.title1": "Our International",
    "abroad.title2": "Stay",
    "abroad.title3": "Abroad",
    "abroad.desc": "We travel to learn. We have explored innovation, UX and organisational wellbeing ecosystems in four destinations that have shaped the way we work.",
    "abroad.stat.countries": "Countries",
    "abroad.stat.years": "Years",
    "abroad.stat.people": "People",
    "abroad.map.hint": "Click on a marker to explore the stay",
    "abroad.map.default": "Select a country<br>on the map to see<br>our experience",
    "contact.location": "Location",
    "contact.success.title": "Message sent successfully!",
    "contact.success.desc": "We will get in touch with you within 24 hours.",
    "privacy.back": "Go back",
    "privacy.label": "Legal Information",
    "privacy.title": "Privacy Policy",
    "privacy.id.title": "Controller Identification",
    "privacy.contact": "Contact",
    "privacy.who.title": "Who is responsible for processing your data?",
    "privacy.who.text": "This privacy policy applies to all personal data provided by the data subject to GAKO, as well as to any natural person interested in the activities and services GAKO offers through its websites and any other communication channel. The aim of GAKO's Privacy Policy is to provide transparency on how we process your personal data in compliance with applicable regulations.",
    "privacy.purpose.title": "For what purposes do we process your personal data?",
    "privacy.purpose.text": "GAKO maintains a Record of Processing Activities detailing each processing activity carried out as data controller. Should you require further detail, you may contact GAKO through any of the identified channels.",
    "privacy.retention.title": "How long do we keep your personal data?",
    "privacy.retention.text": "GAKO will retain data subjects' data for as long as their relationship with the organisation lasts, and thereafter in accordance with applicable archiving and documentation regulations.",
    "privacy.access.title": "Who has access to your personal data?",
    "privacy.access.text": "GAKO may transfer or communicate personal data to fulfil its obligations with Public Administrations where required under applicable legislation.",
    "privacy.rights.title": "What are the rights of data subjects?",
    "privacy.rights.intro": "We inform you that you may exercise the following rights:",
    "privacy.rights.1": "Right of access to your personal data to find out which data are being processed.",
    "privacy.rights.2": "Right to rectify any inaccurate personal data.",
    "privacy.rights.3": "Right to erasure of your personal data, where possible.",
    "privacy.rights.4": "Right to request restriction of the processing of your personal data.",
    "privacy.rights.5": "Right to object to the processing of your personal data.",
    "privacy.rights.6": "Right to data portability, where the legal basis for processing is your consent.",
    "privacy.rights.contact": "These rights may be exercised free of charge by written request to:",
    "privacy.withdraw.title": "Unsubscribing from commercial communications",
    "privacy.withdraw.text": "The data subject has the right to withdraw consent for the sending of commercial communications at any time, by clicking the link included in each communication or by writing to infogako@gakotc.com.",
    "privacy.security.title": "What security measures do we have in place?",
    "privacy.security.text": "GAKO is committed to fulfilling its obligation of secrecy regarding personal data and will adopt the necessary measures to prevent its alteration, loss, processing or unauthorised access.",
    "privacy.links.title": "Links",
    "privacy.links.text": "GAKO's website may include hyperlinks to other sites not operated or controlled by GAKO. GAKO does not guarantee and is not responsible for the content of such websites or their privacy practices.",
    "privacy.update.title": "Amendments to the Privacy Policy",
    "privacy.update.text": "GAKO may amend its Privacy Policy in accordance with applicable legislation at any time. Any amendment will be duly notified to the data subject. Last updated: 2025.",
    "rat.label": "Record of Processing Activities",
    "rat.col.activity": "Activity",
    "rat.col.purpose": "Purpose",
    "rat.col.legal": "Legal basis",
    "rat.col.source": "Source",
    "rat.col.category": "Data category",
    "rat.col.recipients": "Recipients",
    "rat.col.deletion": "Retention period",
    "rat.r1.activity": "Associated Members",
    "rat.r1.purpose": "Management of members",
    "rat.r1.source": "The data subject",
    "rat.r1.category": "Identification, financial, professional and CV data",
    "rat.r1.recipients": "Associations Register, Banks",
    "rat.r1.deletion": "6 years after end of membership",
    "rat.r2.activity": "Contact Persons",
    "rat.r2.purpose": "Contact database management",
    "rat.r2.source": "The data subject or their legal representative",
    "rat.r2.category": "Identification and contact data",
    "rat.r2.recipients": "None foreseen",
    "rat.r2.deletion": "Indefinite / until erasure request",
    "rat.r3.activity": "Event Management",
    "rat.r3.purpose": "Registration and management of attendees (HSTLR)",
    "rat.r3.source": "The data subject or their legal representative",
    "rat.r3.category": "Identification and contact data",
    "rat.r3.recipients": "None foreseen",
    "rat.r3.deletion": "5 years from enforceability",
    "rat.r4.activity": "Website Users",
    "rat.r4.purpose": "Management of information requests and web contact",
    "rat.r4.source": "The data subject or their legal representative",
    "rat.r4.category": "Contact data",
    "rat.r4.recipients": "None foreseen",
    "rat.r4.deletion": "5 years from enforceability",
    "rat.r5.activity": "Consumers & Customer Service",
    "rat.r5.purpose": "Management of online store consumers",
    "rat.r5.source": "The data subject or their legal representative",
    "rat.r5.category": "Identification, financial and contact data",
    "rat.r5.recipients": "Tax authorities, Banks",
    "rat.r5.deletion": "5 years from enforceability",
    "rat.r6.activity": "Administration",
    "rat.r6.purpose": "Administrative and accounting management of clients",
    "rat.r6.source": "The data subject or their legal representative",
    "rat.r6.category": "Identification, financial and contact data",
    "rat.r6.recipients": "Tax authorities, Banks, tax advisory",
    "rat.r6.deletion": "6 years from last accounting entry",
    "rat.r7.activity": "Social Media Management (Processor)",
    "rat.r7.purpose": "Social Media Management — BAT IZAN",
    "rat.r7.source": "The data subject",
    "rat.r7.category": "Identification, financial and contact data",
    "rat.r7.recipients": "None foreseen",
    "rat.r7.deletion": "5 years from enforceability",
    "cookies.back": "Back",
    "cookies.label": "Legal Information",
    "cookies.title1": "Cookie",
    "cookies.title2": "Policy",
    "cookies.intro1": "<strong style=\"color:#598196;\">ASOCIACIÓN ESTUDIANTIL JUNIOR EMPRESA GAKO<\/strong> (hereinafter, GAKO) wishes to inform you about the use of cookies on its websites.",
    "cookies.intro2": "Cookies are files that can be downloaded to your device through web pages. They are tools that play an essential role in providing many information society services. Among other things, they allow a website to store and retrieve information about the browsing habits of a user or their device and, depending on the information obtained, can be used to recognise the user and improve the service offered.",
    "cookies.types.title": "Types of cookies",
    "cookies.types.p1": "Two types of cookies can be distinguished, depending on which entity manages the domain from which the cookies are sent and processes the data obtained: first-party cookies and third-party cookies.",
    "cookies.types.p2": "We also distinguish between session cookies and persistent cookies, based on how long they remain stored in the user's browser.",
    "cookies.types.p3": "Finally, there is another classification with five types of cookies based on the purpose for which the data obtained is processed: technical cookies, personalisation cookies, analytics cookies, advertising cookies and behavioural advertising cookies.",
    "cookies.types.p4": "Cookies used for any of the following purposes are exempt from the obligations set out in Article 22.2 of the LSSI:",
    "cookies.types.li1": "Solely enabling communication between the user's device and the network.",
    "cookies.types.li2": "Strictly providing a service expressly requested by the user.",
    "cookies.types.p5": "The Article 29 Working Party in its <a href=\"http://ec.europa.eu/justice/data-protection/article-29/documentation/opinion-recommendation/files/2012/wp194_es.pdf\" target=\"_blank\" class=\"text-[#598196] hover:underline\">Opinion 4\/2012<\/a> interpreted that exempt cookies include:",
    "cookies.types.li3": "User input cookies",
    "cookies.types.li4": "User authentication or identification cookies (session only)",
    "cookies.types.li5": "User security cookies",
    "cookies.types.li6": "Media player session cookies",
    "cookies.types.li7": "Load-balancing session cookies",
    "cookies.types.li8": "User interface customisation cookies",
    "cookies.types.li9": "Plug-in cookies for sharing social content",
    "cookies.used.title": "Cookies used on this website",
    "cookies.wp.cookillian": "Stores your preferences regarding the use of cookies on this website.",
    "cookies.wp.test": "Helps determine whether cookies can be stored for WordPress. Required for the site to function.",
    "cookies.wp.settings": "Helps remember your personal preferences within WordPress.",
    "cookies.wp.comment": "Remembers your last comment and your details (name and email) so you do not have to re-enter them.",
    "cookies.wp.auth": "Authentication cookie that stores WordPress details. Required for the site to function.",
    "cookies.ga.text": "GAKO websites use Google Analytics, a web analytics service provided by Google that enables the measurement and analysis of browsing behaviour. These are first-party, session and analytics cookies. They collect information on the number of users, pages viewed, visit frequency, duration, browser, language, device and city.",
    "cookies.ga.more": "More information and opt-out:",
    "cookies.maps.text": "GAKO websites use Google Maps. More information:",
    "cookies.accept.title": "Acceptance of the Cookie Policy",
    "cookies.accept.p": "GAKO assumes that you accept the use of cookies. However, it displays information about its Cookie Policy at the bottom of every page each time you log in. Upon seeing this notice, you may:",
    "cookies.accept.li1": "<strong>Accept cookies.<\/strong> This notice will not be shown again during the current session.",
    "cookies.accept.li2": "<strong>Decline.<\/strong> The website will not function correctly and you will not be able to browse it.",
    "cookies.manage.title": "How to change your cookie settings",
    "cookies.manage.p": "You can restrict, block or delete GAKO's cookies or those from any other website using your browser:",
    "cookies.manage.tools": "You can also manage your cookie storage with tools such as <a href=\"https:\/\/www.ghostery.com\/\" target=\"_blank\" class=\"text-[#598196] hover:underline\">Ghostery<\/a> or <a href=\"https:\/\/www.youronlinechoices.com\/es\/\" target=\"_blank\" class=\"text-[#598196] hover:underline\">Your Online Choices<\/a>."
  }
};

let currentLang = 'eu';

function setLang(lang) {
  currentLang = lang;

  // Update html lang attribute
  document.documentElement.lang = lang === 'eu' ? 'eu' : lang === 'es' ? 'es' : 'en';

  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent === lang.toUpperCase());
  });

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = translations[lang][key];
    if (val !== undefined) {
      el.innerHTML = val;
    }
  });

  // Update project descriptions (data-es / data-eu / data-en)
  document.querySelectorAll('[data-es],[data-eu],[data-en]').forEach(el => {
    const val = el.getAttribute('data-' + lang) || el.getAttribute('data-eu') || el.getAttribute('data-es');
    if (val) el.textContent = val;
  });

  // Update accordion category titles and subs
  document.querySelectorAll('.accordion-cat-title[data-es]').forEach(el => {
    el.textContent = el.getAttribute('data-' + lang) || el.getAttribute('data-eu');
  });
  document.querySelectorAll('.accordion-cat-sub[data-es]').forEach(el => {
    el.textContent = el.getAttribute('data-' + lang) || el.getAttribute('data-eu');
  });

  // Update proj-name with data attributes
  document.querySelectorAll('.proj-name[data-es]').forEach(el => {
    el.textContent = el.getAttribute('data-' + lang) || el.getAttribute('data-eu');
  });

  // Update form placeholders & labels
  const fields = {
    'name': ['contact.form.name', 'contact.form.name.ph'],
    'email': ['contact.form.email', null],
    'company': ['contact.form.company', 'contact.form.company.ph'],
    'message': ['contact.form.message', 'contact.form.message.ph']
  };
  ['name','email','company','message'].forEach(id => {
    const input = document.getElementById(id);
    if (!input) return;
    const label = input.parentElement.querySelector('label');
    const phKey = 'contact.form.' + id + '.ph';
    const lblKey = 'contact.form.' + id;
    if (label && translations[lang][lblKey]) label.innerHTML = translations[lang][lblKey];
    if (translations[lang][phKey]) input.placeholder = translations[lang][phKey];
  });

  const sendBtn = document.getElementById('submit-btn');
  if (sendBtn && translations[lang]['contact.form.send']) sendBtn.textContent = translations[lang]['contact.form.send'];

  // Update team member bios (data-eu / data-es / data-en)
  document.querySelectorAll('.team-card [data-eu],[data-es],[data-en]').forEach(el => {
    const val = el.getAttribute('data-' + lang) || el.getAttribute('data-eu') || el.getAttribute('data-es');
    if (val) el.textContent = val;
  });

  // Update abroad map default panel (innerHTML for <br> tags)
  const mapDefault = document.querySelector('#panel-default p[data-i18n="abroad.map.default"]');
  if (mapDefault && translations[lang]['abroad.map.default']) {
    mapDefault.innerHTML = translations[lang]['abroad.map.default'];
  }

  // If a destination card is open, re-render it in the new language
  const countryPanel = document.getElementById('country-panel');
  if (countryPanel && countryPanel.classList.contains('open') && window._gakoActiveDestination) {
    const dest = window._gakoActiveDestination;
    document.getElementById('country-name').textContent = dest.name[lang] || dest.name.es;
    document.getElementById('country-subtitle').textContent = dest.subtitle[lang] || dest.subtitle.es;
    document.getElementById('country-desc').textContent = dest.desc[lang] || dest.desc.es;
    const tagsEl = document.getElementById('country-tags');
    const tags = dest.tags[lang] || dest.tags.es;
    tagsEl.innerHTML = tags.map(t => `<span class="tag tag-blue">${t}</span>`).join('');
  }
}

// Init with Euskera
document.addEventListener('DOMContentLoaded', () => setLang('eu'));

// ─── Aviso de cookies ───
function setCookieConsent(value) {
  try { localStorage.setItem('gako-cookie-consent', value); } catch (e) {}
  const banner = document.getElementById('cookie-banner');
  if (banner) banner.hidden = true;
}

document.addEventListener('DOMContentLoaded', () => {
  let consent = null;
  try { consent = localStorage.getItem('gako-cookie-consent'); } catch (e) {}
  const banner = document.getElementById('cookie-banner');
  if (banner && !consent) banner.hidden = false;
});
