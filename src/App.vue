<template>
  <router-view v-slot="{Component}">
    <transition 
      name="ayaya"
      mode="out-in"
      :duration="{enter: pageTransitionDuration, leave: pageTransitionDuration}"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
      @before-leave="beforeLeave($event)">
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
    </transition>
  </router-view>
  
  <keep-alive>
    <PageTransition />
  </keep-alive>

  <Pointer />
</template>

<script>
import Pointer from './components/Pointer.vue';
import PageTransition from './components/PageTransition.vue';
import NavBar from './components/NavBar.vue';
import { gsap, TimelineLite } from 'gsap';

export default {
  components: [
    Pointer,
    PageTransition,
    NavBar
  ],
  data() {
    return {
      tl: null,
      sw: 375,
      pageTransitionDuration: 1000,
      pingTransitionScale: 250,
    }
  },
  created() {
    gsap.registerPlugin(TimelineLite);

    this.tl = new TimelineLite();
    
    this.sw = window.innerWidth;
    if( this.sw >= 1920 ) {
      this.pingTransitionScale = 600;
    }
  },
  methods: {
    beforeLeave(e) {
      let transition = document.querySelector('.page__transition');
      let x;   
      let y;

      e.addEventListener('click', (e) => {
        x = e.clientX;
        y = e.clientY;
        transition.setAttribute("style", `left: ${x - 7.5}px; top: ${y - 7.5}px;`);
      });

      let tl = new TimelineLite(); 

      tl.to(transition, 1, 
      {
        scale: this.pingTransitionScale,
        ease: "Power4.inOut",
      })
      .to(transition, 0.5, {
          opacity: 1,
          ease: "Power4.inOut",
      }, "-= 0")
      .to(transition, 1, {
        opacity: 0,
      })
      .to(transition, {
        scale: 1,
      });
    },
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

html, body {
    overflow-x: hidden;
}

a {
  cursor: pointer;
  user-select: none;
  outline: none;
  background-color: transparent;
}

body {
  background-image: url(./assets/LogoPattern4000x4000.svg);
  background-color: rgba(255, 255, 255, 0.95);
  background-size: 525%;
}

::selection {
  color: #fff;
  background: rgba(0,0,0,0.6);
}

#app {
  // position: relative;
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.view__container {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  padding: 37.5px 37.5px 10px;
  overflow-x: hidden;

  @media only screen and (min-width: 2560px) {
    padding: 67.5px 67.5px 35px;
  }

  @media only screen and (min-width: 3840px) {
    padding: 107.5px 107.5px 75px;
  }

}

.page__title {
    position: absolute;
    top: 158px;
    left: 50%;
    width: 123%;
    max-width: 1060px;
    transform: translateX(-49.6%);
}

.btn {
  height: 35px;
  width: 90px;
  margin: 8px 0 10px 0;
  background-color: black;
  border-radius: 0;
  border: none;
  outline: none;
  color: #FFF;
  font-family: 'Poppins', Arial, sans-serif;
  transition: background 150ms linear;

  &:hover {
    background-color: #b20000;
  }
}


.weight-is-bold {
  font-weight: 700;
}

.weight-is-semibold {
  font-weight: 600;
}

.weight-is-medium {
  font-weight: 500;
}

.color-is-black {
  color: #000;
  fill: #000;
  border-color: #000;
}

.color-is-red, .router-link-active{
  color: #b20000;
  fill: #b20000;
  border-color: #b20000;
}

.bg-is-red {
  background-color: #b20000 !important;
}

.hover-is-red {
  transition: all 150ms linear;

  &:hover {
    color: #b20000 !important;
    fill: #b20000;
    border-color: #b20000;
  }

  &.is-svg {
    &:hover {
      background-color: #b20000;
    }
  }
}

.hover-is-black {
  transition: all 150ms linear;

  &:hover {
    color: #000 !important;
    fill: #000;
    border-color: #000;
  }

  &.is-svg {
    &:hover {
      background-color: #000;
    }
  }
}

</style>
