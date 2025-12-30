import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import PageTitle from "../components/PageTitle.jsx";
import Swal from "sweetalert2";

function Login() {
    function SignIn() {
      Swal.fire({
        icon: "success",
        title: "Yeah...",
        text: "Login Successfully!",
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
                    <h2 className="title">Login</h2>
                    <span>
                      Your email address and password are required to login.
                    </span>
                    <div className="row gutter-20">
                      <div className="col-md-12">
                        <div className="form-grp">
                          <input
                            name="email"
                            type="email"
                            placeholder="E-mail"
                          />
                          {/*onChange={(e) => setName(e.target.value)} */}
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-grp">
                          <input
                            type="password"
                            name="password"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                    </div>
                    <button type="button" className="btn" onClick={SignIn}>
                      Login
                      <img
                        src="/petpal/assets/img/icon/right_arrow.svg"
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

export default Login;
