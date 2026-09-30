import { useState, useEffect } from 'react'
import { SearchIcon } from 'lucide-react'
import { InputGroup, InputGroupAddon, InputGroupInput } from "@shadcn/components/ui/input-group"

interface CoinSearchInputProps {
  value: string
  onSearch: (value: string) => void
  placeholder?: string
}

const CoinSearchInput =({ value, onSearch }: CoinSearchInputProps) => {
  const [localValue, setLocalValue] = useState(value)
  const [prevValue, setPrevValue] = useState(value)

  if (value !== prevValue) {
    setPrevValue(value)
    setLocalValue(value)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (localValue !== value) onSearch(localValue)
    }, 400)
    return () => clearTimeout(timeout)
  }, [localValue, value, onSearch])

  return (
    <div className="relative">
      <InputGroup className="h-10">
        <InputGroupInput
          className="text-base! h-9"
          placeholder="Search coin..."
          value={localValue}
          onChange={(e) => setLocalValue(e.target.value)}/>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
export default CoinSearchInput;