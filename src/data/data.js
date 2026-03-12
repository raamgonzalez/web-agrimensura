import img01 from '../assets/images/01.png';
import img03 from '../assets/images/03.png';
import img04 from '../assets/images/04.png';
import img05 from '../assets/images/05.png';
import img06 from '../assets/images/06.png';
import img07 from '../assets/images/07.jpeg';
import img08 from '../assets/images/08.jpeg';
import img09 from '../assets/images/09.jpeg';
import img10 from '../assets/images/10.jpeg';
import img11 from '../assets/images/11.jpeg';
import imgProfile from '../assets/profile.png';

const networks = {
  instagram: {
    name: 'Instagram',
    url: 'https://www.instagram.com/agrimensura.dga?utm_source=ig_web_button_share_sheet&igsh=cTE2ZnR5Mmh6YmE2',
    description: '@agrimensura.dga',
    icon: 'instagram',
  },
  facebook: {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=100063721591829',
    description: 'DGA Agrimensura',
    icon: 'facebook',
  },
  mail: {
    name: 'Email',
    url: 'mailto:diegogonzaleza.1210@gmail.com',
    description: 'diegogonzaleza.1210@gmail.com',
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
    url: 'https://api.whatsapp.com/send?phone=542944793416',
    description: '+54 2944793416',
    icon: 'cell',
  },
};

export const data = {
  projects: [
    {
      name: 'Relevamiento planialtimetrico con GPS mensura y subdivisión urbano',
      src: img08,
      alt: 'Relevamiento planialtimetrico con GPS mensura y subdivisión urbano',
    },
    {
      name: 'Relevamiento con Estacion total para confección de plano mensura para Usucapion',
      src: img07,
      alt: 'Relevamiento con Estacion total para confección de plano mensura para Usucapion',
    },   
    {
      name: 'Mensura para deslinde y amojonamiento',
      src: img09,
      alt: 'Mensura para deslinde y amojonamiento',
    },
     {
      name: 'Relevamiento planialtimétrico para mensura y división urbana',
      src: img05,
      alt: 'Relevamiento planialtimétrico con estación total para mensura urbana sobre lote',
    },
    {
      name: 'Relevamiento planialtimetrico con GPS mensura y subdivisión urbano',
      src: img10,
      alt: 'Relevamiento planialtimetrico con GPS mensura y subdivisión urbano',
    },
    {
      name: 'Estado parcelario Rural',
      src: img01,
      alt: 'Imagen de stado parcelario rural en terreno agrícola evaluado por agrimensor',
    },
    {
      name: 'Mensura para deslinde y amojonamiento',
      src: img11,
      alt: 'Mensura para deslinde y amojonamiento',
    },
    {
      name: 'Subdivision rural',
      src: img03,
      alt: 'Vista de loteo para subdivisión rural con límites parcelarios',
    },
    {
      name: 'Mensura propiedad horizontal CABA',
      src: img04,
      alt: 'Agrimensor trabajando en levantamiento de PH en CABA',
    },
    {
      name: 'Vuelo de dron para curvas de nivel',
      src: img06,
      alt: 'Captura aérea con dron para generar curvas de nivel mediante fotogrametría',
    },
  ],
  services: [
    {
      name: ' Buenos Aires',
      service: [
        {
          name: 'Estados parcelarios',
          description:
            'Documentación técnica que certifica el estado actual de una parcela, sus límites y características legales y catastrales.',
          urlWeb: 'https://i.postimg.cc/gj0X1WDg/estados-parcelarios.png',
          urlMobile: 'https://i.postimg.cc/gj0X1WDg/estados-parcelarios.png',
        },
        {
          name: 'Georreferenciaciones',
          description:
            'Determinación de la ubicación precisa de un inmueble mediante coordenadas geográficas oficiales, cumpliendo normativas vigentes.',
          urlWeb: 'https://i.postimg.cc/7hdxZ83P/georeferencias.png',
          urlMobile: 'https://i.postimg.cc/FzZqsw2d/georeferencias.png',
        },
        {
          name: 'Subdivisión de PH',
          description:
            'Proceso de subdivisión de un inmueble en unidades funcionales independientes bajo el régimen de propiedad horizontal.',
          urlWeb: 'https://i.postimg.cc/KvDqbrxw/subdivision-ph.png',
          urlMobile: 'https://i.postimg.cc/DfMw7DP4/subdivision-ph.png',
        },
        {
          name: 'Mensura para usucapión',
          description:
            'Levantamiento y plano técnico necesario para trámites judiciales de prescripción adquisitiva (usucapión).',
          urlWeb: 'https://i.postimg.cc/L8Vq45bx/mensura-usucapion.png',
          urlMobile: 'https://i.postimg.cc/8C9ZpTcn/mensura-usucapion.png',
        },
        {
          name: 'Subdivisiones rurales y urbanas',
          description:
            'División técnica de terrenos en áreas rurales y urbanas conforme a las normativas municipales y provinciales.',
          urlWeb: 'https://i.postimg.cc/PxDyR1S6/subdivisiones-rurales-urbanas.png',
          urlMobile: 'https://i.postimg.cc/Gm1r218t/subdivisiones-rurales-urbanas.png',
        },
      ],
    },
     {
      name: 'Río Negro',
      matricula: '5039',
      service: [
        {
          name: 'Delimitacion de linea de rivera',
          description: 'Delimitación de la línea de ribera de cursos de agua en Río Negro, conforme a normativas vigentes.',
          urlWeb: 'https://i.postimg.cc/bvgW1mHp/delimitacion-linea-rivera.png',
          urlMobile: 'https://i.postimg.cc/bvgW1mHp/delimitacion-linea-rivera.png',
        },
        {
          name: 'Mensura particular',
          description:
            'Levantamiento técnico de los límites y características de un inmueble para su correcta individualización y documentación.',
          urlWeb: 'https://i.postimg.cc/TP0FntqP/mensuras_particulares.jpg',
          urlMobile: 'https://i.postimg.cc/TP0FntqP/mensuras_particulares.jpg',
        },
        {
          name: 'Subdivisiones rurales y urbanas',
          description:
            'División técnica de terrenos en áreas rurales y urbanas conforme a las normativas municipales y provinciales.',
          urlWeb: 'https://i.postimg.cc/5NkwQLC9/subdivisiones-rurales-urbanas.jpg',
          urlMobile: 'https://i.postimg.cc/5NkwQLC9/subdivisiones-rurales-urbanas.jpg',
        },
        {
          name: 'Subdivisión de PH',
          description:
            'Proceso técnico para subdividir edificaciones en unidades independientes bajo régimen de propiedad horizontal en Río Negro.',
          urlWeb: 'https://i.postimg.cc/vmhk50L1/subdivision_ph.jpg',
          urlMobile: 'https://i.postimg.cc/vmhk50L1/subdivision_ph.jpg',
        },
        {
          name: 'Vuelos fotogramétricos',
          description:
            'Captura aérea de imágenes georreferenciadas para obtener información precisa del terreno y generar ortofotos.',
          urlWeb: 'https://i.postimg.cc/25GMn0F1/vuelos_dron.jpg',
          urlMobile: 'https://i.postimg.cc/25GMn0F1/vuelos_dron.jpg',
        },
        {
          name: 'Relevamientos planialtimétricos',
          description:
            'Medición integral de dimensiones y altitudes del terreno, necesaria para proyectos rurales y urbanos en la provincia.',
          urlWeb: 'https://i.postimg.cc/Bvpk2mc6/relevamientos_planialtimetricos.jpg',
          urlMobile: 'https://i.postimg.cc/Bvpk2mc6/relevamientos_planialtimetricos.jpg',
        },
        {
          name: 'Modelos digitales de terreno',
          description:
            'Generación de representaciones digitales 3D del relieve del terreno para análisis topográficos y de ingeniería.',
          urlWeb: 'https://i.postimg.cc/wB2ZDwcT/modelos_digitales.jpg',
          urlMobile: 'https://i.postimg.cc/wB2ZDwcT/modelos_digitales.jpg',
        },
        {
          name: 'Deslinde y amojonamiento',
          description:
            'Marcación física de límites de una propiedad en el terreno mediante colocación de mojones y referencias permanentes.',
          urlWeb: 'https://i.postimg.cc/nL2gq3Yh/deslinde_amojonamiento.jpg',
          urlMobile: 'https://i.postimg.cc/nL2gq3Yh/deslinde_amojonamiento.jpg',
        },
        {
          name: 'Replanteo y seguimiento de obra',
          description:
            'Ubicación y materialización en el terreno de los ejes y niveles de un proyecto de obra, con monitoreo técnico durante su ejecución.',
          urlWeb: 'https://i.postimg.cc/KYfwt0r4/replanteo_seguimiento_obra.jpg',
          urlMobile: 'https://i.postimg.cc/KYfwt0r4/replanteo_seguimiento_obra.jpg',
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
          urlWeb: 'https://i.postimg.cc/mgkj7xWN/enrases.png',
          urlMobile: 'https://i.postimg.cc/qqgSm1N9/enrases.png',
        },
        {
          name: 'Relevamientos planialtimétricos',
          description:
            'Medición detallada del terreno considerando su relieve (altimetría) y dimensiones planas (planimetría) para proyectos urbanos.',
          urlWeb: 'https://i.postimg.cc/MpYDkWbS/relevamientos-planialtimetricos.png',
          urlMobile: 'https://i.postimg.cc/TwTpWDKy/relevamientos-planialtimetricos.png',
        },
        {
          name: 'Estados parcelarios',
          description:
            'Certificación catastral de los límites y estado de una parcela en el ámbito de la Ciudad Autónoma de Buenos Aires.',
          urlWeb: 'https://i.postimg.cc/gj0X1WDg/estados-parcelarios.png',
          urlMobile: 'https://i.postimg.cc/0QjVxb9S/estados-parcelarios.png',
        },
        {
          name: 'Mensura particular',
          description:
            'Levantamiento técnico de los límites y características de un inmueble para su correcta individualización y documentación.',
          urlWeb: 'https://i.postimg.cc/8zkpHHZb/mensuras-particulares.png',
          urlMobile: 'https://i.postimg.cc/RZ87fXmW/mensuras-particulares.png',
        },
        {
          name: 'Subdivisión de PH',
          description:
            'Proceso técnico para dividir un inmueble en unidades funcionales independientes bajo el régimen de propiedad horizontal.',
          urlWeb: 'https://i.postimg.cc/KvDqbrxw/subdivision-ph.png',
          urlMobile: 'https://i.postimg.cc/DfMw7DP4/subdivision-ph.png',
        },
      ],
    },
   
  ],
  about: {
    description:
      'El Estudio Agrimensura DGA, radicado en Bariloche, se especializa en levantamientos planialtimétricos, georreferenciación, cartografía y planificación de obras civiles y agrícolas. Contamos con tecnología de punta, como estaciones totales, GPS/GNSS y drones, para brindar información precisa y confiable a ingenieros, arquitectos y desarrolladores. Nuestro objetivo es acompañar cada proyecto desde el relevamiento inicial hasta la entrega de planos y datos geoespaciales, asegurando exactitud y eficiencia en cada trabajo.',
    profile: {
      name: 'Diego González A.',
      notes:
        'Ingeniero Agrimensor, especializado en delimitacion de línea de rivera, agrimensura legal, levantamientos planialtimétricos, curvas de nivel y georreferenciación. Trabajo en campo y en oficina, brindando información precisa para proyectos de construcción, agricultura y desarrollo urbano en Argentina.',
      src: imgProfile,
    },
  },
  networks: {
    footer: [networks.instagram, networks.facebook, networks.mail],
    form: [networks.mail, networks.cell, networks.instagram, networks.facebook],
  },
};
