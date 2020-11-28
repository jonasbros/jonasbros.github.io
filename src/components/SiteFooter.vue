<template>
    <footer>
          <ul class="footer__nav weight-is-semibold">
            <li>
                <router-link to="/" class="color-is-black hover-is-red">Home</router-link>
            </li>
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

        <p class="footer__copy">PING! Studios &copy; 2020</p>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    footer {
        // position: absolute;
        // bottom: 7px;
        width: 100%;
        height: auto;
        min-height: 50px;

        // @media only screen and (min-width: 2560px) {
        //     bottom: 35px;
        // }

        // @media only screen and (min-width: 3840px) {
        //     bottom: 75px;
        // }
        .footer__nav {

            li {
                display: inline-block;
                font-size: 14px;

                &:not(:last-of-type)::after {
                    display: inline-block;
                    content: "|";
                    margin: 0 3px;
                }
            }
        }

        .footer__copy {
            font-size: 14px;
        }

        .footer__nav li, .footer__copy {
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
    }

    .contact__container .footer__nav li, .contact__container .footer__copy { 
        @media only screen and (min-width: 768px) {
            font-size: 22px;
        }

        @media only screen and (min-width: 2560px) {
            font-size: 24px;
        }

        
        @media only screen and (min-width: 3840px) {
            font-size: 32px;
        }
    }

    
</style>