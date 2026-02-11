import React from 'react'

function Footer() {
  return (
    <>
    <footer id="footer" class="footer">

    <div class="container mini-footer">
      <div class="copyright text-center ">
        <p>© <span>Copyright</span> <strong class="px-1 sitename">Praveen</strong> <span>All Rights Reserved</span></p>
      </div>
      <div class="social-links d-flex justify-content-center">
        {/* <a href=""><i class="bi bi-twitter-x"></i></a>
        <a href=""><i class="bi bi-facebook"></i></a>
        <a href=""><i class="bi bi-instagram"></i></a>
        <a href=""><i class="bi bi-linkedin"></i></a> */}

<a  target='_blank' href="mailto:praveenpraveen04200@gmail.com" class="twitters"><i className="bi bi-envelope "></i></a>
                            <a  target='_blank' href="https://www.facebook.com/bill.praveen.3958" class="twitters"><i className="bi bi-facebook "></i></a>
                            <a  target='_blank' href="https://www.instagram.com/mr_praveen_401"><i className="bi bi-instagram "></i></a>
                            <a  target='_blank' href="https://www.linkedin.com/in/gurupandimurugan58/"><i className="bi bi-linkedin "></i></a>
                            <a  target='_blank' href="https://github.com/praveengit407"><i className="bi bi-github "></i></a>

      </div>
      {/* <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you've purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div> */}
    </div>

  </footer>
    </>
  )
}

export default Footer