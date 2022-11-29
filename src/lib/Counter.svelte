<script lang="ts">

    import TProduct, {Product} from "~/models/product";
    import Click from "~/models/test";

    let count: number = 0
    const increment = () => {
        const b: Product = new Product();
        console.log('b', b)
        count += 1;
        Click();
        TProduct.setProdcut();
    }
</script>

<button on:click={increment}>
    count is {count}
</button>
