<template>
    <teleport to="body">
        <div class="sent__modal closed">
            <div class="sent__modal-content">
                <h2>Thanks for reaching out!</h2>
                <button class="btn" @click="closeModal">Close</button>
            </div>
        </div>  
    </teleport>
</template>

<script>
export default {
    methods: {
        closeModal() {
            document.querySelector('.sent__modal')
            .classList
            .add('closed');
        }
    } 
}
</script>

<style lang="scss">
    .sent__modal {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.2);

        &.closed {
            transition: opacity 150ms linear;
            opacity: 0;
            pointer-events: none;
        }

        .sent__modal-content {
            position: relative;
            width: 300px;
            height: 175px;
            margin: 55% auto;
            background-color: #fff;
            text-align: center;
            padding: 32px 40px;
            font-family: 'Poppins', Arial, Helvetica, sans-serif;
            text-transform: uppercase;
            line-height: 1.2;

            button.btn {
                margin: 15px 0 10px 0;
            }
        }
    }

</style>