import { useQuery } from '@tanstack/react-query';
import { GamesController } from '../controllers/games';

export const useGameDetail = (id?: number) => {
  return useQuery({
    queryKey: ['game', id],
    queryFn: () => GamesController.listGameDetails(id!),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
}