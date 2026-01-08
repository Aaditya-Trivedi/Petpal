function AdminLogin(){
    return(
        <>
<div className="account-pages my-5 pt-sm-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="text-center">
          <a href="index.html" className="mb-5 d-block auth-logo">
            <img src="assets/images/logo-dark.png" alt height={22} className="logo logo-dark" />
            <img src="assets/images/logo-light.png" alt height={22} className="logo logo-light" />
          </a>
        </div>
      </div>
    </div>
    <div className="row align-items-center justify-content-center">
      <div className="col-md-8 col-lg-6 col-xl-5">
        <div className="card">
          <div className="card-body p-4"> 
            <div className="text-center mt-2">
              <h5 className="text-primary">Welcome Back !</h5>
              <p className="text-muted">Sign in to continue to Minible.</p>
            </div>
            <div className="p-2 mt-4">
              <form action="https://themesbrand.com/minible/layouts/index.html">
                <div className="mb-3">
                  <label className="form-label" htmlFor="username">Username</label>
                  <input type="text" className="form-control" id="username" placeholder="Enter username" />
                </div>
                <div className="mb-3">
                  <div className="float-end">
                    <a href="auth-recoverpw.html" className="text-muted">Forgot password?</a>
                  </div>
                  <label className="form-label" htmlFor="userpassword">Password</label>
                  <input type="password" className="form-control" id="userpassword" placeholder="Enter password" />
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="auth-remember-check" />
                  <label className="form-check-label" htmlFor="auth-remember-check">Remember me</label>
                </div>
                <div className="mt-3 text-end">
                  <button className="btn btn-primary w-sm waves-effect waves-light" type="submit">Log In</button>
                </div>
                <div className="mt-4 text-center">
                  <div className="signin-other-title">
                    <h5 className="font-size-14 mb-3 title">Sign in with</h5>
                  </div>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="javascript:void()" className="social-list-item bg-primary text-white border-primary">
                        <i className="mdi mdi-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="javascript:void()" className="social-list-item bg-info text-white border-info">
                        <i className="mdi mdi-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="javascript:void()" className="social-list-item bg-danger text-white border-danger">
                        <i className="mdi mdi-google" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 text-center">
                  <p className="mb-0">Don't have an account ? <a href="auth-register.html" className="fw-medium text-primary"> Signup now </a> </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-5 text-center">
          <p>©  Minible. Crafted with <i className="mdi mdi-heart text-danger" ></i> by Themesbrand</p>
        </div>
      </div>
    </div>
    {/* end row */}
  </div>
  {/* end container */}
</div>

        </>
    )
}

export default AdminLogin