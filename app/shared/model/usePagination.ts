import chunk from 'lodash/chunk';

export function usePagination<T>(list: MaybeRefOrGetter<T[]>, itemsPerPage: MaybeRefOrGetter<number>) {
  const page = ref(1);
  const listChunk = computed(() => chunk(toValue(list), toValue(itemsPerPage)));
  const currentList = computed(() => listChunk.value[page.value - 1]!);
  return { page, currentList }
}
