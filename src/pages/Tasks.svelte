<script>
    import TodoList from "~/components/todo-list/TodoList.svelte";
    import AddTask from "~/components/todo-list/AddTask.svelte";

    let isOpen = false;
</script>
<h1>This is task</h1>
<TodoList on:onAdd={()=>isOpen=true}>

</TodoList>
<AddTask on:onclose={()=>isOpen=false} {isOpen}/>
