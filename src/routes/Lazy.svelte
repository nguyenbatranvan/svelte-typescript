<script lang="ts">
    import {onMount} from "svelte";

    export let delayMs: number = 0
    export let component;
    let loadedComponent = null;
    let timeout;
    let showFallback = !delayMs;

    let props;
    $: {
        const {component, delayMs, ...restProps} = $$props;
        props = restProps;
    }
    onMount(() => {
        if (delayMs) {
            timeout = setTimeout(() => {
                showFallback = true;
            }, delayMs);
        }
        component().then(module => {
            loadedComponent = module.default;
        });
        return () => clearTimeout(timeout);
    });
</script>

{#if loadedComponent}
    <svelte:component this={loadedComponent} {...props}/>
{:else if showFallback}
    <slot/>
{/if}
