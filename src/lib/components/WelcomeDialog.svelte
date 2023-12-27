<script lang="ts">
  import { useStorage } from '$lib/store/useStorage';

  let userName = useStorage<string>('username', '');
  let isFirstVisit = useStorage<string>('isFirstVisit', 'yes');

  function handleKeyPress(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      $isFirstVisit = 'no';
      location.reload()
    }
  }
</script>

<div class="absolute bg-black/80 w-full h-full z-20 rounded-[20px]">
  <div
    class=" font-semibold absolute top-1/2 -translate-y-1/2 left-1/2
     -translate-x-1/2 p-4 bg-white rounded-md flex flex-col gap-2"
  >
    <span class="text-xl font-bold text-primary text-center">Welcome!</span>
    <input
      class="text-lg bg-primary/20 rounded-md px-4 py-2 border-none outline-none text-slate-600 placeholder:text-slate-500"
      id="userNameInput"
      type="text"
      bind:value={$userName}
      on:keypress={handleKeyPress}
      placeholder="Please type your name..."
    />
  </div>
</div>
