import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@shadcn/components/ui/combobox";
import { useNetworks } from "../api/queries";

type Props = {
  value?: number;
  onChange: (id: number | undefined) => void;
};

const ChainSelect = ({ value, onChange }: Props) => {
  const { data = [], isLoading } = useNetworks();
  const selected = data.find((c) => c.id === value) ?? null;

  return (
    <Combobox
      items={data}
      value={selected}
      onValueChange={(c) => onChange(c ? c.id : undefined)}
      itemToStringLabel={(n) => n.name}
      itemToStringValue={(n) => String(n.id)}
      isItemEqualToValue={(a, b) => a.id === b.id}
      disabled={isLoading}
    >
      <ComboboxInput placeholder="Choose chain" showClear />
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

export default ChainSelect;