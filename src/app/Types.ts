export default interface Movie {
    
        backdrop_path?: string | null; 
        id: number;
        title: string;
        name?: string; 
        first_air_date?:string;
        original_title?: string; // Optional property
        overview?: string; // Optional property
        poster_path?: string | null; 
        media_type: 'movie' | 'tv'; 
        adult: boolean;
        original_language: string;
        genre_ids: number[]; 
        popularity: number;
        release_date: string; 
        video: boolean;
        vote_average: number;
        vote_count: number;
        origin_country?: string[]; // Optional property
      
}