<script>
    import {Link, Route, Router} from "svelte-navigator";
    import ProductApi from "~/services/product-api";

    let search = 1;
    const getProducts = async () => {
        console.log(search)
        return await ProductApi.getProducts({});
    }

    function update() {
        search = search + 1;
    }

</script>
<button on:click={update}>Update</button>
<h1>This is blogs page</h1>
{#await getProducts() then value}
    <h1>{value.data.products.length}</h1>
    {#each value.data.products as {id, title} (id)}
        <p>{title}</p>
    {/each}
{/await}
<Router>
    <Link to="sub">Go to sub blogs</Link>
    <Route path="sub">
        <h1>Sub</h1>
    </Route>
</Router>
