// rollup.config.js
import resolve from '@rollup/plugin-node-resolve'; 
import commonjs from '@rollup/plugin-commonjs'; 
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser'; 
import babel from '@rollup/plugin-babel'; 
import peerDepsExternal from 'rollup-plugin-peer-deps-external'; 
import del from 'rollup-plugin-delete'; 

const packageJson = require('./package.json');

export default {
  input: 'src/index.tsx', 
  output: [
    {
        file: 'dist/bundle.js', 
      format: 'cjs', 
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: 'esm', 
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }), 
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      include: ['src/**/*'],
      exclude: '**/*.stories.js'
    }),
    terser(), 
    del({ targets: 'dist/*' }) 
  ],
  external: ['react', 'react-dom']
};
