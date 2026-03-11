import { useQuery } from '@tanstack/react-query';
import { GamesController } from '../controllers/games';

export const useAllGames = () => {
  return useQuery({
      queryKey: ['all-games'],
      queryFn: () => GamesController.listAllGames(),
      refetchOnWindowFocus: false,
      refetchOnMount: 'always',
      staleTime: 5 * 60 * 1000,
  });
}