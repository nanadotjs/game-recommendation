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
import { useWishlist } from "@/hooks/useWishlist"
import { useGameDetail } from "@/services/queries/useGameDetails"
import { formatDate } from "@/utils/formatDate"
import { SkeletonCard } from "./cardSkeleton"

export function GameCard() {
  const { randomGame } = useGame();
  const { data: details, isLoading: loadingGAme } = useGameDetail(randomGame?.id);
  const { addToWishlist, isFavorite } = useWishlist();

  if (loadingGAme) return <SkeletonCard />

  if (!randomGame || !details) return null;

    const handleFavorite = () => {
        addToWishlist({
          id: randomGame.id,
          title: randomGame.title,
          thumbnail: randomGame.thumbnail,
          game_url: randomGame.game_url
        });
    };  


  return (
    <>
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
          <p className="text-sm/6">Lançamento: {formatDate(details?.release_date)}</p>
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex gap-4">
      <a href={details?.game_url} target="_blank" rel="noopener noreferrer" className="w-full block">
        <Button className="w-full bg-orange-400 text-[#2c273e] hover:bg-orange-500 cursor-pointer">
          Ver detalhes
        </Button>
      </a>
      <Button 
        onClick={handleFavorite}
        variant="ghost" 
        className="text-orange-400 border border-orange-400 hover:bg-orange-400 hover:text-white cursor-pointer"
      >
        {isFavorite(randomGame.id) ? "Salvo" : "❤️ Salvar"}
      </Button>
      </CardFooter>
    </Card>
    </>
  )
}
