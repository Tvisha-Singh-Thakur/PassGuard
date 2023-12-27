<script>
  // Importing the NavItem component
  import NavItem from './NavItem.svelte';
</script>

<!-- Navigation bar component -->
<nav
  class="fixed bottom-0 flex w-full px-6 justify-between bg-white rounded-b-[25px] bottom-nav-shadow"
>
  <!-- Dashboard link -->
  <NavItem href="/app" page="dashboard" label="Dashboard" icon="shield" />

  <!-- Favorites link -->
  <NavItem href="/app/favorites" page="favorites" label="Favorites" icon="heart" />

  <!-- Settings link -->
  <NavItem href="/app/settings" page="settings" label="Settings" icon="cog" />
</nav>

<style>
  /* Styling for the bottom navigation shadow */
  .bottom-nav-shadow {
    box-shadow: 1px 0px 4px 0px rgba(0, 0, 0, 0.25);
  }
</style>
