<script>
  import { Route, Router } from "svelte-routing";

  import Login from "./pages/Login.svelte";
  import Home from "./pages/Home.svelte";
  import Products from "./pages/Products.svelte";
  import ProductTemplate from "./pages/ProductTemplate.svelte";
  import About from "./pages/About.svelte";
  import Checkout from "./pages/Checkout.svelte";
  import Navbar from "./components/navbar/Navbar.svelte";
  import Sidebar from "./components/navbar/Sidebar.svelte";
  import Cart from "./components/cart/Cart.svelte";

  import globalStore from "./stores/globalStore";
</script>

<Router>
  <Navbar />
  {#if $globalStore.sidebar}
    <Sidebar />
  {/if}
  {#if $globalStore.cart}
    <Cart />
  {/if}

  <Route path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/products" component={Products} />
  <Route path="/products/:id" component={ProductTemplate} />
  <Route path="/checkout" component={Checkout} />
  <Route path="/login" component={Login} />
</Router>

<style>
</style>
