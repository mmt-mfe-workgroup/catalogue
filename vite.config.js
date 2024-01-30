import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation";

const fed = () => federation({
  name: 'catalogue',
  filename: 'remoteEntry.js',
  exposes: {
      './App': './src/RemoteApp',
  },
  remotes: {
    UI: "https://useless-distribution.surge.sh/assets/remoteEntry.js",
},
  shared: ['react', 'react-dom']
})

export default defineConfig({
  plugins: [react(), fed()],
  build: {
    target: 'esnext'
  }
})
