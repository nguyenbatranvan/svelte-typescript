<script>
    import {fly, slide, draw, fade} from "svelte/transition";

    export let x = 200;
    export let duration = 500;
    export let direction = "forward";

    $: directionFactor = direction === "forward" ? 1 : -1;
</script>

<div
        class="route-wrapper"
        in:fade={{ x:0,y:20, duration }}
        out:fade={{ x: -0,y:20 }}
>
    <slot/>
</div>

<style>
    /*.route-wrapper {*/
    /*    position: absolute;*/
    /*    top: 0;*/
    /*    left: 0;*/
    /*}*/
</style>
