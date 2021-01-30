// Definitions by: @types/styled-jsx <https://www.npmjs.com/package/@types/styled-jsx>

import { VNode } from 'vue'

declare function flushToHTML(opts?: { nonce?: string }): string
declare function flushToReact<T>(opts?: {
  nonce?: string
}): Array<VNode<T>>

export { flushToHTML }
export default flushToReact
