// App.js
import React from "react";

// NAVBAR
const Navbar = () => (
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
          <li className="nav-item">
            <a className="nav-link" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#services">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#pricing">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#booking">
              Booking
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

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
const AboutSection = () => (
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
            <div className="col-6 mb-3">
              <div className="border rounded-3 p-3 bg-white shadow-sm">
                <h4 className="fw-bold mb-0">7+</h4>
                <small>Years in Business</small>
              </div>
            </div>
            <div className="col-6 mb-3">
              <div className="border rounded-3 p-3 bg-white shadow-sm">
                <h4 className="fw-bold mb-0">1500+</h4>
                <small>Happy Clients</small>
              </div>
            </div>
            <div className="col-6">
              <div className="border rounded-3 p-3 bg-white shadow-sm">
                <h4 className="fw-bold mb-0">4.8★</h4>
                <small>Google Rating</small>
              </div>
            </div>
            <div className="col-6">
              <div className="border rounded-3 p-3 bg-white shadow-sm">
                <h4 className="fw-bold mb-0">100%</h4>
                <small>Hygiene & Safety</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// SERVICES
const ServicesSection = () => (
  <section id="services" className="py-5">
    <div className="container">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h4 className="card-title">Haircuts & Styling</h4>
              <p className="card-text">
                Trendy and classic haircuts for men, women and kids with expert
                styling.
              </p>
              <ul>
                <li>Men & Women Haircuts</li>
                <li>Layer / Step Cuts</li>
                <li>Blow-dry & Ironing</li>
              </ul>
            </div>
            <div className="card-footer text-muted">
              Starting from ₹200 / cut
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h4 className="card-title">Color & Treatments</h4>
              <p className="card-text">
                High quality hair coloring, smoothening and nourishing
                treatments.
              </p>
              <ul>
                <li>Global / Streaks Color</li>
                <li>Highlights / Balayage</li>
                <li>Smoothening & Keratin</li>
              </ul>
            </div>
            <div className="card-footer text-muted">
              Starting from ₹1500
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h4 className="card-title">Men's Grooming</h4>
              <p className="card-text">
                Complete grooming solutions for men with clean and sharp looks.
              </p>
              <ul>
                <li>Beard Trim & Styling</li>
                <li>Shaving / Cleanup</li>
                <li>Facial & Head Massage</li>
              </ul>
            </div>
            <div className="card-footer text-muted">
              Grooming combos available
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// PRICING
const PricingSection = () => (
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
                <tr>
                  <td>Men Haircut</td>
                  <td>Basic cut + styling</td>
                  <td>200 - 300</td>
                </tr>
                <tr>
                  <td>Women Haircut</td>
                  <td>Layer / Step / U-cut</td>
                  <td>400 - 700</td>
                </tr>
                <tr>
                  <td>Beard Trim</td>
                  <td>Shape & style</td>
                  <td>100 - 150</td>
                </tr>
                <tr>
                  <td>Hair Color (Global)</td>
                  <td>Ammonia-free color</td>
                  <td>1500 onwards</td>
                </tr>
                <tr>
                  <td>Hair Smoothening</td>
                  <td>Up to shoulder length</td>
                  <td>3000 onwards</td>
                </tr>
                <tr>
                  <td>Facial (Men/Women)</td>
                  <td>Brightening / Cleanup</td>
                  <td>800 onwards</td>
                </tr>
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

// BOOKING
const BookingSection = () => (
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
                      <option>10:00 AM – 12:00 PM</option>
                      <option>12:00 PM – 4:00 PM</option>
                      <option>4:00 PM – 7:00 PM</option>
                      <option>7:00 PM – 9:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="service" className="form-label">
                    Service Required
                  </label>
                  <select id="service" className="form-select">
                    <option>Men Haircut</option>
                    <option>Women Haircut</option>
                    <option>Beard Trim</option>
                    <option>Hair Color</option>
                    <option>Hair Smoothening</option>
                    <option>Facial / Cleanup</option>
                    <option>Other (mention below)</option>
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
