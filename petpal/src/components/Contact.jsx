function Contact(){
    return (
    <>
<div>
  {/* Scroll-top */}
  <button className="scroll__top scroll-to-target" data-target="html">
    <i className="fas fa-angle-up" />
  </button>
  {/* Scroll-top-end*/}
  {/* header-area */}
  <header>
    <div id="header-fixed-height" />
    <div id="sticky-header" className="tg-header__area tg-header__area-three">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tgmenu__wrap">
              <div className="row align-items-center">
                <div className="col-xl-5">
                  <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                    <ul className="navigation">
                      <li className="menu-item-has-children"><a href="#">Home</a>
                        <ul className="sub-menu">
                          <li><a href="index-2.html">Pet Care &amp; Veterinary</a></li>
                          <li><a href="index-3.html">Pet Breed</a></li>
                          <li><a href="index-4.html">Pet Adopt</a></li>
                          <li><a href="index-5.html">pet Woocommerce</a></li>
                        </ul>
                      </li>
                      <li><a href="about.html">About</a></li>
                      <li className="menu-item-has-children"><a href="#">Shop</a>
                        <ul className="sub-menu">
                          <li><a href="product.html">Our Shop</a></li>
                          <li><a href="product-details.html">Shop Details</a></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children"><a href="#">Pages</a>
                        <ul className="sub-menu">
                          <li><a href="animal.html">All Pets</a></li>
                          <li><a href="animal-details.html">Pet Details</a></li>
                          <li><a href="gallery.html">Gallery</a></li>
                          <li><a href="faq.html">Faq Page</a></li>
                          <li><a href="pricing.html">Pricing Page</a></li>
                          <li><a href="reservation.html">Reservation Page</a></li>
                          <li><a href="team.html">Our Team</a></li>
                          <li><a href="team-details.html">Team Details</a></li>
                          <li><a href="blog.html">Our Blog</a></li>
                          <li><a href="blog-details.html">Blog Details</a></li>
                          <li><a href="error.html">404 Error Page</a></li>
                        </ul>
                      </li>
                      <li className="active"><a href="contact.html">contacts</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4">
                  <div className="logo text-center">
                    <a href="index-2.html"><img src="petpal/assets/img/logo/w_logo.png" alt="Logo" /></a>
                  </div>
                </div>
                <div className="col-xl-5 col-md-8">
                  <div className="tgmenu__action tgmenu__action-two d-none d-md-block">
                    <ul className="list-wrap">
                      <li className="header-search">
                        <a href="javascript:void(0)" className="search-open-btn">
                          <i className="flaticon-loupe" />
                        </a>
                      </li>
                      <li className="header-cart">
                        <a href="javascript:void(0)">
                          <i className="flaticon-shopping-bag" />
                          <span>0</span>
                        </a>
                      </li>
                      <li className="header-btn login-btn"><a href="contact.html" className="btn"><i className="flaticon-locked" />Login</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mobile-nav-toggler">
                <i className="flaticon-layout" />
              </div>
            </div>
            {/* Mobile Menu  */}
            <div className="tgmobile__menu">
              <nav className="tgmobile__menu-box">
                <div className="close-btn"><i className="fas fa-times" /></div>
                <div className="nav-logo">
                  <a href="index-2.html"><img src="petpal/assets/img/logo/logo.png" alt="Logo" /></a>
                </div>
                <div className="tgmobile__search">
                  <form action="#">
                    <input type="text" placeholder="Search here..." />
                    <button><i className="fas fa-search" /></button>
                  </form>
                </div>
                <div className="tgmobile__menu-outer">
                  {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                </div>
                <div className="social-links">
                  <ul className="list-wrap">
                    <li><a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f" /></a></li>
                    <li><a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter" /></a></li>
                    <li><a href="https://www.whatsapp.com/" target="_blank"><i className="fab fa-whatsapp" /></a></li>
                    <li><a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram" /></a></li>
                    <li><a href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube" /></a></li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="tgmobile__menu-backdrop" />
            {/* End Mobile Menu */}
          </div>
        </div>
      </div>
    </div>
    {/* header-search */}
    <div className="search__popup">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="search__wrapper">
              <div className="search__close">
                <button type="button" className="search-close-btn">
                  <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1 1L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <div className="search__form">
                <form action="#">
                  <div className="search__input">
                    <input className="search-input-field" type="text" placeholder="Type keywords here" />
                    <span className="search-focus-border" />
                    <button>
                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19.0002 19.0002L17.2002 17.2002" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="search-popup-overlay" />
    {/* header-search-end */}
  </header>
  {/* header-area-end */}
  {/* main-area */}
  <main className="fix">
    {/* breadcrumb-area */}
    <section className="breadcrumb__area fix">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-8">
            <div className="breadcrumb__content">
              <h3 className="title">Contact Page</h3>
              <nav className="breadcrumb">
                <span property="itemListElement" typeof="ListItem">
                  <a href="index-2.html">Home</a>
                </span>
                <span className="breadcrumb-separator"><i className="flaticon-right-arrow-angle" /></span>
                <span property="itemListElement" typeof="ListItem">Contact</span>
              </nav>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="breadcrumb__img">
              <img src="petpal/assets/img/images/breadcrumb_img.png" alt="img" data-aos="fade-left" data-aos-delay={800} />
            </div>
          </div>
        </div>
      </div>
      <div className="breadcrumb__shape-wrap">
        <img src="petpal/assets/img/images/breadcrumb_shape01.png" alt="img" data-aos="fade-down-right" data-aos-delay={400} />
        <img src="petpal/assets/img/images/breadcrumb_shape02.png" alt="img" data-aos="fade-up-left" data-aos-delay={400} />
      </div>
    </section>
    {/* breadcrumb-area-end */}
    {/* contact-area */}
    <section className="contact__area">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="contact__content">
              <div className="section__title mb-30">
                <h2 className="title">We Are Always Available For You &amp; Your Pets</h2>
                <p>Maecenas quis viverra metus, et efficitur ligula. Nam coueaugue  congue sed luctus lectus conIn onondimentum .</p>
              </div>
              <div className="contact__info-wrap">
                <h6 className="title">Information:</h6>
                <ul className="list-wrap">
                  <li>
                    <div className="icon">
                      <i className="flaticon-phone" />
                    </div>
                    <a href="tel:0123456789">+123 8989 444</a>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="flaticon-placeholder" />
                    </div>
                    256 Avenue, Newyork City
                  </li>
                  <li>
                    <div className="icon">
                      <i className="flaticon-mail" />
                    </div>
                    <a href="mailto:info@gmail.com">info@gmail.com</a>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-share-alt" />
                    </div>
                    <ul className="list-wrap contact__social">
                      <li><a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f" /></a></li>
                      <li><a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter" /></a></li>
                      <li><a href="https://www.whatsapp.com/" target="_blank"><i className="fab fa-whatsapp" /></a></li>
                      <li><a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram" /></a></li>
                      <li><a href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube" /></a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="contact__form-wrap">
              <form action="https://themedox.com/demo/petpal/assets/mail.php" method="POST" id="contact-form" className="contact__form">
                <h2 className="title">Post a comment</h2>
                <span>Your email address will not be published. Required fields are marked *</span>
                <div className="row gutter-20">
                  <div className="col-md-6">
                    <div className="form-grp">
                      <input name="name" type="text" placeholder="Name" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-grp">
                      <input name="email" type="email" placeholder="E-mail" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-grp">
                      <input name="website" type="url" placeholder="Website" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-grp">
                      <textarea name="message" placeholder="Message" defaultValue={""} />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn">Send Us Message <img src="assets/img/icon/right_arrow.svg" alt className="injectable" /></button>
              </form>
              <p className="ajax-response mb-0" />
            </div>
          </div>
        </div>
        {/* contact-map */}
        <div className="contact-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48409.69813174607!2d-74.05163325136718!3d40.68264649999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bae694479a3%3A0xb9949385da52e69e!2sBarclays%20Center!5e0!3m2!1sen!2sbd!4v1684309529719!5m2!1sen!2sbd" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
        {/* contact-map-end */}
      </div>
    </section>
    {/* contact-area-end */}
  </main>
  {/* main-area-end */}
  {/* footer-area */}
  <footer>
    <div className="footer__area">
      <div className="footer__newsletter-three">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="footer__newsletter-content">
                <h2 className="title">Sign Up For Newsletter!</h2>
              </div>
            </div>
            <div className="col-lg-7">
              <form action="#" className="footer__newsletter-form-two">
                <input type="email" placeholder="Type Your E-mail" />
                <button type="submit">Subscribe <img src="petpal/assets/img/icon/right_arrow04.svg" alt className="injectable" /></button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__top footer__top-three fix">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="footer__widget">
                <div className="footer__logo">
                  <a href="index-2.html"><img src="petpal/assets/img/logo/w_logo.png" alt /></a>
                </div>
                <div className="footer__content footer__content-two">
                  <p>Duis aute irure dolor in repreerit in voluptate velitesse We understand that your furry friend tred member</p>
                </div>
                <div className="footer__social">
                  <h6 className="title">Follow Us On:</h6>
                  <ul className="list-wrap">
                    <li><a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f" /></a></li>
                    <li><a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter" /></a></li>
                    <li><a href="https://www.whatsapp.com/" target="_blank"><i className="fab fa-whatsapp" /></a></li>
                    <li><a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram" /></a></li>
                    <li><a href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="footer__widget">
                <h4 className="footer__widget-title">Quick Links</h4>
                <div className="footer__link">
                  <ul className="list-wrap">
                    <li><a href="animal.html">Animal Rescue</a></li>
                    <li><a href="contact.html">Humane Education</a></li>
                    <li><a href="contact.html">Caregivers</a></li>
                    <li><a href="blog.html">New &amp; Blog</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="footer__widget">
                <h4 className="footer__widget-title">Support</h4>
                <div className="footer__link">
                  <ul className="list-wrap">
                    <li><a href="about.html">About us</a></li>
                    <li><a href="contact.html">Contact us</a></li>
                    <li><a href="reservation.html">Book Appointment</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                    <li><a href="contact.html">Locations</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="footer__widget">
                <h4 className="footer__widget-title">Contact</h4>
                <div className="footer__contact">
                  <ul className="list-wrap">
                    <li>555 A, East Manster Street, Ready Halley Neon, Uk 4512</li>
                    <li><a href="tel:0123456789">+00 123 45678 44</a></li>
                    <li><a href="mailto:Supportinfo@gmail.com">Supportinfo@gmail.com</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__shape-wrap">
          <img src="petpal/assets/img/images/footer_shape01.png" alt="img" data-aos="fade-up-right" data-aos-delay={400} />
          <img src="petpal/assets/img/images/footer_shape02.png" alt="img" data-aos="fade-up-left" data-aos-delay={400} />
        </div>
      </div>
      <div className="footer__bottom footer__bottom-two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="copyright-text copyright-text-three">
                <p>Copyright © 2024. All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="footer__bottom-menu footer__bottom-menu-two">
                <ul className="list-wrap">
                  <li><a href="contact.html">Support</a></li>
                  <li><a href="contact.html">Terms &amp; Conditions</a></li>
                  <li><a href="contact.html">Privacy Policy</a></li>
                  <li><a href="contact.html">Career</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* footer-area-end */}
</div>

    </>
  )
       
}

export default Contact