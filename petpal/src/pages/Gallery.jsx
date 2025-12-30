import Footer from "../components/Footer";

function Gallery(){
 return (
   <>
     {/*Preloader-end */}
     {/* Scroll-top */}
     <button className="scroll__top scroll-to-target" data-target="html">
       <i className="fas fa-angle-up" />
     </button>
     {/* Scroll-top-end*/}
     {/* header-area */}
     <header>
       <div id="header-fixed-height" />
       <div
         id="sticky-header"
         className="tg-header__area tg-header__area-three"
       >
         <div className="container">
           <div className="row">
             <div className="col-lg-12">
               <div className="tgmenu__wrap">
                 <div className="row align-items-center">
                   <div className="col-xl-5">
                     <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                       <ul className="navigation">
                         <li className="menu-item-has-children">
                           <a href="#">Home</a>
                           <ul className="sub-menu">
                             <li>
                               <a href="index-2.html">
                                 Pet Care &amp; Veterinary
                               </a>
                             </li>
                             <li>
                               <a href="index-3.html">Pet Breed</a>
                             </li>
                             <li>
                               <a href="index-4.html">Pet Adopt</a>
                             </li>
                             <li>
                               <a href="index-5.html">pet Woocommerce</a>
                             </li>
                           </ul>
                         </li>
                         <li>
                           <a href="about.html">About</a>
                         </li>
                         <li className="menu-item-has-children">
                           <a href="#">Shop</a>
                           <ul className="sub-menu">
                             <li>
                               <a href="product.html">Our Shop</a>
                             </li>
                             <li>
                               <a href="product-details.html">Shop Details</a>
                             </li>
                           </ul>
                         </li>
                         <li className="active menu-item-has-children">
                           <a href="#">Pages</a>
                           <ul className="sub-menu">
                             <li>
                               <a href="animal.html">All Pets</a>
                             </li>
                             <li>
                               <a href="animal-details.html">Pet Details</a>
                             </li>
                             <li className="active">
                               <a href="gallery.html">Gallery</a>
                             </li>
                             <li>
                               <a href="faq.html">Faq Page</a>
                             </li>
                             <li>
                               <a href="pricing.html">Pricing Page</a>
                             </li>
                             <li>
                               <a href="reservation.html">Reservation Page</a>
                             </li>
                             <li>
                               <a href="team.html">Our Team</a>
                             </li>
                             <li>
                               <a href="team-details.html">Team Details</a>
                             </li>
                             <li>
                               <a href="blog.html">Our Blog</a>
                             </li>
                             <li>
                               <a href="blog-details.html">Blog Details</a>
                             </li>
                             <li>
                               <a href="error.html">404 Error Page</a>
                             </li>
                           </ul>
                         </li>
                         <li>
                           <a href="contact.html">contacts</a>
                         </li>
                       </ul>
                     </div>
                   </div>
                   <div className="col-xl-2 col-md-4">
                     <div className="logo text-center">
                       <a href="index-2.html">
                         <img src="/petpal/assets/img/logo/w_logo.png" alt="Logo" />
                       </a>
                     </div>
                   </div>
                   <div className="col-xl-5 col-md-8">
                     <div className="tgmenu__action tgmenu__action-two d-none d-md-block">
                       <ul className="list-wrap">
                         <li className="header-search">
                           <a
                             href="javascript:void(0)"
                             className="search-open-btn"
                           >
                             <i className="flaticon-loupe" />
                           </a>
                         </li>
                         <li className="header-cart">
                           <a href="javascript:void(0)">
                             <i className="flaticon-shopping-bag" />
                             <span>0</span>
                           </a>
                         </li>
                         <li className="header-btn login-btn">
                           <a href="contact.html" className="btn">
                             <i className="flaticon-locked" />
                             Login
                           </a>
                         </li>
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
                   <div className="close-btn">
                     <i className="fas fa-times" />
                   </div>
                   <div className="nav-logo">
                     <a href="index-2.html">
                       <img src="/petpal/assets/img/logo/logo.png" alt="Logo" />
                     </a>
                   </div>
                   <div className="tgmobile__search">
                     <form action="#">
                       <input type="text" placeholder="Search here..." />
                       <button>
                         <i className="fas fa-search" />
                       </button>
                     </form>
                   </div>
                   <div className="tgmobile__menu-outer">
                     {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                   </div>
                   <div className="social-links">
                     <ul className="list-wrap">
                       <li>
                         <a href="https://www.facebook.com/" target="_blank">
                           <i className="fab fa-facebook-f" />
                         </a>
                       </li>
                       <li>
                         <a href="https://twitter.com/" target="_blank">
                           <i className="fab fa-twitter" />
                         </a>
                       </li>
                       <li>
                         <a href="https://www.whatsapp.com/" target="_blank">
                           <i className="fab fa-whatsapp" />
                         </a>
                       </li>
                       <li>
                         <a href="https://www.instagram.com/" target="_blank">
                           <i className="fab fa-instagram" />
                         </a>
                       </li>
                       <li>
                         <a href="https://www.youtube.com/" target="_blank">
                           <i className="fab fa-youtube" />
                         </a>
                       </li>
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
                     <svg
                       width={18}
                       height={18}
                       viewBox="0 0 18 18"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M17 1L1 17"
                         stroke="currentColor"
                         strokeWidth="1.5"
                         strokeLinecap="round"
                         strokeLinejoin="round"
                       />
                       <path
                         d="M1 1L17 17"
                         stroke="currentColor"
                         strokeWidth="1.5"
                         strokeLinecap="round"
                         strokeLinejoin="round"
                       />
                     </svg>
                   </button>
                 </div>
                 <div className="search__form">
                   <form action="#">
                     <div className="search__input">
                       <input
                         className="search-input-field"
                         type="text"
                         placeholder="Type keywords here"
                       />
                       <span className="search-focus-border" />
                       <button>
                         <svg
                           width={20}
                           height={20}
                           viewBox="0 0 20 20"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                         >
                           <path
                             d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                             stroke="currentColor"
                             strokeWidth="1.5"
                             strokeLinecap="round"
                             strokeLinejoin="round"
                           />
                           <path
                             d="M19.0002 19.0002L17.2002 17.2002"
                             stroke="currentcolor"
                             strokeWidth="1.5"
                             strokeLinecap="round"
                             strokeLinejoin="round"
                           />
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
                 <h3 className="title">Our Gallery</h3>
                 <nav className="breadcrumb">
                   <span property="itemListElement" typeof="ListItem">
                     <a href="index-2.html">Home</a>
                   </span>
                   <span className="breadcrumb-separator">
                     <i className="flaticon-right-arrow-angle" />
                   </span>
                   <span property="itemListElement" typeof="ListItem">
                     Gallery
                   </span>
                 </nav>
               </div>
             </div>
             <div className="col-lg-4">
               <div className="breadcrumb__img">
                 <img
                   src="/petpal/assets/img/images/breadcrumb_img.png"
                   alt="img"
                   data-aos="fade-left"
                   data-aos-delay={800}
                 />
               </div>
             </div>
           </div>
         </div>
         <div className="breadcrumb__shape-wrap">
           <img
             src="/petpal/assets/img/images/breadcrumb_shape01.png"
             alt="img"
             data-aos="fade-down-right"
             data-aos-delay={400}
           />
           <img
             src="/petpal/assets/img/images/breadcrumb_shape02.png"
             alt="img"
             data-aos="fade-up-left"
             data-aos-delay={400}
           />
         </div>
       </section>
       {/* breadcrumb-area-end */}
       {/* gallery-area */}
       <div className="gallery__area">
         <div className="container">
           <div className="row">
             <div className="col-lg-4 col-md-6">
               <div className="gallery__item">
                 <div className="gallery__img">
                   <img src="/petpal/assets/img/gallery/gallery_img01.jpg" alt="img" />
                 </div>
                 <a
                   href="/petpal/assets/img/gallery/gallery_img01.jpg"
                   className="popup-image"
                 >
                   <img
                     src="/petpal/assets/img/icon/popup_icon.svg"
                     alt
                     className="injectable"
                   />
                 </a>
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div className="gallery__item">
                 <div className="gallery__img">
                   <img src="/petpal/assets/img/gallery/gallery_img02.jpg" alt="img" />
                 </div>
                 <a
                   href="/petpal/assets/img/gallery/gallery_img02.jpg"
                   className="popup-image"
                 >
                   <img
                     src="/petpal/assets/img/icon/popup_icon.svg"
                     alt
                     className="injectable"
                   />
                 </a>
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div className="gallery__item">
                 <div className="gallery__img">
                   <img src="/petpal/assets/img/gallery/gallery_img03.jpg" alt="img" />
                 </div>
                 <a
                   href="/petpal/assets/img/gallery/gallery_img03.jpg"
                   className="popup-image"
                 >
                   <img
                     src="/petpal/assets/img/icon/popup_icon.svg"
                     alt
                     className="injectable"
                   />
                 </a>
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div className="gallery__item">
                 <div className="gallery__img">
                   <img src="/petpal/assets/img/gallery/gallery_img04.jpg" alt="img" />
                 </div>
                 <a
                   href="/petpal/assets/img/gallery/gallery_img04.jpg"
                   className="popup-image"
                 >
                   <img
                     src="/petpal/assets/img/icon/popup_icon.svg"
                     alt
                     className="injectable"
                   />
                 </a>
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div className="gallery__item">
                 <div className="gallery__img">
                   <img src="/petpal/assets/img/gallery/gallery_img05.jpg" alt="img" />
                 </div>
                 <a
                   href="/petpal/assets/img/gallery/gallery_img05.jpg"
                   className="popup-image"
                 >
                   <img
                     src="/petpal/assets/img/icon/popup_icon.svg"
                     alt
                     className="injectable"
                   />
                 </a>
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div className="gallery__item">
                 <div className="gallery__img">
                   <img src="/petpal/assets/img/gallery/gallery_img06.jpg" alt="img" />
                 </div>
                 <a
                   href="/petpal/assets/img/gallery/gallery_img06.jpg"
                   className="popup-image"
                 >
                   <img
                     src="/petpal/assets/img/icon/popup_icon.svg"
                     alt
                     className="injectable"
                   />
                 </a>
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div className="gallery__item">
                 <div className="gallery__img">
                   <img src="/petpal/assets/img/gallery/gallery_img07.jpg" alt="img" />
                 </div>
                 <a
                   href="/petpal/assets/img/gallery/gallery_img07.jpg"
                   className="popup-image"
                 >
                   <img
                     src="/petpal/assets/img/icon/popup_icon.svg"
                     alt
                     className="injectable"
                   />
                 </a>
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div className="gallery__item">
                 <div className="gallery__img">
                   <img src="/petpal/assets/img/gallery/gallery_img08.jpg" alt="img" />
                 </div>
                 <a
                   href="/petpal/assets/img/gallery/gallery_img08.jpg"
                   className="popup-image"
                 >
                   <img
                     src="/petpal/assets/img/icon/popup_icon.svg"
                     alt
                     className="injectable"
                   />
                 </a>
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div className="gallery__item">
                 <div className="gallery__img">
                   <img src="/petpal/assets/img/gallery/gallery_img09.jpg" alt="img" />
                 </div>
                 <a
                   href="/petpal/assets/img/gallery/gallery_img09.jpg"
                   className="popup-image"
                 >
                   <img
                     src="/petpal/assets/img/icon/popup_icon.svg"
                     alt
                     className="injectable"
                   />
                 </a>
               </div>
             </div>
           </div>
         </div>
       </div>
       {/* gallery-area-end */}
     </main>
     {/* main-area-end */}

     {/* footer-area */}
    <Footer/>
     
     {/* footer-area-end */}
   </>
 );
}

export default Gallery;