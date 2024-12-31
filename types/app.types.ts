export interface IMovie {
  id: number;
  name: string;
  description: string;
  duration: string;
  rating: number;
  poster: string;
  genre: string;
}

export interface IActor {
  name: string;
  imdb_id: string;
}

export interface IDetailedMovie extends IMovie {
  trivia: string[];
  actors: IActor[];
}
