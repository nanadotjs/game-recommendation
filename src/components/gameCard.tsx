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

export function GameCard() {
  return (
    <Card className="relative mx-5 md:mx-auto max-w-sm pt-0 bg-[#16151B]">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary" className="bg-[#2c273e] text-white p-3">Jagex</Badge>
        </CardAction>
        <CardTitle className="text-orange-400">RuneScape</CardTitle>
        <CardDescription>
          <p className="text-sm/6 underline">MMORPG</p>
          <p className="text-base my-3">A popular 3D browser MMORPG boasting a huge player base and 15 years of content.</p>
          <p className="text-sm/6">Para: Windows, Web Browser</p>
          <p className="text-sm/6">Lançamento: 2001-01-04</p>
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full bg-orange-400 text-[#2c273e] hover:bg-orange-500 cursor-pointer">Detalhes</Button>
      </CardFooter>
    </Card>
  )
}
