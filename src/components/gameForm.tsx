import { ComboSelect } from "@/components/comboSelect";
import { InputRam } from "@/components/inputRam";
import { SelectPlatform } from "@/components/selectPlatform";
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { useAllGames } from "@/services/queries/useAllGames";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import formatMemory from "@/utils/formatMemory";
import { useGame } from "@/hooks/useGame";
import { GamesController } from "@/services/controllers/games";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import AlertDialogCustom from "./alertDialog";


const FormSchema = z.object({
    category: z.array(z.string()).min(1, "Selecione ao menos uma categoria."),
    platform: z.string().optional(),
    ram: z.string().optional(),
})

export default function Form() {
    const { data: gamesList } = useAllGames();
    const { setRandomGame } = useGame();
    const [showRateLimitAlert, setShowRateLimitAlert] = useState(false);
    const [showNoResultsAlert, setShowNoResultsAlert] = useState(false);
    const queryClient = useQueryClient();

    const genres = gamesList
    ? gamesList
        .flatMap(game => game.genre)
        .filter((genre, index, array) => array.indexOf(genre) === index)
    : [];

    const platform = gamesList
    ? gamesList
        .flatMap(game => game.platform)
        .filter((genre, index, array) => array.indexOf(genre) === index)
    : [];

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          category: [],
          platform: "",
          ram: "",
        },
      })

      const [clickCount, setClickCount] = useState(0);
      // eslint-disable-next-line react-hooks/purity
      const [startTime, setStartTime] = useState(Date.now());


      async function onSubmit(data: z.infer<typeof FormSchema>) {
        if (!gamesList) return;

        // eslint-disable-next-line react-hooks/purity
        const now = Date.now();
        const secondsPassed = (now - startTime) / 1000;

        if (secondsPassed > 60) {
          setClickCount(1);
          setStartTime(now);
        } else {
          if (clickCount >= 20) {
            setShowRateLimitAlert(true);
          }
          setClickCount(prev => prev + 1);
        }
    
        const filteredList = gamesList.filter(game => {
          const category = data.category.includes(game.genre);
          const platform = !data.platform || game.platform === data.platform;
          return category && platform;
        });

          if (filteredList.length === 0) {
            setShowNoResultsAlert(true);
            return;
          }

          if (data.ram) {
            const userRam = parseFloat(data.ram);
            let validGame = false;
        
            // Faz até 10 requisições se não achar um resultado
            for (let i = 0; i < 10; i++) {
              // eslint-disable-next-line react-hooks/purity
              const randomIndex = Math.floor(Math.random() * filteredList.length);
              const gameIndex = filteredList[randomIndex];
        
              const details = await queryClient.fetchQuery({
                queryKey: ['game', gameIndex.id],
                queryFn: () => GamesController.listGameDetails(gameIndex.id),
              });
        
              const gameRam = formatMemory(details.minimum_system_requirements?.memory);
        
              if (gameRam !== null && gameRam <= userRam) {
                setRandomGame(details);
                validGame = true;
                break; 
              }
            }
        
            if (!validGame) {
              setShowNoResultsAlert(true)
            };
            
          } else {
            // eslint-disable-next-line react-hooks/purity
            const result = filteredList[Math.floor(Math.random() * filteredList.length)];
            setRandomGame(result);
          }
        }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <FieldGroup className="items-start">
          <Controller
            name="category"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Categoria*</FieldLabel>
                <ComboSelect 
                  data={genres} 
                  value={field.value}
                  onValueChange={field.onChange}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} className="min-h-[20px]" />
                )}
              </Field>
            )}
          />
  
          <Controller
            name="platform"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Plataforma</FieldLabel>
                <SelectPlatform 
                  data={platform}
                  value={field.value}
                  onValueChange={field.onChange}
                />
              </Field>
            )}
          />
  
          <Controller
            name="ram"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Memória RAM (GB)</FieldLabel>
                <InputRam
                  value={field.value}
                  onValueChange={field.onChange}
                  aria-invalid={fieldState.invalid}
                />
              </Field>
            )}
          />
  
          <Field orientation="horizontal" className="flex mt-7">
            <Button type="button" variant="outline" onClick={() => form.reset()} className="text-sm px-6 py-2.5 cursor-pointer bg-transparent hover:bg-orange-400 text-white">
              Limpar
            </Button>
            <Button type="submit" className="text-sm px-6 py-2.5 cursor-pointer bg-orange-400 hover:bg-orange-500 text-[#2c273e]">Enviar</Button>
          </Field>
        </FieldGroup>

        <AlertDialogCustom open={showNoResultsAlert} setOpen={setShowNoResultsAlert} title="Nenhum resultado" description="Parece que os filtros que você aplicou não retornam nenhum jogo. Que tal alterar e tentar novamente?" />
        <AlertDialogCustom open={showRateLimitAlert} setOpen={setShowRateLimitAlert} title="Calma lá campeão" description="Você realizou muitas requisições em pouco tempo. Por favor, calma lá e tenta depois." />
      </form>
    )
}
