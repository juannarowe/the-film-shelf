const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500'

export default function getImageUrl(posterPath: string): string {
    return `${IMG_BASE_URL}${posterPath}`
}
