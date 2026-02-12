import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import './index.css'
import { Link } from 'react-router-dom';

function Contact() {

   const form = useRef();

     const [showMap, setShowMap] = useState(false);
 
  const sendEmail = (e) => {
    e.preventDefault(); 

      const formData = new FormData(form.current);

      console.log(formData);
      

  const name = formData.get("user_name");
  const email = formData.get("user_email");
  const message = formData.get("message");
  const subject = formData.get("subject");

  if (!name || !email || !message) {
    toast.error("Please fill in all fields!");
    return;
  }
 
    emailjs
      .sendForm(
        "service_o70dly6", 
        "template_9544q4a", 
        form.current,
        "feHzimTWuASWVU7OM" 
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          e.target.reset(); // Clear the form
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message, try again!");
        }
      );
  };



  return (
    <section id="contact" class="contact section light-background">

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row g-5">
          <div class="col-lg-6">


          <div class="content" data-aos="fade-up" data-aos-delay="200">
  <div class="section-category mb-3">Contact</div>

  <h2 class="display-5 mb-4">Let's Connect & Work Together</h2>

  <p class="lead mb-4">
    I'm always open to discussing new projects, job opportunities, or collaborations.
    Feel free to reach out anytime.
  </p>

  <div class="contact-info mt-5">

    <div class="info-item d-flex mb-3">
      <i class="bi bi-envelope-at me-3"></i>
      <span>praveenpraveen04200@email.com</span>
    </div>

    <div class="info-item d-flex mb-3">
      <i class="bi bi-telephone me-3"></i>
      <span>+91 63804 39549</span>
    </div>

    <div class="info-item d-flex mb-4">
      <i class="bi bi-geo-alt me-3"></i>
      <span>5/52, Mallakulam, Tirunelveli (dist) - 627007</span>
    </div>

    <Link to="#" class="map-link d-inline-flex align-items-center"  onClick={() => setShowMap(true)}>
      View Location
      <i class="bi bi-arrow-right ms-2"></i>
    </Link>

  </div>
</div>



          </div>

          <div class="col-lg-6">
            <div class="contact-form card" data-aos="fade-up" data-aos-delay="300">
              <div class="card-body p-4 p-lg-5">

                <form action="forms/contact.php" method="post" class="php-email-form" ref={form} onSubmit={sendEmail}>
                  <div class="row gy-4">

                    <div class="col-12">
                      <input type="text" name="user_name" class="form-control" placeholder="Your Name" required=""/>
                    </div>

                    <div class="col-12 ">
                      <input type="email" class="form-control"  name="user_email" placeholder="Your Email" required=""/>
                    </div>

                    <div class="col-12">
                      <input type="text" class="form-control" name="subject" placeholder="Subject" required=""/>
                    </div>

                    <div class="col-12">
                      <textarea class="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                    </div>

                    <div class="col-12 text-center">
                      <div class="loading">Loading</div>
                      <div class="error-message"></div>
                      <div class="sent-message">Your message has been sent. Thank you!</div>

                      <button type="submit" class="btn btn-submit w-100">Submit Message</button>
                    </div>

                  </div>
                </form>

              </div>
            </div>
          </div>

        </div>

      </div>


{showMap && (
        <div className="map-modal">
          <div className="map-content">
            <span
              className="close-btn"
              onClick={() => setShowMap(false)}
            >
              ✖
            </span>

            <iframe
              title="location"
src="https://www.google.com/maps?q=Mallakulam,Tirunelveli,Tamil Nadu,India&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      )}

 <ToastContainer
        className="toast-position"
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{ width: "500px" }}
      />

    </section>

    
  )
}

export default Contact