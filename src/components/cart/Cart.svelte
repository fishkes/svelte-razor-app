<script>
  import globalStore from "../../stores/globalStore";
  import userStore from "../../stores/userStore";
  import { fly, fade, blur } from "svelte/transition";
  import { link } from "svelte-routing";
  import ItemsList from "./ItemsList.svelte";

  let user = false;
</script>

<div class="cart-overlay" transition:blur>
  <div class="cart-container" transition:fly={{ x: 100 }}>
    <div class="cart" transition:fade={{ delay: 400 }}>
      <div class="cart-header">
        <button
          class="btn-close"
          on:click={() => globalStore.toggle("cart", false)}
        >
          <i class="fas fa-window-close" />
        </button>
        <h2 class="cart-title">
          your bag
          <span />
        </h2>
      </div>
      <ItemsList />
      <div class="cart-footer">
        {#if $userStore.jwt}
          <a
            href="/checkout"
            use:link
            class="btn btn-primary btn-block"
            on:click={() => globalStore.toggle("cart", false)}>checkout</a
          >
        {:else}
          <p class="cart-login">
            in order to checkout please
            <a
              href="/login"
              use:link
              class=""
              on:click={() => globalStore.toggle("cart", false)}>login</a
            >
          </p>
        {/if}
      </div>
    </div>
  </div>
</div>
