<script>
  import { Icon } from '$lib/components';
</script>

<svelte:head>
  <title>Pass Guard</title>
</svelte:head>

<main class="h-full w-full rounded-[20px] bg-white fixed top-0 left-0 overflow-hidden">
  <!-- bg image -->
  <img src="/images/bg_shape.svg" alt="Bg shape" class="absolute -z-10 top-0 left-0" />

  <!-- App title -->
  <h1 class="text-3xl font-bold text-text_dark text-center mt-5">
    <span class="text-primary">Pass</span> Guard
  </h1>

  <!-- Onboarding Image  -->
  <img draggable="false" src="/images/onboarding_image.svg" alt="Onboarding" />

  <!-- Text Section -->
  <div class="px-8 py-4 text-center">
    <h2 class="text-text_dark font-bold text-xl mb-3">Securing Your Digital Realm</h2>
    <p class="font-semibold text-text_light">
      Safeguard and organize your passwords easily with PassGuard. Your trusted companion in the
      journey of digital security awaits you. Take control and protect your online presence with
      confidence.
    </p>
  </div>

  <!-- Button -->
  <a
    href="/app"
    class="bg-primary flex mx-8 mt-8 py-2 justify-center items-center gap-1 font-semibold text-xl text-white leading-none rounded-md"
    >Get Started Now<Icon icon="chevron-right" /></a
  >
</main>
