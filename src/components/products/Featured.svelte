<script>
  import Product from "./Product.svelte";
  import Loading from "../Loading.svelte";
  import store from "../../stores/defaultProducts";

  export let title = "";

  $: featured = $store.filter((p) => p.featured);
</script>

{#if featured.length > 0}
  <section class="section">
    <h2 class="section-title">{title}</h2>
    <div class="products-center">
      {#each featured as product (product.id)}
        <Product {product} />
      {/each}
    </div>
  </section>
{:else}
  <Loading />
{/if}
