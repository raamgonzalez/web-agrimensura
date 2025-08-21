import img01 from '../assets/images/01.png';
import img02 from '../assets/images/02.png';
import img03 from '../assets/images/03.png';
import imgProfile from '../assets/profile.png';

const networks = {
  instagram: {
    name: 'Instagram',
    url: 'https://instagram.com/dga_agrimensura',
    description: '@dga_agrimensura',
    icon: 'instagram',
  },
  facebook: {
    name: 'Facebook',
    url: 'https://facebook.com/dga.agrimensura',
    description: 'DGA Agrimensura',
    icon: 'facebook',
  },
  mail: {
    name: 'Email',
    url: 'mailto:info@dga-agrimensura.com',
    description: 'info@dga-agrimensura.com',
    icon: 'mail',
  },
  location: {
    name: 'Ubicación',
    url: 'https://goo.gl/maps/xyz123',
    description: 'Buenos Aires, Argentina',
    icon: 'location',
  },
  cell: {
    name: 'Celular',
    url: 'https://api.whatsapp.com/send?phone=541155789343',
    description: '+54 1155789343',
    icon: 'cell',
  },
};

export const data = {
  projects: [
    {
      name: 'Levantamiento Topográfico',
      src: 'img01',
      alt: 'Imagen de agrimensor midiendo terreno con estación total',
    },
    {
      name: 'Curvas de Nivel y Planimetría',
      src: 'img02',
      alt: 'Imagen con curvas de nivel y trabajos de cartografía',
    },
    {
      name: 'Instalación de Estación de Referencia',
      src: 'img03',
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
  networks: {
    footer: [networks.instagram, networks.facebook, networks.mail],
    form: [networks.mail, networks.location, networks.cell, networks.instagram, networks.facebook],
  },
};
