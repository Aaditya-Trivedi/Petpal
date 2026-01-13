import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import LeftSidebar from "../components/LeftSidebar";
import Footer from "../components/footer";
import NavBar from "../components/NavBar";

function ViewCategories() {

const [categories, setCategories] = useState([]);

  useEffect(function () {
    getCategories()
  }, [])

   function getCategories() {
    let colRef = collection(db, "categories")

    onSnapshot(colRef, function (snapshot) {

      let results = []

      snapshot.docs.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setCategories(results)
      })
      
  }

  function deleteCategory(id) {

  }
  return (
    <>
      <div>
        {/* Begin page */}
        <div id="layout-wrapper">
          <NavBar />
          {/* ========== Left Sidebar Start ========== */}
          <LeftSidebar />
          {/* Left Sidebar End */}
          {/* ============================================================== */}
          {/* Start right Content here */}
          {/* ============================================================== */}
          <div className="main-content">
            <div className="page-content">
              <div className="container-fluid">
                {/* start page title */}
                <div className="row">
                  <div className="col-12">
                    <div className="page-title-box d-flex align-items-center justify-content-between">
                      <h4 className="mb-0">User List</h4>
                      <div className="page-title-right">
                        <ol className="breadcrumb m-0">
                          <li className="breadcrumb-item">
                            <a href="javascript: void(0);">Contacts</a>
                          </li>
                          <li className="breadcrumb-item active">User List</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end page title */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="row mb-2">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <a
                                href="javascript:void(0);"
                                className="btn btn-success waves-effect waves-light"
                              >
                                <i className="fa-solid fa-plus" /> Add New
                                Category
                              </a>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inline float-md-end mb-3">
                              <div className="search-box ms-2">
                                <div className="position-relative">
                                  <input
                                    type="text"
                                    className="form-control rounded bg-light border-0"
                                    placeholder="Search..."
                                  />
                                  <i className="mdi mdi-magnify search-icon" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end row */}
                        <div className="table-responsive mb-4">
                          <table className="table table-centered table-nowrap mb-0">
                            <thead>
                              <tr>
                                <th scope="col" style={{ width: 50 }}>
                                  <div className="form-check font-size-16">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      id="contacusercheck"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="contacusercheck"
                                    />
                                  </div>
                                </th>
                                <th scope="col">Category Name</th>
                                <th scope="col">Category Description</th>
                                <th scope="col" style={{ width: 200 }}>
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">
                                  <div className="form-check font-size-16">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      id="contacusercheck1"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="contacusercheck1"
                                    />
                                  </div>
                                </th>

                                <td>{categories[0]?.name}</td>
                                <td>{categories[0]?.description}</td>
                                <td>
                                  <ul className="list-inline mb-0">
                                    <li className="list-inline-item">
                                      <a
                                        href="javascript:void(0);"
                                        className="px-2 text-primary"
                                      >
                                        <i class="fa-solid fa-pen"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a
                                        href="javascript:void(0);"
                                        className="px-2 text-danger"
                                      >
                                        <i class="fa-solid fa-trash-can" onClick={deleteCategory}></i>
                                      </a>
                                    </li>
                                  </ul>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end row */}
              </div>{" "}
              {/* container-fluid */}
            </div>
            {/* End Page-content */}
            <Footer />
          </div>
          {/* end main content*/}
        </div>
        {/* END layout-wrapper */}
        {/* Right Sidebar */}
        <div className="right-bar">
          <div data-simplebar className="h-100">
            <div className="rightbar-title d-flex align-items-center p-3">
              <h5 className="m-0 me-2">Settings</h5>
              <a
                href="javascript:void(0);"
                className="right-bar-toggle ms-auto"
              >
                <i className="mdi mdi-close noti-icon" />
              </a>
            </div>
            {/* Settings */}
            <hr className="m-0" />
            <div className="p-4">
              <h6 className="mb-3">Layout</h6>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="layout"
                  id="layout-vertical"
                  defaultValue="vertical"
                />
                <label className="form-check-label" htmlFor="layout-vertical">
                  Vertical
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="layout"
                  id="layout-horizontal"
                  defaultValue="horizontal"
                />
                <label className="form-check-label" htmlFor="layout-horizontal">
                  Horizontal
                </label>
              </div>
              <h6 className="mt-4 mb-3 pt-2">Layout Mode</h6>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="layout-mode"
                  id="layout-mode-light"
                  defaultValue="light"
                />
                <label className="form-check-label" htmlFor="layout-mode-light">
                  Light
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="layout-mode"
                  id="layout-mode-dark"
                  defaultValue="dark"
                />
                <label className="form-check-label" htmlFor="layout-mode-dark">
                  Dark
                </label>
              </div>
              <h6 className="mt-4 mb-3 pt-2">Layout Width</h6>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="layout-width"
                  id="layout-width-fuild"
                  defaultValue="fuild"
                  onChange={() =>
                    document.body.setAttribute("data-layout-size", "fluid")
                  }
                />
                <label
                  className="form-check-label"
                  htmlFor="layout-width-fuild"
                >
                  Fluid
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="layout-width"
                  id="layout-width-boxed"
                  defaultValue="boxed"
                  onChange={() =>
                    document.body.setAttribute("data-layout-size", "boxed")
                  }
                />
                <label
                  className="form-check-label"
                  htmlFor="layout-width-boxed"
                >
                  Boxed
                </label>
              </div>
              <h6 className="mt-4 mb-3 pt-2">Topbar Color</h6>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="topbar-color"
                  id="topbar-color-light"
                  defaultValue="light"
                  onChange={() =>
                    document.body.setAttribute("data-topbar", "light")
                  }
                />
                <label
                  className="form-check-label"
                  htmlFor="topbar-color-light"
                >
                  Light
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="topbar-color"
                  id="topbar-color-dark"
                  defaultValue="dark"
                  onChange={() =>
                    document.body.setAttribute("data-topbar", "dark")
                  }
                />
                <label className="form-check-label" htmlFor="topbar-color-dark">
                  Dark
                </label>
              </div>
              <h6 className="mt-4 mb-3 pt-2 sidebar-setting">Sidebar Size</h6>
              <div className="form-check sidebar-setting">
                <input
                  className="form-check-input"
                  type="radio"
                  name="sidebar-size"
                  id="sidebar-size-default"
                  defaultValue="default"
                  onChange={() =>
                    document.body.setAttribute("data-sidebar-size", "lg")
                  }
                />
                <label
                  className="form-check-label"
                  htmlFor="sidebar-size-default"
                >
                  Default
                </label>
              </div>
              <div className="form-check sidebar-setting">
                <input
                  className="form-check-input"
                  type="radio"
                  name="sidebar-size"
                  id="sidebar-size-compact"
                  defaultValue="compact"
                  onChange={() =>
                    document.body.setAttribute("data-sidebar-size", "sm")
                  }
                />
                <label
                  className="form-check-label"
                  htmlFor="sidebar-size-compact"
                >
                  Compact
                </label>
              </div>
              <div className="form-check sidebar-setting">
                <input
                  className="form-check-input"
                  type="radio"
                  name="sidebar-size"
                  id="sidebar-size-small"
                  defaultValue="small"
                  onChange={() =>
                    document.body.setAttribute("data-sidebar-size", "sm")
                  }
                />
                <label
                  className="form-check-label"
                  htmlFor="sidebar-size-small"
                >
                  Small (Icon View)
                </label>
              </div>
              <h6 className="mt-4 mb-3 pt-2 sidebar-setting">Sidebar Color</h6>
              <div className="form-check sidebar-setting">
                <input
                  className="form-check-input"
                  type="radio"
                  name="sidebar-color"
                  id="sidebar-color-light"
                  defaultValue="light"
                  onChange={() =>
                    document.body.setAttribute("data-sidebar", "light")
                  }
                />
                <label
                  className="form-check-label"
                  htmlFor="sidebar-color-light"
                >
                  Light
                </label>
              </div>
              <div className="form-check sidebar-setting">
                <input
                  className="form-check-input"
                  type="radio"
                  name="sidebar-color"
                  id="sidebar-color-dark"
                  defaultValue="dark"
                  onChange={() =>
                    document.body.setAttribute("data-sidebar", "dark")
                  }
                />
                <label
                  className="form-check-label"
                  htmlFor="sidebar-color-dark"
                >
                  Dark
                </label>
              </div>
              <div className="form-check sidebar-setting">
                <input
                  className="form-check-input"
                  type="radio"
                  name="sidebar-color"
                  id="sidebar-color-colored"
                  defaultValue="colored"
                  onChange={() =>
                    document.body.setAttribute("data-sidebar", "colored")
                  }
                />
                <label
                  className="form-check-label"
                  htmlFor="sidebar-color-colored"
                >
                  Colored
                </label>
              </div>
              <h6 className="mt-4 mb-3 pt-2">Direction</h6>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="layout-direction"
                  id="layout-direction-ltr"
                  defaultValue="ltr"
                />
                <label
                  className="form-check-label"
                  htmlFor="layout-direction-ltr"
                >
                  LTR
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="layout-direction"
                  id="layout-direction-rtl"
                  defaultValue="rtl"
                />
                <label
                  className="form-check-label"
                  htmlFor="layout-direction-rtl"
                >
                  RTL
                </label>
              </div>
            </div>
          </div>{" "}
          {/* end slimscroll-menu*/}
        </div>
        {/* /Right-bar */}
      </div>
    </>
  );
}

export default ViewCategories;