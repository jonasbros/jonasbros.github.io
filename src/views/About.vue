<template>
  <div class="view__container about__container">
    <img class="page__title about__title" src="./../assets/ABOUT.svg" alt="ABOUT">

    <div class="about__copy">
      <p>That being said, criteria of the edge of the constructive criticism seems to potentially change the paradigm of the questionable thesis. A solution might be in a combination of effective time management and content strategy The Network of Recent Communication.</p>
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
      
      <p class="about__plug">I also do <a class="color-is-red weight-is-medium" href="#">voice over</a>!</p>
      <br>
    </div>

    <SiteFooter />
  </div>
</template>

<script>
import SiteFooter from './../components/SiteFooter.vue';

export default {
    components: [
        SiteFooter,
    ],
    data() {
      return {
        exp: [
          {
            what: "IVR Developer at 3JK Scribes Experts Corp.",
            when: "2019-Present"
          },
          {
            what: "Audio Specialist at 3JK Scribes Experts Corp.",
            when: "2019-Present"
          },
          {
            what: "QA Specialist at 3JK Scribes Experts Corp.",
            when: "2018-2019"
          },
        ],
        skills: [
          "HTML/CSS/JS",
          "Vue JS",
          "ReactJS",
          "Adobe Photoshop/Illustrator",
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

  @media only screen and (min-width: 601px) {
    padding-top: 292.5px;
  }

  @media only screen and (min-width: 768px) {
    padding-top: 347.5px;
  }

  @media only screen and (min-width: 1920px) {
    padding-top: 357.5px;
    max-width: 1160px;
  }

  @media only screen and (min-width: 2560px) {
    padding-top: 382.5px;
    max-width: 1440px;
  }

  @media only screen and (min-width: 3840px) {
    padding-top: 622.5px;
    max-width: 2560px;
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