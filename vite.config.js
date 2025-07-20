import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/JujutsuRPG/',
  plugins: [react()],
})
//npm run build e depois npm run deploy para atualizar
export default defineConfig({
  base: '/JujutsuRPG/',
  ...
});
