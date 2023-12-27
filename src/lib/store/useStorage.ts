import { writable, type Writable } from 'svelte/store';

/**
 * A utility function for creating a Svelte writable store that is backed by the browser's localStorage.
 *
 * @template T - The type of the value stored in the writable store.
 * @param {string} key - The key under which the value is stored in localStorage.
 * @param {T} initialValue - The initial value for the store if no value is found in localStorage.
 * @returns {Writable<T>} - The Svelte writable store.
 */
export function useStorage<T>(key: string, initialValue: T): Writable<T> {
  // Functions for serializing and deserializing data to and from localStorage
  let serialize = JSON.stringify;
  let deserialize = JSON.parse;

  // Attempt to retrieve the stored value from localStorage
  let storedValue: T = deserialize(localStorage.getItem(key)!);

  // Create a Svelte writable store with the retrieved value or the initial value
  let store = writable(storedValue ? storedValue : initialValue);

  // Subscribe to changes in the store and update localStorage accordingly
  store.subscribe((value) => localStorage.setItem(key, serialize(value)));

  // Return the created store
  return store;
}
