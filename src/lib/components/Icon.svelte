<script lang="ts">
  // Importing necessary data and types
  import { iconsData } from '$lib/data/iconData';
  import type { IconName } from '$lib/types';

  // Props that can be passed to this component
  export let icon: IconName;
  export let size: number | string = 32;

  // Variable to store the CSS class for styling (exported as 'class')
  let className: string = '';
  export { className as class };

  // Find the corresponding icon data based on the provided 'icon' prop
  const svgIcon = iconsData.find((i) => i.name === icon);
</script>

<!-- SVG element to render the icon -->
<svg
  width={size}
  height={size}
  class={className}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <!-- Render the inner SVG data of the icon using {@html} -->
  {@html svgIcon?.innerData}
</svg>
