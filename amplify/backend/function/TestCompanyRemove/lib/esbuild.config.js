const { build } = require('esbuild')

build({
  entryPoints: ['index.ts'],
  bundle: true,
  outdir: './../src',
  platform: 'node',
  target: 'node14',
  format: 'cjs',
  loader: { '.ts': 'ts' },
  sourcemap: true // Habilita la generación de mapas de origen (opcional)
}).catch(() => process.exit(1))
