import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import cssbundle from 'rollup-plugin-css-bundle';
import postcss from 'postcss';
import clean from 'postcss-clean';
import autoprefixer from 'autoprefixer';
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json';

export default {
	input: 'src/index.tsx',
	output: [
		{
			file: 'dist/index.js',
			format: 'iife',
			globals: {
				shortid: 'shortid',
			},
		},
	],
	externals: ['shortid'],
	plugins: [
		typescript(),
		serve('dist'),
		livereload('dist'),
		commonjs(),
		nodeResolve(),
		replace({
			'process.env.NODE_ENV': '"production"',
		}),
		json(),
		cssbundle({
			transform: (code) =>
				postcss([
					autoprefixer,
					clean(),
					comments({
						removeAll: true,
					}),
				])
					.process(code, { from: undefined })
					.then((out) => out.css),
		}),
	],
};
