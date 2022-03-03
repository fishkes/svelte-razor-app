<script>
  import { link } from "svelte-routing";
  import CartButton from "../cart/CartButton.svelte";
  import store from "../../stores/globalStore";

  function toggleSidebar() {
    store.toggle("sidebar", !$store.sidebar);
  }
</script>

<nav class="navbar">
  <div class="nav-center">
    <button class="btn-sidebar-toggle" on:click={toggleSidebar}>
      <i class="fas fa-bars" />
    </button>

    <a href="/" use:link class="nav-logo">
      <img src="/assets/images/logo.svg" alt="" srcset="" class="logo" />
    </a>

    <CartButton />
  </div>
</nav>
