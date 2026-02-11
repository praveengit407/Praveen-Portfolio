import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import GLightbox from 'glightbox';
import HermonImage from '../../assets/img/projects/hermon-solutions.jpg';
import HermonImage1 from '../../assets/img/projects/hermon2.png';
import SkandaImage from '../../assets/img/projects/psd-skandha.jpg';
import SkandaImage1 from '../../assets/img/projects/psd-skandha2.jpg';
import Araciyal from '../../assets/img/projects/aracyal.jpg';
import Araciyal1 from '../../assets/img/projects/araciyal1.jpg';
import StemzHealthCare from '../../assets/img/projects/stempz-page-1.jpg';
import StemzHealthCare1 from '../../assets/img/projects/stemz1.jfif';
import Qmc from '../../assets/img/projects/qatar-medical.jpg';
import Qmc1 from '../../assets/img/projects/qatar-medical1.jpg';
import WhatsappMarketing from '../../assets/img/projects/watsapp-market.jpg';
import WhatsappMarketing1 from '../../assets/img/projects/watsapp-market1.jpg';
import StudentManagement from '../../assets/img/projects/student-management.jpg';
import StudentManagement1 from '../../assets/img/projects/student-management1.jpg';
import SmrGoldLoan from '../../assets/img/projects/smr-page-1.png';
import SmrGoldLoan1 from '../../assets/img/projects/smr-page-2.png';
import ClientManagement from '../../assets/img/projects/clientmanagement.png'

import './portfolio.css'

function Portfolio() {

const [showModal, setShowModal] = useState(false);
const [modalData, setModalData] = useState(null);

    useEffect(() => {
    // Init GLightbox
    const glightbox = GLightbox({
      selector: '.glightbox',
    });

    // Wait for images to load before initializing Isotope
    const grid = document.querySelector('.isotope-container');

    if (!grid) return;

    imagesLoaded(grid, function () {
      const iso = new Isotope(grid, {
        itemSelector: '.isotope-item',
        layoutMode: 'masonry',
        filter: '*',
        sortBy: 'original-order',
      });

      // Filter items on click
      const filters = document.querySelectorAll('.isotope-filters li');
      filters.forEach((filter) => {
        filter.addEventListener('click', function () {
          document.querySelector('.filter-active')?.classList.remove('filter-active');
          this.classList.add('filter-active');

          const filterValue = this.getAttribute('data-filter');
          iso.arrange({ filter: filterValue });
        });
      });
    });
  }, []);
  return (
    <section id="portfolio" class="portfolio section">
      {/* Section Title */}
      <div class="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <div class="title-shape">
          <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" stroke-width="2"></path>
          </svg>
        </div>
          <p>Explore our portfolio of innovative web applications and digital solutions built with performance, security, and user experience in mind.</p>

      </div>
      {/* End Section Title */}
      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

          <div class="portfolio-filters-container" data-aos="fade-up" data-aos-delay="200">
            <ul class="portfolio-filters isotope-filters">
              <li data-filter="*" class="filter-active">All Work</li>
              <li data-filter=".filter-web">Web Sites</li>
              <li data-filter=".filter-web-application">Web Application</li>
             
            </ul>
          </div>

          <div class="row g-4 isotope-container" data-aos="fade-up" data-aos-delay="300">

            <div class="col-lg-4 col-md-4 portfolio-item isotope-item filter-web">
              <div class="portfolio-card">
                <div class="portfolio-image">
                  <img src={HermonImage} class="img-fluid" alt="" loading="lazy"/>
                  <div class="portfolio-overlay">
                    <div class="portfolio-actions">
                      <a href={HermonImage} class="glightbox preview-link" data-gallery="portfolio-gallery-web"><i class="bi bi-eye"></i></a>
                      <Link to={""}   onClick={() => {
  setModalData({
    title: "Hermon Solutions",
images: [HermonImage, HermonImage1],
    tech: ["Html", "Css", "Bootstrap",  "Javascript", "React",  ],

    overview:
      "BuildConnect offers an efficient solution for managing construction projects and workforce recruitment.",

    challenges:
      "Coordinating projects and hiring skilled workers quickly while maintaining compliance and real-time tracking.",

    solutions:
      "Implemented job posting systems, worker profiles, dashboards, and automated workflows for faster hiring.",

    category: "Web Site",
  
    url: "http://hermonsolutions.com/",
  });

  setShowModal(true);
}}

  
  class="details-link"><i class="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
                <div class="portfolio-content">
                  <span class="category">Web Site</span>
                  <h3>Hermon Solutions </h3>
<p>Professional corporate website showcasing services with clean UI and smooth user experience.</p>

                </div>
              </div>
            </div>

             <div class="col-lg-4 col-md-4 portfolio-item isotope-item filter-web">
              <div class="portfolio-card">
                <div class="portfolio-image">
                  <img src={SkandaImage} class="img-fluid" alt="" loading="lazy"/>
                  <div class="portfolio-overlay">
                    <div class="portfolio-actions">
                      <a href={SkandaImage} class="glightbox preview-link" data-gallery="portfolio-gallery-web"><i class="bi bi-eye"></i></a>
                      <Link to={""} 
                       onClick={() => {
    setModalData({
    title: "Skanda Fincorp",
images: [SkandaImage,SkandaImage1],
    tech: ["Html", "Css", "Bootstrap",  "Javascript", "React",  ],

    overview:
      "A modern financial services platform offering personal loans, business loans, and investment solutions through a secure, user-friendly digital experience with fast applications and real-time eligibility checks.",

    challenges:
"Protecting sensitive financial data, simplifying complex processes for all users, ensuring smooth online applications, and meeting strict compliance standards.",
    solutions:
"Built with strong encryption, smart automation, responsive design, and real-time analytics to deliver secure, seamless, and reliable financial services.",
    category: "Web Site",
  
    url: "https://skandafincorp.com/",
  });

  setShowModal(true);
}}
                      class="details-link"><i class="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
                <div class="portfolio-content">
                  <span class="category">Web Site</span>
                  <h3>Skanda Fincorp</h3>
                  <p>Skanda Fincorp is a secure, user-friendly platform for loans, EMI calculations, and investment solutions.</p>
                </div>
              </div>
            </div>

             <div class="col-lg-4 col-md-4 portfolio-item isotope-item filter-web">
              <div class="portfolio-card">
                <div class="portfolio-image">
                  <img src={Araciyal} class="img-fluid" alt="" loading="lazy"/>
                  <div class="portfolio-overlay">
                    <div class="portfolio-actions">
                      <a href={Araciyal} class="glightbox preview-link" data-gallery="portfolio-gallery-web"><i class="bi bi-eye"></i></a>
                      <Link to={""} 
 onClick={() => {
  setModalData({
    title: "Araciyal",
    images: [Araciyal,Araciyal1],
    tech: ["Html", "Css", "Bootstrap", "Javascript", "React"],

    overview:
      "A modern digital news platform delivering articles and multimedia content with fast browsing, smart search, and real-time updates across all devices.",

    challenges:
      "Managing real-time news updates, handling heavy media content, maintaining smooth performance during peak traffic, and ensuring content accuracy.",

    solutions:
      "Built a robust CMS, optimized media performance, implemented responsive design, and added caching with load balancing for fast and reliable delivery.",

    category: "Web Site",
    url: "https://araciyal.com",
  });

  setShowModal(true);
}}

                      class="details-link"><i class="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
                <div class="portfolio-content">
                  <span class="category">Web Site</span>
                  <h3>Araciyal</h3>
                  <p>Arciyal delivers up-to-date news across categories with videos and articles, offering seamless access on all devices.</p>
                </div>
              </div>
            </div>


<div class="col-lg-4 col-md-4 portfolio-item isotope-item filter-web">
              <div class="portfolio-card">
                <div class="portfolio-image">
                  <img src={StemzHealthCare} class="img-fluid" alt="" loading="lazy"/>
                  <div class="portfolio-overlay">
                    <div class="portfolio-actions">
                      <a href={StemzHealthCare} class="glightbox preview-link" data-gallery="portfolio-gallery-web"><i class="bi bi-eye"></i></a>
                      <Link to={""} 
                      onClick={() => {
  setModalData({
    title: "Stemz Health Care",
    images: [StemzHealthCare,StemzHealthCare1],
    tech: ["Html", "Css", "Bootstrap"],

    overview:
      "A secure healthcare platform enabling appointment booking, medical record access, and service discovery with a smooth, user-friendly experience across all devices.",

    challenges:
      "Protecting sensitive medical data, simplifying workflows for all users, managing real-time scheduling, and ensuring high performance with compliance standards.",

    solutions:
      "Implemented secure APIs, strong authentication, responsive design, and optimized systems to deliver fast, reliable, and compliant healthcare services.",

    category: "Web Site",
    url: "https://www.stemzhealthcare.com/",
  });

  setShowModal(true);
}}


                      class="details-link"><i class="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
                <div class="portfolio-content">
                  <span class="category">Web Site</span>
                  <h3>Stemz Health Care</h3>
                  <p>Stemz connects patients with medical professionals for easy appointment booking and healthcare access.</p>
                </div>
              </div>
            </div>

{/* Web Application */}

           <div class="col-lg-4 col-md-4 portfolio-item isotope-item filter-web-application">
              <div class="portfolio-card">
                <div class="portfolio-image">
                  <img src={SmrGoldLoan} class="img-fluid" alt="" loading="lazy"/>
                  <div class="portfolio-overlay">
                    <div class="portfolio-actions">
                      <a href={SmrGoldLoan} class="glightbox preview-link" data-gallery="portfolio-gallery-web"><i class="bi bi-eye"></i></a>
                      <Link to={""} 
               onClick={() => {
  setModalData({
    title: "SMR Gold Loan Finance",
    images: [SmrGoldLoan,SmrGoldLoan1],
    tech: ["Html", "Css", "Bootstrap"],

    overview:
      "A modern finance platform offering personal and business loans with quick applications, automated eligibility checks, and a smooth dashboard experience across all devices.",

    challenges:
      "Securing sensitive financial data, simplifying complex processes for diverse users, managing high-volume records, and meeting regulatory compliance.",

    solutions:
      "Implemented strong encryption, secure authentication, responsive design, and automated systems to ensure fast, safe, and reliable loan services.",

    category: "Web Site",
    url: "https://www.smrgoldloanfinance.com/",
  });

  setShowModal(true);
}}

                      class="details-link"><i class="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
                <div class="portfolio-content">
                  <span class="category">Web Application</span>
                  <h3>SMR Goldloan Finance</h3>
                  <p>SMR Gold Loan is a secure and user-friendly platform offering instant gold and silver loans with quick valuation.</p>
                </div>
              </div>
            </div>

<div class="col-lg-4 col-md-4 portfolio-item isotope-item filter-web-application">
              <div class="portfolio-card">
                <div class="portfolio-image">
                  <img src={Qmc} class="img-fluid" alt="" loading="lazy"/>
                  <div class="portfolio-overlay">
                    <div class="portfolio-actions">
                      <a href={Qmc} class="glightbox preview-link" data-gallery="portfolio-gallery-web"><i class="bi bi-eye"></i></a>
                      <Link to={""} 
               onClick={() => {
  setModalData({
    title: "Qatar Medical Center",
    images: [Qmc,Qmc1],
    tech: ["Html", "Css", "Bootstrap", "Typescript", "Angular"],

    overview:
      "QMC streamlines visa medicals with online appointments, document uploads, and real-time status tracking.",

    challenges:
      "Managing high-volume medical data, ensuring secure document handling, and providing real-time updates to users.",

    solutions:
      "Implemented secure data handling protocols, responsive UI design, and automated tracking systems for seamless user experience.",

    category: "Web Site",
    url: "https://www.qatarmedicalcenter.com/",
  });

  setShowModal(true);
}}

                      class="details-link"><i class="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
                <div class="portfolio-content">
                  <span class="category">Web Application</span>
                  <h3>Qatar Medical Center</h3>
                  <p>QMC streamlines visa medicals with online appointments, document uploads, and real-time status tracking.</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 portfolio-item isotope-item filter-web-application">
              <div class="portfolio-card">
                <div class="portfolio-image">
                  <img src={StudentManagement} class="img-fluid" alt="" loading="lazy"/>
                  <div class="portfolio-overlay">
                    <div class="portfolio-actions">
                      <a href={StudentManagement} class="glightbox preview-link" data-gallery="portfolio-gallery-web"><i class="bi bi-eye"></i></a>
                      <Link to={""} 
               onClick={() => {
  setModalData({
    title: "Student Management System",
    images: [StudentManagement,StudentManagement1],
    tech: ["Html", "Css", "Bootstrap", "Typescript", "React"],

    overview:
      "The School Management System streamlines student and school administration, offering attendance tracking, reports.",

    challenges:
      "Managing large volumes of student data, ensuring secure access to information, and providing real-time reporting capabilities.",

    solutions:
      "Implemented a robust database system with secure access controls and automated reporting features for efficient school management.",

    category: "Web Site",
    url: "https://smsystem.hermonsolutions.com/",
  });

  setShowModal(true);
}}

                      class="details-link"><i class="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
                <div class="portfolio-content">
                  <span class="category">Web Application</span>
                  <h3>Student Management System</h3>
                  <p>The School Management System streamlines student and school administration, offering attendance tracking, reports.</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 portfolio-item isotope-item filter-web-application">
              <div class="portfolio-card">
                <div class="portfolio-image">
                  <img src={WhatsappMarketing} class="img-fluid" alt="" loading="lazy"/>
                  <div class="portfolio-overlay">
                    <div class="portfolio-actions">
                      <a href={WhatsappMarketing} class="glightbox preview-link" data-gallery="portfolio-gallery-web"><i class="bi bi-eye"></i></a>
                      <Link to={""} 
               onClick={() => {
  setModalData({
    title: "Whatsapp Marketing",
    images: [WhatsappMarketing,WhatsappMarketing1],
    tech: ["Html", "Css", "Bootstrap", "Typescript", "React"],

    overview:
      "WhatsApp Marketing lets businesses promote products and connect with customers via automated messages.",

    challenges:
      "Managing high-volume message delivery, ensuring compliance with regulations, and providing real-time analytics.",

    solutions:
      "Implemented scalable messaging infrastructure, automated message scheduling, and comprehensive analytics dashboards for effective marketing.",

    category: "Web Application",
    url: "https://crm.bizconvo.in/",
  });

  setShowModal(true);
}}

                      class="details-link"><i class="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
                <div class="portfolio-content">
                  <span class="category">Web Application</span>
                  <h3>Whatsapp Marketing</h3>
                  <p>WhatsApp Marketing lets businesses promote products and connect with customers via automated messages.</p>
                </div>
              </div>
            </div>


        <div class="col-lg-4 col-md-4 portfolio-item isotope-item filter-web-application">
              <div class="portfolio-card">
                <div class="portfolio-image">
                  <img src={ClientManagement} class="img-fluid" alt="" loading="lazy"/>
                  <div class="portfolio-overlay">
                    <div class="portfolio-actions">
                      <a href={ClientManagement} class="glightbox preview-link" data-gallery="portfolio-gallery-web"><i class="bi bi-eye"></i></a>
                      <Link to={""} 
               onClick={() => {
  setModalData({
    title: "Client Management",
    images: [ClientManagement],
    tech: ["Html", "Css", "Bootstrap", "Javascript", "React"],

    overview:
      "Client Management system sends automated expiry reminders via SMS or email, supporting stable client handling.",

    challenges:
      "Managing client data efficiently, ensuring timely notifications, and maintaining data integrity.",

    solutions:
      "Implemented a robust client management system with automated expiry reminders and centralized data handling.",

    category: "Web Application",
    url: "https://clientmanagement.hermonsolutions.com/",
  });

  setShowModal(true);
}}

                      class="details-link"><i class="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
                <div class="portfolio-content">
                  <span class="category">Web Application</span>
                  <h3>Client Management</h3>
                  <p>Client Management system sends automated expiry reminders via SMS or email, supporting stable client handling.</p>
                </div>
              </div>
            </div>
       
            
            {/* End Portfolio Item */}
          </div>

        </div>
        {/* End Portfolio Container */}

      </div>

{showModal && modalData && (
  <div className="project-modal">
    <div className="project-modal-content project-flex">

      <span className="close-btn" onClick={() => setShowModal(false)}>✖</span>

      {/* LEFT IMAGE */}
    <div className="project-left">
  {modalData.images.map((img, i) => (
    <img key={i} src={img} alt="" className="project-img mb-3" />
  ))}
</div>


      <div className="project-right">

        <h4 className="fw-bold">{modalData.title}</h4>
        <p className="text-muted small">{modalData.category}</p>

        <h6 className="mt-3 modal-heading-project">Technologies</h6>
        <div className="mb-3">
          {modalData.tech.map((t, i) => (
            <span key={i} className="badge bg-dark me-2 mb-2">{t}</span>
          ))}
        </div>

        <h6 className='modal-heading-project'>Project Overview</h6>
        <p>{modalData.overview}</p>

        <h6 className="mt-3 modal-heading-project">Challenges</h6>
        <p>{modalData.challenges}</p>

        {/* Solutions */}
        <h6 className="mt-3 modal-heading-project">Solutions</h6>
        <p>{modalData.solutions}</p>



      

        {/* Visit */}
        <a
          href={modalData.url}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary mt-3"
        >
          Visit Website →
        </a>

      </div>
    </div>
  </div>
)}


    </section>
  )
}

export default Portfolio