<template>
    <section class="view__container work__container">
        <NavBar />

        <img class="page__title work__title" src="./../assets/WORK.svg" alt="Work">

        <div class="work__item-container" v-for="(work, i) in works" :key="i">
            <div class="work__picture" :style="{backgroundImage: `url(${work.picture})`}">
                <a class="visit__site" :href="work.link" target="_blank"></a>
            </div>

            <div class="work__info weight-is-semibold">
                <a :href="work.link" class="work__title hover-is-red">{{ work.title }}</a>
                <p class="work__role color-is-red">{{ work.role }}</p>
            </div>

            <div class="work__copy" v-html="work.copy"></div>

            <div class="work__tech">
                <p class="weight-is-semibold">Technologies used:</p>
                <ul>
                    <li v-for="(tech, n) in work.tech" :key="n">{{ tech }}</li>
                </ul>
            </div>
        </div>
        
        <div class="work__github">
            Check out my <a class="color-is-red weight-is-semibold" href="https://github.com/jonasbros" target="_blank">Github</a> for more!
        </div>

        <SiteFooter />
    </section>
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
                picture: this.getWorkPicture('bolg2-1.png'),
                title: "Bolg",
                role: "Developer",
                copy: "A very simple blog website with comments and likes :). (SEO/SSR mode coming soon™)",
                link: "https://jonasbros.github.io/bolg2/",
                tech: [
                    'VUE.JS (QUASAR FRAMEWORK)',
                    'FIREBASE FIRESTORE + AUTH',
                ]
            },
            {
                picture: this.getWorkPicture('covid-chart-2.png'),
                title: "Covid19 Stats Chart Tracker",
                role: "Developer",
                copy: "A stats tracker that can show both global and an individual nation's statistics using <a href='https://covid19api.com' class='color-is-red weight-is-semibold hover-is-black'>Covid19 API</a> as source the of data.",
                link: "https://jonasbros.github.io/Covid19Stats/",
                tech: [
                    'VUE3',
                    'CHARTJS',
                    'COVID19 API'
                ]
            },
            {
                picture: this.getWorkPicture('ip-address-tracker.png'),
                title: "IP Address Tracker",
                role: "Developer",
                copy: "An app that tracks the location of an inputted IP Address or Web Address. The design and project brief was from <a href='https://www.frontendmentor.io/' class='color-is-red weight-is-semibold hover-is-black'>Frontend Mentor</a>.",
                link: "https://jonasbros.github.io/ip-address-tracker/",
                tech: [
                    'HTML, JS, BULMA',
                    'Leaflet JS',
                    'IPfy'
                ]
            },
            {
                picture: this.getWorkPicture('rps-1.png'),
                title: "Rock Paper Scissors Game",
                role: "Developer",
                copy: "A simple Rock, Paper, Scissors game that let's you play against the computer(not really :>). The design and project brief was also from <a href='https://www.frontendmentor.io/' class='color-is-red weight-is-semibold hover-is-black'>Frontend Mentor</a>.",
                link: "https://jonasbros.github.io/RockPaperScissorsGame",
                tech: [
                    'VUE3',
                ]
            },
            {
                picture: this.getWorkPicture('dbxmp-1.png'),
                title: "Dropbox Music Player (DBXMP)",
                role: "Developer",
                copy: "A music player that uses Dropbox API to fetch only audio files from the logged in user's Dropbox and compile them into a single playlist.",
                link: "https://jonasbros.github.io/dbxmp/",
                tech: [
                    'VUE2',
                    'Dropbox API',
                    'BULMA'
                ]
            },
            {
                picture: this.getWorkPicture('gdmp-1.png'),
                title: "Google Drive Music Player (GDMP)",
                role: "Developer",
                copy: "An upgraded version of DBXMP. I made this because I ran out of space on my Dropbox.",
                link: "https://jonasbros.github.io/gdmp/",
                tech: [
                    'React JS',
                    'Google/GDrive API',
                    'BULMA',
                ]
            },
            // {
            //     picture: this.getWorkPicture('card-component-1.png'),
            //     title: "Simple Card Component",
            //     role: "Developer",
            //     copy: "Just a simple card component I made to keep my CSS sharp a little bit. Design and project brief from <a href='https://www.frontendmentor.io/' class='color-is-red weight-is-semibold hover-is-black'>Frontend Mentor</a>.",
            //     link: "https://jonasbros.github.io/CardComponent/",
            //     tech: [
            //         'HTML',
            //         'CSS',
            //     ]
            // },
            // {
            //     picture: this.getWorkPicture('faq-accordion-1.png'),
            //     title: "FAQ Accordion",
            //     role: "Developer",
            //     copy: "I also made this one to practice my CSS little bit. Design and project brief from <a href='https://www.frontendmentor.io/' class='color-is-red weight-is-semibold hover-is-black'>Frontend Mentor</a>.",
            //     link: "https://jonasbros.github.io/faq-accordion/",
            //     tech: [
            //         'HTML',
            //         'CSS',
            //     ]
            // },
            // {
            //     picture: this.getWorkPicture('testimonies-grid-1.png'),
            //     title: "FAQ Accordion",
            //     role: "Developer",
            //     copy: "Also for CSS practice. Design and project brief from <a href='https://www.frontendmentor.io/' class='color-is-red weight-is-semibold hover-is-black'>Frontend Mentor</a>.",
            //     link: "https://jonasbros.github.io/testimonies-grid/",
            //     tech: [
            //         'HTML',
            //         'CSS',
            //     ]
            // },
            ]
        }
    }
}
</script>

<style lang="scss">
    .view__container.work__container, .view__container.about__container {              
        padding-top: 325.5px;

        // @media only screen and (min-width: 601px) {
        //     padding-top: 292.5px;
        // }
        
        @media only screen and (min-width: 768px) {
            max-width: 960px;
            // padding-top: 455.5px;
        }

        @media only screen and (min-width: 800px) {
            max-width: 1060px;
        }

        @media only screen and (min-width: 1024px) {
            padding-top: 455.5px;
        }
    
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
            padding-top: 485.5px;
            max-width: 1920px;
        }

        @media only screen and (min-width: 3840px) {
            padding-top: 675px;
            max-width: 2560px;
        }

        //max-width
        @media only screen and (max-width: 1024px) {
            padding-top: 405.5px;
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

        .work__github {
            width: 100%;
            margin: 25px 0 25px;

            @media only screen and (min-width: 411px) {
                font-size: 16px;
            }

            @media only screen and (min-width: 1920px) {
                font-size: 18px;
            }

            @media only screen and (min-width: 2560px) {
                font-size: 24px;
            }

            @media only screen and (min-width: 3840px) {
                font-size: 34px;
            }
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
            position: relative;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: top center;
            background-color: lightgrey;
            filter: sepia(5%) grayscale(80%);
            width: 100%;
            height: 300px;
            margin-bottom: 10px;
            transition: filter 150ms linear;

            &:hover {
                filter: none;
            }

            .visit__site {
                position: absolute;
                top: 0;
                left: 0%;
                right: 0;
                bottom: 0;
                color: #FFF;
            }

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
                color: #000;
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