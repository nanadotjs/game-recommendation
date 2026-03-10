import { Field } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

export function InputRam() {
  return (
    <div className="lg:max-w-[300px] min-w-[140px]">
    <Field>
      <InputGroup>
        <InputGroupInput id="input-group-url" placeholder="6" />
        <InputGroupAddon align="inline-end">
          RAM
        </InputGroupAddon>
      </InputGroup>
    </Field>
    </div>
  )
}
