<script lang="ts">
  import { copyTextToClipboard } from '$lib/utils';
  import Icon from './Icon.svelte';

  // export state
  export let deleteItem: (id: string) => void;
  export let id: string;
  export let name: string;
  export let siteUrl: string;
  export let email: string;
  export let username: string;
  export let password: string;


  let isEditable: boolean = false;
  let icon: 'edit' | 'check' = 'edit';

  // Fields
  let emailField: HTMLInputElement;
  let usernameField: HTMLInputElement;
  let passwordField: HTMLInputElement;

  function revealFieldValue(e: MouseEvent, field: HTMLInputElement): void {
    if (field.type === 'text') {
      field.type = 'password';
      (e.target as HTMLButtonElement).innerText = 'reveal';
    } else if (field.type === 'password') {
      field.type = 'text';
      (e.target as HTMLButtonElement).innerText = 'hide';
    }
  }

  function copyValue(e: MouseEvent, value: string) {
    (e.target as HTMLButtonElement).innerText = 'copied';
    copyTextToClipboard(value);
    setTimeout(() => {
      (e.target as HTMLButtonElement).innerText = 'copy';
    }, 3000);
  }

  function handleEdit(e: MouseEvent) {
    icon = 'check';
  }
</script>

<li class="bg-white p-3 rounded-md shadow-md flex flex-col gap-2 justify-between">
  <!-- Header -->
  <div class="flex items-center justify-between">
    <div class="flex gap-3 items-center">
      <span
        class="rounded-full w-12 h-12 bg-primary/20 flex items-center justify-center p-2 text-xl font-bold text-text_dark leading-tight"
        >{name.slice(0, 1).toUpperCase()}</span
      >
      <h3 class="text-text_dark font-bold text-lg overflow-hidden whitespace-nowrap text-ellipsis">
        {name}
      </h3>
    </div>

    <div class="text-text_dark">
      <button on:click|preventDefault|stopPropagation={() => deleteItem(id)}
        ><Icon icon="trash" size="28" /></button
      >
    </div>
  </div>

  <!-- Info -->
  <div class="flex flex-col">
    <!-- Url -->
    <div class="flex text-sm font-semibold text-text_light">
      <span class="font-bold text-text_dark">Url:</span><a
        target="_blank"
        href={siteUrl}
        class="indent-1 text-blue-500 hover:underline">{siteUrl}</a
      >
    </div>

    <!-- Email -->
    <div class="flex text-sm font-semibold text-text_light">
      <span class="font-bold text-text_dark">Email:</span>
      <input
        disabled
        bind:this={emailField}
        bind:value={email}
        class="bg-transparent border-none outline-none overflow-hidden whitespace-nowrap text-ellipsis px-1 w-fit min-w-0 max-w-[160px]"
        type="password"
      />
      <div class="flex gap-2">
        <button
          class="font-bold text-primary"
          on:click|preventDefault|stopPropagation={(e) => revealFieldValue(e, emailField)}
          >reveal</button
        >
        <button
          class="font-bold text-primary"
          on:click|preventDefault|stopPropagation={(e) => copyValue(e, email)}>copy</button
        >
      </div>
    </div>

    <!-- Username -->
    <div class="flex text-sm font-semibold text-text_light">
      <span class="font-bold text-text_dark">Username: </span>
      <input
        disabled
        bind:this={usernameField}
        bind:value={username}
        class="bg-transparent border-none outline-none overflow-hidden whitespace-nowrap text-ellipsis px-1 w-fit min-w-0 max-w-[160px]"
        type="password"
      />
      <div class="flex gap-2">
        <button
          class="font-bold text-primary"
          on:click|preventDefault|stopPropagation={(e) => revealFieldValue(e, usernameField)}
          >reveal</button
        >
        <button
          class="font-bold text-primary"
          on:click|preventDefault|stopPropagation={(e) => copyValue(e, username)}>copy</button
        >
      </div>
    </div>

    <!-- Password -->
    <div class="flex text-sm font-semibold text-text_light">
      <span class="font-bold text-text_dark">Password: </span>
      <input
        disabled
        bind:this={passwordField}
        bind:value={password}
        class="bg-transparent border-none outline-none overflow-hidden whitespace-nowrap text-ellipsis px-1 w-fit min-w-0 max-w-[160px]"
        type="password"
      />
      <div class="flex gap-2">
        <button
          class="font-bold text-primary"
          on:click|preventDefault|stopPropagation={(e) => revealFieldValue(e, passwordField)}
          >reveal</button
        >
        <button
          class="font-bold text-primary"
          on:click|preventDefault|stopPropagation={(e) => copyValue(e, password)}>copy</button
        >
      </div>
    </div>
  </div>
</li>
