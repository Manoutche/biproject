<template>
  <NavBar/>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
  <FooterComp/>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
  name: 'NavView',
  components: {
    NavBar,
    FooterComp
  },
  

  created(){
    this.$store.dispatch('getProduct')
    this.$store.dispatch('getCategorie')
  },
  setup() {   
    const jquery = document.createElement("script");
    jquery.setAttribute(
      "src",
      "/assets/js/vendor/jquery.js", 
    );
    jquery.async = true;
    document.body.appendChild(jquery);
     
    const modernizr = document.createElement("script");
    modernizr.setAttribute(
      "src",
      "/assets/js/vendor/modernizr.min.js",
    );
    modernizr.async = true;
    document.body.appendChild(modernizr);

    

    const popper = document.createElement("script");
    popper.setAttribute(
      "src",
      "/assets/js/vendor/popper.min.js",
    );
    popper.async = true;
    document.body.appendChild(popper);

    const bootstrap = document.createElement("script");
    bootstrap.setAttribute(
      "src",
      "/assets/js/vendor/bootstrap.min.js",
    );
    bootstrap.async = true;
    document.body.appendChild(bootstrap);

    const slick = document.createElement("script");
    slick.setAttribute(
      "src",
      "/assets/js/vendor/slick.min.js",
    );
    slick.async = true;
    document.body.appendChild(slick);

    const cookie = document.createElement("script");
    cookie.setAttribute(
      "src",
      "/assets/js/vendor/js.cookie.js",
    );
    cookie.async = true;
    document.body.appendChild(cookie);

    const jquery_ui = document.createElement("script");
    jquery_ui.setAttribute(
      "src",
      "/assets/js/vendor/jquery-ui.min.js",
    );
    jquery_ui.async = true;
    document.body.appendChild(jquery_ui);

    const countdown = document.createElement("script");
    countdown.setAttribute(
      "src",
      "/assets/js/vendor/jquery.countdown.min.js",
    );
    countdown.async = true;
    document.body.appendChild(countdown);

    const sal = document.createElement("script");
    sal.setAttribute(
      "src",
      "/assets/js/vendor/sal.js",
    );
    sal.async = true;
    document.body.appendChild(sal);

    const magnific = document.createElement("script");
    magnific.setAttribute(
      "src",
      "/assets/js/vendor/jquery.magnific-popup.min.js",
    );
    magnific.async = true;
    document.body.appendChild(magnific);
    
    const image_load = document.createElement("script");
    image_load.setAttribute(
      "src",
      "/assets/js/vendor/imagesloaded.pkgd.min.js",
    );
    image_load.async = true;
    document.body.appendChild(image_load);

    const pkgd = document.createElement("script");
    pkgd.setAttribute(
      "src",
      "/assets/js/vendor/isotope.pkgd.min.js",
    );
    pkgd.async = true;
    document.body.appendChild(pkgd);
       
    const isotop = document.createElement("script");
    isotop.setAttribute(
      "src",
      "/assets/js/vendor/isotope.pkgd.min.js",
    );
    isotop.async = true;
    document.body.appendChild(isotop);
    
    const counterup = document.createElement("script");
    counterup.setAttribute(
      "src",
      "/assets/js/vendor/counterup.js",
    );
    counterup.async = true;
    document.body.appendChild(counterup);
    
    const waypoints = document.createElement("script");
    waypoints.setAttribute(
      "src",
      "/assets/js/vendor/waypoints.min.js",
    );
    waypoints.async = true;
    document.body.appendChild(waypoints);
    
    const mainjs = document.createElement("script");
    mainjs.setAttribute(
      "src",
      "/assets/js/main.js",
    );
    mainjs.async = true;
    document.body.appendChild(mainjs);
  }
}   
</script>

