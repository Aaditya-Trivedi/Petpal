import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import PageTitle from "../components/PageTitle.jsx";
import Swal from "sweetalert2";
import { useState } from "react";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function Signup(e) {
      e.preventDefault(); // stop page refresh

      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Password:", password);

      Swal.fire({
        icon: "success",
        title: "Yeah...",
        text: "Registered Successfully!",
      });
    }

    return (
      <>
        {/*Preloader-end */}
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
          <PageTitle />
          {/* breadcrumb-area-end */}

          {/* contact-area */}
          <section className="contact__area">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 mx-auto">
                  <div className="contact__form-wrap">
                    <form
                      action="https://themedox.com/demo/petpal/assets/mail.php"
                      method="POST"
                      id="contact-form"
                      className="contact__form"
                    >
                      <h2 className="title">Signup</h2>
                      <span>
                        Your name,email address and password are required to
                        signup.
                      </span>
                      <div className="row gutter-20">
                        <div className="col-md-12">
                          <div className="form-grp">
                            <input
                              type="text"
                              name="name"
                              placeholder="Name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="form-grp">
                            <input
                              name="email"
                              type="email"
                              placeholder="E-mail"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="form-grp">
                            <input
                              type="password"
                              name="password"
                              placeholder="Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <button type="button" className="btn" onClick={Signup}>
                        Signup
                        <img
                          src="petpal/assets/img/icon/right_arrow.svg"
                          alt
                          className="injectable"
                        />
                      </button>
                    </form>
                    <p className="ajax-response mb-0" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* contact-area-end */}
        </main>
        {/* main-area-end */}
        {/* footer-area */}
        <Footer />
        {/* footer-area-end */}
      </>
    );
}

export default Register;
