<template>
    <teleport to="body">
        <div class="pointer"></div>  
    </teleport>
</template>

<script>
export default {
    mounted() {
        this.init();
    },
    methods: {
        init() {
            let pointer = document.querySelector('.pointer');
            let pointerHalfWidth = pointer.offsetWidth / 2;

            document.addEventListener('mousemove', (e) => {
                let x = e.clientX;   
                let y = e.clientY;
                pointer.setAttribute("style", `left: ${x - (pointerHalfWidth)}px; top: ${y - (pointerHalfWidth)}px;`);
            });

            document.addEventListener('mouseenter', () => {                
                if( pointer.classList.contains('hidden') ) {
                    pointer.classList.remove('hidden')
                }
            });
        }
    } 
}
</script>

<style lang="scss">
    *, a {
        cursor: none !important;
        @media only screen and (max-width: 1279px) {
            cursor: initial !important;
        }
    }

    a {
        @media only screen and (max-width: 1279px) {
            cursor: pointer !important;
        }
    }

    .pointer {
        position: fixed;
        height: 12px;
        width: 12px;
        background-color: #b20000;
        border-radius: 69%;
        pointer-events: none;
        z-index: 3;

        @media only screen and (min-width: 1920px) {
            height: 15px;
            width: 15px;
        }

        
        @media only screen and (min-width: 3840px) {
            height: 45px;
            width: 45px;
        }


        &.hidden {
            display: none;
        }

        @media only screen and (max-width: 1279px) {
            display: none;
        }

        &::before, &::after {
            position: absolute;
            content: "";
            border: 2px solid #b20000;
            height: 10px;
            width: 10px;
            top: -1px;
            left: -1px;
            border-radius: 69%;

            @media only screen and (min-width: 1920px) {
                height: 15px;
                width: 15px;
                top: -2px;
                left: -2px;
                border-width: 2px;
            }

            @media only screen and (min-width: 3840px) {
                height: 40px;
                width: 40px;
            }
        }

        &::after {
            animation: pulse 1500ms ease-in-out 0ms infinite;
        }

        &::before {
            animation: pulse2 1500ms ease-in-out 250ms infinite;
        }
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
            opacity: 0;
        }
        50% {
            transform: scale(1);
            opacity: 1;
        }
        100% {
            transform: scale(1.75);
            opacity: 0;
        }
    }

    @keyframes pulse2 {
        0% {
            transform: scale(1);
            opacity: 0;
        }
        50% {
            transform: scale(1);
            opacity: 1;
        }
        100% {
            transform: scale(2.25);
            opacity: 0;
        }
    }
</style>