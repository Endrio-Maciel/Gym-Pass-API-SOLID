import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    plugins: [tsconfigPaths()],
    server: {
        port: 5173,
    },
    test: {
        environmentMatchGlobs: [
            ['src/http/controllers/**', 'prisma']
        ],
    }

})