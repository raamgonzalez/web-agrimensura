import img01 from '../assets/images/01.png';
import img02 from '../assets/images/02.png';
import img03 from '../assets/images/03.png';
import imgProfile from '../assets/profile.png';

export const data = {
  projects: [
    {
      name: 'Levantamiento Topográfico',
      src: img01,
      alt: 'Imagen de agrimensor midiendo terreno con estación total',
    },
    {
      name: 'Curvas de Nivel y Planimetría',
      src: img02,
      alt: 'Imagen con curvas de nivel y trabajos de cartografía',
    },
    {
      name: 'Instalación de Estación de Referencia',
      src: img03,
      alt: 'Imagen nivelando estación GNSS para georreferenciación',
    },
  ],
  services: [
    {
      name: 'Ciudad de Buenos Aires',
      service: [
        'Levantamientos topográficos',
        'Georreferenciación de terrenos',
        'Parcelamiento urbano',
        'Relevamientos catastrales',
      ],
    },
    {
      name: 'Capital Federal',
      service: [
        'Curvas de nivel y planimetría',
        'Asesoramiento en construcción civil',
        'Relevamientos para licencias urbanísticas',
        'Control de obra y topografía aplicada',
      ],
    },
    {
      name: 'Río Negro',
      service: [
        'Levantamientos planialtimétricos',
        'Cartografía agrícola',
        'Georreferenciación de proyectos rurales',
        'Asesoramiento en obras civiles',
        'Monitoreo de infraestructura',
      ],
    },
  ],

  about: {
    description:
      'El Estudio DGA Agrimensura, radicado en Argentina, se especializa en levantamientos planialtimétricos, georreferenciación, cartografía y planificación de obras civiles y agrícolas. Contamos con tecnología de punta, como estaciones totales, GPS/GNSS y drones, para brindar información precisa y confiable a ingenieros, arquitectos y desarrolladores. Nuestro objetivo es acompañar cada proyecto desde el relevamiento inicial hasta la entrega de planos y datos geoespaciales, asegurando exactitud y eficiencia en cada trabajo.',
    profile: {
      name: 'Diego G. Arbizu',
      notes:
        'Soy agrimensor especializado en levantamientos planialtimétricos, curvas de nivel y georreferenciación. Trabajo en campo y oficina, brindando información precisa para proyectos de construcción, agricultura y desarrollo urbano en Argentina.',
      src: imgProfile,
    },
  },
  contact: {
    cell: '',
    email: '',
    networks: [
      {
        name: 'Instagram',
        url: 'https://instagram.com/dga_agrimensura',
        icon: {
          path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
          fill: 'currentColor',
          stroke: 'none',
        },
      },
      {
        name: 'Facebook',
        url: 'https://facebook.com/dga.agrimensura',
        icon: {
          path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
          fill: 'currentColor',
          stroke: 'none',
        },
      },
      {
        name: 'Email',
        url: 'mailto:info@dga-agrimensura.com',
        icon: {
          path: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
          fill: 'none',
          stroke: 'currentColor',
        },
      },
    ],
  },
};
