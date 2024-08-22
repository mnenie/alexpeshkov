<template>
  <svg
    aria-hidden="true"
    class="pointer-events-none [z-index:-1] fixed inset-0 h-full w-full fill-zinc-600/50 stroke-zinc-500/50 opacity-[.40]"
    style="visibility: visible;"
  >
    <defs>
      <pattern
        id="grid"
        width="28"
        height="28"
        patternUnits="userSpaceOnUse"
        x="0"
      >
        y="0">
        <path d="M0 30V0H30" fill="none" stroke-dasharray="0" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" stroke-width="0" fill="url(#grid)" />
  </svg>
</template>
