export default defineAppConfig({
  ui: {
    blogPosts: {
      variants: {
        orientation: {
          horizontal: 'sm:grid sm:grid-cols-2 lg:grid-cols-4',
          vertical: ''
        }
      }
    },
    button: {
      slots: {
        base: 'rounded-xl! leading-none!'
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
    pageHeader: {
      slots: {
        root: 'border-0! pb-0! pt-20!',
        container: '',
        title: 'text-[5.25rem]! font-normal!',
      },
    },
    pageBody: {
      base: 'pb-35! mt-10! space-y-8!'
    },
    header: {
      slots: {
        root: 'border-0',
        container: 'lg:px-10! max-w-full!',
        left: 'grow-0!',
        center: 'flex-1! justify-end! items-center!',
        right: 'grow-0! gap-4!',
        toggle: '*:size-8',
        body: 'flex-1!',
      },
    },
    navigationMenu: {
      slots: {
        list: 'gap-14.5!',
        link: 'text-xl! text-highlighted! hover:text-muted!',
      },
    }
  },
})