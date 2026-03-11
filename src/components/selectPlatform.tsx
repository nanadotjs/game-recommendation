import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

type PlatformProps = {
    data: string[];
    value?: string;
    onValueChange?: (value: string | null) => void;
}
  
  export function SelectPlatform({ data, value, onValueChange }: PlatformProps) {
    return (
        <Select value={value} onValueChange={onValueChange}>
          <SelectTrigger className={`lg:max-w-[300px] min-w-[140px] transition-colors ${value ? "text-white" : "text-gray-400"}`}>
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
  