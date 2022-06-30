<script context="module" lang="ts">
    import type { Load } from "@sveltejs/kit";

    export const load: Load = async ({ fetch }) => { 
       const response = await fetch("/staff.json");

       if (response.ok) {
        const staffArray = await response.json();
            return {
                props: { staffArray }
            } 
        }

        const { message } = await response.json();
        return {
            error: new Error(message)
        }
    };
</script>

<script lang="ts">
    export let staffArray: Staff[];
    export let staff: Staff;
</script>

<h1>Welcome to staff details</h1>

<div class="anyclassName">
    {#each staffArray as staff}
        Firstname: {staff.firstname}
    {/each}
    
    <div>
    {#each staffArray as staff}
        Lastname: {staff.lastname}
    {/each}
    </div>

</div>
