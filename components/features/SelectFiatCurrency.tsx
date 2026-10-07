"use client";

import { useFiatStore } from "@/stores/currency";
import { FiatDto } from "@entities/coin/api/types";
import { useCurrentFiat } from "@entities/coin/model/useCurrentFiat";
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxEmpty,
  ComboboxList,
  ComboboxItem,
} from "@shadcn/components/ui/combobox";

const SelectFiatCurrency = () => {
  const { currentFiat, currencies } = useCurrentFiat();
  const setCurrentFiat = useFiatStore((state) => state.setCurrent);

  const isLoading = !currencies;

  return (
    <Combobox
      items={currencies ?? []} 
      disabled={isLoading}
      itemToStringLabel={(item: FiatDto) => `${item.name} (${item.display_sign_name})`}
      value={currentFiat}
      onValueChange={(item: FiatDto | null) => item && setCurrentFiat(item.code)}>
      <ComboboxInput
        placeholder={isLoading ? "Loading..." : "Select currency"}
      />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item: FiatDto) => (
            <ComboboxItem key={item.code} value={item}>
              {item.name} ({item.display_sign_name})
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default SelectFiatCurrency;
