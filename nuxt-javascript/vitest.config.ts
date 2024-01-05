import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  // any custom Vitest config you require
  test: {
    /* for example, use global to avoid globals imports (describe, test, expect): */
    // globals: true,
},
})

// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// export default defineConfig({
//   plugins: [vue()],
//   test: {
//     globals: true,
//     environment: 'jsdom',
//   },
// })