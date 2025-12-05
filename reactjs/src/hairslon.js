// App3.js
import React from "react";


// Navbar 
function NavItem({ href, label }) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={href}>
        {label}
      </a>
    </li>
  );
}

// About section
function StatCard({ value, text }) {
  return (
    <div className="col-6 mb-3">
      <div className="border rounded-3 p-3 bg-white shadow-sm">
        <h4 className="fw-bold mb-0">{value}</h4>
        <small>{text}</small>
      </div>
    </div>
  );
}

// Services section ka card
function ServiceCard({ title, desc, points, footer }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{desc}</p>
          <ul>
            {points.map((p, idx) => (
              <li key={idx}>{p}</li>
            ))}
          </ul>
        </div>
        <div className="card-footer text-muted">{footer}</div>
      </div>
    </div>
  );
}

// Pricing table ka ek row
function PricingRow({ service, details, price }) {
  return (
    <tr>
      <td>{service}</td>
      <td>{details}</td>
      <td>{price}</td>
    </tr>
  );
}

/* ---------- Main sections ---------- */

// NAVBAR
const Navbar = () => {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#pricing", label: "Pricing" },
    { href: "#booking", label: "Booking" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          StyleCut Hair Salon
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {links.map((link) => (
              <NavItem key={link.href} href={link.href} label={link.label} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

// HERO / HOME
const HeroSection = () => (
  <section
    id="home"
    className="py-5 text-white"
    style={{
      marginTop: "56px",
      background:
        "linear-gradient(135deg, #343a40, #495057, #6c757d, #212529)",
    }}
  >
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-7">
          <h1 className="display-4 fw-bold mb-3">
            Look Sharp. Feel Confident.
          </h1>
          <p className="lead mb-4">
            Professional haircuts, styling, beard grooming and hair treatments
            for men & women in a stylish and comfortable salon.
          </p>
          <a href="#booking" className="btn btn-light btn-lg me-3 mb-2">
            Book Appointment
          </a>
          <a href="#services" className="btn btn-outline-light btn-lg mb-2">
            View Services
          </a>
        </div>
        <div className="col-md-5">
          <div className="bg-white text-dark rounded-4 shadow p-4">
            <h3 className="fw-bold mb-3 text-center">Today's Timings</h3>
            <ul className="list-unstyled mb-3 text-center">
              <li>Mon - Sat: 10:00 AM – 9:00 PM</li>
              <li>Sunday: 10:00 AM – 2:00 PM</li>
            </ul>
            <p className="mb-1 text-center fw-bold">Walk-ins welcome</p>
            <p className="mb-3 text-center">But appointments get priority</p>
            <p className="text-center mb-0">
              📞 Call / WhatsApp: <strong>+91 98765 12345</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ABOUT
const AboutSection = () => {
  const stats = [
    { value: "7+", text: "Years in Business" },
    { value: "1500+", text: "Happy Clients" },
    { value: "4.8★", text: "Google Rating" },
    { value: "100%", text: "Hygiene & Safety" },
  ];

  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">About Our Salon</h2>
        <div className="row">
          <div className="col-md-6 mb-3">
            <p>
              StyleCut Hair Salon is a modern, air-conditioned salon offering
              professional hair services with a friendly atmosphere. We believe
              every person deserves a hairstyle that matches their personality.
            </p>
            <p>
              From classic cuts to the latest trends, our experienced stylists
              help you transform your look with the right style, color and care.
            </p>
          </div>

          <div className="col-md-6">
            <div className="row text-center">
              {stats.map((s, i) => (
                <StatCard key={i} value={s.value} text={s.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// SERVICES
const ServicesSection = () => {
  const services = [
    {
      title: "Haircuts & Styling",
      desc: "Trendy and classic haircuts for men, women and kids with expert styling.",
      points: ["Men & Women Haircuts", "Layer / Step Cuts", "Blow-dry & Ironing"],
      footer: "Starting from ₹200 / cut",
    },
    {
      title: "Color & Treatments",
      desc: "High quality hair coloring, smoothening and nourishing treatments.",
      points: ["Global / Streaks Color", "Highlights / Balayage", "Smoothening & Keratin"],
      footer: "Starting from ₹1500",
    },
    {
      title: "Men's Grooming",
      desc: "Complete grooming solutions for men with clean and sharp looks.",
      points: ["Beard Trim & Styling", "Shaving / Cleanup", "Facial & Head Massage"],
      footer: "Grooming combos available",
    },
  ];

  return (
    <section id="services" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Services</h2>
        <div className="row">
          {services.map((service, i) => (
            <ServiceCard
              key={i}
              title={service.title}
              desc={service.desc}
              points={service.points}
              footer={service.footer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// PRICING
const PricingSection = () => {
  const pricingRows = [
    {
      service: "Men Haircut",
      details: "Basic cut + styling",
      price: "200 - 300",
    },
    {
      service: "Women Haircut",
      details: "Layer / Step / U-cut",
      price: "400 - 700",
    },
    {
      service: "Beard Trim",
      details: "Shape & style",
      price: "100 - 150",
    },
    {
      service: "Hair Color (Global)",
      details: "Ammonia-free color",
      price: "1500 onwards",
    },
    {
      service: "Hair Smoothening",
      details: "Up to shoulder length",
      price: "3000 onwards",
    },
    {
      service: "Facial (Men/Women)",
      details: "Brightening / Cleanup",
      price: "800 onwards",
    },
  ];

  return (
    <section id="pricing" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Pricing (Sample)</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="table-responsive">
              <table className="table table-bordered text-center align-middle">
                <thead className="table-dark">
                  <tr>
                    <th>Service</th>
                    <th>Details</th>
                    <th>Price (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingRows.map((row, i) => (
                    <PricingRow
                      key={i}
                      service={row.service}
                      details={row.details}
                      price={row.price}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-muted mt-2 mb-0">
              *Prices may vary based on hair length and brand. Contact for exact
              quote.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// BOOKING
const BookingSection = () => {
  const timeSlots = [
    "10:00 AM – 12:00 PM",
    "12:00 PM – 4:00 PM",
    "4:00 PM – 7:00 PM",
    "7:00 PM – 9:00 PM",
  ];

  const services = [
    "Men Haircut",
    "Women Haircut",
    "Beard Trim",
    "Hair Color",
    "Hair Smoothening",
    "Facial / Cleanup",
    "Other (mention below)",
  ];

  return (
    <section id="booking" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Book Your Slot</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-sm">
              <div className="card-body">
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="phone" className="form-label">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="form-control"
                        placeholder="Enter your mobile number"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="date" className="form-label">
                        Preferred Date
                      </label>
                      <input type="date" id="date" className="form-control" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="time" className="form-label">
                        Preferred Time
                      </label>
                      <select id="time" className="form-select">
                        {timeSlots.map((slot, i) => (
                          <option key={i}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="service" className="form-label">
                      Service Required
                    </label>
                    <select id="service" className="form-select">
                      {services.map((s, i) => (
                        <option key={i}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="note" className="form-label">
                      Note (optional)
                    </label>
                    <textarea
                      id="note"
                      rows="3"
                      className="form-control"
                      placeholder="Any special request or details"
                    ></textarea>
                  </div>

                  <button type="button" className="btn btn-dark w-100">
                    Submit Booking Request
                  </button>
                </form>
              </div>
            </div>
            <p className="text-center text-muted mt-3 mb-0">
              We will confirm your appointment via call or WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// CONTACT
const ContactSection = () => (
  <section id="contact" className="py-5 bg-dark text-white">
    <div className="container">
      <h2 className="text-center mb-4">Contact & Location</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <h5>Salon Address</h5>
          <p className="mb-1">StyleCut Hair Salon</p>
          <p className="mb-1">1st Floor, Near Main Market</p>
          <p className="mb-3">Your City, Your State - 000000</p>

          <h5>Contact Details</h5>
          <p className="mb-1">📞 +91 98765 12345</p>
          <p className="mb-1">📧 stylecutsalon@gmail.com</p>
          <p className="mb-0">📱 WhatsApp available on same number</p>
        </div>
        <div className="col-md-6">
          <h5>Location</h5>
          <p className="mb-0">
            (Yahan aap baad mein Google Map ka embed code daal sakte ho.)
          </p>
        </div>
      </div>
    </div>
  </section>
);

// FOOTER
const Footer = () => (
  <footer className="py-3 bg-black text-center text-white-50">
    <small>
      © {new Date().getFullYear()} StyleCut Hair Salon. All rights reserved.
    </small>
  </footer>
);

// MAIN APP
function App3() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PricingSection />
      <BookingSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App3;
