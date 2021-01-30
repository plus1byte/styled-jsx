// Definitions by: @types/styled-jsx <https://www.npmjs.com/package/@types/styled-jsx>

import { HTMLAttributes } from 'vue'

export * from './server'
export * from './css'

declare module 'vue' {
  interface StyleHTMLAttributes extends HTMLAttributes {
    jsx?: boolean
    global?: boolean
  }
}
