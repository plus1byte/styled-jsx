import { defineComponent, onBeforeUnmount } from 'vue'
import StyleSheetRegistry from './stylesheet-registry'
import { STYLE_COMPONENT } from './_constants'
const styleSheetRegistry = new StyleSheetRegistry()

const JSXStyle = defineComponent({
  name: STYLE_COMPONENT,
  props: {
    id: String
  },
  setup(props, { slots }) {
    onBeforeUnmount(() =>
      styleSheetRegistry.remove({
        ...props,
        children: slots.default()[0].children
      })
    )
  },
  watch: {
    id(val, nVal) {
      styleSheetRegistry.remove({ id: val })
      styleSheetRegistry.add({
        id: nVal,
        children: this.$slots.default()[0].children
      })
    }
  },
  render() {
    styleSheetRegistry.add({
      id: this.id,
      children: this.$slots.default()[0].children
    })
    return ''
  },
  methods: {
    dynamic(info) {
      return info
        .map(tagInfo => {
          const baseId = tagInfo[0]
          const props = tagInfo[1]
          return styleSheetRegistry.computeId(baseId, props)
        })
        .join(' ')
    }
  }
})

export function flush() {
  const cssRules = styleSheetRegistry.cssRules()
  styleSheetRegistry.flush()
  return cssRules
}

export default JSXStyle
