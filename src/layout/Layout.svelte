<script>
    import Navbar from "~/layout/Navbar.svelte";
</script>
<div class="flex flex-col">
    <Navbar/>
    <div class="p-28">
        <slot/>

    </div>
</div>

