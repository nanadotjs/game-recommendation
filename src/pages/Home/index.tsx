import { ComboSelect } from "@/components/comboSelect";
import { GameCard } from "@/components/gameCard";
import { InputRam } from "@/components/inputRam";
import { SelectPlatform } from "@/components/selectPlatform";
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"

export default function Home() {
    const frameworks = [
        "Next.js",
        "SvelteKit",
        "Nuxt.js",
        "Remix",
        "Astro",
      ]

    const platform = [
        "PC",
        "Videogame",
        "Ambos"
    ]

    return (
        <>
        <div className="flex items-center gap-10 rounded-xl p-6 border border-orange-400 bg-[#363245] m-8 flex-wrap xl:flex-nowrap">
        <div className="flex">
        <img className="size-12 shrink-0" src="src/assets/joystick.png" alt="Logo" />
            <div className="ml-2 lg:whitespace-nowrap">
                <p className="text-xl text-white">Level Up</p>
                <p className="text-sm text-gray-100">Recommendações de jogos</p>
            </div>
        </div>
        <FieldGroup>
            <Field>
                <FieldLabel htmlFor="category">Categoria*</FieldLabel>
                <ComboSelect data={frameworks} />
                <FieldDescription>
                    Selecione ao menos uma
                </FieldDescription>
            </Field>
            <Field>
                <FieldLabel htmlFor="platform">Plataforma</FieldLabel>
                <SelectPlatform data={platform} />
            </Field>
            <Field>
                <FieldLabel htmlFor="ram">Memória RAM</FieldLabel>
                <InputRam />
            </Field>

            <Field orientation="horizontal">
                <Button type="reset" variant="outline" className="text-sm px-6 py-2.5 cursor-pointer bg-transparent hover:bg-orange-400 text-white">
                    Limpar
                </Button>
                <Button type="submit" className="text-sm px-6 py-2.5 cursor-pointer bg-orange-400 hover:bg-orange-500 text-[#2c273e]">Enviar</Button>
            </Field>
        </FieldGroup>
        </div>

        <GameCard />
        </>
    )
}