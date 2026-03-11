import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

type CategoryProps = {
    data: string[]
}
  
  export function SelectPlatform({ data }: CategoryProps) {
    return (
        <Select>
          <SelectTrigger className="lg:max-w-[300px] min-w-[140px]">
            <SelectValue placeholder="Selecione" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {data.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
      </Select>
    )
  }
  