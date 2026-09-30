import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
} from "@shadcn/components/ui/combobox";
import { useCategories } from "../api/queries";

type Props = {
  value: number[];
  onChange: (ids: number[]) => void;
};

const CategoryMultiSelect = ({ value, onChange }: Props) => {
  const { data = [], isLoading } = useCategories();
  const selected = data.filter((c) => value.includes(c.id));

  return (
    <Combobox
      multiple
      items={data}
      value={selected}
      onValueChange={(items) => onChange(items.map((c) => c.id))}
      itemToStringLabel={(n) => n.name}
      itemToStringValue={(n) => String(n.id)}
      isItemEqualToValue={(a, b) => a.id === b.id}
      disabled={isLoading}
    >
      <ComboboxChips>
        <ComboboxValue>
          {selected.map((c) => (
            <ComboboxChip key={c.id}>{c.name}</ComboboxChip>
          ))}
        </ComboboxValue>
        <ComboboxChipsInput placeholder="Choose category" />
      </ComboboxChips>
      <ComboboxContent>
        <ComboboxEmpty>Nothing Found</ComboboxEmpty>
        <ComboboxList>
          {(c) => (
            <ComboboxItem key={c.id} value={c}>
              {c.name}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}

export default CategoryMultiSelect;