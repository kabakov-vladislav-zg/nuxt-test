export default defineAppConfig({
  ui: {
    blogPosts: {
      base: '',
      variants: {
        orientation: {
          horizontal: 'sm:grid sm:grid-cols-2 lg:grid-cols-4',
          vertical: ''
        }
      }
    },
    button: {
      compoundVariants: [
        {
          color: 'neutral',
          variant: 'soft',
          class: 'rounded-xl! bg-[#F3F3F3]! hover:bg-[#E8E8E8]! active:bg-[#E8E8E8]! focus-visible:bg-[#E8E8E8]!'
        },
        {
          color: 'neutral',
          variant: 'outline',
          class: 'ring-[#E8E8E8]! rounded-xl! border-[#E8E8E8]! hover:bg-[#E8E8E8]! active:bg-[#E8E8E8]! focus-visible:bg-[#E8E8E8]!'
        },
      ],
    },
  },
})