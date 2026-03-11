import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { useWishlist } from "@/hooks/useWishlist"
import { Button } from "@base-ui/react";

export function Wishlist() {
    const { wishlist, addToWishlist } = useWishlist();

    return (
        <div className="flex flex-col xl:flex-row gap-5 my-10 px-5">
        <Card className="rounded-xl p-6 border border-orange-400 bg-[#363245] w-full lg:max-w-md h-fit mx-auto">
            <CardContent className="flex flex-col my-auto">
                <h2 className="text-orange-400 text-2xl font-extrabold tracking-wider uppercase mb-4">Sua Wishlist</h2>
                <p className="text-white text-md">
                Deixe salvo aqui os jogos que você se interessou durante as buscas!
                </p>
            </CardContent>
        <CardFooter>
        </CardFooter>
        </Card>

        <div className="flex flex-col xl:flex-row xl:flex-wrap gap-6 justify-start flex-1 mx-auto">
                {wishlist.map((item) => (
                    <Card 
                        key={item.id} 
                        className="relative pt-0 pb-0 border-none bg-[#16151B] overflow-hidden flex-none w-full md:w-[365px]">
                        <div className="absolute inset-0 z-30 aspect-video bg-black/45" />
                        
                        <div className="flex flex-col items-center justify-center relative">
                        <a href={item?.game_url} target="_blank" rel="noopener noreferrer" className="w-full block">
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="relative z-20 aspect-video w-full object-cover brightness-50"
                            />
                            
                            <div className="absolute z-40 inset-0 flex flex-col items-center justify-center p-4 text-center">
                                <p className="text-orange-400 text-xl font-bold mb-2 drop-shadow-lg">
                                    {item.title}
                                </p>
                                
                                <Button
                                    className="cursor-pointer underline text-orange-400 hover:text-orange-300 font-semibold" 
                                    onClick={() => addToWishlist(item)}
                                >
                                    Remover
                                </Button>
                            </div>
                            </a>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}
