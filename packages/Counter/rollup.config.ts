import autoprefixer from 'autoprefixer';
import clear from 'rollup-plugin-clear';
import babel from '@rollup/plugin-babel';
import summary from 'rollup-plugin-summary';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: {
    dir: "dist",
    exports: "named",
    entryFileNames: "[name].js"
  },
  plugins: [
    clear({ targets: ['dist'] }),
    postcss({
      minimize: true,
      plugins: [autoprefixer()]
    }),
    resolve(),
    summary(),
    typescript(),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    terser({
      ecma: 2017,
      module: true,
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
  ],
};
