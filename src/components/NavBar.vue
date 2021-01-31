<template>
    <header>
        <nav>
            <ul class="header__nav weight-is-semibold">

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
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    header {
        position: fixed;
        padding: 26px 0 18px;
        margin: 0;
        top: 0;
        left: 0;
        right: 0;
        background: #FFF;
        z-index: 1;
        border-bottom: 3px solid #000;

        @media only screen and (min-width: 3840px) {
            padding: 50px 0;
        }

        nav {
            margin: 0 auto;
            padding: 0 37.5px;


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
        }
   }
</style>