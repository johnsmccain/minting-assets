import { defineConfig, HttpProxy, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.WAGMI_KEY': JSON.stringify(env.WAGMI_KEY)
    },
    plugins: [react()],
  }
})

