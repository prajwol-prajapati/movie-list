export interface MovieInterface {
  id: number;
  title: string;
  genre: string;
  description: string;
  poster: string;
  director: DirectorInterface;
}

export interface DirectorInterface {
  name?: string;
  details?: string;
  image?: string;
}
