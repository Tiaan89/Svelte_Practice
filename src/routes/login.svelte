<script lang='ts'>
    import Child from "./child.svelte";
    	export let user;
        export let error;

        let myColor = "blue"

        function handleClick(){
            myColor = "yellow";
        }

        console.log(user);
</script>

<h1 style="color: red;">Login Page</h1> 
<Child />
        <button on:click={handleClick}>Change color</button>

<div class="containter">
    {#if error}
     <p>
        {error}
     </p>
    {/if}
    <form action="" method="post">
        <label>
            Username
            <input type="text" name="username" autocomplete="off">
        </label>

        <label>
            Password
            <input type="password" name="password" autocomplete="off">
        </label>

        <input type="submit" value="Login">

    </form>

</div>

<style>
    :global(h1) {
        color: blue;
    }
    .container {
        width: 100%;
        height: 100vh;
        display: grid;
        place-items: center;
    }

    form {
        padding: 2rem;
        max-width: 500px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border: 2px solid regb(148, 148, 148, 148);
    }

    label {
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }
</style>