<script>
  import Hero from "../components/Hero.svelte";
  import { link } from "svelte-routing";

  import Featured from "../components/products/Featured.svelte";
</script>

<Hero>
  <a href="/products" class="btn btn-primary btn-hero" use:link>Shop now</a>
</Hero>
<Featured title="Featured Products" />
