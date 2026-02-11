import React from 'react'
import praveenImg from '../../assets/img/praveen.jpeg'
import PraveenSign from '../../assets/img/praveen-signature.png'

function About() {
  return (
    <section id="about" class="about section light-background">
      {/* Section Title */}
      <div class="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <div class="title-shape">
          <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" stroke-width="2"></path>
          </svg>
        </div>
        <p>My goal is to build web experiences that are visually appealing, highly functional, and optimized for performance — with a focus on user satisfaction and usability.</p>
      </div>
      {/* End Section Title */}
      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row align-items-center">
          <div class="col-lg-6 position-relative" data-aos="fade-right" data-aos-delay="200">
            <div class="about-image">
              <img src={praveenImg} alt="Profile Image" class="img-fluid rounded-4" />
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="300">
            <div class="about-content">

              <span class="subtitle">About Me</span>

              <h2>Front-End Developer with a Focus on Modern Web</h2>

              <p class="lead mb-4">
                Passionate and self-motivated Software Developer with hands-on experience in building modern, scalable web applications. Started my career as an intern at Hermon and grew into a Junior Developer role through continuous learning and real-time project experience.
              </p>

              <p class="mb-4">
                Skilled in React, JavaScript, APIs, and database integration, focused on improving problem-solving skills and developing efficient, user-friendly applications.
              </p>

              <div class="personal-info">
                <div class="row g-4">
                  <div class="col-5">
                    <div class="info-item">
                      <span class="label">Name</span>
                      <span class="value">Praveen C</span>
                    </div>
                  </div>

                  <div class="col-5">
                    <div class="info-item">
                      <span class="label">Phone</span>
                      <span class="value">+91 6380439549</span>
                    </div>
                  </div>

                  <div class="col-5">
                    <div class="info-item">
                      <span class="label">Age</span>
                      <span class="value">24 Years</span>
                    </div>
                  </div>

                  <div class="col-5">
                    <div class="info-item">
                      <span class="label">Email</span>
                      <span class="value">praveenpraveen04200@gmail.com</span>
                    </div>
                  </div>

                  <div class="col-5">
                    <div class="info-item">
                      <span class="label">Occupation</span>
                      <span class="value">Software Developer</span>
                    </div>
                  </div>

                  <div class="col-5">
                    <div class="info-item">
                      <span class="label">Nationality</span>
                      <span class="value">Indian</span>
                    </div>
                  </div>
                </div>
              </div>


 <div class="signature mt-4">
              <div class="signature-info">
                <div class="signature-image mb-3">
                  <img style={{margin:'-20px 0px',textAlign:'left'}} alt="Praveen Signature" class="img-fluid" src={PraveenSign} />
                  </div>
                  <p style={{marginTop:'-20px'}}>Designing with Purpose. Developing with Passion.</p>
                  </div>
</div>
              {/* <div class="signature mt-4">
                <div class="signature-image">
                  <img src={PraveenSign} alt="Praveen Signature" class="img-fluid" />
                </div>
                <p>Designing with Purpose. Developing with Passion.</p>
      
              </div> */}

            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default About