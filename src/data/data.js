import img01 from '../assets/images/01.png';
import img02 from '../assets/images/02.png';
import img03 from '../assets/images/03.png';
import img04 from '../assets/images/04.png';
import img05 from '../assets/images/05.png';
import img06 from '../assets/images/06.png';
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
    url: 'https://api.whatsapp.com/send?phone=5492345685353',
    description: '+54 92345685353',
    icon: 'cell',
  },
};

export const data = {
  projects: [
    {
      name: 'Relevamiento planialtimétrico para mensura y división urbana',
      src: img05,
      alt: 'Relevamiento planialtimétrico con estación total para mensura urbana sobre lote',
    },
    {
      name: 'Estado parcelario Rural',
      src: img01,
      alt: 'Imagen de stado parcelario rural en terreno agrícola evaluado por agrimensor',
    },
    {
      name: 'Relevamiento planialtimetrico',
      src: img02,
      alt: 'Agrimensor realizando relevamiento planialtimétrico con estación total en terreno',
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
      name: 'Provincia de Buenos Aires',
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
    {
      name: 'Río Negro',
      service: [
        {
          name: 'Replanteo y seguimiento de obra',
          description:
            'Ubicación y materialización en el terreno de los ejes y niveles de un proyecto de obra, con monitoreo técnico durante su ejecución.',
          urlWeb: 'https://i.postimg.cc/X7fhJ6c2/replanteo-seguimiento-obra.png',
          urlMobile: 'https://i.postimg.cc/Tw23Pvsg/replanteo-seguimiento-obra.png',
        },
        {
          name: 'Relevamientos planialtimétricos',
          description:
            'Medición integral de dimensiones y altitudes del terreno, necesaria para proyectos rurales y urbanos en la provincia.',
          urlWeb: 'https://i.postimg.cc/MpYDkWbS/relevamientos-planialtimetricos.png',
          urlMobile: 'https://i.postimg.cc/TwTpWDKy/relevamientos-planialtimetricos.png',
        },
        {
          name: 'Modelos digitales de terreno',
          description:
            'Generación de representaciones digitales 3D del relieve del terreno para análisis topográficos y de ingeniería.',
          urlWeb: 'https://i.postimg.cc/pX4CQGWw/modelos-digitales.png',
          urlMobile: 'https://i.postimg.cc/gcN68NqG/modelos-digitales.png',
        },
        {
          name: 'Vuelos fotogramétricos',
          description:
            'Captura aérea de imágenes georreferenciadas para obtener información precisa del terreno y generar ortofotos.',
          urlWeb: 'https://i.postimg.cc/c4hm2xcN/vuelos-dron.png',
          urlMobile: 'https://i.postimg.cc/pXKrkCK9/vuelos-dron.png',
        },
        {
          name: 'Subdivisiones rurales y urbanas',
          description:
            'División técnica de terrenos en áreas rurales y urbanas conforme a las normativas municipales y provinciales.',
          urlWeb: 'https://i.postimg.cc/PxDyR1S6/subdivisiones-rurales-urbanas.png',
          urlMobile: 'https://i.postimg.cc/Gm1r218t/subdivisiones-rurales-urbanas.png',
        },
        {
          name: 'Deslinde y amojonamiento',
          description:
            'Marcación física de límites de una propiedad en el terreno mediante colocación de mojones y referencias permanentes.',
          urlWeb: 'https://i.postimg.cc/d0KFLjzF/deslinde-amojonamiento.png',
          urlMobile: 'https://i.postimg.cc/FHPcvGzP/deslinde-amojonamiento.png',
        },
        {
          name: 'Subdivisión de PH',
          description:
            'Proceso técnico para subdividir edificaciones en unidades independientes bajo régimen de propiedad horizontal en Río Negro.',
          urlWeb: 'https://i.postimg.cc/KvDqbrxw/subdivision-ph.png',
          urlMobile: 'https://i.postimg.cc/DfMw7DP4/subdivision-ph.png',
        },
      ],
    },
  ],
  about: {
    description:
      'El Estudio Agrimensura DGA, radicado en Argentina, se especializa en levantamientos planialtimétricos, georreferenciación, cartografía y planificación de obras civiles y agrícolas. Contamos con tecnología de punta, como estaciones totales, GPS/GNSS y drones, para brindar información precisa y confiable a ingenieros, arquitectos y desarrolladores. Nuestro objetivo es acompañar cada proyecto desde el relevamiento inicial hasta la entrega de planos y datos geoespaciales, asegurando exactitud y eficiencia en cada trabajo.',
    profile: {
      name: 'Diego González A.',
      notes:
        'Ingeniero Agrimensor, especializado en levantamientos planialtimétricos, curvas de nivel y georreferenciación. Trabajo en campo y en oficina, brindando información precisa para proyectos de construcción, agricultura y desarrollo urbano en Argentina.',
      src: imgProfile,
    },
  },
  networks: {
    footer: [networks.instagram, networks.facebook, networks.mail],
    form: [networks.mail, networks.cell, networks.instagram, networks.facebook],
  },
};
