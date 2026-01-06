import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";

function AddPet() {
    return (
        <>

            {/* header-area */}
            <Navbar />

            {/* header-area-end */}
            {/* main-area */}
            <main className="fix">
                {/* breadcrumb-area */}
                <PageTitle title="Add Pet" />
                {/* breadcrumb-area-end */}
                {/* registration-area */}
                <section className="registration__area-two">
                    <div className="container">
                        <div className="registration__inner-wrap-two">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="registration__form-wrap">
                                        <form action="#" className="registration__form">
                                            <h3 className="title">Request a Schedule</h3>
                                            <span>Your email address will not be published. Required fields are marked *</span>
                                            <div className="row gutter-20">
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input type="text" placeholder="Name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input type="number" placeholder="Age" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input type="email" placeholder="User Email" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input type="text" placeholder="User Phone" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                            <button type="submit" className="btn w-100">Upload Pet Picture</button>

                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input type="text" placeholder="Breed" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-grp select-grp">
                                                        <select name="Species" className="orderby">
                                                            <option value="Dog">Dog</option>
                                                            <option value="Cat">Cat</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-grp">
                                                        <textarea name="comment" placeholder="Justication for Giving Pet..." defaultValue={""} />
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn">Book Now <img src="petpal/assets/img/icon/right_arrow.svg" alt className="injectable" /></button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="registration__img">
                                        <img src="petpal/assets/img/images/registration_img.png" alt data-aos="fade-right" data-aos-delay={400} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* registration-area-end */}
            </main>
            {/* main-area-end */}
            {/* footer-area */}
            <Footer />
            {/* footer-area-end */}


        </>
    )
}

export default AddPet;