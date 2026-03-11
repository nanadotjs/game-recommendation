export interface Game {
    id: number,
    title: string,
    thumbnail: string,
    short_description: string,
    game_url: string,
    genre: string,
    platform: string,
    developer: string,
    release_date: Date,
    minimum_system_requirements?: {
        memory: string,
    }    
}

export interface GamesFilter {
    tags?: string[];
    platform?: string;
}