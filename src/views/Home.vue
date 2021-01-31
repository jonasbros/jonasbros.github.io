<template>
  <section class="view__container">
    <!-- <NavBar /> -->
    
    <img class="home__logo" src="./../assets/PingStudiosLogoBlack.svg" alt="Ping! Studios">
    
    <div class="home__copy">
      <p class="weight-is-semibold">
        Hi, my name is <span class="color-is-red">Jonas</span> and I'm a <span class="color-is-red">web developer</span>
      </p>
    </div>

    <ul class="home__nav weight-is-bold">
      <li>
        <router-link to="work" class="color-is-black hover-is-red">Work</router-link>
      </li>
      <li>
        <router-link to="about" class="color-is-black hover-is-red">About</router-link>
      </li>
      <li>
        <router-link to="contact" class="color-is-black hover-is-red">Contact</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.page__transition, .pointer, .donut {
  position: fixed !important;
}

.home__container {
  max-height: 100vh;
  overflow: hidden;
}
.home__logo {
  width: 41.3%;
  margin-bottom: 35%;

  @media only screen and (min-width: 1280px) {
    width: 20%;
    margin-bottom: 15%;
  }
}

.home__copy {
  font-size: 22px;
  width: 78%;
  margin-bottom: 15%;

  @media only screen and (min-width: 411px) {
    font-size: 24px;
    width: 75%;
  }

  @media only screen and (min-width: 601px) {
    font-size: 36px;
    width: 72%;
  }

  @media only screen and (min-width: 768px) {
    font-size: 46px;
    width: 70%;
    margin-bottom: 12%;

  }

  @media only screen and (min-width: 1280px) {
    font-size: 64px;
    width: 55%;
    margin-bottom: 11%;
  }

  @media only screen and (min-width: 1366px) {
    width: 52%;
  }

  @media only screen and (min-width: 1440px) {
    width: 50%;
  }

  @media only screen and (min-width: 1536px) {
    width: 50%;
    font-size: 68px;
  }

  @media only screen and (min-width: 1600px) {
    width: 46%;
  }

  @media only screen and (min-width: 1920px) {
    width: 44%;
    font-size: 76px;
  }

  @media only screen and (min-width: 2560px) {
    width: 44%;
    font-size: 108px;
  }

  @media only screen and (min-width: 3840px) {
    width: 40%;
    font-size: 140px;
  }
}

.home__nav {
  font-size: 24px;

  @media only screen and (min-width: 601px) {
    font-size: 38px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 48px;
  }
  
  @media only screen and (min-width: 1280px) {
    font-size: 66px;
  }

  @media only screen and (min-width: 1536px) {
    font-size: 70px;
  }

  @media only screen and (min-width: 1920px) {
    font-size: 78px;
  }

  @media only screen and (min-width: 2560px) {
    font-size: 110px;
  }

  @media only screen and (min-width: 3840px) {
    font-size: 142px;
  }
  li {
    margin-bottom: 16px;
  }
}

</style>