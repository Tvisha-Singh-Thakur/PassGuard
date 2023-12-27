import { writable } from 'svelte/store';

export const modal = writable<boolean>(false);

export function show() {
  modal.set(true);
}

export function close() {
  modal.set(false);
}
