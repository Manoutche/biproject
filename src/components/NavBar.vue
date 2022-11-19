<template>
    <header class="header axil-header header-style-1">
   
        <!-- Start Mainmenu Area  -->
        <div id="axil-sticky-placeholder"></div>
        <div class="axil-mainmenu">
            <div class="container">
                <div class="header-navbar">
                    <div class="header-brand">
                        <a href="/" class="logo logo-dark">
                            <img src="../../public/assets/images/logo/logo.png" alt="Site Logo">
                        </a>
                        <a href="/" class="logo logo-light">
                            <img src="../../public/assets/images/logo/logo-light.png" alt="Site Logo">
                        </a>
                    </div>
                    <div class="header-main-nav">
                        <!-- Start Mainmanu Nav -->
                        <nav class="mainmenu-nav">
                            <button class="mobile-close-btn mobile-nav-toggler"><i class="fas fa-times"></i></button>
                            <div class="mobile-nav-brand">
                                <a href="/" class="logo">
                                    <img src="../../public/assets/images/logo/logo.png" alt="Site Logo">
                                </a>
                            </div>
                            <ul class="mainmenu">
                                <li><a href="/">Home</a></li>
                                    
                                <li><a href="/shop">Shop</a></li>
                                 
                                <li><a href="#">About</a></li> 
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </nav>
                        <!-- End Mainmanu Nav -->
                    </div>
                    <div class="header-action">
                        <ul class="action-list">
                            <li class="axil-search d-xl-block d-none">
                                <input type="search" class="placeholder product-search-input" name="search2" id="search2" value="" maxlength="128" placeholder="What are you looking for?" autocomplete="off">
                                <button type="submit" class="icon wooc-btn-search">
                                <i class="flaticon-magnifying-glass"></i>
                                </button>
                            </li>
                            <li class="wishlist">
                                <a href="/wishlist">
                                    <i class="flaticon-heart"></i>
                                </a>
                            </li>
                            <li class="shopping-cart">
                                <a href="#" class="cart-dropdown-btn">
                                    <span class="cart-count">3</span>
                                    <i class="flaticon-shopping-cart"></i>
                                </a>
                            </li>
                            <li class="my-account">
                                <a href="javascript:void(0)">
                                    <i class="flaticon-person"></i>
                                </a>
                                <div class="my-account-dropdown">
                                    <span class="title">QUICKLINKS</span>
                                    <ul>
                                        <li>
                                            <a href="/account">My Account</a>
                                        </li>
                                    </ul>
                                    <div class="login-btn">
                                        <a href="/login" class="axil-btn btn-bg-primary">Login</a>
                                    </div>
                                    <div class="reg-footer text-center">No account yet? <a href="/sign-up" class="btn-link">REGISTER HERE.</a></div>
                                </div>
                            </li>
                            <li class="axil-mobile-toggle">
                                <button class="menu-btn mobile-nav-toggler">
                                    <i class="flaticon-menu-2"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Mainmenu Area -->
    </header>
</template>