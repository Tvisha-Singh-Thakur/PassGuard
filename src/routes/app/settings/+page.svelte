<script lang="ts">
  import { useStorage } from '$lib/store/useStorage';
  import type { IItem } from '$lib/types';
  import { contentDownloader } from '$lib/utils';

  let items = useStorage<IItem[]>('items', []);
  let fileName: string = "backup";

  function downloadItems() {

    if(!fileName) return alert("Please provide a name for file")

    contentDownloader({
      contentType: 'application/json',
      content: [JSON.stringify($items)],
      fileName
    });
  }
</script>

<div class="p-4 font-bold text-text_dark">
  <span class="text-xl">About This App</span>
  <p class="indent-4 font-bold text-primary">
    Version: <span class="font-semibold text-text_light">1.0.0</span>
  </p>
</div>

<div class="flex flex-col gap-2">
  <span class="px-4 text-text_dark font-bold text-xl">Export your items</span>
  <div class="mx-4 rounded-md overflow-hidden flex">
    <input
      bind:value={fileName}
      placeholder="File Name"
      class="bg-primary/20 border-none outline-none flex-1 placeholder:text-slate-500 text-slate-600 px-3 font-semibold text-lg"
      type="text"
    />
    <button on:click={downloadItems} class="bg-primary py-2 px-4 text-white font-bold text-lg"
      >Export</button
    >
  </div>
</div>

<p class="bg-accent/30 text-center absolute bottom-0 text-primary font-bold">
  Crafted with care for a special one on their birthday!
  <span>🎉</span>
</p>
