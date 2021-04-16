<template>
  <section class="view__container about__container">
    <NavBar />
    
    <img class="page__title about__title" src="./../assets/ABOUT.svg" alt="ABOUT">

    <div class="about__copy">
      <p v-html="about"></p>
      <br>
      
      <p class="weight-is-semibold">Experience:</p>
      <div class="about__exp" v-for="(xp, i) in exp" :key="i">
        <p class="exp__what">{{ xp.what }}</p>
        <p class="exp__when weight-is-medium color-is-red">{{ xp.when }}</p>
      </div>
      <br>

      <p class="weight-is-semibold">Skills:</p>
      <ul class="about__skills" v-for="(skill, i) in skills" :key="i">
        <li class="skill">{{ skill }}</li>
      </ul>
      <br>
      
      <!-- <p class="about__plug">I also do <a class="color-is-red weight-is-medium" href="#">voice over</a>!</p> -->
      <br>
    </div>

    <SiteFooter />
  </section>
</template>

<script>
import SiteFooter from './../components/SiteFooter.vue';
import NavBar from './../components/NavBar.vue';

export default {
    components: [
        SiteFooter,
        NavBar
    ],
    data() {
      return {
        about: 'I am a developer born and raised in the Philippines. My goal in life is to create the something that would make a difference and have a positive impact on the world. I love listening to music, playing video games, and playing guitar in my spare time. I\'ve reached <a href="https://www.dotabuff.com/players/108526230" target="_blank" class="weight-is-semibold hover-is-red color-is-black">Immortal</a> rank in Dota2 😎. ',
        exp: [
          {
            what: "IVR Developer at VCloud Interactive",
            when: "Dec 2018 - Present"
          },
          {
            what: "Audio Specialist at VCloud Interactive",
            when: "2019 - Present"
          },
          {
            what: "QA Specialist at VCloud Interactive",
            when: "August 2018 - Dec 2018"
          },
        ],
        skills: [
          "HTML/CSS/JS",
          "Vue JS",
          "PHP",
          "MySQL",
          "Adobe Photoshop/Illustrator",
          "Graphic Design",
        ]
      }
    }
}
</script>

<style lang="scss">
.view__container.about__container {
  display: flex;
  justify-content: space-between;
  flex-flow: column nowrap;

  // @media only screen and (min-width: 601px) {
  //   padding-top: 395.5px;
  // }

  // @media only screen and (min-width: 768px) {
  //   padding-top: 450.5px;
  // }

  @media only screen and (min-width: 1025px) {
      padding-top: 405.5px;
  }

  @media only screen and (min-width: 1536px) {
    max-width: 1160px;    
  }

  @media only screen and (min-width: 1920px) {
    padding-top: 460.5px;
    max-width: 1160px;
  }

  @media only screen and (min-width: 2560px) {
    padding-top: 485.5px;
    max-width: 1440px;
  }

  @media only screen and (min-width: 3840px) {
    padding-top: 725.5px;
    max-width: 2560px;
  }

  //max-width
  @media only screen and (max-width: 1024px) {
      padding-top: 375.5px;
  }

  @media only screen and (max-width: 601px) {
      padding-top: 325.5px;
  }

  @media only screen and (max-width: 425px) {
      padding-top: 255.5px;
  }

  @media only screen and (max-width: 375px) {
      padding-top: 235.5px;
  }
}

.page__title.about__title {
  width: 147%;
  transform: translateX(-49%);

  @media only screen and (min-width: 3840px) {
      max-width: 1920px;
  }
    
}

.about__copy {
  font-size: 12px;
  text-align: justify;

  @media only screen and (min-width: 411px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 601px) {
    font-size: 18px;
  }

  @media only screen and (min-width: 2560px) {
    font-size: 24px;
  }

  @media only screen and (min-width: 3840px) {
      font-size: 36px;
  }
}

.about__exp {
  text-align: left;

  &:not(:last-of-type) {
    margin-bottom: 6px;
  }
}

.about__skills {
  .skill {
    list-style: square inside;
  }
}

.about__plug {
  margin-bottom: 16px;
}

</style>