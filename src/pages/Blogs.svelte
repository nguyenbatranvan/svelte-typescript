<script>
    import {Link, Route, Router} from "svelte-navigator";

    let search = 1;
    function update() {
        search = search + 1;
    }

</script>
<button on:click={update}>Update</button>
<h1>This is blogs page</h1>

<Router>
    <Link to="sub">Go to sub blogs</Link>
    <Route path="sub">
        <h1>Sub</h1>
    </Route>
</Router>
