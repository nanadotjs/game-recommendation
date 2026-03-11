import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useGame } from "@/hooks/useGame"
import { useGameDetail } from "@/services/queries/useGameDetails"

export function GameCard() {
  const { randomGame } = useGame();
  const { data: details, isLoading } = useGameDetail(randomGame?.id);

  if (isLoading) return <div></div>;

  return (
    <Card className="relative mx-5 md:mx-auto max-w-lg pt-0 bg-[#16151B]">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={details?.thumbnail}
        alt="cover"
        className="relative z-20 aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary" className="bg-[#2c273e] text-white p-3">{details?.developer}</Badge>
        </CardAction>
        <CardTitle className="text-orange-400">{details?.title}</CardTitle>
        <CardDescription>
          <p className="text-sm/6 underline">{details?.genre}</p>
          <p className="text-base my-3">{details?.short_description}</p>
          <p className="text-sm/6">Para: {details?.platform}</p>
          <p className="text-sm/6">Lançamento: 11111</p>
        </CardDescription>
      </CardHeader>
      <CardFooter>
      <a href={details?.game_url} target="_blank" rel="noopener noreferrer" className="w-full block">
        <Button className="w-full bg-orange-400 text-[#2c273e] hover:bg-orange-500 cursor-pointer">
          Ver detalhes
        </Button>
      </a>
      </CardFooter>
    </Card>
  )
}
