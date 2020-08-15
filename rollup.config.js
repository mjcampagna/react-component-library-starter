import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import multi from '@rollup/plugin-multi-entry'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

export default {
	external: [
		'react',
		'react-dom',
		/@babel\/runtime/,
	],
	input: [
    'src/components/**/index.js',
    'src/components/**/index.jsx',
    'src/components/**/index.ts',
    'src/components/**/index.tsx',
	],
	output: [
		{
			dir: 'dist',
			format: 'es',
			sourcemap: true,
		},
	],
	plugins: [
		babel({
			babelHelpers: 'runtime',
			exclude: "node_modules/**",
		}),
		commonjs(),
		multi(),
		nodeResolve(),
		typescript(),
	],
	preserveModules: true
}
