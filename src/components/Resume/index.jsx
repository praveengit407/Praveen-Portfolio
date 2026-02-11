import React from 'react'

function Resume() {
  return (
    <section id="resume" class="resume section">
      {/* Section Title */}
     <div class="container section-title" data-aos="fade-up">
  <h2>Resume</h2>
  <div class="title-shape">
    <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" stroke-width="2"></path>
    </svg>
  </div>
  <p>
    Passionate Junior Software Developer with hands-on experience in building modern web applications.
    Started as an intern at Hermon and progressed to a full-time developer role.
    Skilled in React, web technologies, and problem-solving.
  </p>
</div>

      {/* End Section Title */}
      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row">
          <div class="col-12">
            <div class="resume-wrapper">


              <div class="resume-block" data-aos="fade-up">
  <h2>Work Experience</h2>
  <p class="lead">My professional journey at Hermon, progressing from internship to junior software developer.</p>

  <div class="timeline">

    {/* <!-- Internship --> */}
    <div class="timeline-item" data-aos="fade-up" data-aos-delay="200">
      <div class="timeline-left">
        <h4 class="company">Hermon Solutions</h4>
        <span class="period">Feb 2023 - Apr 2023</span>
      </div>
      <div class="timeline-dot"></div>
      <div class="timeline-right">
        <h3 class="position">Software Developer Intern</h3>
        <p class="description">
          Assisted in developing web applications, fixed bugs, and supported the development team while learning real-time project workflows.
        </p>
      </div>
    </div>

    {/* <!-- Trainee --> */}
    <div class="timeline-item" data-aos="fade-up" data-aos-delay="300">
      <div class="timeline-left">
        <h4 class="company">Hermon Solutions</h4>
        <span class="period">May 2023 - Aug 2023</span>
      </div>
      <div class="timeline-dot"></div>
      <div class="timeline-right">
        <h3 class="position">Software Developer Trainee</h3>
        <p class="description">
          Worked on frontend and backend modules, gained hands-on experience with Angular, APIs, and database integration.
        </p>
      </div>
    </div>

    {/* <!-- Junior Developer --> */}
    <div class="timeline-item" data-aos="fade-up" data-aos-delay="400">
      <div class="timeline-left">
        <h4 class="company">Hermon Solutions</h4>
        <span class="period">Sep 2023 - Present</span>
      </div>
      <div class="timeline-dot"></div>
      <div class="timeline-right">
        <h3 class="position">Junior Software Developer</h3>
        <p class="description">
          Developing and maintaining scalable web applications, implementing new features, optimizing performance, and collaborating with cross-functional teams.
        </p>
      </div>
    </div>

  </div>
</div>


             <div class="resume-block" data-aos="fade-up" data-aos-delay="100">
  <h2>My Education</h2>
  <p class="lead">My academic background and current studies.</p>

  <div class="timeline">

    {/* <!-- Diploma --> */}
    <div class="timeline-item" data-aos="fade-up" data-aos-delay="200">
      <div class="timeline-left">
        <h4 class="company">Govt Polytechnic College</h4>
        <span class="period">2018 - 2020</span>
      </div>
      <div class="timeline-dot"></div>
      <div class="timeline-right">
        <h3 class="position">Diploma in Electrical & Electronics Engineering (EEE)</h3>
        <p class="description">
          Studied core electrical and electronics concepts including circuits, power systems, and fundamentals of engineering.
        </p>
      </div>
    </div>

    {/* <!-- BSc Current --> */}
    <div class="timeline-item" data-aos="fade-up" data-aos-delay="300">
      <div class="timeline-left">
        <h4 class="company">Alagappa University</h4>
        <span class="period">2025 - Present</span>
      </div>
      <div class="timeline-dot"></div>
      <div class="timeline-right">
        <h3 class="position">B.Sc (Currently Pursuing)</h3>
        <p class="description">
          Currently pursuing Bachelor of Science, focusing on software development and modern web technologies.
        </p>
      </div>
    </div>

  </div>
</div>



            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Resume