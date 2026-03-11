import { useQuery } from '@tanstack/react-query';
import { GamesController } from '../controllers/games';
import type { GamesFilter } from '../dtos/gamesDTO';

export const useGames = (filter?: GamesFilter) => {
  return useQuery({
      queryKey: ['games', filter],
      queryFn: () => GamesController.listGames(filter),
      refetchOnWindowFocus: false,
      refetchOnMount: 'always',
      staleTime: 5 * 60 * 1000,
  });
}