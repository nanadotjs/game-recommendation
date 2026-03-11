import { GameCard } from "@/components/gameCard";
import Form from "@/components/gameForm";
import { useGame } from "@/hooks/useGame";

export default function Home() {
  const { randomGame, } = useGame();


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
        <Form />
        </div>
        {randomGame && <GameCard />}
        </>
    )
}