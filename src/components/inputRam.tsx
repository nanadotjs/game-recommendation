import { Field } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

type InputProps = {
  value?: string;
  onValueChange?: (value: string) => void;
}

export function InputRam({value, onValueChange}: InputProps) {
  return (
    <div className={`lg:max-w-[300px] min-w-[140px] transition-colors ${value ? "text-white" : "text-gray-400"}`}>
    <Field>
      <InputGroup>
        <InputGroupInput id="input-group-url" placeholder="6" value={value} onChange={(e) => onValueChange?.(e.target.value)} />
        <InputGroupAddon align="inline-end">
          RAM
        </InputGroupAddon>
      </InputGroup>
    </Field>
    </div>
  )
}
