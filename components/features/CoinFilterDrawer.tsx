'use client'

import { CategoryMultiSelect, ChainSelect } from "@entities/coin";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@shadcn/components/ui/button";
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@shadcn/components/ui/drawer";
import { Field, FieldLabel } from "@shadcn/components/ui/field";
import useIsMobile from "@shared/hooks/use-is-mobile";
import { useState } from "react";

interface Props {
  initCategories: number[]
  initChain?: number
  applyFilters: (categories: number[], chain?: number) => void
}

const CoinFilterPopover = ({ initCategories = [], initChain, applyFilters }: Props) => {
  const { isMobile } = useIsMobile();
  const [open, setOpen] = useState(false)
  const [categories, setCategories] = useState<number[]>(initCategories);
  const [chain, setChain] = useState<number|undefined>(initChain);

  const submit = () => {
    applyFilters(categories, chain);
    setOpen(false);
  }
  const reset = () => {
    setCategories([]);
    setChain(undefined);

    applyFilters([], undefined);
    setOpen(false);
  }

  const handleOpenChange = (next: boolean) => {
    if (next) {
      setCategories(initCategories);
      setChain(initChain);
    }
    setOpen(next);
  }

  return (
    <Drawer
      open={open}
      onOpenChange={handleOpenChange}
      showSwipeHandle={isMobile}
      swipeDirection={isMobile ? "down" : "right"}
    >
      <DrawerTrigger render={<Button size="lg" variant="secondary"><FontAwesomeIcon icon={faFilter} /> Filters</Button>} />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Filters</DrawerTitle>
        </DrawerHeader>
        <div className="p-4 space-y-3">
          <Field>
            <FieldLabel>Chain</FieldLabel>
            <ChainSelect value={chain} onChange={setChain} />
          </Field>
          <Field>
            <FieldLabel>Category</FieldLabel>
            <CategoryMultiSelect value={categories} onChange={setCategories} />
          </Field>
        </div>
        <DrawerFooter>
          <div className="flex flex-col space-y-2">
            <Button onClick={submit}>Submit</Button>
            <Button variant="outline" onClick={reset}>Reset</Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default CoinFilterPopover;