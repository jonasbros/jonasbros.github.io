<template>
    <header>
        <nav>
            <ul class="weight-is-semibold">

                <router-link 
                :to="{ name: 'Home' }" 
                :class="( $route.name == 'Home' ? 'link-is-disabled' : '' )" 
                class="color-is-black hover-is-red">
                    <img class="nav__logo" src="./../assets/PingStudiosLogoBlack.svg" alt="Ping! Studios">
                </router-link>

                <div>
                    <li>
                        <router-link :to="{ name: 'Home' }" :class="( $route.name == 'Home' ? 'link-is-disabled' : '' )" class="color-is-black hover-is-red">Home</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Work' }" :class="( $route.name == 'Work' ? 'link-is-disabled' : '' )" class="color-is-black hover-is-red">Work</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'About' }" :class="( $route.name == 'About' ? 'link-is-disabled' : '' )" class="color-is-black hover-is-red">About</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Contact' }" :class="( $route.name == 'Contact' ? 'link-is-disabled' : '' )" class="color-is-black hover-is-red">Contact</router-link>
                    </li>
                </div>
            </ul>
        </nav>

        <img src="./../assets/hamburger-1.svg" alt="Hamburger!" class="hamburger nav__icon">
        <img src="./../assets/close-1.svg" alt="Close!" class="close nav__icon active">
    </header>
</template>

<script>
export default {
    mounted() {
        let nav = document.querySelector('nav');
        let hamburger_menu = document.querySelector('.hamburger');
        let close = document.querySelector('.close');

        hamburger_menu.onclick = () => {
            if( !hamburger_menu.classList.contains('active') ) {
                hamburger_menu.classList.add('active');
                close.classList.remove('active');
                nav.classList.add('mobile__active');
            }
        }

        close.onclick = () => {
            if( hamburger_menu.classList.contains('active') ){
                nav.classList.add('fadeout');
                close.classList.add('active');
                hamburger_menu.classList.remove('active');
                setTimeout(() => {
                    nav.classList.remove('mobile__active');
                    nav.classList.remove('fadeout');
                }, 175);
            }
        }

    }
}
</script>

<style lang="scss">
    header {
        position: fixed;
        padding: 26px 0 18px;
        background: #FFF;
        border-bottom: 3px solid #000;
        margin: 0;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;

        @media only screen and (max-width: 1024px) {
            border-bottom: none;
            background: transparent;
        }
        
        @media only screen and (min-width: 3840px) {
            padding: 50px 0;
        }

        nav {
            margin: 0 auto;
            padding: 0 37.5px;
            transition: opacity 150ms linear;

            @media only screen and (max-width: 1024px) {
                opacity: 0;
                pointer-events: none;
            }

            //min-width
            @media only screen and (min-width: 768px) {
                max-width: 960px;
            }

            @media only screen and (min-width: 800px) {
                max-width: 1060px;
            }

            @media only screen and (min-width: 1536px) {
                max-width: 1260px;
            }

            @media only screen and (min-width: 1920px) {
                max-width: 1360px;
            }

            @media only screen and (min-width: 2560px) {
                max-width: 1920px;
            }

            @media only screen and (min-width: 3840px) {
                max-width: 2560px;
            }

            ul {
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;

                .nav__logo {
                    height: 48px;
                }

                li {
                    display: inline-block;
                    margin-left: 16px;
                    vertical-align: middle;
                    transform: translateY(25%);
                    
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
                        margin-left: 32px;
                    }
                }              
            }

            //mobile nav styles 
            &.mobile__active {
                opacity: 1;
                pointer-events: initial;
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background-color: #FFF;
                background-image: url(./../assets/LogoPattern4000x4000.svg);
                background-size: 525%;

                &.fadeout {
                    opacity: 0;
                    pointer-events: none;  
                }

                ul {
                    flex-flow: column nowrap;
                    align-items: center;
                    justify-content: flex-start;
                    height: 100%;
                    width: 100%;
                    text-align: center;
                    padding-top: 100px;

                    @media only screen and (max-width: 1024px) {
                        padding-top: 0;
                        justify-content: center;
                    }
                    
                    .nav__logo {
                        display: none;
                    }

                    li {
                        display: block;
                        margin-left: 0;
                        margin-bottom: 20px;
                        transform: translate(0);
                        font-weight: bold;

                        @media only screen and (max-width: 1024px) {
                            font-size: 78px;
                            margin-bottom: 15px;

                        }

                    }
                }
            }
        } //nav


        .nav__icon {
            position: absolute;
            top: 37.5px;
            right: 37.5px;
            height: 36px;
            opacity: 1;
            transition: opacity 150ms linear;
            pointer-events: initial;

            &.active {
                opacity: 0;
                pointer-events: none;
            }
        }   

        .hamburger {            
            @media only screen and (min-width: 1025px) {
                opacity: 0;
                pointer-events: none;
            }
        }
   } //header
</style>