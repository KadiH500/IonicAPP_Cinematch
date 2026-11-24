export interface Movie {
  id: number;
  title: string;
  year: number;
  genres: string[];
  actors: string[];
  director?: string;
  posterUrl?: string;
  overview?: string;
  source: 'tmdb' | 'admin';
}
