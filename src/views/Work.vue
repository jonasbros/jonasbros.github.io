<template>
    <div class="view__container work__container">
        <img class="page__title work__title" src="./../assets/WORK.svg" alt="Work">

        <div class="work__item-container" v-for="(work, i) in works" :key="i">
            <div class="work__picture" :style="{backgroundImage: `url(${work.picture})`}"></div>

            <div class="work__info weight-is-semibold">
                <p class="work__title">{{ work.title }}</p>
                <p class="work__role color-is-red">{{ work.role }}</p>
            </div>

            <div class="work__copy">{{ work.copy }}</div>

            <div class="work__tech">
                <p class="weight-is-semibold">Technologies used:</p>
                <ul>
                    <li v-for="(tech, n) in work.tech" :key="n">{{ tech }}</li>
                </ul>
            </div>
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
    methods: {
        getWorkPicture(img) {
            let picture = require(`./../assets/work/${img}`);
            return picture;
        }
    },
    data() {
        return {
            works: [
            {
                picture: this.getWorkPicture('work-sample.jpg'),
                title: "The Behavior of Sanctioned Environment",
                role: "Developer",
                copy: "That being said, criteria of the edge of the constructive criticism seems to potentially change the paradigm of the questionable thesis. A solution might be in a combination of effective time management and content strategy The Network of Recent Communication (Karl Willett in The Book of the Primary Element)",
                tech: [
                    'VUE3',
                    'FIREBASE',
                ]
            },
            {
                picture: this.getWorkPicture('work-sample.jpg'),
                title: "Network of Recent Communication",
                role: "Designer",
                copy: "In any case, any further consideration has a long history of The Perception of Revolutionary Hierarchy (Alonzo Fox in The Book of the Task Analysis)",
                tech: [
                    'LUNACY',
                    'ADOBE ILLUSTRATOR',
                ]
            },
            {
                picture: this.getWorkPicture('work-sample.jpg'),
                title: "Network of Recent Communication",
                role: "Designer",
                copy: "In any case, any further consideration has a long history of The Perception of Revolutionary Hierarchy (Alonzo Fox in The Book of the Task Analysis)",
                tech: [
                    'LUNACY',
                    'ADOBE ILLUSTRATOR',
                ]
            },
            {
                picture: this.getWorkPicture('work-sample.jpg'),
                title: "Network of Recent Communication",
                role: "Designer",
                copy: "In any case, any further consideration has a long history of The Perception of Revolutionary Hierarchy (Alonzo Fox in The Book of the Task Analysis)",
                tech: [
                    'LUNACY',
                    'ADOBE ILLUSTRATOR',
                ]
            },
            {
                picture: this.getWorkPicture('work-sample.jpg'),
                title: "Network of Recent Communication",
                role: "Designer",
                copy: "In any case, any further consideration has a long history of The Perception of Revolutionary Hierarchy (Alonzo Fox in The Book of the Task Analysis)",
                tech: [
                    'LUNACY',
                    'ADOBE ILLUSTRATOR',
                ]
            },
            ]
        }
    }
}
</script>

<style lang="scss">
    .view__container.work__container, .view__container.about__container {              
        padding-top: 222.5px;

        @media only screen and (min-width: 601px) {
            padding-top: 292.5px;
        }
        
        @media only screen and (min-width: 768px) {
            max-width: 960px;
            padding-top: 352.5px;
        }

        @media only screen and (min-width: 800px) {
            max-width: 1060px;
        }

        // @media only screen and (min-width: 1440px) {
        //     max-width: 1060px;
        // }
    
        @media only screen and (min-width: 1536px) {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            max-width: 1260px;
        }

        @media only screen and (min-width: 1920px) {
            max-width: 1360px;
        }

        @media only screen and (min-width: 2560px) {
            padding-top: 382.5px;
            max-width: 1920px;
        }

        @media only screen and (min-width: 3840px) {
            padding-top: 622.5px;
            max-width: 2560px;
        }
    }

    
    .page__title.work__title {
        @media only screen and (min-width: 3840px) {
            max-width: 1920px;
        }
    }

    .work__item-container {
        text-align: justify;
        font-size: 14px;
        margin-bottom: 25px;

        @media only screen and (min-width: 411px) {
            font-size: 16px;
        }

        @media only screen and (min-width: 1536px) {
            flex: 0 0 572.5px;
            width: 572.5px;
        }

        @media only screen and (min-width: 1920px) {
            flex: 0 0 622.5px;
            width: 622.5px;
            font-size: 18px;
        }

        @media only screen and (min-width: 2560px) {
            flex: 0 0 866.8px;
            width: 866.8px;
            font-size: 24px;
        }

        @media only screen and (min-width: 3840px) {
            flex: 0 0 1141.5px;
            font-size: 34px;
            margin-bottom: 45px;
        }


        &:last-of-type {
            margin-bottom: 41px;

            @media only screen and (min-width: 1920px) {
                margin-bottom: 61px;
            }
        }

        .work__picture {
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            background-color: lightgrey;
            filter: sepia(5%) grayscale(80%);
            width: 100%;
            height: 300px;
            margin-bottom: 10px;

            @media only screen and (min-width: 768px) {
                height: 340px;
            }

            @media only screen and (min-width: 3840px) {
                margin-bottom: 25px;
                height: 600px;
            }
        }

        .work__info {
            margin-bottom: 14px;

            .work__title, .work__role {
                display: inline-block;
                vertical-align: top;
            }

            .work__title {
                text-align: left;
                width: 70%;
            }

            .work__role {
                text-align: right;
                width: 30%;
            }
        }

        .work__copy {
            margin-bottom: 16px;
        }

        .work__tech {

            li {
                list-style: square inside;
            }
        }
        
    }


</style>