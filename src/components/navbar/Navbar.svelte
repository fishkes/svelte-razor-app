<script>
  import MobileNav from "./MobileNavbar.svelte";
  import DesktopNav from "./DesktopNavbar.svelte";
  let screenWidth;
</script>

<svelte:window bind:innerWidth={screenWidth} />

{#if screenWidth < 993}
  <MobileNav />
{:else}
  <DesktopNav />
{/if}
