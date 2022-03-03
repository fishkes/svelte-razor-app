<script>
  import globalStore from "../../stores/globalStore";
  import cartStore from "../../stores/cartStore";

  $: total = $cartStore.reduce((a, b) => a + b.amount, 0);
</script>

<div class="btn-cart-container">
  <button
    class="btn-cart-toggle"
    on:click={() => globalStore.toggle("cart", true)}
  >
    <i class="fas fa-cart-plus" />
  </button>
  <span class="btn-cart-items">{total}</span>
</div>
