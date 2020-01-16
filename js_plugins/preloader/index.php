<!DOCTYPE html>
<html>
    <head>
        <title>Web Design</title>
        <!-- animation css -->
        <link rel="stylesheet" type="text/css" href="css/animate.css" />
        <!-- stylesheet css -->
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        <!-- favicon -->
        <link rel="icon" sizes="16x16" href="images/logo.png" />
    </head>
    <body data-spy="scroll" data-target=".navigation" data-offset="40">
        <!-- PRELOADER SECTION BEGINS -->
        <section id="ud_preloader">
            <div id="ud_dots">
                <img style="margin-bottom: 30px;" src="images/logo.png" />
                <p>Loading</p>
                <div class="ud_dot" style="animation-name: ud_preloader_1;"></div>
                <div class="ud_dot" style="animation-name: ud_preloader_2;"></div>
                <div class="ud_dot" style="animation-name: ud_preloader_3;"></div>
                <div class="ud_dot" style="animation-name: ud_preloader_4;"></div>
            </div>
            <div id="ud_bg_left" class="ud_pre_half"></div>
            <div id="ud_bg_right" class="ud_pre_half"></div>
        </section><!-- ends preloader section -->
        <!-- HAMBURGER BUTTON BEGINS -->
        <button class="the_button" type="button">
            <div class="button_wrap">
                <span class="button_line"></span>
                <span class="button_line"></span>
                <span class="button_line"></span>
            </div>
        </button><!-- ends hamburger button -->
        <!-- BIG WRAPPER BEGINS -->
        <div class="big_wrapper">
           <!--header class="the_header animated slideInDown">
                <div class="content_box">
                    <div class="logo">
                        <h1>
                            <a href="#"><img src="images/logo.png" /></a>
                        </h1>
                    </div>    
                    <nav class="navigation">
                        <ul>
                            <li class="active"><a class="scroll" href="#welcome">Welcome</a></li>
                            <li><a class="scroll" href="#">About Us</a></li>
                            <li><a class="scroll" href="#offer">Offer</a></li>
                            <li><a class="scroll" href="#">Services</a></li>
                            <li><a class="scroll" href="#studio">Studio</a></li>
                            <li><a class="scroll" href="#">Blog</a></li>
                            <li><a class="scroll" href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header-->
            <main>
            <section>
                <div class="banner">
                    <div class="arrow">&darr;</div>
                </div>                
            </section>
            <section id="welcome">
                <div class="section_text">
                    <div class="content_box animated slideInLeft">
                        <h2>Welcome to TechnoCrews</h2>
                        <p>TechnoCrews is a leading edge Chittagong based IT business which 
provides cost effective solutions for individuals, small businesses to large corporations. TechnoCrews is committed to provide the best customer service possible by consulting in a language suitable not only for IT experts but also for non-IT clients. TechnoCrews aims to develop itself continuously by keeping up with current IT trends and newer technologies. As a young and dynamic business, we have offered innovative e- business solutions to international clients located in Asia, Europe, Australia and the U.S.A. Our clients have come from the service & retail, non-profit and educational sectors. Our business prides itself on providing services that actually make an Internet project a success.</p>
                        <a class="button" href="#">About Us</a>               
                    </div>
                </div>
            </section>
            <section id="studio" class="">
                <div class="studio">
                    <div class="box">
                        <div class="col col_2">1</div>
                        <div class="col col_2">
                            <h3>A print & digital creative studio.</h3>
                    <p>Massive Dynamic has over 10 years of experience in Design, Technology and Marketing. We take prVideo in delivering Intelligent Designs and Engaging Experiences for clients all over the World.</p>                  
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div id="contact" class="contact">
                    <div class="animated slideInUp">
                        <!-- Please check -->
                        <h2>Log in</h2>
                        <form action="index.php" method="">
                            <label for="username">Username</label>
                            <input id="username" type="text" name="username" placeholder="Enter username"/>
                            <label for="password">Password</label>
                            <input id="password" type="password" name="password" placeholder="Enter password"/>
                            <input type="submit" value="Login"/>
                            <p>Forgot password</p>
                        </form>                        
                    </div>
                </div>
            </section>
            <section class="check" id="offer">
                <div class="content_box">
                    <div class="animated slideInRight">
                        <h2>We offer highly professional services</h2>
                        <p>What distinguishes our company from thousands of others is totally peofessional services. You can find out more about our services offered from the links below or read our customer’s reference.</p>
                    </div>
                </div>
            </section>
            </main>
            <!-- SIDEBAR SECTION BEGINS -->
            <section class="">
                <h2>sidebar</h2>
            </section><!-- ends sidebar section -->
            <footer class="the_footer">
                <div class="footer_top">
                    <div class="content_box">
                        <div class="box">
                            <div class="col col_4">
                                <div class="widget">
                                    <h4 class="widget_title">Latest Posts</h4>
                                    <p>Massive Dynamic is created by a team of 12 experienced professional develop and designers. The team has focused on user experience and ease of use in every aspect of this project.professional develop and designers</p>               
                                </div>
                            </div>
                            <div class="col col_4">
                                <div class="widget">
                                    <h4 class="widget_title">Contact Us</h4>
                                    <div class="widget_body">
                                        <ul>
                                            <li><a href="#">Improvement in Love</a></li>
                                            <li><a href="#">Do Not Mess With My Style</a></li>
                                            <li><a href="#">Dancing in Crazy Style</a></li>
                                            <li><a href="#">Push Up Fun</a></li>
                                            <li><a href="#">Office Decoration</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col col_4">
                                <div class="widget">
                                    <h4 class="widget_title">Portfolio</h4>
                                    <div class="widget_body">
                                        <p>Massive Dynamic is created by a team of 12 experienced professional develop and designers. The team has focused on user experience and ease of use in every aspect of this project.professional develop and designers</p>                    </div>
                                </div>
                            </div>
                            <div class="col col_4">
                                <div class="widget">
                                    <h4 class="widget_title">Portfolio</h4>
                                    <div class="widget_body">
                                        <p>Massive Dynamic is created by a team of 12 experienced professional develop and designers. The team has focused on user experience and ease of use in every aspect of this project.professional develop and designers</p>                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright">
                    <p>Copyright: Made with Md. Abul Kalam <a href="#">Azad</a></p>
                </div>
            </footer>
        </div><!-- ends big wrapper -->
        <!-- SCRIPTS BEGINS -->
        <script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
        <script type="text/javascript" src="js/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/action.js"></script>
    </body>    
</html>