export interface Movie {
    id: number;
    title: string;
    genre_ids: number[];
    overview: string;
    poster_path: string;
    release_date: string;
    original_title: string;
    original_language: string;
    vote_average: number;
}

export interface CastMember {
    id: number
    name: string
}

export interface CrewMember {
    credit_id: string
    job: string
    name: string
}

export interface Credits {
    cast: CastMember[]
    crew: CrewMember[]
}