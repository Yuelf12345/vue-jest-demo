<template>
  <div class="layout">
    <header>
      <slot name="header" :count="1" />
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>
