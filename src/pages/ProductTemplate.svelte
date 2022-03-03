<script>
  import products from "../stores/defaultProducts";
  import Loading from "../components/Loading.svelte";
  import { link } from "svelte-routing";
  import store from "../stores/globalStore";
  import { addToCart } from "../stores/cartStore";

  export let id;
  $: product = $products.find((p) => p.id == parseInt(id));

  function addItemToCart() {
    store.toggle("cart", true);
    addToCart(product);
  }
</script>

<svelte:head>
  <title>{product ? product.title : "View Product"}</title>
</svelte:head>

{#if !product}
  <Loading />
{:else}
  <section class="single-product">
    <a href="/products" use:link class="btn btn-primary">back to products</a>
    <div class="single-product-container">
      <article class="single-product-image">
        <img src={product.image} alt={product.title} />
      </article>
      <article>
        <h1>{product.title}</h1>
        <h2>${product.price}</h2>
        <p>{product.description}</p>
        <button class="btn btn-primary btn-block" on:click={addItemToCart}>
          add to cart
        </button>
      </article>
    </div>
  </section>
{/if}
