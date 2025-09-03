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
      name: 'Provincia de Buenos Aires',
      service: [
        {
          name: 'Estados parcelarios',
          description:
            'Documentación técnica que certifica el estado actual de una parcela, sus límites y características legales y catastrales.',
          url: 'https://imgs.search.brave.com/NXkvbqVQ8qszq2d_Gi-LmVa6Tg-UynEkKJ1rJNxta5A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YWdyaW1lbnN1cmFz/dXIuY29tLmFyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzAy/L2FncmltZW5zdXJh/c3VyMjAucG5n',
        },
        {
          name: 'Georreferenciaciones',
          description:
            'Determinación de la ubicación precisa de un inmueble mediante coordenadas geográficas oficiales, cumpliendo normativas vigentes.',
          url: 'https://imgs.search.brave.com/NXkvbqVQ8qszq2d_Gi-LmVa6Tg-UynEkKJ1rJNxta5A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YWdyaW1lbnN1cmFz/dXIuY29tLmFyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzAy/L2FncmltZW5zdXJh/c3VyMjAucG5n',
        },
        {
          name: 'División en propiedad horizontal',
          description:
            'Proceso de subdivisión de un inmueble en unidades funcionales independientes bajo el régimen de propiedad horizontal.',
          url: 'https://imgs.search.brave.com/NXkvbqVQ8qszq2d_Gi-LmVa6Tg-UynEkKJ1rJNxta5A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YWdyaW1lbnN1cmFz/dXIuY29tLmFyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzAy/L2FncmltZW5zdXJh/c3VyMjAucG5n',
        },
        {
          name: 'Mensura para usucapión',
          description:
            'Levantamiento y plano técnico necesario para trámites judiciales de prescripción adquisitiva (usucapión).',
          url: 'https://imgs.search.brave.com/NXkvbqVQ8qszq2d_Gi-LmVa6Tg-UynEkKJ1rJNxta5A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YWdyaW1lbnN1cmFz/dXIuY29tLmFyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzAy/L2FncmltZW5zdXJh/c3VyMjAucG5n',
        },
        {
          name: 'Subdivisiones rurales y urbanas',
          description:
            'División técnica de terrenos en áreas rurales y urbanas conforme a las normativas municipales y provinciales.',
          url: 'https://imgs.search.brave.com/NXkvbqVQ8qszq2d_Gi-LmVa6Tg-UynEkKJ1rJNxta5A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YWdyaW1lbnN1cmFz/dXIuY29tLmFyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzAy/L2FncmltZW5zdXJh/c3VyMjAucG5n',
        },
      ],
    },
    {
      name: 'CABA',
      service: [
        {
          name: 'Enrases',
          description:
            'Determinación y materialización de niveles de referencia para obras de construcción y urbanización.',
          url: 'https://imgs.search.brave.com/NXkvbqVQ8qszq2d_Gi-LmVa6Tg-UynEkKJ1rJNxta5A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YWdyaW1lbnN1cmFz/dXIuY29tLmFyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzAy/L2FncmltZW5zdXJh/c3VyMjAucG5n',
        },
        {
          name: 'Relevamientos planialtimétricos',
          description:
            'Medición detallada del terreno considerando su relieve (altimetría) y dimensiones planas (planimetría) para proyectos urbanos.',
          url: 'https://imgs.search.brave.com/NXkvbqVQ8qszq2d_Gi-LmVa6Tg-UynEkKJ1rJNxta5A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YWdyaW1lbnN1cmFz/dXIuY29tLmFyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzAy/L2FncmltZW5zdXJh/c3VyMjAucG5n',
        },
        {
          name: 'Estados parcelarios',
          description:
            'Certificación catastral de los límites y estado de una parcela en el ámbito de la Ciudad Autónoma de Buenos Aires.',
          url: 'https://imgs.search.brave.com/NXkvbqVQ8qszq2d_Gi-LmVa6Tg-UynEkKJ1rJNxta5A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YWdyaW1lbnN1cmFz/dXIuY29tLmFyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzAy/L2FncmltZW5zdXJh/c3VyMjAucG5n',
        },
        {
          name: 'Mensuras particulares',
          description:
            'Levantamiento técnico de los límites y características de un inmueble para su correcta individualización y documentación.',
          url: 'https://imgs.search.brave.com/NXkvbqVQ8qszq2d_Gi-LmVa6Tg-UynEkKJ1rJNxta5A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YWdyaW1lbnN1cmFz/dXIuY29tLmFyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzAy/L2FncmltZW5zdXJh/c3VyMjAucG5n',
        },
        {
          name: 'Subdivisión en propiedad horizontal',
          description:
            'Proceso técnico para dividir un inmueble en unidades funcionales independientes bajo el régimen de propiedad horizontal, cumpliendo normativas vigentes.',
          url: 'https://imgs.search.brave.com/NXkvbqVQ8qszq2d_Gi-LmVa6Tg-UynEkKJ1rJNxta5A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YWdyaW1lbnN1cmFz/dXIuY29tLmFyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzAy/L2FncmltZW5zdXJh/c3VyMjAucG5n',
        },
      ],
    },
    {
      name: 'Río Negro',
      service: [
        {
          name: 'Replanteo y seguimiento de obra',
          description:
            'Ubicación y materialización en el terreno de los ejes y niveles de un proyecto de obra, con monitoreo técnico durante su ejecución.',
          url: 'https://imgs.search.brave.com/NXkvbqVQ8qszq2d_Gi-LmVa6Tg-UynEkKJ1rJNxta5A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YWdyaW1lbnN1cmFz/dXIuY29tLmFyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzAy/L2FncmltZW5zdXJh/c3VyMjAucG5n',
        },
        {
          name: 'Relevamientos planialtimétricos',
          description:
            'Medición integral de dimensiones y altitudes del terreno, necesaria para proyectos rurales y urbanos en la provincia.',
          url: 'https://imgs.search.brave.com/NXkvbqVQ8qszq2d_Gi-LmVa6Tg-UynEkKJ1rJNxta5A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YWdyaW1lbnN1cmFz/dXIuY29tLmFyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzAy/L2FncmltZW5zdXJh/c3VyMjAucG5n',
        },
        {
          name: 'Modelos digitales de terreno',
          description:
            'Generación de representaciones digitales 3D del relieve del terreno para análisis topográficos y de ingeniería.',
          url: 'https://imgs.search.brave.com/NXkvbqVQ8qszq2d_Gi-LmVa6Tg-UynEkKJ1rJNxta5A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YWdyaW1lbnN1cmFz/dXIuY29tLmFyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzAy/L2FncmltZW5zdXJh/c3VyMjAucG5n',
        },
        {
          name: 'Vuelos fotogramétricos',
          description:
            'Captura aérea de imágenes georreferenciadas para obtener información precisa del terreno y generar ortofotos.',
          url: 'https://imgs.search.brave.com/NXkvbqVQ8qszq2d_Gi-LmVa6Tg-UynEkKJ1rJNxta5A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YWdyaW1lbnN1cmFz/dXIuY29tLmFyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzAy/L2FncmltZW5zdXJh/c3VyMjAucG5n',
        },
        {
          name: 'Mensuras y división rurales y urbanas',
          description:
            'Planos técnicos y subdivisiones de terrenos en áreas urbanas y rurales conforme a la legislación provincial.',
          url: 'https://imgs.search.brave.com/NXkvbqVQ8qszq2d_Gi-LmVa6Tg-UynEkKJ1rJNxta5A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YWdyaW1lbnN1cmFz/dXIuY29tLmFyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzAy/L2FncmltZW5zdXJh/c3VyMjAucG5n',
        },
        {
          name: 'Deslinde y amojonamiento',
          description:
            'Marcación física de límites de una propiedad en el terreno mediante colocación de mojones y referencias permanentes.',
          url: 'https://imgs.search.brave.com/NXkvbqVQ8qszq2d_Gi-LmVa6Tg-UynEkKJ1rJNxta5A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YWdyaW1lbnN1cmFz/dXIuY29tLmFyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzAy/L2FncmltZW5zdXJh/c3VyMjAucG5n',
        },
        {
          name: 'Mensura y división rural y urbana',
          description:
            'Trabajos de mensura para individualizar y dividir parcelas en zonas urbanas y rurales, cumpliendo normativas vigentes.',
          url: 'https://imgs.search.brave.com/NXkvbqVQ8qszq2d_Gi-LmVa6Tg-UynEkKJ1rJNxta5A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YWdyaW1lbnN1cmFz/dXIuY29tLmFyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzAy/L2FncmltZW5zdXJh/c3VyMjAucG5n',
        },
        {
          name: 'División en propiedad horizontal',
          description:
            'Proceso técnico para subdividir edificaciones en unidades independientes bajo régimen de propiedad horizontal en Río Negro.',
          url: 'https://imgs.search.brave.com/NXkvbqVQ8qszq2d_Gi-LmVa6Tg-UynEkKJ1rJNxta5A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YWdyaW1lbnN1cmFz/dXIuY29tLmFyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzAy/L2FncmltZW5zdXJh/c3VyMjAucG5n',
        },
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
    form: [networks.mail, networks.cell, networks.instagram, networks.facebook],
  },
};
