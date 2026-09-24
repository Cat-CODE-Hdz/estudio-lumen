import React, { useState } from 'react'

const services = [
  { icon: '✦', name: 'Facial Luminosity', description: 'Tratamiento facial profundo con ácido hialurónico y vitamina C para una piel luminosa y radiante.', price: '€85' },
  { icon: '❋', name: 'Delineado & Cejas', description: 'Diseño perfecto de cejas con técnicas de microblading y delineado personalizado.', price: '€45' },
  { icon: '✧', name: 'Relax & Drenaje', description: 'Masaje relajante con drenaje linfático para eliminar toxinas y reducir el estrés.', price: '€70' },
  { icon: '◈', name: 'Manicura Zen', description: 'Manicura completa con esmalte gel y cuidado profesional de cutículas.', price: '€35' },
  { icon: '○', name: 'Peeling Químico', description: 'Renovación celular con peelings personalizados para todo tipo de piel.', price: '€95' },
  { icon: '◇', name: 'Paquete Bridal', description: 'Paquete completo para novias: facial, maquillaje, manicura y más.', price: '€250' },
]

const testimonials = [
  { name: 'María García', role: 'Cliente habitual', text: 'Un lugar increíble. El tratamiento facial fue espectacular, mi piel nunca había estado tan luminosa. El trato es excepcional.' },
  { name: 'Laura Martínez', role: 'Novia 2025', text: 'El paquete bridal superó todas mis expectativas. Estuve perfecta todo el día. Las chicas son maravillosas.' },
  { name: 'Ana Rodríguez', role: 'Primera visita', text: 'Encontré mi lugar de confianza en Valencia. El ambiente es relajante y los resultados son inmejorables.' },
]

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cita', href: '#cita' },
]

export default function App() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', date: '', notes: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('¡Gracias por tu solicitud! Te contactaremos pronto para confirmar tu cita.')
    setForm({ name: '', phone: '', service: '', date: '', notes: '' })
  }

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav__inner">
          <a href="#inicio" className="nav__logo">Estudio Lumen</a>
          <div className="nav__links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav__link">{link.label}</a>
            ))}
          </div>
          <a href="#cita" className="btn btn--dark btn--sm nav__cta">Pedir Cita</a>
          <button className="nav__burger" aria-label="Menú">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="inicio" className="hero">
        <div className="hero__grid container">
          <div className="hero__content">
            <span className="hero__label">Belleza y Bienestar · Valencia</span>
            <h1 className="hero__title">
              Tu mejor versión,<br /><em>sin prisas</em>
            </h1>
            <p className="hero__desc">
              En Estudio Lumen creemos que la verdadera belleza nace del cuidado personal y el bienestar interior. Descubre una experiencia única en el corazón de Valencia.
            </p>
            <div className="hero__actions">
              <a href="#cita" className="btn btn--dark">Reservar Cita</a>
              <a href="#servicios" className="btn btn--outline">Ver Servicios</a>
            </div>
          </div>
          <div className="hero__image-wrap">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuADVTNi844US5afwgqxdbGsgro9wRr14K0pCqNC69BVx1WQwB0UHzOh8Ojoxj5M3rBP10JW1Dgq7yz4ZDgypR3bN8DPhz9IRJ3KbG2VufTIZ1n2GS5eYgaaVdRG2qRoztv7tqLA8pze1gKJoSw5R9XIWGBmzmlkMQPawpsK4R2RZdUQOHMTJ5ax2pwFI938hAYR28XdHq_Cd-Q7CPbVn_fumETfvl7tCnIw45zPhvyIyj-KoA0NDdQ1"
              alt="Estudio Lumen - Belleza y Bienestar"
              className="hero__image"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="services section">
        <div className="container">
          <div className="section__header">
            <span className="section__label">Nuestros Servicios</span>
            <h2 className="section__title">Cuidamos de ti con dedicación</h2>
            <p className="section__desc">Cada tratamiento está diseñado para realzar tu belleza natural con los mejores productos y técnicas.</p>
          </div>
          <div className="services__grid">
            {services.map((s) => (
              <div key={s.name} className="service-card">
                <div className="service-card__icon">{s.icon}</div>
                <h3 className="service-card__name">{s.name}</h3>
                <p className="service-card__desc">{s.description}</p>
                <span className="service-card__price">{s.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="nosotros" className="about section">
        <div className="about__grid container">
          <div className="about__image-wrap">
            <div className="about__image-placeholder">
              <span className="about__image-icon">✦</span>
              <span className="about__image-text">Estudio Lumen</span>
            </div>
          </div>
          <div className="about__content">
            <span className="section__label">Sobre Nosotros</span>
            <h2 className="section__title">Un espacio para tu bienestar</h2>
            <p className="about__desc">
              En Estudio Lumen nos dedicamos a crear experiencias de belleza personalizadas. Nuestro equipo de profesionales combina técnicas tradicionales con innovación para ofrecerte los mejores resultados en un ambiente acogedor y relajante.
            </p>
            <div className="about__features">
              <div className="about__feature">
                <span className="about__feature-dot"></span>
                <span>Productos naturales</span>
              </div>
              <div className="about__feature">
                <span className="about__feature-dot"></span>
                <span>Tecnología avanzada</span>
              </div>
              <div className="about__feature">
                <span className="about__feature-dot"></span>
                <span>Ambiente relajante</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="opiniones" className="testimonials section">
        <div className="container">
          <div className="section__header">
            <span className="section__label">Opiniones</span>
            <h2 className="section__title">Lo que dicen nuestras clientas</h2>
          </div>
          <div className="testimonials__grid">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card">
                <div className="testimonial-card__stars">★★★★★</div>
                <p className="testimonial-card__text">"{t.text}"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.name.charAt(0)}</div>
                  <div>
                    <div className="testimonial-card__name">{t.name}</div>
                    <div className="testimonial-card__role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="cita" className="booking section">
        <div className="container">
          <div className="section__header">
            <span className="section__label">Reserva tu Cita</span>
            <h2 className="section__title">Agenda tu próximo momento de bienestar</h2>
            <p className="section__desc">Completa el formulario y nos pondremos en contacto contigo para confirmar tu cita.</p>
          </div>
          <form className="booking__form" onSubmit={handleSubmit}>
            <div className="booking__row">
              <div className="booking__field">
                <label className="booking__label" htmlFor="name">Nombre</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="booking__input"
                  placeholder="Tu nombre completo"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="booking__field">
                <label className="booking__label" htmlFor="phone">Teléfono</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="booking__input"
                  placeholder="+34 600 000 000"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="booking__row">
              <div className="booking__field">
                <label className="booking__label" htmlFor="service">Servicio</label>
                <select
                  id="service"
                  name="service"
                  className="booking__input booking__select"
                  value={form.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona un servicio</option>
                  {services.map((s) => (
                    <option key={s.name} value={s.name}>{s.name} — {s.price}</option>
                  ))}
                </select>
              </div>
              <div className="booking__field">
                <label className="booking__label" htmlFor="date">Fecha</label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  className="booking__input"
                  value={form.date}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="booking__field">
              <label className="booking__label" htmlFor="notes">Notas</label>
              <textarea
                id="notes"
                name="notes"
                className="booking__input booking__textarea"
                placeholder="Algún comentario adicional..."
                rows="4"
                value={form.notes}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn--dark btn--lg booking__submit">
              Reservar Cita
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer__inner container">
          <div className="footer__brand">
            <div className="footer__logo">Estudio Lumen</div>
            <p className="footer__tagline">Belleza y bienestar en el corazón de Valencia.</p>
          </div>
          <div className="footer__col">
            <div className="footer__heading">Ubicación</div>
            <p>Calle Colón 28, 46004<br />Valencia, España</p>
          </div>
          <div className="footer__col">
            <div className="footer__heading">Horario</div>
            <p>Lunes a Viernes: 10:00 – 20:00<br />Sábados: 10:00 – 18:00<br />Domingos: Cerrado</p>
          </div>
          <div className="footer__col">
            <div className="footer__heading">Síguenos</div>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Instagram">IG</a>
              <a href="#" className="footer__social-link" aria-label="Facebook">FB</a>
              <a href="#" className="footer__social-link" aria-label="TikTok">TK</a>
            </div>
          </div>
        </div>
        <div className="footer__bottom container">
          <p>© 2026 Estudio Lumen. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  )
}
