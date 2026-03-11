import * as React from "react"
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
  useComboboxAnchor,
} from "@/components/ui/combobox"

type CategoryProps = {
    data: string[];
    value?: string[];
    onValueChange?: (value: string[]) => void;
}

export function ComboSelect({ data,value, onValueChange }: CategoryProps) {
  const anchor = useComboboxAnchor()

  return (
    <div className="lg:max-w-[300px] min-w-[140px]">
    <Combobox
      multiple
      autoHighlight
      items={data}
      value={value}
      onValueChange={onValueChange}
    >
      <ComboboxChips ref={anchor}>
        <ComboboxValue>
          {(values) => (
            <React.Fragment>
              {values.map((val: string) => (
                <ComboboxChip key={val}>
                  {val}
                </ComboboxChip>
              ))}
              <ComboboxChipsInput placeholder="Selecione" className="placeholder:text-gray-500" />
            </React.Fragment>
          )}
        </ComboboxValue>
      </ComboboxChips>
      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>Sem resultados</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
    </div>
  )
}
