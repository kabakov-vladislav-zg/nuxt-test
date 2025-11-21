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
      slots: {
        base: 'rounded-xl! '
      },
      compoundVariants: [
        {
          color: 'neutral',
          variant: 'soft',
          class: 'bg-[#F3F3F3]! hover:bg-[#E8E8E8]! active:bg-[#E8E8E8]! focus-visible:bg-[#E8E8E8]!'
        },
        {
          color: 'neutral',
          variant: 'outline',
          class: 'ring-[#E8E8E8]! hover:bg-[#E8E8E8]! active:bg-[#E8E8E8]! focus-visible:bg-[#E8E8E8]!'
        },
      ],
    },
  },
})