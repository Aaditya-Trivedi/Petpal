import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // adjust path if needed
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";

function Contact() {

  let [Name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [msg, setMsg] = useState("")


  async function contact() {
    let colRef = collection(db, "contact")
    try {
      await addDoc(colRef, { Name: Name, email: email, Message: msg })
      Swal.fire({
        title: "Message sent successfully! We will get back to you shortly.",
        icon: "success"
      });
      setName("");
      setEmail("");
      setMsg("");
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: "Something want Wrong!",
        icon: "fail"
      });
    }


  }
  return (
    <>
      <div>
        {/* Scroll-top */}
        <button className="scroll__top scroll-to-target" data-target="html">
          <i className="fas fa-angle-up" />
        </button>
        {/* Scroll-top-end*/}
        {/* header-area */}
        <Navbar />
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
                    <form method="POST" id="contact-form" className="contact__form">
                      <h2 className="title">Post a comment</h2>
                      <span>Your email address will not be published. Required fields are marked *</span>
                      <div className="row gutter-20">
                        <div className="col-md-6">
                          <div className="form-grp">
                            <input name="name" type="text" placeholder="Name" value={Name} onChange={(e) => setName(e.target.value)} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-grp">
                            <input name="email" type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                          </div>
                        </div>
                        {/* <div className="col-md-12">
                          <div className="form-grp">
                            <input name="website" type="url" placeholder="Website" />
                          </div>
                        </div> */}
                        <div className="col-md-12">
                          <div className="form-grp">
                            <textarea name="message" placeholder="Message" defaultValue={""} value={msg} onChange={(e) => setMsg(e.target.value)} />
                          </div>
                        </div>
                      </div>
                      <button type="button" className="btn" onClick={contact}>Send Us Message <img src="petpal/assets/img/icon/right_arrow.svg" alt className="injectable" /></button>
                    </form>
                    <p className="ajax-response mb-0" />
                  </div>
                </div>
              </div>
              {/* contact-map */}
              <div className="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48409.69813174607!2d-74.05163325136718!3d40.68264649999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bae694479a3%3A0xb9949385da52e69e!2sBarclays%20Center!5e0!3m2!1sen!2sbd!4v1684309529719!5m2!1sen!2sbd" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
              {/* contact-map-end */}
            </div>
          </section>
          {/* contact-area-end */}
        </main>
        {/* main-area-end */}
        {/* footer-area */}
        <Footer />
        {/* footer-area-end */}
      </div>

    </>
  )

}

export default Contact