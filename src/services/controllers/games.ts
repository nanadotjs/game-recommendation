import type { Game, GamesFilter } from "../dtos/gamesDTO";
import api from "../instanceOfApi";

export class GamesController {
    static async listGames(filter?: GamesFilter): Promise<Game[]> {
        let query = '';

        if (filter) {
            const params = new URLSearchParams();

            if (filter.tags?.length) {
                params.append('tag', filter.tags.join('.'));
            }

            if (filter.platform) {
                params.append('platform', filter.platform);
            }

            query = `?${params.toString()}`;
        }

        const { data } = await api.get<Game[]>(`/filter${query}`);
        return data;
    }

    static async listGameDetails(id: number): Promise<Game> {
        const { data } = await api.get<Game>(`/game?id=${id}`);
        return data;
    }

    static async listAllGames(): Promise<Game[]> {
        const { data } = await api.get<Game[]>(`/games`);
        return data;
    }
}