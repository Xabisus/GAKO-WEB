# Gako — Konektatu. Sortu. Hazi.

Web corporativa de **Gako**, un equipo emprendedor de Irun (Gipuzkoa). Sitio estático y trilingüe (euskera, castellano e inglés) con presentación del equipo, proyectos, mapa interactivo de las estancias en el extranjero (Berlín, Nueva York, India y Corea del Sur), formulario de contacto y páginas legales (privacidad, aviso legal y cookies).

No necesita servidor ni proceso de compilación: es HTML, CSS y JavaScript puros, por lo que funciona tal cual en GitHub Pages.

## Estructura de carpetas

```
/
├── index.html              Página única (secciones + páginas legales)
├── css/
│   ├── styles.css          Estilos propios y @font-face de las fuentes locales
│   ├── tailwind.css        Tailwind compilado (solo las clases usadas)
│   └── vendor/             Leaflet (CSS e iconos del mapa)
├── js/
│   ├── script.js           Lógica del sitio: navegación, idiomas (i18n), mapa, acordeones
│   └── vendor/             Leaflet 1.9.4 (JS y licencia)
├── images/
│   ├── logos/              Logos de los proyectos (bat-izan, klinbit, kuir, hstlr, sinedy, flash)
│   ├── equipo/             Fotos del equipo
│   └── destinos/           Fotos de los destinos del mapa
├── fonts/                  Bebas Neue y Poppins (woff2, alojadas localmente)
├── icons/                  Iconos y favicons
├── videos/                 Vídeos
├── assets/
│   ├── models/             Modelos 3D
│   └── textures/           Texturas
├── tailwind.config.js      Configuración de Tailwind (colores gako, fuentes)
├── input.css               Entrada para compilar Tailwind
├── .nojekyll               Evita que GitHub Pages procese el sitio con Jekyll
└── README.md
```

Las carpetas `icons/`, `videos/` y `assets/` están reservadas para futuros recursos (contienen un `.gitkeep` para que Git las conserve).

## Dependencias externas

- **Teselas del mapa**: Esri, cargadas por Leaflet en tiempo de ejecución.

Leaflet, las fuentes y Tailwind (compilado) están incluidos en el repositorio.

## Regenerar Tailwind

Si añades clases nuevas de Tailwind, vuelve a compilar `css/tailwind.css` (Tailwind 3.4, contenido: `index.html` y `js/script.js`):

```bash
npx tailwindcss@3.4.17 -c tailwind.config.js -i input.css -o css/tailwind.css --minify
```


## Ejecutarlo en local

Basta con abrir `index.html` en el navegador. Es mejor usar un servidor local:

```bash
python3 -m http.server 8000
```

Después abre <http://localhost:8000>.

## Publicarlo en GitHub Pages

1. Crea un repositorio en GitHub y sube el contenido de esta carpeta a la raíz:

   ```bash
   git init
   git add .
   git commit -m "Web de Gako"
   git branch -M main
   git remote add origin https://github.com/<usuario>/<repositorio>.git
   git push -u origin main
   ```

2. En GitHub, ve a **Settings → Pages**.
3. En **Build and deployment**, elige **Deploy from a branch**, rama `main` y carpeta `/ (root)`.
4. Guarda. En uno o dos minutos la web estará en `https://<usuario>.github.io/<repositorio>/`.

Todas las rutas son relativas, así que el sitio funciona en la raíz de un dominio o dentro de un subdirectorio.
