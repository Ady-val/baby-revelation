import React from 'react'
import {
  FaClipboardCheck,
  FaBookReader,
  FaUserCheck,
  FaAddressCard,
  FaRegCreditCard,
  FaDoorOpen,
  FaDiagnoses,
  FaInfoCircle
} from "react-icons/fa";
import { RiTempHotLine } from "react-icons/ri";

const style = { color: "#5E6C84" };
const styleSelected = { color: "#4FC6DB"};

export const WelcomeSidebarData = [
  {
    title: 'Bienvenida',
    path: '/bienvenido/',
    icon: {
      "selected": <FaDoorOpen style={styleSelected} />,
      "unselected":  <FaDoorOpen style={style} />
    }
  }, 
  {
    title: 'Diagnóstico',
    path: '/bienvenido/diagnostico',
    icon: {
      "selected": <FaDiagnoses style={styleSelected} />,
      "unselected":  <FaDiagnoses style={style} />
    }
  },
  {
    title: 'Datos generales',
    path: '/bienvenido/datos-generales',
    icon: {
      "selected": <FaInfoCircle style={styleSelected} />,
      "unselected":  <FaInfoCircle style={style} />
    }
  },
]

export const SidebarData = [ 
    {
        title: 'Mapas de Calor',
        path: '/panel/heatmaps',
        icon: {
          "selected": <RiTempHotLine style={styleSelected} />,
          "unselected":  <RiTempHotLine style={style} />
        }
    }, 
    {
        title: 'Cursos',
        path: '/panel/cursos',
        icon: {
          "selected": <FaBookReader style={styleSelected} />,
          "unselected":  <FaBookReader style={style} />
        }
    },
    {
        title: 'Prospectos',
        path: '/panel/prospectos',
        icon: {
          "selected": <FaUserCheck style={styleSelected} />,
          "unselected":  <FaUserCheck style={style} />
        }
    },
    {
        title: 'Investigaciones',
        path: '/panel/investigaciones',
        icon: {
          "selected": <FaClipboardCheck style={styleSelected} />,
          "unselected":  <FaClipboardCheck style={style} />
        }
    }, 
    {
        title: 'Segmentaciones',
        path: '/panel/segmentaciones',
        icon: {
          "selected": <FaAddressCard style={styleSelected} />,
          "unselected":  <FaAddressCard style={style} />
        }
    }, 
    {
        title: 'Auditor de Anuncios',
        path: '/panel/auditor-de-anuncios',
        icon: {
          "selected": <FaRegCreditCard style={styleSelected} />,
          "unselected":  <FaRegCreditCard style={style} />
        }
    }
]
