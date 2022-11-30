<script lang="ts">

    import Click from "~/models/test";

    let count: number = 0
    const increment = () => {
        count += 1;
        Click();
    }
</script>

<button on:click={increment}>
    count is {count}
</button>
