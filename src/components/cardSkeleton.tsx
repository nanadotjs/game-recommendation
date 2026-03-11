import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <Card className="mx-5 md:mx-auto max-w-lg bg-gray-600">
      <CardHeader>
        <Skeleton className="aspect-video w-full bg-gray-500" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-full mt-4 mb-2" />
        <Skeleton className="h-4 w-full" />
      </CardContent>
    </Card>
  )
}
