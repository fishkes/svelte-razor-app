<script>
  import links from "../../constants/links";
  import { link } from "svelte-routing";
  import { fly, fade } from "svelte/transition";

  import store from "../../stores/globalStore";
  import LoginLink from "../LoginLink.svelte";

  function toggleSidebar() {
    store.toggle("sidebar", !$store.sidebar);
  }
</script>

<div class="sidebar-container" transition:fly={{ x: -1000 }}>
  <div class="sidebar" transition:fade={{ delay: 400 }}>
    <div class="sidebar-header">
      <button class="btn-close" on:click={toggleSidebar}>
        <i class="fas fa-window-close" />
      </button>
    </div>

    <img
      src="/assets/images/logo.svg"
      alt=""
      srcset=""
      class="logo sidebar-logo"
    />

    <ul class="sidebar-links">
      {#each links as navLink}
        <li on:click={toggleSidebar}>
          <a href={navLink.url} use:link>{navLink.text}</a>
        </li>
      {/each}
      <li>
        <LoginLink />
      </li>
    </ul>
  </div>
</div>
