import { collection, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../firebase";
import LeftSidebar from "../components/LeftSidebar";
import Footer from "../components/footer";

function ViewCategories() {
  useEffect(function () {
    getData();
  }, []);

  async function getData() {
    let colRef = collection(db, "categories");

    onSnapshot(colRef, function (data) {
      console.log(data.docs);
    });
  }

  return (
    <>
      <div>
        {/* Begin page */}
        <div id="layout-wrapper">
          <header id="page-topbar">
            <div className="navbar-header">
              <div className="d-flex">
                {/* LOGO */}
                <div className="navbar-brand-box">
                  <a href="index.html" className="logo logo-dark">
                    <span className="logo-sm">
                      <img
                        src="/assets/images/logo-sm.png"
                        alt
                        height={22}
                      />
                    </span>
                    <span className="logo-lg">
                      <img
                        src="/assets/images/logo-dark.png"
                        alt
                        height={20}
                      />
                    </span>
                  </a>
                  <a href="index.html" className="logo logo-light">
                    <span className="logo-sm">
                      <img
                        src="/assets/images/logo-sm.png"
                        alt
                        height={22}
                      />
                    </span>
                    <span className="logo-lg">
                      <img
                        src="/assets/images/logo-light.png"
                        alt
                        height={20}
                      />
                    </span>
                  </a>
                </div>
                <button
                  type="button"
                  className="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn"
                >
                  <i className="fa fa-fw fa-bars" />
                </button>
                {/* App Search*/}
                <form className="app-search d-none d-lg-block">
                  <div className="position-relative">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                    <span className="uil-search" />
                  </div>
                </form>
              </div>
              <div className="d-flex">
                <div className="dropdown d-inline-block d-lg-none ms-2">
                  <button
                    type="button"
                    className="btn header-item noti-icon waves-effect"
                    id="page-header-search-dropdown"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="uil-search" />
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                    aria-labelledby="page-header-search-dropdown"
                  >
                    <form className="p-3">
                      <div className="m-0">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search ..."
                            aria-label="Recipient's username"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-primary" type="submit">
                              <i className="mdi mdi-magnify" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="dropdown d-inline-block language-switch">
                  <button
                    type="button"
                    className="btn header-item waves-effect"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      src="assets/images/flags/us.jpg"
                      alt="Header Language"
                      height={16}
                    />
                  </button>
                  <div className="dropdown-menu dropdown-menu-end">
                    {/* item*/}
                    <a
                      href="javascript:void(0);"
                      className="dropdown-item notify-item"
                    >
                      <img
                        src="assets/images/flags/spain.jpg"
                        alt="user-image"
                        className="me-1"
                        height={12}
                      />{" "}
                      <span className="align-middle">Spanish</span>
                    </a>
                    {/* item*/}
                    <a
                      href="javascript:void(0);"
                      className="dropdown-item notify-item"
                    >
                      <img
                        src="assets/images/flags/germany.jpg"
                        alt="user-image"
                        className="me-1"
                        height={12}
                      />{" "}
                      <span className="align-middle">German</span>
                    </a>
                    {/* item*/}
                    <a
                      href="javascript:void(0);"
                      className="dropdown-item notify-item"
                    >
                      <img
                        src="assets/images/flags/italy.jpg"
                        alt="user-image"
                        className="me-1"
                        height={12}
                      />{" "}
                      <span className="align-middle">Italian</span>
                    </a>
                    {/* item*/}
                    <a
                      href="javascript:void(0);"
                      className="dropdown-item notify-item"
                    >
                      <img
                        src="assets/images/flags/russia.jpg"
                        alt="user-image"
                        className="me-1"
                        height={12}
                      />{" "}
                      <span className="align-middle">Russian</span>
                    </a>
                  </div>
                </div>
                <div className="dropdown d-none d-lg-inline-block ms-1">
                  <button
                    type="button"
                    className="btn header-item noti-icon waves-effect"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="uil-apps" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                    <div className="px-lg-2">
                      <div className="row g-0">
                        <div className="col">
                          <a className="dropdown-icon-item" href="#">
                            <img
                              src="assets/images/brands/github.png"
                              alt="Github"
                            />
                            <span>GitHub</span>
                          </a>
                        </div>
                        <div className="col">
                          <a className="dropdown-icon-item" href="#">
                            <img
                              src="assets/images/brands/bitbucket.png"
                              alt="bitbucket"
                            />
                            <span>Bitbucket</span>
                          </a>
                        </div>
                        <div className="col">
                          <a className="dropdown-icon-item" href="#">
                            <img
                              src="assets/images/brands/dribbble.png"
                              alt="dribbble"
                            />
                            <span>Dribbble</span>
                          </a>
                        </div>
                      </div>
                      <div className="row g-0">
                        <div className="col">
                          <a className="dropdown-icon-item" href="#">
                            <img
                              src="assets/images/brands/dropbox.png"
                              alt="dropbox"
                            />
                            <span>Dropbox</span>
                          </a>
                        </div>
                        <div className="col">
                          <a className="dropdown-icon-item" href="#">
                            <img
                              src="assets/images/brands/mail_chimp.png"
                              alt="mail_chimp"
                            />
                            <span>Mail Chimp</span>
                          </a>
                        </div>
                        <div className="col">
                          <a className="dropdown-icon-item" href="#">
                            <img
                              src="assets/images/brands/slack.png"
                              alt="slack"
                            />
                            <span>Slack</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dropdown d-none d-lg-inline-block ms-1">
                  <button
                    type="button"
                    className="btn header-item noti-icon waves-effect"
                    data-bs-toggle="fullscreen"
                  >
                    <i className="uil-minus-path" />
                  </button>
                </div>
                <div className="dropdown d-inline-block">
                  <button
                    type="button"
                    className="btn header-item noti-icon waves-effect"
                    id="page-header-notifications-dropdown"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="uil-bell" />
                    <span className="badge bg-danger rounded-pill">3</span>
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                    aria-labelledby="page-header-notifications-dropdown"
                  >
                    <div className="p-3">
                      <div className="row align-items-center">
                        <div className="col">
                          <h5 className="m-0 font-size-16"> Notifications </h5>
                        </div>
                        <div className="col-auto">
                          <a href="#!" className="small">
                            {" "}
                            Mark all as read
                          </a>
                        </div>
                      </div>
                    </div>
                    <div data-simplebar style={{ maxHeight: 230 }}>
                      <a
                        href="javascript:void(0);"
                        className="text-dark notification-item"
                      >
                        <div className="d-flex align-items-start">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar-xs">
                              <span className="avatar-title bg-primary rounded-circle font-size-16">
                                <i className="uil-shopping-basket" />
                              </span>
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">Your order is placed</h6>
                            <div className="font-size-12 text-muted">
                              <p className="mb-1">
                                If several languages coalesce the grammar
                              </p>
                              <p className="mb-0">
                                <i className="mdi mdi-clock-outline" /> 3 min
                                ago
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="text-dark notification-item"
                      >
                        <div className="d-flex align-items-start">
                          <div className="flex-shrink-0 me-3">
                            <img
                              src="assets/images/users/avatar-3.jpg"
                              className="rounded-circle avatar-xs"
                              alt="user-pic"
                            />
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">James Lemire</h6>
                            <div className="font-size-12 text-muted">
                              <p className="mb-1">
                                It will seem like simplified English.
                              </p>
                              <p className="mb-0">
                                <i className="mdi mdi-clock-outline" /> 1 hour
                                ago
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="text-dark notification-item"
                      >
                        <div className="d-flex align-items-start">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar-xs">
                              <span className="avatar-title bg-success rounded-circle font-size-16">
                                <i className="uil-truck" />
                              </span>
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">Your item is shipped</h6>
                            <div className="font-size-12 text-muted">
                              <p className="mb-1">
                                If several languages coalesce the grammar
                              </p>
                              <p className="mb-0">
                                <i className="mdi mdi-clock-outline" /> 3 min
                                ago
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="text-dark notification-item"
                      >
                        <div className="d-flex align-items-start">
                          <div className="flex-shrink-0 me-3">
                            <img
                              src="assets/images/users/avatar-4.jpg"
                              className="rounded-circle avatar-xs"
                              alt="user-pic"
                            />
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">Salena Layfield</h6>
                            <div className="font-size-12 text-muted">
                              <p className="mb-1">
                                As a skeptical Cambridge friend of mine
                                occidental.
                              </p>
                              <p className="mb-0">
                                <i className="mdi mdi-clock-outline" /> 1 hours
                                ago
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="p-2 border-top">
                      <div className="d-grid">
                        <a
                          className="btn btn-sm btn-link font-size-14 text-center"
                          href="javascript:void(0)"
                        >
                          <i className="uil-arrow-circle-right me-1" /> View
                          More..
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dropdown d-inline-block">
                  <button
                    type="button"
                    className="btn header-item waves-effect"
                    id="page-header-user-dropdown"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      className="rounded-circle header-profile-user"
                      src="assets/images/users/avatar-4.jpg"
                      alt="Header Avatar"
                    />
                    <span className="d-none d-xl-inline-block ms-1 fw-medium font-size-15">
                      Marcus
                    </span>
                    <i className="uil-angle-down d-none d-xl-inline-block font-size-15" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-end">
                    {/* item*/}
                    <a className="dropdown-item" href="#">
                      <i className="uil uil-user-circle font-size-18 align-middle text-muted me-1" />{" "}
                      <span className="align-middle">View Profile</span>
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="uil uil-wallet font-size-18 align-middle me-1 text-muted" />{" "}
                      <span className="align-middle">My Wallet</span>
                    </a>
                    <a className="dropdown-item d-block" href="#">
                      <i className="uil uil-cog font-size-18 align-middle me-1 text-muted" />{" "}
                      <span className="align-middle">Settings</span>{" "}
                      <span className="badge bg-success-subtle text-success rounded-pill mt-1 ms-2">
                        03
                      </span>
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="uil uil-lock-alt font-size-18 align-middle me-1 text-muted" />{" "}
                      <span className="align-middle">Lock screen</span>
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="uil uil-sign-out-alt font-size-18 align-middle me-1 text-muted" />{" "}
                      <span className="align-middle">Sign out</span>
                    </a>
                  </div>
                </div>
                <div className="dropdown d-inline-block">
                  <button
                    type="button"
                    className="btn header-item noti-icon right-bar-toggle waves-effect"
                  >
                    <i className="uil-cog" />
                  </button>
                </div>
              </div>
            </div>
          </header>
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
                                <i className="mdi mdi-plus me-2" /> Add New
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
                                <th scope="col">Name</th>
                                <th scope="col">Position</th>
                                <th scope="col">Email</th>
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
                                <td>
                                  <img
                                    src="assets/images/users/avatar-2.jpg"
                                    alt
                                    className="avatar-xs rounded-circle me-2"
                                  />
                                  <a href="#" className="text-body">
                                    Simon Ryles
                                  </a>
                                </td>
                                <td>Full Stack Developer</td>
                                <td>SimonRyles@minible.com</td>
                                <td>
                                  <ul className="list-inline mb-0">
                                    <li className="list-inline-item">
                                      <a
                                        href="javascript:void(0);"
                                        className="px-2 text-primary"
                                      >
                                        <i className="uil uil-pen font-size-18" />
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a
                                        href="javascript:void(0);"
                                        className="px-2 text-danger"
                                      >
                                        <i className="uil uil-trash-alt font-size-18" />
                                      </a>
                                    </li>
                                    <li className="list-inline-item dropdown">
                                      <a
                                        className="text-muted dropdown-toggle font-size-18 px-2"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                      >
                                        <i className="uil uil-ellipsis-v" />
                                      </a>
                                      <div className="dropdown-menu dropdown-menu-end">
                                        <a className="dropdown-item" href="#">
                                          Action
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Another action
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Something else here
                                        </a>
                                      </div>
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
                  onchange="document.body.setAttribute('data-layout-size', 'fluid')"
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
                  onchange="document.body.setAttribute('data-layout-size', 'boxed')"
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
                  onchange="document.body.setAttribute('data-topbar', 'light')"
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
                  onchange="document.body.setAttribute('data-topbar', 'dark')"
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
                  onchange="document.body.setAttribute('data-sidebar-size', 'lg')"
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
                  onchange="document.body.setAttribute('data-sidebar-size', 'small')"
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
                  onchange="document.body.setAttribute('data-sidebar-size', 'sm')"
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
                  onchange="document.body.setAttribute('data-sidebar', 'light')"
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
                  onchange="document.body.setAttribute('data-sidebar', 'dark')"
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
                  onchange="document.body.setAttribute('data-sidebar', 'colored')"
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