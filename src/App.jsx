import { useEffect, useState } from 'react'
import { openWhatsAppOrDemo } from './lib/whatsapp'
import { WEEKS, INSTAGRAM_POSTS } from './data/editorial'

const WHATSAPP_MSG = 'Hola, me gustaría reservar una cita en Estudio Lumen.'

const DEMO_TOAST_IG =
  'Esta es una demo de portafolio. El perfil @estudiolumen no existe: la rejilla es contenido estático, sin API de Instagram.'

const HERO_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuADVTNi844US5afwgqxdbGsgro9wRr14K0pCqNC69BVx1WQwB0UHzOh8Ojoxj5M3rBP10JW1Dgq7yz4ZDgypR3bN8DPhz9IRJ3KbG2VufTIZ1n2GS5eYgaaVdRG2qRoztv7tqLA8pze1gKJoSw5R9XIWGBmzmlkMQPawpsK4R2RZdUQOHMTJ5ax2pwFI938hAYR28XdHq_Cd-Q7CPbVn_fumETfvl7tCnIw45zPhvyIyj-KoA0NDdQ1'

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Instagram', href: '#instagram' },
  { label: 'Estudio', href: '#nosotros' },
  { label: 'Contacto', href: '#cita' },
]

const SERVICES = [
  {
    id: 'facial',
    num: '01',
    name: 'Cuidado facial',
    items: ['Limpieza', 'Hidratación', 'Tratamientos personalizados'],
  },
  {
    id: 'pelo',
    num: '02',
    name: 'Pelo',
    items: ['Corte', 'Color', 'Tratamientos', 'Styling'],
  },
  {
    id: 'manicura',
    num: '03',
    name: 'Manicura',
    items: ['Manicura', 'Semipermanente', 'Nail art', 'Cuidado'],
  },
  {
    id: 'mirada',
    num: '04',
    name: 'Cejas & Mirada',
    items: ['Diseño', 'Laminado', 'Lifting', 'Tinte'],
  },
]

const INDICATORS = [
  { num: '01', label: 'Cuidado personalizado' },
  { num: '02', label: 'Productos seleccionados' },
  { num: '03', label: 'Experiencia Lumen' },
]

const EXPERIENCE_STEPS = [
  { num: '01', name: 'Escuchamos', text: 'Empezamos entendiendo lo que buscas.' },
  { num: '02', name: 'Creamos', text: 'Elegimos el tratamiento adecuado para ti.' },
  { num: '03', name: 'Cuidamos', text: 'Cada detalle importa, antes, durante y después.' },
]

const GALLERY_FILTERS = ['TODOS', 'PELO', 'UÑAS', 'PIEL', 'MIRADA']

const GALLERY_ITEMS = [
  {
    id: 'g1',
    category: 'PELO',
    title: 'Corte y styling',
    desc: 'Trabajo de ejemplo: corte con acabado natural. Imagen conceptual para la demo.',
  },
  {
    id: 'g2',
    category: 'UÑAS',
    title: 'Semipermanente',
    desc: 'Trabajo de ejemplo: manicura semipermanente de tono liso. Imagen conceptual para la demo.',
  },
  {
    id: 'g3',
    category: 'PIEL',
    title: 'Limpieza facial',
    desc: 'Trabajo de ejemplo: tratamiento de limpieza e hidratación. Imagen conceptual para la demo.',
  },
  {
    id: 'g4',
    category: 'MIRADA',
    title: 'Diseño de cejas',
    desc: 'Trabajo de ejemplo: diseño y laminado de cejas. Imagen conceptual para la demo.',
  },
  {
    id: 'g5',
    category: 'PELO',
    title: 'Color y brillo',
    desc: 'Trabajo de ejemplo: coloración con acabado brillante. Imagen conceptual para la demo.',
  },
  {
    id: 'g6',
    category: 'UÑAS',
    title: 'Nail art minimal',
    desc: 'Trabajo de ejemplo: nail art de línea fina. Imagen conceptual para la demo.',
  },
]

const FAQ_ITEMS = [
  {
    q: '¿Necesito reservar con antelación?',
    a: 'Sí. Recomendamos reservar previamente para garantizar disponibilidad.',
  },
  {
    q: '¿Puedo combinar varios servicios?',
    a: 'Sí. Podemos ayudarte a crear una combinación adaptada a tus necesidades.',
  },
  {
    q: '¿Trabajáis con productos profesionales?',
    a: 'Sí. Seleccionamos productos profesionales adecuados para cada servicio.',
  },
  {
    q: '¿Dónde está Estudio Lumen?',
    a: 'Valencia. Dirección conceptual para esta demo. No utilizar como ubicación comercial real.',
  },
]

function WaIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.006.55 1.764.846 2.806.846 3.182 0 5.768-2.587 5.768-5.766.001-3.182-2.585-5.629-5.768-5.629zm3.42 8.167c-.145.405-.838.774-1.171.823-.334.05-.758.077-2.348-.544-1.905-.744-3.134-2.693-3.23-2.821-.095-.129-.769-1.023-.769-1.95 0-.928.486-1.385.66-1.575.174-.19.38-.238.508-.238.127 0 .253.002.365.008.117.005.274-.045.428.327.16.386.548 1.336.595 1.433.048.097.08.21.016.337-.064.127-.096.206-.191.317-.095.111-.2.248-.286.333-.095.095-.195.198-.084.388.111.19.493.813 1.058 1.317.728.648 1.341.85 1.531.945.19.096.302.08.413-.048.112-.127.477-.555.604-.746.127-.19.254-.159.429-.095.175.064 1.112.524 1.303.62.19.095.317.143.365.222.048.08.048.46-.097.865z" />
    </svg>
  )
}

function useWhatsApp() {
  const [toast, setToast] = useState(false)

  function send(message) {
    const ok = openWhatsAppOrDemo(message)
    if (!ok) {
      setToast(true)
      window.setTimeout(() => setToast(false), 4500)
    }
  }

  const Toast = toast ? (
    <div className="toast" role="status">
      <span className="toast__badge">Estado demo</span>
      <p>
        <strong>Esto es una demo de portafolio.</strong> El WhatsApp del estudio no
        está conectado: así se abriría la conversación con tu mensaje predefinido.
      </p>
    </div>
  ) : null

  return { send, Toast }
}

function useDemoToast(message) {
  const [toast, setToast] = useState(false)

  function show() {
    setToast(true)
    window.setTimeout(() => setToast(false), 4500)
  }

  const Toast = toast ? (
    <div className="toast" role="status">
      <span className="toast__badge">Estado demo</span>
      <p>{message}</p>
    </div>
  ) : null

  return { show, Toast }
}

function ImagePlaceholder({ label, sub, className = '' }) {
  return (
    <div className={`ph ${className}`} role="img" aria-label={`${label}. Imagen conceptual para esta demo.`}>
      <span className="ph__label">{label}</span>
      {sub ? <span className="ph__sub">{sub}</span> : null}
      <span className="ph__note">Imagen conceptual</span>
    </div>
  )
}

function AnnouncementBar({ onWhatsApp }) {
  const [visible, setVisible] = useState(true)
  if (!visible) return null

  return (
    <div className="announce">
      <button className="announce__text" type="button" onClick={onWhatsApp}>
        Nueva temporada · Reserva tu cita por WhatsApp <span aria-hidden="true">→</span>
      </button>
      <button
        className="announce__close"
        type="button"
        aria-label="Ocultar aviso"
        onClick={() => setVisible(false)}
      >
        ×
      </button>
    </div>
  )
}

function Header({ onWhatsApp }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__inner container">
        <a href="#inicio" className="header__logo">
          <span className="header__logo-name">Lumen</span>
          <span className="header__logo-sub">Estudio de belleza</span>
        </a>

        <nav className="header__nav" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="header__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <button className="btn btn--dark btn--sm" type="button" onClick={onWhatsApp}>
            <WaIcon size={15} />
            <span>Reservar cita</span>
          </button>
          <button
            className="header__burger"
            type="button"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            {open ? null : <span></span>}
            <span></span>
          </button>
        </div>
      </div>

      {open ? (
        <nav className="header__mobile" aria-label="Navegación móvil">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="header__mobile-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            className="btn btn--dark header__mobile-cta"
            type="button"
            onClick={() => {
              setOpen(false)
              onWhatsApp()
            }}
          >
            <WaIcon size={16} />
            <span>Reservar cita por WhatsApp</span>
          </button>
        </nav>
      ) : null}
    </header>
  )
}

function Hero({ onWhatsApp }) {
  return (
    <section id="inicio" className="hero">
      <div className="hero__grid container">
        <div className="hero__content">
          <div className="hero__badges">
            <span className="chip">Proyecto conceptual</span>
            <span className="chip chip--ghost">Demo · no es un estudio real</span>
          </div>
          <p className="hero__micro">Valencia · Estudio de belleza contemporáneo</p>
          <h1 className="hero__title">Belleza que se siente.</h1>
          <p className="hero__desc">Tratamientos, cuidado y belleza pensados para ti.</p>
          <div className="hero__actions">
            <button className="btn btn--dark btn--lg" type="button" onClick={onWhatsApp}>
              <WaIcon size={18} />
              <span>Reserva tu cita por WhatsApp</span>
            </button>
            <a href="#instagram" className="btn btn--outline btn--lg">
              Ver Instagram
            </a>
          </div>
        </div>
        <div className="hero__media">
          <img
            src={HERO_IMG}
            alt="Modelo en un estudio de belleza contemporáneo — imagen conceptual de Estudio Lumen"
            className="hero__image"
          />
        </div>
      </div>
    </section>
  )
}

function IntroAbout() {
  return (
    <section id="nosotros" className="section section--sand">
      <div className="container">
        <div className="intro">
          <div className="intro__text">
            <span className="section__label">Sobre el estudio</span>
            <h2 className="section__title">Tu momento empieza aquí.</h2>
            <p className="section__desc">
              En Lumen creemos que cuidarte no debería sentirse como una obligación,
              sino como un momento para ti. Creamos una experiencia cercana, cuidada y
              personalizada para que salgas sintiéndote exactamente como quieres.
            </p>
          </div>
          <ul className="intro__indicators">
            {INDICATORS.map((item) => (
              <li key={item.num} className="intro__indicator">
                <span className="intro__num">{item.num}</span>
                <span className="intro__label">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="about">
          <ImagePlaceholder label="Interior del estudio" sub="Espacio Lumen" className="about__media" />
          <div className="about__text">
            <h3 className="about__title">Un espacio para volver a ti.</h3>
            <p className="section__desc">
              Lumen nace de una idea sencilla: crear un espacio donde belleza, cuidado y
              tranquilidad convivan. Un estudio íntimo, contemporáneo y cercano donde
              cada persona pueda sentirse cómoda siendo ella misma.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="servicios" className="section">
      <div className="container">
        <div className="section__header">
          <span className="section__label">Servicios</span>
          <h2 className="section__title">Todo lo que necesitas para sentirte bien.</h2>
        </div>
        <div className="services__grid">
          {SERVICES.map((service) => (
            <article key={service.id} className="service">
              <span className="service__num">{service.num}</span>
              <h3 className="service__name">{service.name}</h3>
              <ul className="service__list">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href="#destacado" className="service__cta">
                Descubrir <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="confianza" className="section section--charcoal">
      <div className="container">
        <div className="section__header">
          <span className="section__label section__label--light">Experiencia Lumen</span>
          <h2 className="section__title section__title--light">No es solo un tratamiento.</h2>
        </div>
        <ol className="experience">
          {EXPERIENCE_STEPS.map((step) => (
            <li key={step.num} className="experience__step">
              <span className="experience__num">{step.num}</span>
              <h3 className="experience__name">{step.name}</h3>
              <p className="experience__text">{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="experience__guarantee">
          <strong>Garantía del proceso:</strong> si algo no va como hablamos, se revisa
          contigo en el propio estudio. Confianza por escrito, no estrellas inventadas.
        </p>
        <div className="testimonial-slot">
          <span className="testimonial-slot__tag">Hueco reservado</span>
          <p className="testimonial-slot__text">
            Testimonio verificado — con permiso del cliente. Esta demo no publica
            opiniones, nombres ni valoraciones inventados.
          </p>
        </div>
      </div>
    </section>
  )
}

function Location({ onWhatsApp }) {
  return (
    <section id="ubicacion" className="section section--cream">
      <div className="container">
        <div className="section__header">
          <span className="section__label">Ubicación</span>
          <h2 className="section__title">Estudio Lumen, en Valencia.</h2>
          <p className="section__desc">
            Datos de contacto conceptual para esta demo. No corresponde a un local real.
          </p>
        </div>
        <div className="location__grid">
          <div className="location__card">
            <h3 className="location__heading">Dirección</h3>
            <p>Valencia, España</p>
            <p className="location__note">Dirección conceptual · no es un local real</p>
          </div>
          <div className="location__card">
            <h3 className="location__heading">Horario</h3>
            <p>Lunes a viernes: 10:00 – 20:00</p>
            <p>Sábados: 10:00 – 18:00</p>
            <p className="location__note">Horario conceptual · no es horario operativo</p>
          </div>
          <div className="location__card">
            <h3 className="location__heading">Contacto</h3>
            <p>Sin teléfono real: la vía de contacto es WhatsApp.</p>
            <button className="btn btn--dark btn--sm" type="button" onClick={onWhatsApp}>
              <WaIcon size={15} />
              <span>Escribir por WhatsApp</span>
            </button>
          </div>
          <ImagePlaceholder label="Mapa de Valencia" sub="Mapa conceptual" className="location__map" />
        </div>
      </div>
    </section>
  )
}

function Featured({ onWhatsApp }) {
  return (
    <section id="destacado" className="section section--sand">
      <div className="featured container">
        <div className="featured__text">
          <span className="section__label">Servicio destacado</span>
          <h2 className="section__title">Tu piel. Tu momento. Tu tratamiento.</h2>
          <p className="section__desc">
            Analizamos lo que tu piel necesita y diseñamos una experiencia personalizada
            para ayudarte a conseguir una piel más luminosa, equilibrada y cuidada.
          </p>
          <div className="featured__actions">
            <a href="#servicios" className="btn btn--outline">
              Ver tratamientos
            </a>
            <button className="btn btn--dark" type="button" onClick={onWhatsApp}>
              <WaIcon size={16} />
              <span>Reservar por WhatsApp</span>
            </button>
          </div>
        </div>
        <ImagePlaceholder
          label="Tratamiento facial"
          sub="Sección editorial"
          className="featured__media"
        />
      </div>
    </section>
  )
}

function Gallery() {
  const [filter, setFilter] = useState('TODOS')
  const [lightbox, setLightbox] = useState(null)

  const items =
    filter === 'TODOS' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === filter)

  useEffect(() => {
    if (!lightbox) return undefined
    function onKey(event) {
      if (event.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  return (
    <section id="resultados" className="section">
      <div className="container">
        <div className="section__header">
          <span className="section__label">Resultados</span>
          <h2 className="section__title">El resultado habla por nosotros.</h2>
          <p className="section__desc">Una selección de nuestros últimos trabajos.</p>
        </div>

        <div className="gallery__filters" role="group" aria-label="Filtrar por categoría">
          {GALLERY_FILTERS.map((name) => (
            <button
              key={name}
              type="button"
              className={`gallery__filter ${filter === name ? 'is-active' : ''}`}
              aria-pressed={filter === name}
              onClick={() => setFilter(name)}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="gallery__grid">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`gallery__item gallery__item--${item.category.toLowerCase()}`}
              onClick={() => setLightbox(item)}
            >
              <ImagePlaceholder label={item.title} sub={item.category} />
              <span className="gallery__caption">
                <span className="gallery__cat">{item.category}</span>
                <span>{item.title}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {lightbox ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          onClick={(event) => {
            if (event.target === event.currentTarget) setLightbox(null)
          }}
        >
          <button
            className="lightbox__close"
            type="button"
            aria-label="Cerrar"
            autoFocus
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          <div className="lightbox__body">
            <ImagePlaceholder label={lightbox.title} sub={lightbox.category} className="lightbox__media" />
            <div className="lightbox__meta">
              <span className="gallery__cat">{lightbox.category}</span>
              <h3 className="lightbox__title">{lightbox.title}</h3>
              <p>{lightbox.desc}</p>
              <span className="lightbox__badge">Proyecto conceptual · imagen de demo</span>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}

function Faq() {
  return (
    <section id="faq" className="section section--cream">
      <div className="container container--narrow">
        <div className="section__header">
          <span className="section__label">Preguntas frecuentes</span>
          <h2 className="section__title">Antes de tu primera visita.</h2>
        </div>
        <div className="faq">
          {FAQ_ITEMS.map((item) => (
            <details key={item.q} className="faq__item">
              <summary className="faq__q">{item.q}</summary>
              <p className="faq__a">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function WeeklyCalendar() {
  return (
    <section id="weekly" className="section section--sand">
      <div className="container">
        <div className="section__header">
          <span className="section__label">Capa WEEKLY</span>
          <h2 className="section__title">Calendario editorial.</h2>
          <p className="section__desc">
            Cinco semanas de contenido recurrente, con fecha, red y formato. Así se ve el
            trabajo sostenido que incluye el paquete FULL: 5 piezas por semana, escritas
            y fechadas, no un “colocar aquí”.
          </p>
        </div>

        <div className="weekly">
          {WEEKS.map((week) => (
            <article key={week.id} className="weekly__week">
              <header className="weekly__head">
                <span className="weekly__id">{week.id}</span>
                <div>
                  <h3 className="weekly__title">{week.title}</h3>
                  <p className="weekly__desc">{week.desc}</p>
                </div>
              </header>
              <ul className="weekly__list">
                {week.pieces.map((piece) => (
                  <li key={piece.id} className="weekly__piece">
                    <div className="weekly__meta">
                      <span className="weekly__date">{piece.date}</span>
                      <span className="weekly__network">{piece.network}</span>
                      <span className="weekly__format">{piece.format}</span>
                    </div>
                    <p className="weekly__copy">{piece.copy}</p>
                    <span className="weekly__badge">Proyecto conceptual</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function InstagramGrid() {
  const { show, Toast } = useDemoToast(DEMO_TOAST_IG)

  return (
    <section id="instagram" className="section">
      <div className="container">
        <div className="section__header">
          <span className="section__label">Capa SOCIAL</span>
          <h2 className="section__title">Más Lumen en Instagram.</h2>
          <p className="section__desc">
            Descubre nuestros últimos trabajos, inspiración y pequeños momentos del
            estudio. Rejilla estática generada desde el calendario editorial: sin API de
            Instagram, sin seguidores inventados.
          </p>
        </div>

        <div className="ig__grid">
          {INSTAGRAM_POSTS.map((post) => (
            <button key={post.id} type="button" className="ig__tile" onClick={show}>
              <ImagePlaceholder label={`${post.weekId} · ${post.format}`} sub={post.label} />
              <span className="ig__caption">
                <span className="ig__handle">@estudiolumen · {post.date}</span>
                <span className="ig__copy">{post.copy}</span>
                <span className="ig__badge">{post.label} · Proyecto conceptual</span>
              </span>
            </button>
          ))}
        </div>

        <div className="ig__cta">
          <button className="btn btn--dark" type="button" onClick={show}>
            Seguir en Instagram
          </button>
        </div>
      </div>
      {Toast}
    </section>
  )
}

function BookingForm() {
  const [status, setStatus] = useState('idle')
  const [popover, setPopover] = useState(false)
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    servicio: '',
    fecha: '',
    notas: '',
  })

  function handleChange(event) {
    const { name, value } = event.target
    if (name === 'telefono') {
      const digits = value.replace(/\D/g, '').slice(0, 9)
      const formatted = digits.replace(/(\d{3})(\d{0,3})(\d{0,3})/, (_, a, b, c) =>
        [a, b, c].filter(Boolean).join(' '),
      )
      setForm({ ...form, telefono: formatted })
      return
    }
    setForm({ ...form, [name]: value })
  }

  function fillExample() {
    setForm({
      nombre: 'Nombre de ejemplo',
      telefono: '600 000 000',
      servicio: 'Cuidado facial',
      fecha: '',
      notas: 'Datos de ejemplo para probar el formulario de la demo.',
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    setStatus('loading')
    window.setTimeout(() => setStatus('success'), 900)
  }

  function reset() {
    setStatus('idle')
    setForm({ nombre: '', telefono: '', servicio: '', fecha: '', notas: '' })
  }

  return (
    <section id="cita" className="section section--cream">
      <div className="container container--narrow">
        <div className="form__topline">
          <span className="chip chip--dark">Extra · a presupuestar</span>
          <div className="form__info">
            <button
              className="form__info-btn"
              type="button"
              title="No viene incluido en tu nivel: el contacto es WhatsApp. Pídenoslo como extra."
              aria-label="Información del extra"
              aria-expanded={popover}
              onClick={() => setPopover(!popover)}
            >
              ℹ
            </button>
            {popover ? (
              <div className="form__popover" role="dialog" aria-label="Información del extra">
                <strong>El formulario no va incluido en este nivel.</strong>
                El contacto de esta landing es un botón de WhatsApp: te escriben y agendas
                ahí mismo, sin esperas. Un formulario te obligaría a redactar tu propia
                política de privacidad y la de cookies, y a mantenerlas al día cada vez
                que cambies algo. Si lo quieres, es un extra: tú nos das el texto legal
                redactado y nosotros lo montamos. Esto es una demo de cómo se vería.
              </div>
            ) : null}
          </div>
        </div>

        <div className="section__header section__header--left">
          <h2 className="section__title">Solicitar cita</h2>
          <p className="section__desc">
            El camino principal es WhatsApp. Este formulario es la demostración del
            extra, en posición secundaria.
          </p>
        </div>

        <div className="form__warning" role="note">
          <strong>Demostración.</strong> Este formulario no envía nada a ningún sitio ni
          comprueba disponibilidad.
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form__row">
            <div className="form__field">
              <label className="form__label" htmlFor="cita-nombre">
                Nombre
              </label>
              <input
                className="form__input"
                id="cita-nombre"
                name="nombre"
                type="text"
                placeholder="Tu nombre"
                value={form.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form__field">
              <label className="form__label" htmlFor="cita-tel">
                Teléfono <span className="form__optional">(opcional)</span>
              </label>
              <input
                className="form__input"
                id="cita-tel"
                name="telefono"
                type="tel"
                inputMode="numeric"
                placeholder="6XX XXX XXX"
                value={form.telefono}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form__row">
            <div className="form__field">
              <label className="form__label" htmlFor="cita-servicio">
                Servicio
              </label>
              <select
                className="form__input form__select"
                id="cita-servicio"
                name="servicio"
                value={form.servicio}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona un servicio</option>
                {SERVICES.map((service) => (
                  <option key={service.id} value={service.name}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form__field">
              <label className="form__label" htmlFor="cita-fecha">
                Fecha preferida
              </label>
              <input
                className="form__input"
                id="cita-fecha"
                name="fecha"
                type="date"
                value={form.fecha}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form__field">
            <label className="form__label" htmlFor="cita-notas">
              Notas
            </label>
            <textarea
              className="form__input form__textarea"
              id="cita-notas"
              name="notas"
              rows="3"
              placeholder="Cuéntanos qué necesitas…"
              value={form.notas}
              onChange={handleChange}
            />
          </div>

          <div className="form__actions">
            <button className="btn btn--soft" type="button" onClick={fillExample}>
              Rellenar con datos de ejemplo
            </button>
            <button
              className="btn btn--dark"
              type="submit"
              disabled={status === 'loading' || status === 'success'}
            >
              {status === 'loading'
                ? 'Enviando…'
                : status === 'success'
                  ? 'Solicitud registrada'
                  : 'Solicitar cita'}
            </button>
          </div>

          {status === 'success' ? (
            <div className="form__success" role="status">
              <strong>Solicitud registrada en la demo.</strong>
              <p>
                No se ha enviado a ningún sitio ni se ha comprobado disponibilidad. Así
                se vería la confirmación si el extra estuviera activo.
              </p>
              <button className="form__reset" type="button" onClick={reset}>
                Rellenar otra vez →
              </button>
            </div>
          ) : null}
        </form>
      </div>
    </section>
  )
}

function Footer({ onWhatsApp }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <span className="footer__logo">Lumen</span>
            <span className="footer__logo-sub">Estudio de belleza</span>
            <p className="footer__tagline">Belleza que se siente.</p>
            <p className="footer__city">Valencia · España</p>
            <div className="footer__links">
              <a href="#instagram">Instagram</a>
              <button type="button" onClick={onWhatsApp}>
                WhatsApp
              </button>
              <a href="#cita">Contacto</a>
            </div>
          </div>

          <nav className="footer__col" aria-label="Secciones">
            <h3 className="footer__heading">Explorar</h3>
            <a href="#servicios">Servicios</a>
            <a href="#resultados">Resultados</a>
            <a href="#nosotros">Estudio</a>
            <a href="#faq">Preguntas frecuentes</a>
          </nav>

          <div className="footer__panel">
            <div className="footer__panel-top">
              <span className="footer__panel-name">Paquete FULL</span>
              <span className="footer__panel-price">199 €/mes · setup incluido</span>
              <span className="footer__panel-badge">★ Recomendado</span>
            </div>
            <p className="footer__panel-line">
              <strong>Incluye:</strong> landing CUSTOM Pro completa (8 secciones) ·
              calendario editorial WEEKLY con 5 piezas por semana · gestión de redes
              SOCIAL con rejilla de Instagram · hosting · responsive · SEO básico
            </p>
            <p className="footer__panel-line footer__panel-line--muted">
              <strong>No incluye:</strong> formulario de citas (extra, a presupuestar) ·
              aviso legal (lo aporta el cliente) · blog
            </p>
            <p className="footer__panel-note">
              El único nivel con setup incluido: pagas una vez el mes, sin obras.
            </p>
            <div className="footer__panel-links">
              <a href="https://cat-code-hdz.github.io/ruta-norte/" target="_blank" rel="noopener noreferrer">
                ¿Ver el escalón de landing por separado? → Ruta Norte
              </a>
              <a href="https://cat-code-hdz.github.io/catcode/" target="_blank" rel="noopener noreferrer">
                ¿Ver la web de CAT CODE? → cat-code-hdz.github.io
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 Estudio Lumen</p>
          <p className="footer__concept">Proyecto conceptual · Diseñado por CAT CODE</p>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppFab({ onWhatsApp }) {
  return (
    <div className="fab">
      <span className="fab__label">Escríbenos</span>
      <button className="fab__btn" type="button" aria-label="Escríbenos por WhatsApp" onClick={onWhatsApp}>
        <WaIcon size={26} />
      </button>
    </div>
  )
}

export default function App() {
  const { send, Toast } = useWhatsApp()

  return (
    <>
      <AnnouncementBar onWhatsApp={() => send(WHATSAPP_MSG)} />
      <Header onWhatsApp={() => send(WHATSAPP_MSG)} />
      <main>
        <Hero onWhatsApp={() => send(WHATSAPP_MSG)} />
        <IntroAbout />
        <Services />
        <Experience />
        <Location onWhatsApp={() => send(WHATSAPP_MSG)} />
        <Featured onWhatsApp={() => send(WHATSAPP_MSG)} />
        <Gallery />
        <Faq />
        <WeeklyCalendar />
        <InstagramGrid />
        <BookingForm />
      </main>
      <Footer onWhatsApp={() => send(WHATSAPP_MSG)} />
      <WhatsAppFab onWhatsApp={() => send(WHATSAPP_MSG)} />
      {Toast}
    </>
  )
}
