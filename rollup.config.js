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

const onwarn = function (warning) {
  if (warning.code === 'CIRCULAR_DEPENDENCY') return;
  console.warn(warning);
};

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: 'public/index.js',
      format: 'iife',
    },
  ],
  onwarn,
  plugins: [
    typescript(),
    serve('public'),
    livereload('public'),
    commonjs({ requireReturnsDefault: true }),
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
