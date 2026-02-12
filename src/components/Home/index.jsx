import React, { useEffect } from 'react';
import HomePageImage from '../../assets/img/profile/profile-1.webp';
import DevImage from '../../assets/img/hand-coding-amico.png'

function Home() {
  useEffect(() => {
    function animateCount(el, target, duration = 2000) {
      let start = 0;
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(progress * target);

        el.textContent = value + "+";

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = target + "+";
        }
      }

      requestAnimationFrame(update);
    }

    function startCounterAnimation() {
      const counters = document.querySelectorAll(".stat-number");
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute("data-target"), 10);
        animateCount(counter, target);
      });
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounterAnimation();
          obs.disconnect(); // Run once
        }
      });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector(".hero-stats");
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="hero section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center content">
          <div className="col-lg-7" data-aos="fade-up" data-aos-delay="200">
            <h2>Crafting Digital Experiences with Passion</h2>
            <p className="lead">
              Transforming ideas into elegant solutions through creative design and innovative development
            </p>
            <div className="cta-buttons" data-aos="fade-up" data-aos-delay="300">
              <a href="#portfolio" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-outline">Let's Connect</a>
            </div>
            <div className="hero-stats" data-aos="fade-up" data-aos-delay="400">
              <div className="stat-item">
                <span className="stat-number" data-target="2">0</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" data-target="10">0</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" data-target="10">0</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
          </div>


       <div className="col-lg-5 d-flex align-items-center justify-content-center">
 <div className="hero-image-wrapper" data-aos="zoom-out" data-aos-delay="300">
    <img
    style={{maxWidth:'90'}}
      src={DevImage}
      alt="3D Developer"
      className="img-fluid hero-img"
    />
  </div>
</div>



        </div>
      </div>
    </section>
  );
}

export default Home;
