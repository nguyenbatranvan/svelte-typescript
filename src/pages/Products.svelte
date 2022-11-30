<script>
    import RouteTransition from "~/routes/RouteTransition.svelte";
    import ProductApi from "~/services/product-api";
    import ProductItem from "~/components/products/ProductItem.svelte";
    const getProducts = async () => {
        return (await ProductApi.getProducts({})).data;
    }
</script>
<RouteTransition>
    {#await getProducts() then value}
        <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">

        {#each value.products as product (product.id)}
                <ProductItem nbame="122" data={product}/>

        {/each}
        </div>

    {/await}
</RouteTransition>
