<script lang="ts">
  // Importing necessary types and components
  import type { IconName, PageTypes } from '$lib/types';
  import Icon from './Icon.svelte';
  import { activePage, setActivePage } from '$lib/store/activePage';

  // Props that can be passed to this component
  export let label: string;
  export let icon: IconName;
  export let page: PageTypes;
  export let href: string;
</script>

<!-- The component's HTML structure -->
<a
  {href}
  on:click={() => setActivePage(page)}
  class:hover:text-blue-200={$activePage !== page}
  class="flex flex-col items-center {$activePage === page
    ? 'text-primary font-bold'
    : 'text-text_light font-medium'}text-text_dark font-semibold py-3 transition-all duration-500"
>
  <!-- Container for icon with conditional styling based on the active page -->
  <div
    class="rounded-[20px] py-[2px] px-4 {$activePage === page
      ? 'bg-primary/25'
      : ''} transition-all duration-500"
  >
    <!-- Render the 'Icon' component with the provided 'icon' prop -->
    <Icon {icon} />
  </div>

  <!-- Display the label provided as a prop -->
  <span>{label}</span>
</a>
