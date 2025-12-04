import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          Rhythm Dance Academy
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
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#classes">Classes</a></li>
            <li className="nav-item"><a className="nav-link" href="#schedule">Schedule</a></li>
            <li className="nav-item"><a className="nav-link" href="#instructor">Instructor</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="py-5 text-white"
      style={{
        marginTop: "56px",
        background:"linear-gradient(135deg, #ff6b6b, #f06595, #845ef7, #339af0)"
      }}
    >
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-7">
            <h1 className="display-4 fw-bold mb-3">Learn to Dance with Confidence & Style</h1>
            <p className="lead mb-4">
              Join Rhythm Dance Academy and explore Bollywood, Hip-Hop,
              Contemporary, Salsa and more.
            </p>
            <a href="#contact" className="btn btn-light btn-lg me-3 mb-2">Join Now</a>
            <a href="#classes" className="btn btn-outline-light btn-lg mb-2">View Classes</a>
          </div>

          <div className="col-md-5 text-center">
            <div className="bg-white text-dark rounded-4 shadow p-4">
              <h3 className="fw-bold mb-3">Free Trial Class</h3>
              <p className="mb-3">Register now for a free trial and feel the energy!</p>
              <ul className="list-unstyled mb-3 text-start">
                <li>✔ Beginner friendly</li>
                <li>✔ Professional choreographers</li>
                <li>✔ Flexible timings</li>
              </ul>
              <a href="#contact" className="btn btn-primary w-100">Book Free Trial</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">About Our Dance Academy</h2>
        <div className="row">
          <div className="col-md-6">
            <p>
              Rhythm Dance Academy is a modern dance studio dedicated to building
              confidence, fitness and creativity through dance.
            </p>
            <p>
              We offer structured courses, performances and personalized attention.
            </p>
          </div>

          <div className="col-md-6">
            <div className="row text-center">
              <div className="col-6 mb-3"><div className="p-3 border rounded-3 bg-white shadow-sm"><h4 className="fw-bold mb-0">5+</h4><small>Years Experience</small></div></div>
              <div className="col-6 mb-3"><div className="p-3 border rounded-3 bg-white shadow-sm"><h4 className="fw-bold mb-0">500+</h4><small>Happy Students</small></div></div>
              <div className="col-6 mb-3"><div className="p-3 border rounded-3 bg-white shadow-sm"><h4 className="fw-bold mb-0">10+</h4><small>Dance Styles</small></div></div>
              <div className="col-6 mb-3"><div className="p-3 border rounded-3 bg-white shadow-sm"><h4 className="fw-bold mb-0">100+</h4><small>Stage Shows</small></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClassesSection() {
  return (
    <section id="classes" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Dance Classes</h2>
        <div className="row">

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h4 className="card-title">Bollywood Dance</h4>
                <p>High-energy fun dance style.</p>
                <ul>
                  <li>Beginner & Intermediate</li>
                  <li>3 days a week</li>
                  <li>Group performances</li>
                </ul>
              </div>
              <div className="card-footer text-muted">₹1500 / month</div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h4 className="card-title">Hip-Hop & Urban</h4>
                <p>Grooves, freestyle, isolations.</p>
                <ul>
                  <li>Teens & Adults</li>
                  <li>4 days a week</li>
                  <li>Battle & cypher sessions</li>
                </ul>
              </div>
              <div className="card-footer text-muted">₹1800 / month</div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h4 className="card-title">Kids Dance Batch</h4>
                <p>Special training for kids.</p>
                <ul>
                  <li>Beginner friendly</li>
                  <li>2 or 3 days a week</li>
                  <li>Annual showcases</li>
                </ul>
              </div>
              <div className="card-footer text-muted">₹1200 / month</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ScheduleSection() {
  return (
    <section id="schedule" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Weekly Schedule</h2>

        <div className="table-responsive">
          <table className="table table-bordered table-striped text-center align-middle">
            <thead className="table-dark">
              <tr>
                <th>Day</th>
                <th>Morning</th>
                <th>Afternoon</th>
                <th>Evening</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Monday</td><td>—</td><td>Kids (4–5)</td><td>Bollywood (6–7)</td></tr>
              <tr><td>Tuesday</td><td>—</td><td>Hip-Hop (4–5)</td><td>Hip-Hop (7–8)</td></tr>
              <tr><td>Wednesday</td><td>—</td><td>Kids (4–5)</td><td>Bollywood (6–7)</td></tr>
              <tr><td>Thursday</td><td>—</td><td>Contemporary (4–5)</td><td>Hip-Hop (7–8)</td></tr>
              <tr><td>Friday</td><td>—</td><td>Kids (4–5)</td><td>Bollywood (6–7)</td></tr>
              <tr><td>Saturday</td><td>Workshop</td><td>Rehearsals</td><td>Rehearsals</td></tr>
              <tr><td>Sunday</td><td colSpan={3}>Holiday / Events</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function InstructorSection() {
  return (
    <section id="instructor" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Meet Your Instructor</h2>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h4>Ms. Priya Sharma</h4>
                <p className="text-muted">Founder & Head Choreographer</p>
                <p>
                  Trained in Bollywood, Hip-Hop, Contemporary. 8+ years teaching.
                </p>
                <p className="mb-0">“Dance with passion and confidence!”</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-5 bg-dark text-white">
      <div className="container">
        <h2 className="text-center mb-4">Contact & Registration</h2>

        <div className="row">
          <div className="col-md-6 mb-4">
            <h5>Get in Touch</h5>
            <p>📍 Rhythm Dance Academy, Near Market</p>
            <p>📞 +91 98765 43210</p>
            <p>📧 info@rhythmdanceacademy.com</p>
          </div>

          <div className="col-md-6">
            <h5>Quick Enquiry</h5>
            <form>
              <input className="form-control mb-3" placeholder="Full Name" />
              <input className="form-control mb-3" placeholder="Mobile Number" />
              <select className="form-select mb-3">
                <option>Bollywood</option><option>Hip-Hop</option>
                <option>Kids Batch</option><option>Contemporary</option>
                <option>Wedding Choreography</option>
              </select>
              <button className="btn btn-primary w-100">Submit</button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-3 bg-black text-center text-white-50">
      <small>© {new Date().getFullYear()} Rhythm Dance Academy.</small>
    </footer>
  );
}

function App1() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ClassesSection />
      <ScheduleSection />
      <InstructorSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App1;
