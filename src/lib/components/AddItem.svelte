<script lang="ts">
  import { useStorage } from '$lib/store/useStorage';
  import { close } from '$lib/store/isModalOpen';
  import { Icon } from '$lib/components';
  import { generateUniqueId } from '$lib/utils';
  import type { IItem } from '$lib/types';

  let name: string = '';
  let email: string = '';
  let password: string = '';
  let siteUrl: string = 'https://';
  let username: string = '';

  let items = useStorage<IItem[]>('items', []);

  function handleItemAddition() {
    if (!name || !email || !password || !siteUrl || !username)
      return alert('All the fields are mandatory!');

    if(!siteUrl.startsWith("http://") || !siteUrl.startsWith("https://")){
      siteUrl + "https://"
    }

    const newItem = {
      id: generateUniqueId(),
      name,
      email,
      password,
      siteUrl,
      username
    };

    $items = [...$items, newItem];

    close();
    location.reload()
  }
</script>

<div class="absolute bg-black/80 w-full h-full z-20 rounded-[20px]">
  <div
    class=" font-semibold absolute top-1/2 -translate-y-1/2 left-1/2
       -translate-x-1/2 p-4 bg-white rounded-md flex flex-col gap-2"
  >
    <span class="text-xl font-bold text-primary text-center">Add new item</span>
    <input
      class="text-lg bg-primary/20 rounded-md px-4 py-2 border-none outline-none text-slate-600 placeholder:text-slate-500"
      id="userNameInput"
      type="text"
      bind:value={name}
      placeholder="Site/App Name"
    />
    <input
      class="text-lg bg-primary/20 rounded-md px-4 py-2 border-none outline-none text-slate-600 placeholder:text-slate-500"
      id="userNameInput"
      type="text"
      bind:value={siteUrl}
      placeholder="Site Url"
    />
    <input
      class="text-lg bg-primary/20 rounded-md px-4 py-2 border-none outline-none text-slate-600 placeholder:text-slate-500"
      id="userNameInput"
      type="text"
      bind:value={email}
      placeholder="Email"
    />
    <input
      class="text-lg bg-primary/20 rounded-md px-4 py-2 border-none outline-none text-slate-600 placeholder:text-slate-500"
      id="userNameInput"
      type="text"
      bind:value={username}
      placeholder="Username"
    />
    <input
      class="text-lg bg-primary/20 rounded-md px-4 py-2 border-none outline-none text-slate-600 placeholder:text-slate-500"
      id="userNameInput"
      type="text"
      bind:value={password}
      placeholder="Password"
    />

    <!-- Add Button -->
    <button
      on:click={handleItemAddition}
      class="bg-primary text-xl font-bold text-white rounded-md py-2 mt-3"
    >
      Add
    </button>

    <!-- Close Button -->
    <button on:click={close} class="bg-primary text-white absolute top-1 right-1 rounded-lg"
      ><Icon icon="x-icon" size="16" /></button
    >
  </div>
</div>
