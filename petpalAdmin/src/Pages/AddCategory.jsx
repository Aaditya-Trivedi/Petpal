import React, { useState } from "react";
import Swal from "sweetalert2";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function AddCategory() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  async function add(e) {
    e.preventDefault();
    try {
      await addDoc(collection(db, "categories"), {
        name: name,
        description: description,
        createdAt: new Date(),
      });

      Swal.fire({
        icon: "success",
        title: "Yeah...",
        text: "Category Added Successfully!",
      });

      setName("");
      setDescription("");
    } 
    catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to add category",
      });
    }
  }

  return (
    <>
      {/* Begin page */}
      <div id="layout-wrapper">
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">
              {/* LOGO */}
              <div className="navbar-brand-box">
                <a href="index.html" className="logo logo-dark">
                  <span className="logo-sm">
                    <img src="assets/images/logo-sm.png" alt height={22} />
                  </span>
                  <span className="logo-lg">
                    <img src="assets/images/logo-dark.png" alt height={20} />
                  </span>
                </a>
                <a href="index.html" className="logo logo-light">
                  <span className="logo-sm">
                    <img src="assets/images/logo-sm.png" alt height={22} />
                  </span>
                  <span className="logo-lg">
                    <img src="assets/images/logo-light.png" alt height={20} />
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
                              <i className="mdi mdi-clock-outline" /> 3 min ago
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
                              <i className="mdi mdi-clock-outline" /> 1 hour ago
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
                              <i className="mdi mdi-clock-outline" /> 3 min ago
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
        <div className="vertical-menu">
          {/* LOGO */}
          <div className="navbar-brand-box">
            <a href="index.html" className="logo logo-dark">
              <span className="logo-sm">
                <img src="assets/images/logo-sm.png" alt height={22} />
              </span>
              <span className="logo-lg">
                <img src="assets/images/logo-dark.png" alt height={20} />
              </span>
            </a>
            <a href="index.html" className="logo logo-light">
              <span className="logo-sm">
                <img src="assets/images/logo-sm.png" alt height={22} />
              </span>
              <span className="logo-lg">
                <img src="assets/images/logo-light.png" alt height={20} />
              </span>
            </a>
          </div>
          <button
            type="button"
            className="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn"
          >
            <i className="fa fa-fw fa-bars" />
          </button>
          <div data-simplebar className="sidebar-menu-scroll">
            {/*- Sidemenu */}
            <div id="sidebar-menu">
              {/* Left Menu Start */}
              <ul className="metismenu list-unstyled" id="side-menu">
                <li className="menu-title">Menu</li>
                <li>
                  <a href="index.html">
                    <i className="uil-home-alt" />
                    <span className="badge rounded-pill bg-primary float-end">
                      01
                    </span>
                    <span>Dashboard</span>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript: void(0);"
                    className="has-arrow waves-effect"
                  >
                    <i className="uil-window-section" />
                    <span>Layouts</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="true">
                    <li>
                      <a href="javascript: void(0);" className="has-arrow">
                        Vertical
                      </a>
                      <ul className="sub-menu" aria-expanded="true">
                        <li>
                          <a href="layouts-dark-sidebar.html">Dark Sidebar</a>
                        </li>
                        <li>
                          <a href="layouts-compact-sidebar.html">
                            Compact Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="layouts-icon-sidebar.html">Icon Sidebar</a>
                        </li>
                        <li>
                          <a href="layouts-boxed.html">Boxed Width</a>
                        </li>
                        <li>
                          <a href="layouts-preloader.html">Preloader</a>
                        </li>
                        <li>
                          <a href="layouts-colored-sidebar.html">
                            Colored Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="has-arrow">
                        Horizontal
                      </a>
                      <ul className="sub-menu" aria-expanded="true">
                        <li>
                          <a href="layouts-horizontal.html">Horizontal</a>
                        </li>
                        <li>
                          <a href="layouts-hori-topbar-dark.html">
                            Topbar Dark
                          </a>
                        </li>
                        <li>
                          <a href="layouts-hori-boxed-width.html">
                            Boxed Width
                          </a>
                        </li>
                        <li>
                          <a href="layouts-hori-preloader.html">Preloader</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">Apps</li>
                <li>
                  <a href="calendar.html" className="waves-effect">
                    <i className="uil-calender" />
                    <span>Calendar</span>
                  </a>
                </li>
                <li>
                  <a href="chat.html" className=" waves-effect">
                    <i className="uil-comments-alt" />
                    <span>Chat</span>
                  </a>
                </li>
                <li>
                  <a href="file-manager.html" className=" waves-effect">
                    <i className="uil-comments-alt" />
                    {/* <span class="badge rounded-pill bg-success float-end">New</span> */}
                    <span>File Manager</span>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript: void(0);"
                    className="has-arrow waves-effect"
                  >
                    <i className="uil-store" />
                    <span>Ecommerce</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li>
                      <a href="ecommerce-products.html">Products</a>
                    </li>
                    <li>
                      <a href="ecommerce-product-detail.html">Product Detail</a>
                    </li>
                    <li>
                      <a href="ecommerce-orders.html">Orders</a>
                    </li>
                    <li>
                      <a href="ecommerce-customers.html">Customers</a>
                    </li>
                    <li>
                      <a href="ecommerce-cart.html">Cart</a>
                    </li>
                    <li>
                      <a href="ecommerce-checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="ecommerce-shops.html">Shops</a>
                    </li>
                    <li>
                      <a href="ecommerce-add-product.html">Add Product</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="javascript: void(0);"
                    className="has-arrow waves-effect"
                  >
                    <i className="uil-envelope" />
                    <span>Email</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li>
                      <a href="email-inbox.html">Inbox</a>
                    </li>
                    <li>
                      <a href="email-read.html">Read Email</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="javascript: void(0);"
                    className="has-arrow waves-effect"
                  >
                    <i className="uil-invoice" />
                    <span>Invoices</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li>
                      <a href="invoices-list.html">Invoice List</a>
                    </li>
                    <li>
                      <a href="invoices-detail.html">Invoice Detail</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="javascript: void(0);"
                    className="has-arrow waves-effect"
                  >
                    <i className="uil-book-alt" />
                    <span>Contacts</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li>
                      <a href="contacts-grid.html">User Grid</a>
                    </li>
                    <li>
                      <a href="contacts-list.html">User List</a>
                    </li>
                    <li>
                      <a href="contacts-profile.html">Profile</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">Pages</li>
                <li>
                  <a
                    href="javascript: void(0);"
                    className="has-arrow waves-effect"
                  >
                    <i className="uil-user-circle" />
                    <span>Authentication</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li>
                      <a href="auth-login.html">Login</a>
                    </li>
                    <li>
                      <a href="auth-register.html">Register</a>
                    </li>
                    <li>
                      <a href="auth-recoverpw.html">Recover Password</a>
                    </li>
                    <li>
                      <a href="auth-lock-screen.html">Lock Screen</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="javascript: void(0);"
                    className="has-arrow waves-effect"
                  >
                    <i className="uil-file-alt" />
                    <span>Utility</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li>
                      <a href="pages-starter.html">Starter Page</a>
                    </li>
                    <li>
                      <a href="pages-maintenance.html">Maintenance</a>
                    </li>
                    <li>
                      <a href="pages-comingsoon.html">Coming Soon</a>
                    </li>
                    <li>
                      <a href="pages-timeline.html">Timeline</a>
                    </li>
                    <li>
                      <a href="pages-faqs.html">FAQs</a>
                    </li>
                    <li>
                      <a href="pages-pricing.html">Pricing</a>
                    </li>
                    <li>
                      <a href="pages-404.html">Error 404</a>
                    </li>
                    <li>
                      <a href="pages-500.html">Error 500</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">Components</li>
                <li>
                  <a
                    href="javascript: void(0);"
                    className="has-arrow waves-effect"
                  >
                    <i className="uil-flask" />
                    <span>UI Elements</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li>
                      <a href="ui-alerts.html">Alerts</a>
                    </li>
                    <li>
                      <a href="ui-buttons.html">Buttons</a>
                    </li>
                    <li>
                      <a href="ui-cards.html">Cards</a>
                    </li>
                    <li>
                      <a href="ui-carousel.html">Carousel</a>
                    </li>
                    <li>
                      <a href="ui-dropdowns.html">Dropdowns</a>
                    </li>
                    <li>
                      <a href="ui-grid.html">Grid</a>
                    </li>
                    <li>
                      <a href="ui-images.html">Images</a>
                    </li>
                    <li>
                      <a href="ui-lightbox.html">Lightbox</a>
                    </li>
                    <li>
                      <a href="ui-modals.html">Modals</a>
                    </li>
                    <li>
                      <a href="ui-offcanvas.html">Offcanvas</a>
                    </li>
                    <li>
                      <a href="ui-rangeslider.html">Range Slider</a>
                    </li>
                    <li>
                      <a href="ui-session-timeout.html">Session Timeout</a>
                    </li>
                    <li>
                      <a href="ui-progressbars.html">Progress Bars</a>
                    </li>
                    <li>
                      <a href="ui-placeholders.html">Placeholders</a>
                    </li>
                    <li>
                      <a href="ui-sweet-alert.html">Sweet-Alert</a>
                    </li>
                    <li>
                      <a href="ui-tabs-accordions.html">
                        Tabs &amp; Accordions
                      </a>
                    </li>
                    <li>
                      <a href="ui-typography.html">Typography</a>
                    </li>
                    <li>
                      <a href="ui-utilities.html">
                        Utilities
                        <span className="badge rounded-pill bg-success float-end">
                          New
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="ui-toasts.html">Toasts</a>
                    </li>
                    <li>
                      <a href="ui-video.html">Video</a>
                    </li>
                    <li>
                      <a href="ui-general.html">General</a>
                    </li>
                    <li>
                      <a href="ui-colors.html">Colors</a>
                    </li>
                    <li>
                      <a href="ui-rating.html">Rating</a>
                    </li>
                    <li>
                      <a href="ui-notifications.html">Notifications</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript: void(0);" className="waves-effect">
                    <i className="uil-shutter-alt" />
                    <span className="badge rounded-pill bg-info float-end">
                      9
                    </span>
                    <span>Forms</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li>
                      <a href="form-elements.html">Basic Elements</a>
                    </li>
                    <li>
                      <a href="form-validation.html">Validation</a>
                    </li>
                    <li>
                      <a href="form-advanced.html">Advanced Plugins</a>
                    </li>
                    <li>
                      <a href="form-editors.html">Editors</a>
                    </li>
                    <li>
                      <a href="form-uploads.html">File Upload</a>
                    </li>
                    <li>
                      <a href="form-xeditable.html">Xeditable</a>
                    </li>
                    <li>
                      <a href="form-repeater.html">Repeater</a>
                    </li>
                    <li>
                      <a href="form-wizard.html">Wizard</a>
                    </li>
                    <li>
                      <a href="form-mask.html">Mask</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="javascript: void(0);"
                    className="has-arrow waves-effect"
                  >
                    <i className="uil-list-ul" />
                    <span>Tables</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li>
                      <a href="tables-basic.html">Bootstrap Basic</a>
                    </li>
                    <li>
                      <a href="tables-datatable.html">Datatables</a>
                    </li>
                    <li>
                      <a href="tables-responsive.html">Responsive</a>
                    </li>
                    <li>
                      <a href="tables-editable.html">Editable</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="javascript: void(0);"
                    className="has-arrow waves-effect"
                  >
                    <i className="uil-chart" />
                    <span>Charts</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li>
                      <a href="charts-apex.html">Apex</a>
                    </li>
                    <li>
                      <a href="charts-chartjs.html">Chartjs</a>
                    </li>
                    <li>
                      <a href="charts-flot.html">Flot</a>
                    </li>
                    <li>
                      <a href="charts-knob.html">Jquery Knob</a>
                    </li>
                    <li>
                      <a href="charts-sparkline.html">Sparkline</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="javascript: void(0);"
                    className="has-arrow waves-effect"
                  >
                    <i className="uil-streering" />
                    <span>Icons</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li>
                      <a href="icons-unicons.html">Unicons</a>
                    </li>
                    <li>
                      <a href="icons-boxicons.html">Boxicons</a>
                    </li>
                    <li>
                      <a href="icons-materialdesign.html">Material Design</a>
                    </li>
                    <li>
                      <a href="icons-dripicons.html">Dripicons</a>
                    </li>
                    <li>
                      <a href="icons-fontawesome.html">Font Awesome</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="javascript: void(0);"
                    className="has-arrow waves-effect"
                  >
                    <i className="uil-location-point" />
                    <span>Maps</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li>
                      <a href="maps-google.html">Google</a>
                    </li>
                    <li>
                      <a href="maps-vector.html">Vector</a>
                    </li>
                    <li>
                      <a href="maps-leaflet.html">Leaflet</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="javascript: void(0);"
                    className="has-arrow waves-effect"
                  >
                    <i className="uil-share-alt" />
                    <span>Multi Level</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="true">
                    <li>
                      <a href="javascript: void(0);">Level 1.1</a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="has-arrow">
                        Level 1.2
                      </a>
                      <ul className="sub-menu" aria-expanded="true">
                        <li>
                          <a href="javascript: void(0);">Level 2.1</a>
                        </li>
                        <li>
                          <a href="javascript: void(0);">Level 2.2</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* Sidebar */}
          </div>
        </div>
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
                    <h4 className="mb-0">Add Pet</h4>
                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <a href="javascript: void(0);">Ecommerce</a>
                        </li>
                        <li className="breadcrumb-item active">Add Product</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              {/* end page title */}
              <div className="row">
                <div className="col-lg-12">
                  <div id="addproduct-accordion" className="custom-accordion">
                    <div className="card">
                      <a
                        href="#addproduct-billinginfo-collapse"
                        className="text-dark "
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="addproduct-billinginfo-collapse"
                      >
                        <div className="p-4">
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 me-3">
                              <div className="avatar-xs">
                                <div className="avatar-title rounded-circle bg-primary-subtle text-primary">
                                  01
                                </div>
                              </div>
                            </div>
                            <div className="flex-grow-1 overflow-hidden">
                              <h5 className="font-size-16 mb-1">
                                Billing Info
                              </h5>
                              <p className="text-muted text-truncate mb-0">
                                Fill all information below
                              </p>
                            </div>
                            <div className="flex-shrink-0">
                              <i className="mdi mdi-chevron-up accor-down-icon font-size-24" />
                            </div>
                          </div>
                        </div>
                      </a>
                      <div
                        id="addproduct-billinginfo-collapse"
                        className="collapse show"
                        data-bs-parent="#addproduct-accordion"
                      >
                        <div className="p-4 border-top">
                          <form>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="productname"
                              >
                                Pet Name
                              </label>
                              <input
                                id="petname"
                                name="petname"
                                type="text"
                                className="form-control"
                                placeholder="Enter your pet name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                              />
                            </div>

                            <div className="mb-0">
                              <label
                                className="form-label"
                                htmlFor="petdesc"
                              >
                                Pet Category Description
                              </label>
                              <textarea
                                className="form-control"
                                id="petdesc"
                                rows={4}
                                placeholder="Enter your pet category description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end row */}
              <div className="row mb-4">
                <div className="col ms-auto">
                  <div className="d-flex flex-reverse flex-wrap gap-2">
                    <a href="#" className="btn btn-danger">
                      {" "}
                      <i className="uil uil-times" /> Cancel{" "}
                    </a>
                    <button
                      type="button"
                      onClick={add}
                      className="btn btn-success"
                    >
                      {" "}
                      <i className="uil uil-file-alt" /> Add Category{" "}
                    </button>
                  </div>
                </div>
                {/* end col */}
              </div>{" "}
              {/* end row*/}
            </div>{" "}
            {/* container-fluid */}
          </div>
          {/* End Page-content */}
          <footer className="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6">© Minible.</div>
                <div className="col-sm-6">
                  <div className="text-sm-end d-none d-sm-block">
                    Crafted with <i className="mdi mdi-heart text-danger" /> by{" "}
                    <a
                      href="https://themesbrand.com/"
                      target="_blank"
                      className="text-reset"
                    >
                      Themesbrand
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        {/* end main content*/}
      </div>
      {/* END layout-wrapper */}
    </>
  );
}

export default AddCategory;
