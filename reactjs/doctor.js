// App.js
import React from "react";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
    <div className="container">
      <a className="navbar-brand fw-bold" href="#home">
        SmileCare Dental Clinic
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
            <a className="nav-link" href="#doctor">
              Doctor
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#appointment">
              Appointment
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

const HeroSection = () => (
  <section
    id="home"
    className="py-5 bg-light text-dark"
    style={{ marginTop: "56px" }}
  >
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="display-5 fw-bold mb-3">
            Your Family Friendly Dental Clinic
          </h1>
          <p className="lead mb-4">
            Professional dental care for painless treatments, healthy gums and
            confident smiles. Advanced equipment and experienced doctors.
          </p>
          <a href="#appointment" className="btn btn-primary btn-lg me-2 mb-2">
            Book Appointment
          </a>
          <a href="#services" className="btn btn-outline-primary btn-lg mb-2">
            View Services
          </a>
        </div>
        <div className="col-md-6 text-center">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title mb-3">Clinic Timings</h3>
              <ul className="list-unstyled mb-3">
                <li>Mon - Sat: 9:00 AM – 1:00 PM</li>
                <li>Mon - Sat: 4:00 PM – 9:00 PM</li>
                <li>Sunday: By Prior Appointment</li>
              </ul>
              <p className="mb-1 fw-bold">Emergency Helpline:</p>
              <p className="mb-0">+91 98765 43210</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="py-5">
    <div className="container">
      <h2 className="text-center mb-4">About Our Clinic</h2>
      <div className="row">
        <div className="col-md-6 mb-3">
          <p>
            SmileCare Dental Clinic is a modern, fully equipped dental center
            providing complete oral care solutions under one roof. We focus on
            painless treatments and patient comfort.
          </p>
          <p>
            Our mission is to deliver high-quality dental care at affordable
            prices using advanced technology and maintaining strict hygiene
            standards.
          </p>
        </div>
        <div className="col-md-6">
          <div className="row text-center">
            <div className="col-6 mb-3">
              <div className="border rounded-3 p-3 bg-light">
                <h4 className="fw-bold mb-0">10+</h4>
                <small>Years Experience</small>
              </div>
            </div>
            <div className="col-6 mb-3">
              <div className="border rounded-3 p-3 bg-light">
                <h4 className="fw-bold mb-0">2000+</h4>
                <small>Happy Patients</small>
              </div>
            </div>
            <div className="col-6">
              <div className="border rounded-3 p-3 bg-light">
                <h4 className="fw-bold mb-0">4.9★</h4>
                <small>Patient Rating</small>
              </div>
            </div>
            <div className="col-6">
              <div className="border rounded-3 p-3 bg-light">
                <h4 className="fw-bold mb-0">100%</h4>
                <small>Sterilization</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section id="services" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-4">Our Dental Services</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h4 className="card-title">General Dentistry</h4>
              <p className="card-text">
                Regular check-ups, cleaning, fillings and tooth extraction for
                complete oral health.
              </p>
              <ul>
                <li>Dental Check-up</li>
                <li>Scaling & Polishing</li>
                <li>Tooth Colored Fillings</li>
              </ul>
            </div>
            <div className="card-footer text-muted">
              Starting from ₹500 / visit
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h4 className="card-title">Cosmetic Dentistry</h4>
              <p className="card-text">
                Improve your smile with whitening, veneers and smile design
                treatments.
              </p>
              <ul>
                <li>Teeth Whitening</li>
                <li>Smile Makeover</li>
                <li>Veneers & Bonding</li>
              </ul>
            </div>
            <div className="card-footer text-muted">
              Starting from ₹2500 / session
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h4 className="card-title">Special Treatments</h4>
              <p className="card-text">
                Advanced care for root canal, braces, implants and gum diseases.
              </p>
              <ul>
                <li>Root Canal Treatment</li>
                <li>Braces & Aligners</li>
                <li>Dental Implants</li>
              </ul>
            </div>
            <div className="card-footer text-muted">
              EMI options available
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const DoctorSection = () => (
  <section id="doctor" className="py-5">
    <div className="container">
      <h2 className="text-center mb-4">Meet Our Doctor</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h4 className="card-title">Dr. Rahul Patel</h4>
              <p className="text-muted mb-2">BDS, MDS (Conservative Dentistry)</p>
              <p>
                Dr. Rahul has over 10 years of experience in painless root canal
                treatments and cosmetic dentistry. He believes in patient-first
                approach and explains every treatment in simple language.
              </p>
              <p className="mb-0">
                “Our goal is to make every visit comfortable and stress-free for
                you and your family.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AppointmentSection = () => (
  <section id="appointment" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-4">Book an Appointment</h2>
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
                      <option>Morning (9 AM - 12 PM)</option>
                      <option>Afternoon (12 PM - 4 PM)</option>
                      <option>Evening (4 PM - 9 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="service" className="form-label">
                    Treatment Type
                  </label>
                  <select id="service" className="form-select">
                    <option>General Check-up</option>
                    <option>Tooth Pain / Root Canal</option>
                    <option>Cleaning & Polishing</option>
                    <option>Braces / Aligners</option>
                    <option>Cosmetic Dentistry</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Problem Description (optional)
                  </label>
                  <textarea
                    id="message"
                    rows="3"
                    className="form-control"
                    placeholder="Write about your dental issue"
                  ></textarea>
                </div>

                <button type="button" className="btn btn-primary w-100">
                  Submit Appointment Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="py-5 bg-primary text-white">
    <div className="container">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <h5>Clinic Address</h5>
          <p className="mb-1">SmileCare Dental Clinic</p>
          <p className="mb-1">Near Main Market, Your Area</p>
          <p className="mb-3">Your City, Your State - 000000</p>

          <h5>Contact Details</h5>
          <p className="mb-1">📞 +91 98765 43210</p>
          <p className="mb-1">📧 smilecareclinic@gmail.com</p>
          <p className="mb-0">📱 WhatsApp available on same number</p>
        </div>
        <div className="col-md-6">
          <h5>Location</h5>
          <p className="mb-0">
            (You can embed Google Map here, or just write simple directions.)
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-3 bg-dark text-center text-white-50">
    <small>
      © {new Date().getFullYear()} SmileCare Dental Clinic. All rights reserved.
    </small>
  </footer>
);

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DoctorSection />
      <AppointmentSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
