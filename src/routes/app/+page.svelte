<script lang="ts">
  import { Icon, Item } from '$lib/components';
  import { useStorage } from '$lib/store/useStorage';
  import { show } from '$lib/store/isModalOpen';
  import type { IItem } from '$lib/types';
  import { blur } from 'svelte/transition';

  let userName = useStorage<string>('username', '');
  // Sets app version so it will be easier for upcoming chnages.
  useStorage<string>('appVersion', '1.0');
    if(typeof window !== 'undefined') localStorage.removeItem('isFirstVisit')
  let a: boolean = false;
  setTimeout(() => {
    a = true;
  }, 800);

  // Items
  let items = useStorage<IItem[]>('items', []);

  function deleteItem(id: string): void {
    $items = $items.filter((item) => item.id !== id);
  }

  // Items end

  let searchText: string = '';

  function handleSearch(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      searchText = '';
      return alert('This feature is not implemented yet! 😥');
    }
  }
</script>

<svelte:head>
  <title>Pass Guard - App</title>
</svelte:head>

<!-- Redesgined -->
{#if a}
  <div
    transition:blur={{ duration: 500 }}
    class="bg-slate-600 rounded-t-[20px] p-3 text-center text-white font-bold text-xl"
  >
    <h1>App is being redesgined</h1>
  </div>
{/if}

<!-- Top section -->
<div class="bg-primary rounded-b-3xl px-8 py-10 space-y-10">
  <div class="flex justify-between">
    <!-- Greet -->
    <div class="font-semibold">
      <span class="text-slate-100 text-sm">Welcome Back,</span>
      <p class="text-lg text-white leading-tight">{$userName}</p>
    </div>

    <!-- Theme controller button -->
    <button class="text-text_light bg-white rounded-full p-2 flex justify-center items-center">
      <Icon icon="sun" />
    </button>
  </div>

  <!-- Search bar -->
  <div class="py-2 px-4 flex bg-white/20 rounded-md">
    <input
      bind:value={searchText}
      on:keypress={handleSearch}
      class="flex-1 bg-transparent placeholder:text-slate-100 placeholder:font-medium text-lg border-none outline-none text-white font-semibold"
      type="text"
      placeholder="Search your accounts..."
      name=""
      id=""
    />
    <Icon icon="search" class="text-white" />
  </div>
</div>

<!-- List view -->
<ul class=" scrollable h-[calc(100%-218px)] p-4 overflow-scroll flex flex-col gap-3">
  {#each $items as { id, name, password, siteUrl, username, email } (id)}
    <Item {deleteItem} {id} {name} {email} {password} {siteUrl} {username} />
  {/each}
</ul>

<!-- Add item floating button -->
<button
  on:click|stopPropagation|preventDefault={show}
  class="rounded-full bg-primary absolute bottom-4 right-4 z-10 shadow-sm shadow-primary hover:brightness-110 active:scale-95 transition-all duration-300"
>
  <Icon class="text-white" size="48" icon="plus" />
</button>

<style>
  .scrollable {
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
  }
  .scrollable::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
</style>
