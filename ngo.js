
 // JavaScript functionality
        document.addEventListener('DOMContentLoaded', function () {
            // Smooth scrolling function
            window.scrollToSection = function (sectionId) {
                document.getElementById(sectionId).scrollIntoView({
                    behavior: 'smooth'
                });
            };

            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                    // Close mobile menu if open
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        bootstrap.Collapse.getInstance(navbarCollapse).hide();
                    }
                });
            });

            // Fade in animation on scroll
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function (entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.fade-in').forEach(el => {
                observer.observe(el);
            });

            // Active navigation highlighting
            window.addEventListener('scroll', function () {
                const sections = document.querySelectorAll('section[id]');
                const navLinks = document.querySelectorAll('.nav-link');

                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    if (scrollY >= (sectionTop - 200)) {
                        current = section.getAttribute('id');
                    }
                });

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + current) {
                        link.classList.add('active');
                    }
                });
            });

            // Donation amount selection
            document.querySelectorAll('.donation-amount-btn').forEach(button => {
                button.addEventListener('click', function () {
                    // Remove active class from all buttons
                    document.querySelectorAll('.donation-amount-btn').forEach(btn => {
                        btn.classList.remove('active');
                    });
                    // Add active class to clicked button
                    this.classList.add('active');

                    // Set the custom amount input
                    const customInput = document.getElementById('customAmount');
                    customInput.value = this.dataset.amount;
                });
            });

            // Form submissions (demo functionality)
            document.querySelectorAll('form').forEach(form => {
                form.addEventListener('submit', function (e) {
                    e.preventDefault();
                    alert('This is a demo form. In a real implementation, this would submit your information to the foundation.');
                });
            });
        });
    // <script>(function () { function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'9720bd94c3055999',t:'MTc1NTY4MDg0OC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { var a = document.createElement('iframe'); a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a); if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })();</script>