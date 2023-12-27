import type { PageTypes } from '$lib/types';
import { writable, type Writable } from 'svelte/store';

// Create a writable store to manage the active page type.
export const activePage: Writable<PageTypes> = writable<PageTypes>('dashboard');

/**
 * Set the active page type to the specified value.
 *
 * @param {PageTypes} page - The page type to set as the active page.
 */
export function setActivePage(page: PageTypes) {
  activePage.set(page);
}
