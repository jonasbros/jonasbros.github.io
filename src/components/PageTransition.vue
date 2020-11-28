<template>
    <teleport to="body">
        <div class="page__transition"></div>  
    </teleport>
</template>

<style lang="scss">
    .page__transition {
        position: absolute;
        height: 15px;
        width: 15px;
        background-color: #000;
        pointer-events: none;
        opacity: 0;
        border-radius: 69%;
        transform-origin: center;
        z-index: 1;
    }

</style>