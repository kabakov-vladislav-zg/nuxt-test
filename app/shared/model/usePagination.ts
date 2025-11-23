import chunk from 'lodash/chunk';

export function usePagination<T>({
  page,
  list,
  itemsPerPage
}: {
  page: MaybeRefOrGetter<number>;
  list: MaybeRefOrGetter<T[]>;
  itemsPerPage: MaybeRefOrGetter<number>;
}
) {
  const listChunk = computed(() => chunk(toValue(list), toValue(itemsPerPage)));
  const currentList = computed(() => listChunk.value[toValue(page) - 1]!);
  return currentList
}
