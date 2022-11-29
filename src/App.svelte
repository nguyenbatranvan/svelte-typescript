<script lang="ts">
    import "~/styles/app.css";
    import {Route, Router} from "svelte-navigator";
    import Layout from "~/layout/Layout.svelte";
    import PrivateRoute from "~/routes/guard/PrivateRoute.svelte";
    import LazyRoute from "~/routes/LazyRoute.svelte";

    const Blogs = () => import("~/pages/Blogs.svelte")
    const Products = () => import("~/pages/Products.svelte")
    const Login = () => import("~/pages/Login.svelte")
</script>
<Router>


    <PrivateRoute>
        <Route path="">
            <Layout>
                <Route path="*">
                    404
                </Route>
                {#await import("~/lib/Counter.svelte") then value}
                    <div>
                        <svelte:component this={value.default}/>
                        <h1>83737</h1>
                    </div>
                {:catch error}
                    <p>Load component error</p>
                {/await}
                <LazyRoute component={Products} path="/">
                    ...
                </LazyRoute>
                <LazyRoute component={Blogs} path="/blogs/*">
                    <h1>....</h1>
                </LazyRoute>
            </Layout>

        </Route>

    </PrivateRoute>

    <LazyRoute component={Login} path="login"></LazyRoute>

</Router>
