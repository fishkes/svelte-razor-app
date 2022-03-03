<script>
  import { link } from "svelte-routing";
  import userStore from "../stores/userStore";
  import globalStore from "../stores/globalStore";
</script>

{#if userStore.jwt}
  <a
    href="/"
    use:link
    class="logout-btn"
    on:click={() => globalStore.toggle("sidebar", false)}>logout</a
  >
{:else}
  <a
    href="/login"
    use:link
    on:click={() => globalStore.toggle("sidebar", false)}>login</a
  >
{/if}
