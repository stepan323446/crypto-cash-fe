import type { SortingState } from "@tanstack/react-table";

interface UseUrlSortingOptions {
  ordering: string;
  setOrdering: (value: string) => void;
}

export function useUrlSorting({ ordering, setOrdering }: UseUrlSortingOptions) {
  const sorting: SortingState = ordering
    ? [
        {
          id: ordering.startsWith("-") ? ordering.slice(1) : ordering,
          desc: ordering.startsWith("-"),
        },
      ]
    : [];

  function onSortingChange(
    updater: SortingState | ((old: SortingState) => SortingState),
  ) {
    const newSorting =
      typeof updater === "function" ? updater(sorting) : updater;
    const nextOrdering =
      newSorting.length === 0
        ? ""
        : `${newSorting[0].desc ? "-" : ""}${newSorting[0].id}`;

    setOrdering(nextOrdering);
  }

  return { sorting, onSortingChange };
}
