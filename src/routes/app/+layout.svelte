<script lang="ts">
  import { BottomNav, WelcomeDialog } from '$lib/components';
  import { useStorage } from '$lib/store/useStorage';
  import { modal } from '$lib/store/isModalOpen';
  import AddItem from '$lib/components/AddItem.svelte';

  let isFirstVisit = useStorage<string>('isFirstVisit', 'yes');
</script>

{#if $isFirstVisit === 'yes'}
  <WelcomeDialog />
{/if}

{#if $modal }
  <AddItem />
{/if}

<main class="relative h-[calc(100%-84px)] rounded-t-[20px]">
  <slot />
</main>
<BottomNav />
