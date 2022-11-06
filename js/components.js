class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header class="header">
            <div class="header__top">
                <div class="header__top-item">
                    <i class="fa-solid fa-phone"></i>
                    <a href="tel:+977-1-2-3-466373">+977-1-2-3-466373</a>
                </div>
                <div class="header__top-item">
                    <i class="fa-regular fa-envelope"></i>
                    <a href="mailto:meatshop@gmail.com">meatshop@gmail.com</a>
                </div>
            </div>
            <!-- / header top -->

            <div class="header__bottom">
                <div class="large">
                    <a class="brand-name noselect" href="/"> Meat Shop </a>

                    <nav class="navbar navbar-large">
                        <ul class="navbar-nav navbar_links">
                            <li class="nav-item">
                                <a class="nav-link" href="/"> Home </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/about-us.html">About Us</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/product.html">Product</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/blog.html">Blog</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/contact.html">Contact Us</a>
                            </li>
                        </ul>
                    </nav>
                    <!-- / navbar large -->
                </div>

                <nav class="navbar navbar-small">
                    <ul class="navbar-nav navbar_links">
                        <li class="nav-item">
                            <a class="nav-link" href="/"> Home </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="/about-us.html">About Us</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="/product.html">Product</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="/blog.html">Blog</a>
                        </li>

                        <li class="nav-item">
                             <a class="nav-link" href="/contact.html">Contact</a>
                        </li>
                    </ul>
                </nav>
                <!-- / navbar small -->

                <div class="toggle-btn">
                    <div class="bar"></div>
                </div>
                <!-- / toggle btn -->
            </div>
        </header>
    `;
  }
}

customElements.define('app-header', Header);
