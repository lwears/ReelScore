/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise'
import type { BaseHttpRequest } from '../core/BaseHttpRequest'
export class DefaultService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Movie
   * Search for movies by their original, translated and alternative titles.
   * @param query
   * @param includeAdult
   * @param language
   * @param primaryReleaseYear
   * @param page
   * @param region
   * @param year
   * @returns any 200
   * @throws ApiError
   */
  public searchMovie(
    query: string,
    includeAdult: boolean = false,
    language: string = 'en-US',
    primaryReleaseYear?: string,
    page: number = 1,
    region?: string,
    year?: string,
  ): CancelablePromise<{
    page?: number
    results: Array<{
      adult?: boolean
      backdrop_path?: string
      genre_ids?: Array<number>
      id?: number
      original_language?: string
      original_title?: string
      overview?: string
      popularity?: number
      poster_path?: string
      release_date?: string
      title?: string
      video?: boolean
      vote_average?: number
      vote_count?: number
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/search/movie',
      query: {
        query: query,
        include_adult: includeAdult,
        language: language,
        primary_release_year: primaryReleaseYear,
        page: page,
        region: region,
        year: year,
      },
    })
  }
  /**
   * Movie
   * Find movies using over 30 filters and sort options.
   * @param certification use in conjunction with `region`
   * @param certificationGte use in conjunction with `region`
   * @param certificationLte use in conjunction with `region`
   * @param certificationCountry use in conjunction with the `certification`, `certification.gte` and `certification.lte` filters
   * @param includeAdult
   * @param includeVideo
   * @param language
   * @param page
   * @param primaryReleaseYear
   * @param primaryReleaseDateGte
   * @param primaryReleaseDateLte
   * @param region
   * @param releaseDateGte
   * @param releaseDateLte
   * @param sortBy
   * @param voteAverageGte
   * @param voteAverageLte
   * @param voteCountGte
   * @param voteCountLte
   * @param watchRegion
   * @param withCast can be a comma (`AND`) or pipe (`OR`) separated query
   * @param withCompanies can be a comma (`AND`) or pipe (`OR`) separated query
   * @param withCrew can be a comma (`AND`) or pipe (`OR`) separated query
   * @param withGenres can be a comma (`AND`) or pipe (`OR`) separated query
   * @param withKeywords can be a comma (`AND`) or pipe (`OR`) separated query
   * @param withOriginCountry
   * @param withOriginalLanguage
   * @param withPeople can be a comma (`AND`) or pipe (`OR`) separated query
   * @param withReleaseType possible values are: [1, 2, 3, 4, 5, 6] can be a comma (`AND`) or pipe (`OR`) separated query, can be used in conjunction with `region`
   * @param withRuntimeGte
   * @param withRuntimeLte
   * @param withWatchMonetizationTypes possible values are: [flatrate, free, ads, rent, buy] use in conjunction with `watch_region`, can be a comma (`AND`) or pipe (`OR`) separated query
   * @param withWatchProviders use in conjunction with `watch_region`, can be a comma (`AND`) or pipe (`OR`) separated query
   * @param withoutCompanies
   * @param withoutGenres
   * @param withoutKeywords
   * @param withoutWatchProviders
   * @param year
   * @returns any 200
   * @throws ApiError
   */
  public discoverMovie(
    certification?: string,
    certificationGte?: string,
    certificationLte?: string,
    certificationCountry?: string,
    includeAdult: boolean = false,
    includeVideo: boolean = false,
    language: string = 'en-US',
    page: number = 1,
    primaryReleaseYear?: number,
    primaryReleaseDateGte?: string,
    primaryReleaseDateLte?: string,
    region?: string,
    releaseDateGte?: string,
    releaseDateLte?: string,
    sortBy:
      | 'popularity.asc'
      | 'popularity.desc'
      | 'revenue.asc'
      | 'revenue.desc'
      | 'primary_release_date.asc'
      | 'primary_release_date.desc'
      | 'vote_average.asc'
      | 'vote_average.desc'
      | 'vote_count.asc'
      | 'vote_count.desc' = 'popularity.desc',
    voteAverageGte?: number,
    voteAverageLte?: number,
    voteCountGte?: number,
    voteCountLte?: number,
    watchRegion?: string,
    withCast?: string,
    withCompanies?: string,
    withCrew?: string,
    withGenres?: string,
    withKeywords?: string,
    withOriginCountry?: string,
    withOriginalLanguage?: string,
    withPeople?: string,
    withReleaseType?: number,
    withRuntimeGte?: number,
    withRuntimeLte?: number,
    withWatchMonetizationTypes?: string,
    withWatchProviders?: string,
    withoutCompanies?: string,
    withoutGenres?: string,
    withoutKeywords?: string,
    withoutWatchProviders?: string,
    year?: number,
  ): CancelablePromise<{
    page?: number
    results?: Array<{
      adult?: boolean
      backdrop_path?: string
      genre_ids?: Array<number>
      id?: number
      original_language?: string
      original_title?: string
      overview?: string
      popularity?: number
      poster_path?: string
      release_date?: string
      title?: string
      video?: boolean
      vote_average?: number
      vote_count?: number
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/discover/movie',
      query: {
        certification: certification,
        'certification.gte': certificationGte,
        'certification.lte': certificationLte,
        certification_country: certificationCountry,
        include_adult: includeAdult,
        include_video: includeVideo,
        language: language,
        page: page,
        primary_release_year: primaryReleaseYear,
        'primary_release_date.gte': primaryReleaseDateGte,
        'primary_release_date.lte': primaryReleaseDateLte,
        region: region,
        'release_date.gte': releaseDateGte,
        'release_date.lte': releaseDateLte,
        sort_by: sortBy,
        'vote_average.gte': voteAverageGte,
        'vote_average.lte': voteAverageLte,
        'vote_count.gte': voteCountGte,
        'vote_count.lte': voteCountLte,
        watch_region: watchRegion,
        with_cast: withCast,
        with_companies: withCompanies,
        with_crew: withCrew,
        with_genres: withGenres,
        with_keywords: withKeywords,
        with_origin_country: withOriginCountry,
        with_original_language: withOriginalLanguage,
        with_people: withPeople,
        with_release_type: withReleaseType,
        'with_runtime.gte': withRuntimeGte,
        'with_runtime.lte': withRuntimeLte,
        with_watch_monetization_types: withWatchMonetizationTypes,
        with_watch_providers: withWatchProviders,
        without_companies: withoutCompanies,
        without_genres: withoutGenres,
        without_keywords: withoutKeywords,
        without_watch_providers: withoutWatchProviders,
        year: year,
      },
    })
  }
  /**
   * Details
   * Get the top level details of a movie by ID.
   * @param movieId
   * @param appendToResponse comma separated list of endpoints within this namespace, 20 items max
   * @param language
   * @returns any 200
   * @throws ApiError
   */
  public movieDetails(
    movieId: number,
    appendToResponse?: string,
    language: string = 'en-US',
  ): CancelablePromise<{
    adult?: boolean
    backdrop_path?: string
    belongs_to_collection?: any
    budget?: number
    genres?: Array<{
      id?: number
      name?: string
    }>
    homepage?: string
    id?: number
    imdb_id?: string
    original_language?: string
    original_title?: string
    overview?: string
    popularity?: number
    poster_path?: string
    production_companies?: Array<{
      id?: number
      logo_path?: string
      name?: string
      origin_country?: string
    }>
    production_countries?: Array<{
      iso_3166_1?: string
      name?: string
    }>
    release_date?: string
    revenue?: number
    runtime?: number
    spoken_languages?: Array<{
      english_name?: string
      iso_639_1?: string
      name?: string
    }>
    status?: string
    tagline?: string
    title?: string
    video?: boolean
    vote_average?: number
    vote_count?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/movie/{movie_id}',
      path: {
        movie_id: movieId,
      },
      query: {
        append_to_response: appendToResponse,
        language: language,
      },
    })
  }
  /**
   * Details
   * Get the details of a TV show.
   * @param seriesId
   * @param appendToResponse comma separated list of endpoints within this namespace, 20 items max
   * @param language
   * @returns any 200
   * @throws ApiError
   */
  public tvSeriesDetails(
    seriesId: number,
    appendToResponse?: string,
    language: string = 'en-US',
  ): CancelablePromise<{
    adult?: boolean
    backdrop_path?: string
    created_by?: Array<{
      id?: number
      credit_id?: string
      name?: string
      gender?: number
      profile_path?: string
    }>
    episode_run_time?: Array<number>
    first_air_date?: string
    genres?: Array<{
      id?: number
      name?: string
    }>
    homepage?: string
    id?: number
    in_production?: boolean
    languages?: Array<string>
    last_air_date?: string
    last_episode_to_air?: {
      id?: number
      name?: string
      overview?: string
      vote_average?: number
      vote_count?: number
      air_date?: string
      episode_number?: number
      production_code?: string
      runtime?: number
      season_number?: number
      show_id?: number
      still_path?: string
    }
    name?: string
    next_episode_to_air?: any
    networks?: Array<{
      id?: number
      logo_path?: string
      name?: string
      origin_country?: string
    }>
    number_of_episodes?: number
    number_of_seasons?: number
    origin_country?: Array<string>
    original_language?: string
    original_name?: string
    overview?: string
    popularity?: number
    poster_path?: string
    production_companies?: Array<{
      id?: number
      logo_path?: string
      name?: string
      origin_country?: string
    }>
    production_countries?: Array<{
      iso_3166_1?: string
      name?: string
    }>
    seasons?: Array<{
      air_date?: string
      episode_count?: number
      id?: number
      name?: string
      overview?: string
      poster_path?: string
      season_number?: number
      vote_average?: number
    }>
    spoken_languages?: Array<{
      english_name?: string
      iso_639_1?: string
      name?: string
    }>
    status?: string
    tagline?: string
    type?: string
    vote_average?: number
    vote_count?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}',
      path: {
        series_id: seriesId,
      },
      query: {
        append_to_response: appendToResponse,
        language: language,
      },
    })
  }
  /**
   * TV
   * Search for TV shows by their original, translated and also known as names.
   * @param query
   * @param firstAirDateYear
   * @param includeAdult
   * @param language
   * @param page
   * @param year
   * @returns any 200
   * @throws ApiError
   */
  public searchTv(
    query: string,
    firstAirDateYear?: string,
    includeAdult: boolean = false,
    language: string = 'en-US',
    page: number = 1,
    year?: string,
  ): CancelablePromise<{
    page?: number
    results?: Array<{
      adult?: boolean
      backdrop_path?: string
      genre_ids?: Array<number>
      id?: number
      origin_country?: Array<string>
      original_language?: string
      original_name?: string
      overview?: string
      popularity?: number
      poster_path?: string
      first_air_date?: string
      name?: string
      vote_average?: number
      vote_count?: number
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/search/tv',
      query: {
        query: query,
        first_air_date_year: firstAirDateYear,
        include_adult: includeAdult,
        language: language,
        page: page,
        year: year,
      },
    })
  }
  /**
   * Multi
   * Use multi search when you want to search for movies, TV shows and people in a single request.
   * @param query
   * @param includeAdult
   * @param language
   * @param page
   * @returns any 200
   * @throws ApiError
   */
  public searchMulti(
    query: string,
    includeAdult: boolean = false,
    language: string = 'en-US',
    page: number = 1,
  ): CancelablePromise<{
    page?: number
    results: Array<{
      adult?: boolean
      backdrop_path?: string
      id?: number
      title?: string
      original_language?: string
      original_title?: string
      overview?: string
      poster_path?: string
      media_type?: string
      genre_ids?: Array<number>
      popularity?: number
      release_date?: string
      video?: boolean
      vote_average?: number
      vote_count?: number
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/search/multi',
      query: {
        query: query,
        include_adult: includeAdult,
        language: language,
        page: page,
      },
    })
  }
  /**
   * Person
   * Search for people by their name and also known as names.
   * @param query
   * @param includeAdult
   * @param language
   * @param page
   * @returns any 200
   * @throws ApiError
   */
  public searchPerson(
    query: string,
    includeAdult: boolean = false,
    language: string = 'en-US',
    page: number = 1,
  ): CancelablePromise<{
    page?: number
    results?: Array<{
      adult?: boolean
      gender?: number
      id?: number
      known_for_department?: string
      name?: string
      original_name?: string
      popularity?: number
      profile_path?: string
      known_for?: Array<{
        adult?: boolean
        backdrop_path?: string
        id?: number
        title?: string
        original_language?: string
        original_title?: string
        overview?: string
        poster_path?: string
        media_type?: string
        genre_ids?: Array<number>
        popularity?: number
        release_date?: string
        video?: boolean
        vote_average?: number
        vote_count?: number
      }>
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/search/person',
      query: {
        query: query,
        include_adult: includeAdult,
        language: language,
        page: page,
      },
    })
  }
  /**
   * Details
   * Query the API configuration details.
   * @returns any 200
   * @throws ApiError
   */
  public configurationDetails(): CancelablePromise<{
    images?: {
      base_url?: string
      secure_base_url?: string
      backdrop_sizes?: Array<string>
      logo_sizes?: Array<string>
      poster_sizes?: Array<string>
      profile_sizes?: Array<string>
      still_sizes?: Array<string>
    }
    change_keys?: Array<string>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/configuration',
    })
  }
  /**
   * Details
   * Query the details of a TV season.
   * @param seriesId
   * @param seasonNumber
   * @param appendToResponse comma separated list of endpoints within this namespace, 20 items max
   * @param language
   * @returns any 200
   * @throws ApiError
   */
  public tvSeasonDetails(
    seriesId: number,
    seasonNumber: number,
    appendToResponse?: string,
    language: string = 'en-US',
  ): CancelablePromise<{
    _id?: string
    air_date?: string
    episodes?: Array<{
      air_date?: string
      episode_number?: number
      id?: number
      name?: string
      overview?: string
      production_code?: string
      runtime?: number
      season_number?: number
      show_id?: number
      still_path?: string
      vote_average?: number
      vote_count?: number
      crew?: Array<{
        department?: string
        job?: string
        credit_id?: string
        adult?: boolean
        gender?: number
        id?: number
        known_for_department?: string
        name?: string
        original_name?: string
        popularity?: number
        profile_path?: string
      }>
      guest_stars?: Array<{
        character?: string
        credit_id?: string
        order?: number
        adult?: boolean
        gender?: number
        id?: number
        known_for_department?: string
        name?: string
        original_name?: string
        popularity?: number
        profile_path?: string
      }>
    }>
    name?: string
    overview?: string
    id?: number
    poster_path?: string
    season_number?: number
    vote_average?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}/season/{season_number}',
      path: {
        series_id: seriesId,
        season_number: seasonNumber,
      },
      query: {
        append_to_response: appendToResponse,
        language: language,
      },
    })
  }
  /**
   * Details
   * Query the details of a TV episode.
   * @param seriesId
   * @param seasonNumber
   * @param episodeNumber
   * @param appendToResponse comma separated list of endpoints within this namespace, 20 items max
   * @param language
   * @returns any 200
   * @throws ApiError
   */
  public tvEpisodeDetails(
    seriesId: number,
    seasonNumber: number,
    episodeNumber: number,
    appendToResponse?: string,
    language: string = 'en-US',
  ): CancelablePromise<{
    air_date?: string
    crew?: Array<{
      department?: string
      job?: string
      credit_id?: string
      adult?: boolean
      gender?: number
      id?: number
      known_for_department?: string
      name?: string
      original_name?: string
      popularity?: number
      profile_path?: string
    }>
    episode_number?: number
    guest_stars?: Array<{
      character?: string
      credit_id?: string
      order?: number
      adult?: boolean
      gender?: number
      id?: number
      known_for_department?: string
      name?: string
      original_name?: string
      popularity?: number
      profile_path?: string
    }>
    name?: string
    overview?: string
    id?: number
    production_code?: string
    runtime?: number
    season_number?: number
    still_path?: string
    vote_average?: number
    vote_count?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}/season/{season_number}/episode/{episode_number}',
      path: {
        series_id: seriesId,
        season_number: seasonNumber,
        episode_number: episodeNumber,
      },
      query: {
        append_to_response: appendToResponse,
        language: language,
      },
    })
  }
  /**
   * TV
   * Find TV shows using over 30 filters and sort options.
   * @param airDateGte
   * @param airDateLte
   * @param firstAirDateYear
   * @param firstAirDateGte
   * @param firstAirDateLte
   * @param includeAdult
   * @param includeNullFirstAirDates
   * @param language
   * @param page
   * @param screenedTheatrically
   * @param sortBy
   * @param timezone
   * @param voteAverageGte
   * @param voteAverageLte
   * @param voteCountGte
   * @param voteCountLte
   * @param watchRegion
   * @param withCompanies can be a comma (`AND`) or pipe (`OR`) separated query
   * @param withGenres can be a comma (`AND`) or pipe (`OR`) separated query
   * @param withKeywords can be a comma (`AND`) or pipe (`OR`) separated query
   * @param withNetworks
   * @param withOriginCountry
   * @param withOriginalLanguage
   * @param withRuntimeGte
   * @param withRuntimeLte
   * @param withStatus possible values are: [0, 1, 2, 3, 4, 5], can be a comma (`AND`) or pipe (`OR`) separated query
   * @param withWatchMonetizationTypes possible values are: [flatrate, free, ads, rent, buy] use in conjunction with `watch_region`, can be a comma (`AND`) or pipe (`OR`) separated query
   * @param withWatchProviders use in conjunction with `watch_region`, can be a comma (`AND`) or pipe (`OR`) separated query
   * @param withoutCompanies
   * @param withoutGenres
   * @param withoutKeywords
   * @param withoutWatchProviders
   * @param withType possible values are: [0, 1, 2, 3, 4, 5, 6], can be a comma (`AND`) or pipe (`OR`) separated query
   * @returns any 200
   * @throws ApiError
   */
  public discoverTv(
    airDateGte?: string,
    airDateLte?: string,
    firstAirDateYear?: number,
    firstAirDateGte?: string,
    firstAirDateLte?: string,
    includeAdult: boolean = false,
    includeNullFirstAirDates: boolean = false,
    language: string = 'en-US',
    page: number = 1,
    screenedTheatrically?: boolean,
    sortBy:
      | 'popularity.asc'
      | 'popularity.desc'
      | 'revenue.asc'
      | 'revenue.desc'
      | 'primary_release_date.asc'
      | 'primary_release_date.desc'
      | 'vote_average.asc'
      | 'vote_average.desc'
      | 'vote_count.asc'
      | 'vote_count.desc' = 'popularity.desc',
    timezone?: string,
    voteAverageGte?: number,
    voteAverageLte?: number,
    voteCountGte?: number,
    voteCountLte?: number,
    watchRegion?: string,
    withCompanies?: string,
    withGenres?: string,
    withKeywords?: string,
    withNetworks?: number,
    withOriginCountry?: string,
    withOriginalLanguage?: string,
    withRuntimeGte?: number,
    withRuntimeLte?: number,
    withStatus?: string,
    withWatchMonetizationTypes?: string,
    withWatchProviders?: string,
    withoutCompanies?: string,
    withoutGenres?: string,
    withoutKeywords?: string,
    withoutWatchProviders?: string,
    withType?: string,
  ): CancelablePromise<{
    page?: number
    results?: Array<{
      backdrop_path?: string
      first_air_date?: string
      genre_ids?: Array<number>
      id?: number
      name?: string
      origin_country?: Array<string>
      original_language?: string
      original_name?: string
      overview?: string
      popularity?: number
      poster_path?: string
      vote_average?: number
      vote_count?: number
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/discover/tv',
      query: {
        'air_date.gte': airDateGte,
        'air_date.lte': airDateLte,
        first_air_date_year: firstAirDateYear,
        'first_air_date.gte': firstAirDateGte,
        'first_air_date.lte': firstAirDateLte,
        include_adult: includeAdult,
        include_null_first_air_dates: includeNullFirstAirDates,
        language: language,
        page: page,
        screened_theatrically: screenedTheatrically,
        sort_by: sortBy,
        timezone: timezone,
        'vote_average.gte': voteAverageGte,
        'vote_average.lte': voteAverageLte,
        'vote_count.gte': voteCountGte,
        'vote_count.lte': voteCountLte,
        watch_region: watchRegion,
        with_companies: withCompanies,
        with_genres: withGenres,
        with_keywords: withKeywords,
        with_networks: withNetworks,
        with_origin_country: withOriginCountry,
        with_original_language: withOriginalLanguage,
        'with_runtime.gte': withRuntimeGte,
        'with_runtime.lte': withRuntimeLte,
        with_status: withStatus,
        with_watch_monetization_types: withWatchMonetizationTypes,
        with_watch_providers: withWatchProviders,
        without_companies: withoutCompanies,
        without_genres: withoutGenres,
        without_keywords: withoutKeywords,
        without_watch_providers: withoutWatchProviders,
        with_type: withType,
      },
    })
  }
  /**
   * Images
   * Get the images that belong to a movie.
   * @param movieId
   * @param includeImageLanguage specify a comma separated list of ISO-639-1 values to query, for example: `en,null`
   * @param language
   * @returns any 200
   * @throws ApiError
   */
  public movieImages(
    movieId: number,
    includeImageLanguage?: string,
    language?: string,
  ): CancelablePromise<{
    backdrops?: Array<{
      aspect_ratio?: number
      height?: number
      iso_639_1?: any
      file_path?: string
      vote_average?: number
      vote_count?: number
      width?: number
    }>
    id?: number
    logos?: Array<{
      aspect_ratio?: number
      height?: number
      iso_639_1?: string
      file_path?: string
      vote_average?: number
      vote_count?: number
      width?: number
    }>
    posters?: Array<{
      aspect_ratio?: number
      height?: number
      iso_639_1?: string
      file_path?: string
      vote_average?: number
      vote_count?: number
      width?: number
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/movie/{movie_id}/images',
      path: {
        movie_id: movieId,
      },
      query: {
        include_image_language: includeImageLanguage,
        language: language,
      },
    })
  }
  /**
   * Images
   * Get the images that belong to a TV series.
   * @param seriesId
   * @param includeImageLanguage specify a comma separated list of ISO-639-1 values to query, for example: `en,null`
   * @param language
   * @returns any 200
   * @throws ApiError
   */
  public tvSeriesImages(
    seriesId: number,
    includeImageLanguage?: string,
    language?: string,
  ): CancelablePromise<{
    backdrops?: Array<{
      aspect_ratio?: number
      height?: number
      iso_639_1?: any
      file_path?: string
      vote_average?: number
      vote_count?: number
      width?: number
    }>
    id?: number
    logos?: Array<{
      aspect_ratio?: number
      height?: number
      iso_639_1?: string
      file_path?: string
      vote_average?: number
      vote_count?: number
      width?: number
    }>
    posters?: Array<{
      aspect_ratio?: number
      height?: number
      iso_639_1?: string
      file_path?: string
      vote_average?: number
      vote_count?: number
      width?: number
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}/images',
      path: {
        series_id: seriesId,
      },
      query: {
        include_image_language: includeImageLanguage,
        language: language,
      },
    })
  }
  /**
   * Images
   * Get the images that belong to a TV season.
   * @param seriesId
   * @param seasonNumber
   * @param includeImageLanguage specify a comma separated list of ISO-639-1 values to query, for example: `en,null`
   * @param language
   * @returns any 200
   * @throws ApiError
   */
  public tvSeasonImages(
    seriesId: number,
    seasonNumber: number,
    includeImageLanguage?: string,
    language?: string,
  ): CancelablePromise<{
    id?: number
    posters?: Array<{
      aspect_ratio?: number
      height?: number
      iso_639_1?: string
      file_path?: string
      vote_average?: number
      vote_count?: number
      width?: number
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}/season/{season_number}/images',
      path: {
        series_id: seriesId,
        season_number: seasonNumber,
      },
      query: {
        include_image_language: includeImageLanguage,
        language: language,
      },
    })
  }
  /**
   * Images
   * Get the images that belong to a TV episode.
   * @param seriesId
   * @param seasonNumber
   * @param episodeNumber
   * @param includeImageLanguage specify a comma separated list of ISO-639-1 values to query, for example: `en,null`
   * @param language
   * @returns any 200
   * @throws ApiError
   */
  public tvEpisodeImages(
    seriesId: number,
    seasonNumber: number,
    episodeNumber: number,
    includeImageLanguage?: string,
    language?: string,
  ): CancelablePromise<{
    id?: number
    stills?: Array<{
      aspect_ratio?: number
      height?: number
      iso_639_1?: any
      file_path?: string
      vote_average?: number
      vote_count?: number
      width?: number
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/images',
      path: {
        series_id: seriesId,
        season_number: seasonNumber,
        episode_number: episodeNumber,
      },
      query: {
        include_image_language: includeImageLanguage,
        language: language,
      },
    })
  }
  /**
   * All
   * Get the trending movies, TV shows and people.
   * @param timeWindow
   * @param language `ISO-639-1`-`ISO-3166-1` code
   * @returns any 200
   * @throws ApiError
   */
  public trendingAll(
    timeWindow: 'day' | 'week' = 'day',
    language: string = 'en-US',
  ): CancelablePromise<{
    page?: number
    results?: Array<{
      adult?: boolean
      backdrop_path?: string
      id?: number
      title?: string
      original_language?: string
      original_title?: string
      overview?: string
      poster_path?: string
      media_type?: string
      genre_ids?: Array<number>
      popularity?: number
      release_date?: string
      video?: boolean
      vote_average?: number
      vote_count?: number
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/trending/all/{time_window}',
      path: {
        time_window: timeWindow,
      },
      query: {
        language: language,
      },
    })
  }
  /**
   * Movies
   * Get the trending movies on TMDB.
   * @param timeWindow
   * @param language `ISO-639-1`-`ISO-3166-1` code
   * @returns any 200
   * @throws ApiError
   */
  public trendingMovies(
    timeWindow: 'day' | 'week' = 'day',
    language: string = 'en-US',
  ): CancelablePromise<{
    page?: number
    results?: Array<{
      adult?: boolean
      backdrop_path?: string
      id?: number
      title?: string
      original_language?: string
      original_title?: string
      overview?: string
      poster_path?: string
      media_type?: string
      genre_ids?: Array<number>
      popularity?: number
      release_date?: string
      video?: boolean
      vote_average?: number
      vote_count?: number
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/trending/movie/{time_window}',
      path: {
        time_window: timeWindow,
      },
      query: {
        language: language,
      },
    })
  }
  /**
   * TV
   * Get the trending TV shows on TMDB.
   * @param timeWindow
   * @param language `ISO-639-1`-`ISO-3166-1` code
   * @returns any 200
   * @throws ApiError
   */
  public trendingTv(
    timeWindow: 'day' | 'week' = 'day',
    language: string = 'en-US',
  ): CancelablePromise<{
    page?: number
    results?: Array<{
      adult?: boolean
      backdrop_path?: string
      id?: number
      name?: string
      original_language?: string
      original_name?: string
      overview?: string
      poster_path?: string
      media_type?: string
      genre_ids?: Array<number>
      popularity?: number
      first_air_date?: string
      vote_average?: number
      vote_count?: number
      origin_country?: Array<string>
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/trending/tv/{time_window}',
      path: {
        time_window: timeWindow,
      },
      query: {
        language: language,
      },
    })
  }
  /**
   * Account States
   * Get the rating, watchlist and favourite status of an account.
   * @param movieId
   * @param sessionId
   * @param guestSessionId
   * @returns any 200
   * @throws ApiError
   */
  public movieAccountStates(
    movieId: number,
    sessionId?: string,
    guestSessionId?: string,
  ): CancelablePromise<{
    id?: number
    favorite?: boolean
    rated?: {
      value?: number
    }
    watchlist?: boolean
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/movie/{movie_id}/account_states',
      path: {
        movie_id: movieId,
      },
      query: {
        session_id: sessionId,
        guest_session_id: guestSessionId,
      },
    })
  }
  /**
   * Account States
   * Get the rating, watchlist and favourite status.
   * @param seriesId
   * @param sessionId
   * @param guestSessionId
   * @returns any 200
   * @throws ApiError
   */
  public tvSeriesAccountStates(
    seriesId: number,
    sessionId?: string,
    guestSessionId?: string,
  ): CancelablePromise<{
    id?: number
    favorite?: boolean
    rated?: {
      value?: number
    }
    watchlist?: boolean
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}/account_states',
      path: {
        series_id: seriesId,
      },
      query: {
        session_id: sessionId,
        guest_session_id: guestSessionId,
      },
    })
  }
  /**
   * Account States
   * Get the rating, watchlist and favourite status.
   * @param seriesId
   * @param seasonNumber
   * @param episodeNumber
   * @param sessionId
   * @param guestSessionId
   * @returns any 200
   * @throws ApiError
   */
  public tvEpisodeAccountStates(
    seriesId: number,
    seasonNumber: number,
    episodeNumber: number,
    sessionId?: string,
    guestSessionId?: string,
  ): CancelablePromise<{
    id?: number
    favorite?: boolean
    rated?: {
      value?: number
    }
    watchlist?: boolean
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/account_states',
      path: {
        series_id: seriesId,
        season_number: seasonNumber,
        episode_number: episodeNumber,
      },
      query: {
        session_id: sessionId,
        guest_session_id: guestSessionId,
      },
    })
  }
  /**
   * People
   * Get the trending people on TMDB.
   * @param timeWindow
   * @param language `ISO-639-1`-`ISO-3166-1` code
   * @returns any 200
   * @throws ApiError
   */
  public trendingPeople(
    timeWindow: 'day' | 'week' = 'day',
    language: string = 'en-US',
  ): CancelablePromise<{
    page?: number
    results?: Array<{
      adult?: boolean
      id?: number
      name?: string
      original_name?: string
      media_type?: string
      popularity?: number
      gender?: number
      known_for_department?: string
      profile_path?: string
      known_for?: Array<{
        adult?: boolean
        backdrop_path?: string
        id?: number
        title?: string
        original_language?: string
        original_title?: string
        overview?: string
        poster_path?: string
        media_type?: string
        genre_ids?: Array<number>
        popularity?: number
        release_date?: string
        video?: boolean
        vote_average?: number
        vote_count?: number
      }>
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/trending/person/{time_window}',
      path: {
        time_window: timeWindow,
      },
      query: {
        language: language,
      },
    })
  }
  /**
   * Alternative Titles
   * Get the alternative titles for a movie.
   * @param movieId
   * @param country specify a ISO-3166-1 value to filter the results
   * @returns any 200
   * @throws ApiError
   */
  public movieAlternativeTitles(
    movieId: number,
    country?: string,
  ): CancelablePromise<{
    id?: number
    titles?: Array<{
      iso_3166_1?: string
      title?: string
      type?: string
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/movie/{movie_id}/alternative_titles',
      path: {
        movie_id: movieId,
      },
      query: {
        country: country,
      },
    })
  }
  /**
   * Changes
   * Get the recent changes for a movie.
   * @param movieId
   * @param endDate
   * @param page
   * @param startDate
   * @returns any 200
   * @throws ApiError
   */
  public movieChanges(
    movieId: number,
    endDate?: string,
    page: number = 1,
    startDate?: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/movie/{movie_id}/changes',
      path: {
        movie_id: movieId,
      },
      query: {
        end_date: endDate,
        page: page,
        start_date: startDate,
      },
    })
  }
  /**
   * Credits
   * @param movieId
   * @param language
   * @returns any 200
   * @throws ApiError
   */
  public movieCredits(
    movieId: number,
    language: string = 'en-US',
  ): CancelablePromise<{
    id?: number
    cast?: Array<{
      adult?: boolean
      gender?: number
      id?: number
      known_for_department?: string
      name?: string
      original_name?: string
      popularity?: number
      profile_path?: string
      cast_id?: number
      character?: string
      credit_id?: string
      order?: number
    }>
    crew?: Array<{
      adult?: boolean
      gender?: number
      id?: number
      known_for_department?: string
      name?: string
      original_name?: string
      popularity?: number
      profile_path?: string
      credit_id?: string
      department?: string
      job?: string
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/movie/{movie_id}/credits',
      path: {
        movie_id: movieId,
      },
      query: {
        language: language,
      },
    })
  }
  /**
   * External IDs
   * @param movieId
   * @returns any 200
   * @throws ApiError
   */
  public movieExternalIds(movieId: number): CancelablePromise<{
    id?: number
    imdb_id?: string
    wikidata_id?: any
    facebook_id?: string
    instagram_id?: any
    twitter_id?: any
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/movie/{movie_id}/external_ids',
      path: {
        movie_id: movieId,
      },
    })
  }
  /**
   * Keywords
   * @param movieId
   * @returns any 200
   * @throws ApiError
   */
  public movieKeywords(movieId: string): CancelablePromise<{
    id?: number
    keywords?: Array<{
      id?: number
      name?: string
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/movie/{movie_id}/keywords',
      path: {
        movie_id: movieId,
      },
    })
  }
  /**
   * Lists
   * @param movieId
   * @param language
   * @param page
   * @returns any 200
   * @throws ApiError
   */
  public movieLists(
    movieId: number,
    language: string = 'en-US',
    page: number = 1,
  ): CancelablePromise<{
    id?: number
    page?: number
    results?: Array<{
      description?: string
      favorite_count?: number
      id?: number
      item_count?: number
      iso_639_1?: string
      list_type?: string
      name?: string
      poster_path?: any
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/movie/{movie_id}/lists',
      path: {
        movie_id: movieId,
      },
      query: {
        language: language,
        page: page,
      },
    })
  }
  /**
   * Recommendations
   * @param movieId
   * @param language
   * @param page
   * @returns any 200
   * @throws ApiError
   */
  public movieRecommendations(
    movieId: number,
    language: string = 'en-US',
    page: number = 1,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/movie/{movie_id}/recommendations',
      path: {
        movie_id: movieId,
      },
      query: {
        language: language,
        page: page,
      },
    })
  }
  /**
   * Release Dates
   * Get the release dates and certifications for a movie.
   * @param movieId
   * @returns any 200
   * @throws ApiError
   */
  public movieReleaseDates(movieId: number): CancelablePromise<{
    id?: number
    results?: Array<{
      iso_3166_1?: string
      release_dates?: Array<{
        certification?: string
        descriptors?: any[]
        iso_639_1?: string
        note?: string
        release_date?: string
        type?: number
      }>
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/movie/{movie_id}/release_dates',
      path: {
        movie_id: movieId,
      },
    })
  }
  /**
   * Reviews
   * Get the user reviews for a movie.
   * @param movieId
   * @param language
   * @param page
   * @returns any 200
   * @throws ApiError
   */
  public movieReviews(
    movieId: number,
    language: string = 'en-US',
    page: number = 1,
  ): CancelablePromise<{
    id?: number
    page?: number
    results?: Array<{
      author?: string
      author_details?: {
        name?: string
        username?: string
        avatar_path?: string
        rating?: any
      }
      content?: string
      created_at?: string
      id?: string
      updated_at?: string
      url?: string
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/movie/{movie_id}/reviews',
      path: {
        movie_id: movieId,
      },
      query: {
        language: language,
        page: page,
      },
    })
  }
  /**
   * Similar
   * Get the similar movies based on genres and keywords.
   * @param movieId
   * @param language
   * @param page
   * @returns any 200
   * @throws ApiError
   */
  public movieSimilar(
    movieId: number,
    language: string = 'en-US',
    page: number = 1,
  ): CancelablePromise<{
    page?: number
    results?: Array<{
      adult?: boolean
      backdrop_path?: string
      genre_ids?: Array<number>
      id?: number
      original_language?: string
      original_title?: string
      overview?: string
      popularity?: number
      poster_path?: string
      release_date?: string
      title?: string
      video?: boolean
      vote_average?: number
      vote_count?: number
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/movie/{movie_id}/similar',
      path: {
        movie_id: movieId,
      },
      query: {
        language: language,
        page: page,
      },
    })
  }
  /**
   * Translations
   * Get the translations for a movie.
   * @param movieId
   * @returns any 200
   * @throws ApiError
   */
  public movieTranslations(movieId: number): CancelablePromise<{
    id?: number
    translations?: Array<{
      iso_3166_1?: string
      iso_639_1?: string
      name?: string
      english_name?: string
      data?: {
        homepage?: string
        overview?: string
        runtime?: number
        tagline?: string
        title?: string
      }
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/movie/{movie_id}/translations',
      path: {
        movie_id: movieId,
      },
    })
  }
  /**
   * Videos
   * @param movieId
   * @param language
   * @returns any 200
   * @throws ApiError
   */
  public movieVideos(
    movieId: number,
    language: string = 'en-US',
  ): CancelablePromise<{
    id?: number
    results?: Array<{
      iso_639_1?: string
      iso_3166_1?: string
      name?: string
      key?: string
      site?: string
      size?: number
      type?: string
      official?: boolean
      published_at?: string
      id?: string
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/movie/{movie_id}/videos',
      path: {
        movie_id: movieId,
      },
      query: {
        language: language,
      },
    })
  }
  /**
   * Watch Providers
   * Get the list of streaming providers we have for a movie.
   * @param movieId
   * @returns any 200
   * @throws ApiError
   */
  public movieWatchProviders(movieId: number): CancelablePromise<{
    id?: number
    results?: {
      AE?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      AL?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      AR?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      AT?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      AU?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      BA?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      BB?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      BE?: {
        link?: string
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      BG?: {
        link?: string
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      BH?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      BO?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      BR?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      BS?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      CA?: {
        link?: string
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      CH?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      CL?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      CO?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      CR?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      CV?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      CZ?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      DE?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      DK?: {
        link?: string
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      DO?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      EC?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      EE?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      EG?: {
        link?: string
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      ES?: {
        link?: string
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        ads?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      FI?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      FJ?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      FR?: {
        link?: string
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      GB?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      GF?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      GI?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      GR?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      GT?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      HK?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      HN?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      HR?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        ads?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      HU?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      ID?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      IE?: {
        link?: string
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      IL?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      IN?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      IQ?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      IS?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      IT?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      JM?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      JO?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      JP?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      KR?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      KW?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      LB?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      LI?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      LT?: {
        link?: string
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      LV?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      MD?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      MK?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      MT?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      MU?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      MX?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      MY?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      MZ?: {
        link?: string
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      NL?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      NO?: {
        link?: string
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      NZ?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      OM?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      PA?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      PE?: {
        link?: string
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      PH?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      PK?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      PL?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      PS?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      PT?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      PY?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      QA?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      RO?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      RS?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      RU?: {
        link?: string
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      SA?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      SE?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      SG?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      SI?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      SK?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      SM?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      SV?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      TH?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      TR?: {
        link?: string
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      TT?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      TW?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      UG?: {
        link?: string
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      US?: {
        link?: string
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      UY?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      VE?: {
        link?: string
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      YE?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      ZA?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
    }
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/movie/{movie_id}/watch/providers',
      path: {
        movie_id: movieId,
      },
    })
  }
  /**
   * Add Rating
   * Rate a movie and save it to your rated list.
   * @param movieId
   * @param guestSessionId
   * @param sessionId
   * @param contentType
   * @param requestBody
   * @returns any 200
   * @throws ApiError
   */
  public movieAddRating(
    movieId: number,
    guestSessionId?: string,
    sessionId?: string,
    contentType: string = 'application/json;charset=utf-8',
    requestBody?: {
      RAW_BODY: string
    },
  ): CancelablePromise<{
    status_code?: number
    status_message?: string
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/3/movie/{movie_id}/rating',
      path: {
        movie_id: movieId,
      },
      headers: {
        'Content-Type': contentType,
      },
      query: {
        guest_session_id: guestSessionId,
        session_id: sessionId,
      },
      body: requestBody,
      mediaType: 'application/json',
    })
  }
  /**
   * Delete Rating
   * Delete a user rating.
   * @param movieId
   * @param contentType
   * @param guestSessionId
   * @param sessionId
   * @returns any 200
   * @throws ApiError
   */
  public movieDeleteRating(
    movieId: number,
    contentType: string = 'application/json;charset=utf-8',
    guestSessionId?: string,
    sessionId?: string,
  ): CancelablePromise<{
    status_code?: number
    status_message?: string
  }> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/3/movie/{movie_id}/rating',
      path: {
        movie_id: movieId,
      },
      headers: {
        'Content-Type': contentType,
      },
      query: {
        guest_session_id: guestSessionId,
        session_id: sessionId,
      },
    })
  }
  /**
   * Create Guest Session
   * @returns any 200
   * @throws ApiError
   */
  public authenticationCreateGuestSession(): CancelablePromise<{
    success?: boolean
    guest_session_id?: string
    expires_at?: string
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/authentication/guest_session/new',
    })
  }
  /**
   * Create Request Token
   * @returns any 200
   * @throws ApiError
   */
  public authenticationCreateRequestToken(): CancelablePromise<{
    success?: boolean
    expires_at?: string
    request_token?: string
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/authentication/token/new',
    })
  }
  /**
   * Create Session
   * @param requestBody
   * @returns any 200
   * @throws ApiError
   */
  public authenticationCreateSession(requestBody?: {
    RAW_BODY: string
  }): CancelablePromise<{
    success?: boolean
    session_id?: string
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/3/authentication/session/new',
      body: requestBody,
      mediaType: 'application/json',
    })
  }
  /**
   * Create Session (from v4 token)
   * @param requestBody
   * @returns any 200
   * @throws ApiError
   */
  public authenticationCreateSessionFromV4Token(requestBody?: {
    RAW_BODY: string
  }): CancelablePromise<{
    success?: boolean
    session_id?: string
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/3/authentication/session/convert/4',
      body: requestBody,
      mediaType: 'application/json',
    })
  }
  /**
   * Delete Session
   * @param requestBody
   * @returns any 200
   * @throws ApiError
   */
  public authenticationDeleteSession(requestBody?: {
    RAW_BODY: string
  }): CancelablePromise<{
    success?: boolean
  }> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/3/authentication/session',
      body: requestBody,
      mediaType: 'application/json',
    })
  }
  /**
   * Find By ID
   * Find data by external ID's.
   * @param externalId
   * @param externalSource
   * @param language
   * @returns any 200
   * @throws ApiError
   */
  public findById(
    externalId: string,
    externalSource:
      | ''
      | 'imdb_id'
      | 'facebook_id'
      | 'instagram_id'
      | 'tvdb_id'
      | 'tiktok_id'
      | 'twitter_id'
      | 'wikidata_id'
      | 'youtube_id',
    language?: string,
  ): CancelablePromise<{
    movie_results?: Array<{
      adult?: boolean
      backdrop_path?: string
      id?: number
      title?: string
      original_language?: string
      original_title?: string
      overview?: string
      poster_path?: string
      media_type?: string
      genre_ids?: Array<number>
      popularity?: number
      release_date?: string
      video?: boolean
      vote_average?: number
      vote_count?: number
    }>
    person_results?: any[]
    tv_results?: any[]
    tv_episode_results?: any[]
    tv_season_results?: any[]
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/find/{external_id}',
      path: {
        external_id: externalId,
      },
      query: {
        external_source: externalSource,
        language: language,
      },
    })
  }
  /**
   * Details
   * Query the top level details of a person.
   * @param personId
   * @param appendToResponse comma separated list of endpoints within this namespace, 20 items max
   * @param language
   * @returns any 200
   * @throws ApiError
   */
  public personDetails(
    personId: number,
    appendToResponse?: string,
    language: string = 'en-US',
  ): CancelablePromise<{
    adult?: boolean
    also_known_as?: Array<string>
    biography?: string
    birthday?: string
    deathday?: any
    gender?: number
    homepage?: any
    id?: number
    imdb_id?: string
    known_for_department?: string
    name?: string
    place_of_birth?: string
    popularity?: number
    profile_path?: string
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/person/{person_id}',
      path: {
        person_id: personId,
      },
      query: {
        append_to_response: appendToResponse,
        language: language,
      },
    })
  }
  /**
   * Changes
   * Get the recent changes for a person.
   * @param personId
   * @param endDate
   * @param page
   * @param startDate
   * @returns any 200
   * @throws ApiError
   */
  public personChanges(
    personId: number,
    endDate?: string,
    page: number = 1,
    startDate?: string,
  ): CancelablePromise<{
    changes?: Array<{
      key?: string
      items?: Array<{
        id?: string
        action?: string
        time?: string
        iso_639_1?: string
        iso_3166_1?: string
        value?: string
      }>
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/person/{person_id}/changes',
      path: {
        person_id: personId,
      },
      query: {
        end_date: endDate,
        page: page,
        start_date: startDate,
      },
    })
  }
  /**
   * Changes
   * Get the recent changes for a TV show.
   * @param seriesId
   * @param endDate
   * @param page
   * @param startDate
   * @returns any 200
   * @throws ApiError
   */
  public tvSeriesChanges(
    seriesId: number,
    endDate?: string,
    page: number = 1,
    startDate?: string,
  ): CancelablePromise<{
    changes?: Array<{
      key?: string
      items?: Array<{
        id?: string
        action?: string
        time?: string
        iso_639_1?: string
        iso_3166_1?: string
        value?: {
          poster?: {
            file_path?: string
            iso_639_1?: string
          }
        }
        original_value?: {
          poster?: {
            file_path?: string
            iso_639_1?: string
          }
        }
      }>
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}/changes',
      path: {
        series_id: seriesId,
      },
      query: {
        end_date: endDate,
        page: page,
        start_date: startDate,
      },
    })
  }
  /**
   * Images
   * Get the profile images that belong to a person.
   * @param personId
   * @returns any 200
   * @throws ApiError
   */
  public personImages(personId: number): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/person/{person_id}/images',
      path: {
        person_id: personId,
      },
    })
  }
  /**
   * Movie Credits
   * Get the movie credits for a person.
   * @param personId
   * @param language
   * @returns any 200
   * @throws ApiError
   */
  public personMovieCredits(
    personId: number,
    language: string = 'en-US',
  ): CancelablePromise<{
    cast?: Array<{
      adult?: boolean
      backdrop_path?: string
      genre_ids?: Array<number>
      id?: number
      original_language?: string
      original_title?: string
      overview?: string
      popularity?: number
      poster_path?: string
      release_date?: string
      title?: string
      video?: boolean
      vote_average?: number
      vote_count?: number
      character?: string
      credit_id?: string
      order?: number
    }>
    crew?: Array<{
      adult?: boolean
      backdrop_path?: string
      genre_ids?: Array<number>
      id?: number
      original_language?: string
      original_title?: string
      overview?: string
      popularity?: number
      poster_path?: string
      release_date?: string
      title?: string
      video?: boolean
      vote_average?: number
      vote_count?: number
      credit_id?: string
      department?: string
      job?: string
    }>
    id?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/person/{person_id}/movie_credits',
      path: {
        person_id: personId,
      },
      query: {
        language: language,
      },
    })
  }
  /**
   * TV Credits
   * Get the TV credits that belong to a person.
   * @param personId
   * @param language
   * @returns any 200
   * @throws ApiError
   */
  public personTvCredits(
    personId: number,
    language: string = 'en-US',
  ): CancelablePromise<{
    cast?: Array<{
      adult?: boolean
      backdrop_path?: string
      genre_ids?: Array<number>
      id?: number
      origin_country?: Array<string>
      original_language?: string
      original_name?: string
      overview?: string
      popularity?: number
      poster_path?: string
      first_air_date?: string
      name?: string
      vote_average?: number
      vote_count?: number
      character?: string
      credit_id?: string
      episode_count?: number
    }>
    crew?: Array<{
      adult?: boolean
      backdrop_path?: string
      genre_ids?: Array<number>
      id?: number
      origin_country?: Array<string>
      original_language?: string
      original_name?: string
      overview?: string
      popularity?: number
      poster_path?: string
      first_air_date?: string
      name?: string
      vote_average?: number
      vote_count?: number
      credit_id?: string
      department?: string
      episode_count?: number
      job?: string
    }>
    id?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/person/{person_id}/tv_credits',
      path: {
        person_id: personId,
      },
      query: {
        language: language,
      },
    })
  }
  /**
   * Combined Credits
   * Get the combined movie and TV credits that belong to a person.
   * @param personId
   * @param language
   * @returns any 200
   * @throws ApiError
   */
  public personCombinedCredits(
    personId: string,
    language: string = 'en-US',
  ): CancelablePromise<{
    cast?: Array<{
      adult?: boolean
      backdrop_path?: string
      genre_ids?: Array<number>
      id?: number
      original_language?: string
      original_title?: string
      overview?: string
      popularity?: number
      poster_path?: string
      release_date?: string
      title?: string
      video?: boolean
      vote_average?: number
      vote_count?: number
      character?: string
      credit_id?: string
      order?: number
      media_type?: string
    }>
    crew?: Array<{
      adult?: boolean
      backdrop_path?: string
      genre_ids?: Array<number>
      id?: number
      original_language?: string
      original_title?: string
      overview?: string
      popularity?: number
      poster_path?: string
      release_date?: string
      title?: string
      video?: boolean
      vote_average?: number
      vote_count?: number
      credit_id?: string
      department?: string
      job?: string
      media_type?: string
    }>
    id?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/person/{person_id}/combined_credits',
      path: {
        person_id: personId,
      },
      query: {
        language: language,
      },
    })
  }
  /**
   * External IDs
   * Get the external ID's that belong to a person.
   * @param personId
   * @returns any 200
   * @throws ApiError
   */
  public personExternalIds(personId: number): CancelablePromise<{
    id?: number
    freebase_mid?: string
    freebase_id?: string
    imdb_id?: string
    tvrage_id?: number
    wikidata_id?: string
    facebook_id?: string
    instagram_id?: string
    tiktok_id?: string
    twitter_id?: string
    youtube_id?: any
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/person/{person_id}/external_ids',
      path: {
        person_id: personId,
      },
    })
  }
  /**
   * Tagged Images
   * Get the tagged images for a person.
   * @param personId
   * @param page
   * @returns any 200
   * @throws ApiError
   */
  public personTaggedImages(
    personId: number,
    page: number = 1,
  ): CancelablePromise<{
    id?: number
    page?: number
    results?: Array<{
      aspect_ratio?: number
      file_path?: string
      height?: number
      id?: string
      iso_639_1?: string
      vote_average?: number
      vote_count?: number
      width?: number
      image_type?: string
      media?: {
        adult?: boolean
        backdrop_path?: string
        id?: number
        title?: string
        original_language?: string
        original_title?: string
        overview?: string
        poster_path?: string
        media_type?: string
        genre_ids?: Array<number>
        popularity?: number
        release_date?: string
        video?: boolean
        vote_average?: number
        vote_count?: number
      }
      media_type?: string
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/person/{person_id}/tagged_images',
      path: {
        person_id: personId,
      },
      query: {
        page: page,
      },
    })
  }
  /**
   * Translations
   * Get the translations that belong to a person.
   * @param personId
   * @returns any 200
   * @throws ApiError
   */
  public translations(personId: number): CancelablePromise<{
    id?: number
    translations?: Array<{
      iso_3166_1?: string
      iso_639_1?: string
      name?: string
      english_name?: string
      data?: {
        biography?: string
      }
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/person/{person_id}/translations',
      path: {
        person_id: personId,
      },
    })
  }
  /**
   * Popular
   * Get a list of people ordered by popularity.
   * @param language
   * @param page
   * @returns any 200
   * @throws ApiError
   */
  public personPopularList(
    language: string = 'en-US',
    page: number = 1,
  ): CancelablePromise<{
    page?: number
    results?: Array<{
      adult?: boolean
      gender?: number
      id?: number
      known_for?: Array<{
        adult?: boolean
        backdrop_path?: string
        genre_ids?: Array<number>
        id?: number
        media_type?: string
        original_language?: string
        original_title?: string
        overview?: string
        poster_path?: string
        release_date?: string
        title?: string
        video?: boolean
        vote_average?: number
        vote_count?: number
      }>
      known_for_department?: string
      name?: string
      popularity?: number
      profile_path?: string
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/person/popular',
      query: {
        language: language,
        page: page,
      },
    })
  }
  /**
   * Popular
   * Get a list of movies ordered by popularity.
   * @param language
   * @param page
   * @param region ISO-3166-1 code
   * @returns any 200
   * @throws ApiError
   */
  public moviePopularList(
    language: string = 'en-US',
    page: number = 1,
    region?: string,
  ): CancelablePromise<{
    page?: number
    results?: Array<{
      adult?: boolean
      backdrop_path?: string
      genre_ids?: Array<number>
      id?: number
      original_language?: string
      original_title?: string
      overview?: string
      popularity?: number
      poster_path?: string
      release_date?: string
      title?: string
      video?: boolean
      vote_average?: number
      vote_count?: number
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/movie/popular',
      query: {
        language: language,
        page: page,
        region: region,
      },
    })
  }
  /**
   * Top Rated
   * Get a list of movies ordered by rating.
   * @param language
   * @param page
   * @param region ISO-3166-1 code
   * @returns any 200
   * @throws ApiError
   */
  public movieTopRatedList(
    language: string = 'en-US',
    page: number = 1,
    region?: string,
  ): CancelablePromise<{
    page?: number
    results?: Array<{
      adult?: boolean
      backdrop_path?: string
      genre_ids?: Array<number>
      id?: number
      original_language?: string
      original_title?: string
      overview?: string
      popularity?: number
      poster_path?: string
      release_date?: string
      title?: string
      video?: boolean
      vote_average?: number
      vote_count?: number
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/movie/top_rated',
      query: {
        language: language,
        page: page,
        region: region,
      },
    })
  }
  /**
   * Upcoming
   * Get a list of movies that are being released soon.
   * @param language
   * @param page
   * @param region ISO-3166-1 code
   * @returns any 200
   * @throws ApiError
   */
  public movieUpcomingList(
    language: string = 'en-US',
    page: number = 1,
    region?: string,
  ): CancelablePromise<{
    dates?: {
      maximum?: string
      minimum?: string
    }
    page?: number
    results?: Array<{
      adult?: boolean
      backdrop_path?: string
      genre_ids?: Array<number>
      id?: number
      original_language?: string
      original_title?: string
      overview?: string
      popularity?: number
      poster_path?: string
      release_date?: string
      title?: string
      video?: boolean
      vote_average?: number
      vote_count?: number
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/movie/upcoming',
      query: {
        language: language,
        page: page,
        region: region,
      },
    })
  }
  /**
   * Now Playing
   * Get a list of movies that are currently in theatres.
   * @param language
   * @param page
   * @param region ISO-3166-1 code
   * @returns any 200
   * @throws ApiError
   */
  public movieNowPlayingList(
    language: string = 'en-US',
    page: number = 1,
    region?: string,
  ): CancelablePromise<{
    dates?: {
      maximum?: string
      minimum?: string
    }
    page?: number
    results?: Array<{
      adult?: boolean
      backdrop_path?: string
      genre_ids?: Array<number>
      id?: number
      original_language?: string
      original_title?: string
      overview?: string
      popularity?: number
      poster_path?: string
      release_date?: string
      title?: string
      video?: boolean
      vote_average?: number
      vote_count?: number
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/movie/now_playing',
      query: {
        language: language,
        page: page,
        region: region,
      },
    })
  }
  /**
   * Airing Today
   * Get a list of TV shows airing today.
   * @param language
   * @param page
   * @param timezone
   * @returns any 200
   * @throws ApiError
   */
  public tvSeriesAiringTodayList(
    language: string = 'en-US',
    page: number = 1,
    timezone?: string,
  ): CancelablePromise<{
    page?: number
    results?: Array<{
      backdrop_path?: string
      first_air_date?: string
      genre_ids?: Array<number>
      id?: number
      name?: string
      origin_country?: Array<string>
      original_language?: string
      original_name?: string
      overview?: string
      popularity?: number
      poster_path?: string
      vote_average?: number
      vote_count?: number
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/airing_today',
      query: {
        language: language,
        page: page,
        timezone: timezone,
      },
    })
  }
  /**
   * On The Air
   * Get a list of TV shows that air in the next 7 days.
   * @param language
   * @param page
   * @param timezone
   * @returns any 200
   * @throws ApiError
   */
  public tvSeriesOnTheAirList(
    language: string = 'en-US',
    page: number = 1,
    timezone?: string,
  ): CancelablePromise<{
    page?: number
    results?: Array<{
      backdrop_path?: string
      first_air_date?: string
      genre_ids?: Array<number>
      id?: number
      name?: string
      origin_country?: Array<string>
      original_language?: string
      original_name?: string
      overview?: string
      popularity?: number
      poster_path?: string
      vote_average?: number
      vote_count?: number
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/on_the_air',
      query: {
        language: language,
        page: page,
        timezone: timezone,
      },
    })
  }
  /**
   * Popular
   * Get a list of TV shows ordered by popularity.
   * @param language
   * @param page
   * @returns any 200
   * @throws ApiError
   */
  public tvSeriesPopularList(
    language: string = 'en-US',
    page: number = 1,
  ): CancelablePromise<{
    page?: number
    results?: Array<{
      backdrop_path?: string
      first_air_date?: string
      genre_ids?: Array<number>
      id?: number
      name?: string
      origin_country?: Array<string>
      original_language?: string
      original_name?: string
      overview?: string
      popularity?: number
      poster_path?: string
      vote_average?: number
      vote_count?: number
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/popular',
      query: {
        language: language,
        page: page,
      },
    })
  }
  /**
   * Top Rated
   * Get a list of TV shows ordered by rating.
   * @param language
   * @param page
   * @returns any 200
   * @throws ApiError
   */
  public tvSeriesTopRatedList(
    language: string = 'en-US',
    page: number = 1,
  ): CancelablePromise<{
    page?: number
    results?: Array<{
      backdrop_path?: string
      first_air_date?: string
      genre_ids?: Array<number>
      id?: number
      name?: string
      origin_country?: Array<string>
      original_language?: string
      original_name?: string
      overview?: string
      popularity?: number
      poster_path?: string
      vote_average?: number
      vote_count?: number
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/top_rated',
      query: {
        language: language,
        page: page,
      },
    })
  }
  /**
   * Latest
   * Get the newest movie ID.
   * @returns any 200
   * @throws ApiError
   */
  public movieLatestId(): CancelablePromise<{
    adult?: boolean
    backdrop_path?: any
    belongs_to_collection?: any
    budget?: number
    genres?: any[]
    homepage?: string
    id?: number
    imdb_id?: any
    original_language?: string
    original_title?: string
    overview?: string
    popularity?: number
    poster_path?: any
    production_companies?: any[]
    production_countries?: any[]
    release_date?: string
    revenue?: number
    runtime?: number
    spoken_languages?: any[]
    status?: string
    tagline?: string
    title?: string
    video?: boolean
    vote_average?: number
    vote_count?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/movie/latest',
    })
  }
  /**
   * Latest
   * Get the newest TV show ID.
   * @returns any 200
   * @throws ApiError
   */
  public tvSeriesLatestId(): CancelablePromise<{
    adult?: boolean
    backdrop_path?: any
    created_by?: any[]
    episode_run_time?: any[]
    first_air_date?: string
    genres?: any[]
    homepage?: string
    id?: number
    in_production?: boolean
    languages?: any[]
    last_air_date?: string
    last_episode_to_air?: {
      id?: number
      name?: string
      overview?: string
      vote_average?: number
      vote_count?: number
      air_date?: string
      episode_number?: number
      production_code?: string
      runtime?: any
      season_number?: number
      show_id?: number
      still_path?: any
    }
    name?: string
    next_episode_to_air?: any
    networks?: any[]
    number_of_episodes?: number
    number_of_seasons?: number
    origin_country?: Array<string>
    original_language?: string
    original_name?: string
    overview?: string
    popularity?: number
    poster_path?: any
    production_companies?: any[]
    production_countries?: any[]
    seasons?: Array<{
      air_date?: any
      episode_count?: number
      id?: number
      name?: string
      overview?: string
      poster_path?: any
      season_number?: number
    }>
    spoken_languages?: any[]
    status?: string
    tagline?: string
    type?: string
    vote_average?: number
    vote_count?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/latest',
    })
  }
  /**
   * Aggregate Credits
   * Get the aggregate credits (cast and crew) that have been added to a TV show.
   * @param seriesId
   * @param language
   * @returns any 200
   * @throws ApiError
   */
  public tvSeriesAggregateCredits(
    seriesId: number,
    language: string = 'en-US',
  ): CancelablePromise<{
    cast?: Array<{
      adult?: boolean
      gender?: number
      id?: number
      known_for_department?: string
      name?: string
      original_name?: string
      popularity?: number
      profile_path?: string
      roles?: Array<{
        credit_id?: string
        character?: string
        episode_count?: number
      }>
      total_episode_count?: number
      order?: number
    }>
    crew?: Array<{
      adult?: boolean
      gender?: number
      id?: number
      known_for_department?: string
      name?: string
      original_name?: string
      popularity?: number
      profile_path?: string
      jobs?: Array<{
        credit_id?: string
        job?: string
        episode_count?: number
      }>
      department?: string
      total_episode_count?: number
    }>
    id?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}/aggregate_credits',
      path: {
        series_id: seriesId,
      },
      query: {
        language: language,
      },
    })
  }
  /**
   * Alternative Titles
   * Get the alternative titles that have been added to a TV show.
   * @param seriesId
   * @returns any 200
   * @throws ApiError
   */
  public tvSeriesAlternativeTitles(seriesId: number): CancelablePromise<{
    id?: number
    results?: Array<{
      iso_3166_1?: string
      title?: string
      type?: string
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}/alternative_titles',
      path: {
        series_id: seriesId,
      },
    })
  }
  /**
   * Content Ratings
   * Get the content ratings that have been added to a TV show.
   * @param seriesId
   * @returns any 200
   * @throws ApiError
   */
  public tvSeriesContentRatings(seriesId: number): CancelablePromise<{
    results?: Array<{
      descriptors?: any[]
      iso_3166_1?: string
      rating?: string
    }>
    id?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}/content_ratings',
      path: {
        series_id: seriesId,
      },
    })
  }
  /**
   * Credits
   * Get the latest season credits of a TV show.
   * @param seriesId
   * @param language
   * @returns any 200
   * @throws ApiError
   */
  public tvSeriesCredits(
    seriesId: number,
    language: string = 'en-US',
  ): CancelablePromise<{
    cast?: Array<{
      adult?: boolean
      gender?: number
      id?: number
      known_for_department?: string
      name?: string
      original_name?: string
      popularity?: number
      profile_path?: string
      character?: string
      credit_id?: string
      order?: number
    }>
    crew?: Array<{
      adult?: boolean
      gender?: number
      id?: number
      known_for_department?: string
      name?: string
      original_name?: string
      popularity?: number
      profile_path?: string
      credit_id?: string
      department?: string
      job?: string
    }>
    id?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}/credits',
      path: {
        series_id: seriesId,
      },
      query: {
        language: language,
      },
    })
  }
  /**
   * Episode Groups
   * Get the episode groups that have been added to a TV show.
   * @param seriesId
   * @returns any 200
   * @throws ApiError
   */
  public tvSeriesEpisodeGroups(seriesId: number): CancelablePromise<{
    results?: Array<{
      description?: string
      episode_count?: number
      group_count?: number
      id?: string
      name?: string
      network?: {
        id?: number
        logo_path?: string
        name?: string
        origin_country?: string
      }
      type?: number
    }>
    id?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}/episode_groups',
      path: {
        series_id: seriesId,
      },
    })
  }
  /**
   * External IDs
   * Get a list of external IDs that have been added to a TV show.
   * @param seriesId
   * @returns any 200
   * @throws ApiError
   */
  public tvSeriesExternalIds(seriesId: number): CancelablePromise<{
    id?: number
    imdb_id?: string
    freebase_mid?: string
    freebase_id?: string
    tvdb_id?: number
    tvrage_id?: number
    wikidata_id?: string
    facebook_id?: string
    instagram_id?: string
    twitter_id?: string
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}/external_ids',
      path: {
        series_id: seriesId,
      },
    })
  }
  /**
   * Keywords
   * Get a list of keywords that have been added to a TV show.
   * @param seriesId
   * @returns any 200
   * @throws ApiError
   */
  public tvSeriesKeywords(seriesId: number): CancelablePromise<{
    id?: number
    results?: Array<{
      name?: string
      id?: number
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}/keywords',
      path: {
        series_id: seriesId,
      },
    })
  }
  /**
   * Recommendations
   * @param seriesId
   * @param language
   * @param page
   * @returns any 200
   * @throws ApiError
   */
  public tvSeriesRecommendations(
    seriesId: number,
    language: string = 'en-US',
    page: number = 1,
  ): CancelablePromise<{
    page?: number
    results?: Array<{
      adult?: boolean
      backdrop_path?: string
      id?: number
      name?: string
      original_language?: string
      original_name?: string
      overview?: string
      poster_path?: string
      media_type?: string
      genre_ids?: Array<number>
      popularity?: number
      first_air_date?: string
      vote_average?: number
      vote_count?: number
      origin_country?: Array<string>
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}/recommendations',
      path: {
        series_id: seriesId,
      },
      query: {
        language: language,
        page: page,
      },
    })
  }
  /**
   * Reviews
   * Get the reviews that have been added to a TV show.
   * @param seriesId
   * @param language
   * @param page
   * @returns any 200
   * @throws ApiError
   */
  public tvSeriesReviews(
    seriesId: number,
    language: string = 'en-US',
    page: number = 1,
  ): CancelablePromise<{
    id?: number
    page?: number
    results?: Array<{
      author?: string
      author_details?: {
        name?: string
        username?: string
        avatar_path?: string
        rating?: number
      }
      content?: string
      created_at?: string
      id?: string
      updated_at?: string
      url?: string
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}/reviews',
      path: {
        series_id: seriesId,
      },
      query: {
        language: language,
        page: page,
      },
    })
  }
  /**
   * Screened Theatrically
   * Get the seasons and episodes that have screened theatrically.
   * @param seriesId
   * @returns any 200
   * @throws ApiError
   */
  public tvSeriesScreenedTheatrically(seriesId: number): CancelablePromise<{
    id?: number
    results?: Array<{
      id?: number
      episode_number?: number
      season_number?: number
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}/screened_theatrically',
      path: {
        series_id: seriesId,
      },
    })
  }
  /**
   * Similar
   * Get the similar TV shows.
   * @param seriesId
   * @param language
   * @param page
   * @returns any 200
   * @throws ApiError
   */
  public tvSeriesSimilar(
    seriesId: string,
    language: string = 'en-US',
    page: number = 1,
  ): CancelablePromise<{
    page?: number
    results?: Array<{
      adult?: boolean
      backdrop_path?: string
      genre_ids?: Array<number>
      id?: number
      origin_country?: Array<string>
      original_language?: string
      original_name?: string
      overview?: string
      popularity?: number
      poster_path?: string
      first_air_date?: string
      name?: string
      vote_average?: number
      vote_count?: number
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}/similar',
      path: {
        series_id: seriesId,
      },
      query: {
        language: language,
        page: page,
      },
    })
  }
  /**
   * Translations
   * Get the translations that have been added to a TV show.
   * @param seriesId
   * @returns any 200
   * @throws ApiError
   */
  public tvSeriesTranslations(seriesId: number): CancelablePromise<{
    id?: number
    translations?: Array<{
      iso_3166_1?: string
      iso_639_1?: string
      name?: string
      english_name?: string
      data?: {
        name?: string
        overview?: string
        homepage?: string
        tagline?: string
      }
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}/translations',
      path: {
        series_id: seriesId,
      },
    })
  }
  /**
   * Videos
   * Get the videos that belong to a TV show.
   * @param seriesId
   * @param includeVideoLanguage filter the list results by language, supports more than one value by using a comma
   * @param language
   * @returns any 200
   * @throws ApiError
   */
  public tvSeriesVideos(
    seriesId: number,
    includeVideoLanguage?: string,
    language: string = 'en-US',
  ): CancelablePromise<{
    id?: number
    results?: Array<{
      iso_639_1?: string
      iso_3166_1?: string
      name?: string
      key?: string
      site?: string
      size?: number
      type?: string
      official?: boolean
      published_at?: string
      id?: string
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}/videos',
      path: {
        series_id: seriesId,
      },
      query: {
        include_video_language: includeVideoLanguage,
        language: language,
      },
    })
  }
  /**
   * Watch Providers
   * Get the list of streaming providers we have for a TV show.
   * @param seriesId
   * @returns any 200
   * @throws ApiError
   */
  public tvSeriesWatchProviders(seriesId: number): CancelablePromise<{
    id?: number
    results?: {
      AE?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      AR?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      AT?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      AU?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      BA?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      BB?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      BE?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      BG?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      BO?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      BR?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      BS?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      CA?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      CH?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      CI?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      CL?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      CO?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      CR?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      CZ?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      DE?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      DK?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      DO?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      DZ?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      EC?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      EG?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      ES?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      FI?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      FR?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      GB?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      GF?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      GH?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      GQ?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      GT?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      HK?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      HN?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      HR?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      HU?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      ID?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      IE?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      IL?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      IQ?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      IT?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      JM?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      JP?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      KE?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      KR?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      LB?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      LT?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      LY?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      MD?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      MK?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      MU?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      MX?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      MY?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      MZ?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      NE?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      NG?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      NL?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      NO?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      NZ?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      PA?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      PE?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      PH?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      PL?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      PS?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      PT?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      PY?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      RO?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      RS?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      RU?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        ads?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      SA?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      SC?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      SE?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      SG?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      SI?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      SK?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      SN?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      SV?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      TH?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      TR?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      TT?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      TW?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      TZ?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      UG?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      US?: {
        link?: string
        free?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      UY?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      VE?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      ZA?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      ZM?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
    }
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}/watch/providers',
      path: {
        series_id: seriesId,
      },
    })
  }
  /**
   * Add Rating
   * Rate a TV show and save it to your rated list.
   * @param seriesId
   * @param guestSessionId
   * @param sessionId
   * @param contentType
   * @param requestBody
   * @returns any 200
   * @throws ApiError
   */
  public tvSeriesAddRating(
    seriesId: number,
    guestSessionId?: string,
    sessionId?: string,
    contentType: string = 'application/json;charset=utf-8',
    requestBody?: {
      RAW_BODY: string
    },
  ): CancelablePromise<{
    status_code?: number
    status_message?: string
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/3/tv/{series_id}/rating',
      path: {
        series_id: seriesId,
      },
      headers: {
        'Content-Type': contentType,
      },
      query: {
        guest_session_id: guestSessionId,
        session_id: sessionId,
      },
      body: requestBody,
      mediaType: 'application/json',
    })
  }
  /**
   * Delete Rating
   * @param seriesId
   * @param contentType
   * @param guestSessionId
   * @param sessionId
   * @returns any 200
   * @throws ApiError
   */
  public tvSeriesDeleteRating(
    seriesId: number,
    contentType: string = 'application/json;charset=utf-8',
    guestSessionId?: string,
    sessionId?: string,
  ): CancelablePromise<{
    status_code?: number
    status_message?: string
  }> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/3/tv/{series_id}/rating',
      path: {
        series_id: seriesId,
      },
      headers: {
        'Content-Type': contentType,
      },
      query: {
        guest_session_id: guestSessionId,
        session_id: sessionId,
      },
    })
  }
  /**
   * Account States
   * Get the rating, watchlist and favourite status.
   * @param seriesId
   * @param seasonNumber
   * @param sessionId
   * @param guestSessionId
   * @returns any 200
   * @throws ApiError
   */
  public tvSeasonAccountStates(
    seriesId: number,
    seasonNumber: number,
    sessionId?: string,
    guestSessionId?: string,
  ): CancelablePromise<{
    id?: number
    results?: Array<{
      id?: number
      episode_number?: number
      rated?: {
        value?: number
      }
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}/season/{season_number}/account_states',
      path: {
        series_id: seriesId,
        season_number: seasonNumber,
      },
      query: {
        session_id: sessionId,
        guest_session_id: guestSessionId,
      },
    })
  }
  /**
   * Aggregate Credits
   * Get the aggregate credits (cast and crew) that have been added to a TV season.
   * @param seriesId
   * @param seasonNumber
   * @param language
   * @returns any 200
   * @throws ApiError
   */
  public tvSeasonAggregateCredits(
    seriesId: number,
    seasonNumber: number,
    language: string = 'en-US',
  ): CancelablePromise<{
    cast?: Array<{
      adult?: boolean
      gender?: number
      id?: number
      known_for_department?: string
      name?: string
      original_name?: string
      popularity?: number
      profile_path?: string
      roles?: Array<{
        credit_id?: string
        character?: string
        episode_count?: number
      }>
      total_episode_count?: number
      order?: number
    }>
    crew?: Array<{
      adult?: boolean
      gender?: number
      id?: number
      known_for_department?: string
      name?: string
      original_name?: string
      popularity?: number
      profile_path?: any
      jobs?: Array<{
        credit_id?: string
        job?: string
        episode_count?: number
      }>
      department?: string
      total_episode_count?: number
    }>
    id?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}/season/{season_number}/aggregate_credits',
      path: {
        series_id: seriesId,
        season_number: seasonNumber,
      },
      query: {
        language: language,
      },
    })
  }
  /**
   * Changes
   * Get the recent changes for a TV season.
   * @param seasonId
   * @param endDate
   * @param page
   * @param startDate
   * @returns any 200
   * @throws ApiError
   */
  public tvSeasonChangesById(
    seasonId: number,
    endDate?: string,
    page: number = 1,
    startDate?: string,
  ): CancelablePromise<{
    changes?: Array<{
      key?: string
      items?: Array<{
        id?: string
        action?: string
        time?: string
        value?: {
          episode_id?: number
          episode_number?: number
        }
      }>
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/season/{season_id}/changes',
      path: {
        season_id: seasonId,
      },
      query: {
        end_date: endDate,
        page: page,
        start_date: startDate,
      },
    })
  }
  /**
   * Credits
   * @param seriesId
   * @param seasonNumber
   * @param language
   * @returns any 200
   * @throws ApiError
   */
  public tvSeasonCredits(
    seriesId: number,
    seasonNumber: number,
    language: string = 'en-US',
  ): CancelablePromise<{
    cast?: Array<{
      adult?: boolean
      gender?: number
      id?: number
      known_for_department?: string
      name?: string
      original_name?: string
      popularity?: number
      profile_path?: string
      character?: string
      credit_id?: string
      order?: number
    }>
    crew?: Array<{
      adult?: boolean
      gender?: number
      id?: number
      known_for_department?: string
      name?: string
      original_name?: string
      popularity?: number
      profile_path?: any
      credit_id?: string
      department?: string
      job?: string
    }>
    id?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}/season/{season_number}/credits',
      path: {
        series_id: seriesId,
        season_number: seasonNumber,
      },
      query: {
        language: language,
      },
    })
  }
  /**
   * External IDs
   * Get a list of external IDs that have been added to a TV season.
   * @param seriesId
   * @param seasonNumber
   * @returns any 200
   * @throws ApiError
   */
  public tvSeasonExternalIds(
    seriesId: number,
    seasonNumber: number,
  ): CancelablePromise<{
    id?: number
    freebase_mid?: string
    freebase_id?: string
    tvdb_id?: number
    tvrage_id?: any
    wikidata_id?: string
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}/season/{season_number}/external_ids',
      path: {
        series_id: seriesId,
        season_number: seasonNumber,
      },
    })
  }
  /**
   * Translations
   * Get the translations for a TV season.
   * @param seriesId
   * @param seasonNumber
   * @returns any 200
   * @throws ApiError
   */
  public tvSeasonTranslations(
    seriesId: number,
    seasonNumber: number,
  ): CancelablePromise<{
    id?: number
    translations?: Array<{
      iso_3166_1?: string
      iso_639_1?: string
      name?: string
      english_name?: string
      data?: {
        name?: string
        overview?: string
      }
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}/season/{season_number}/translations',
      path: {
        series_id: seriesId,
        season_number: seasonNumber,
      },
    })
  }
  /**
   * Videos
   * Get the videos that belong to a TV season.
   * @param seriesId
   * @param seasonNumber
   * @param includeVideoLanguage filter the list results by language, supports more than one value by using a comma
   * @param language
   * @returns any 200
   * @throws ApiError
   */
  public tvSeasonVideos(
    seriesId: number,
    seasonNumber: number,
    includeVideoLanguage?: string,
    language: string = 'en-US',
  ): CancelablePromise<{
    id?: number
    results?: Array<{
      iso_639_1?: string
      iso_3166_1?: string
      name?: string
      key?: string
      site?: string
      size?: number
      type?: string
      official?: boolean
      published_at?: string
      id?: string
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}/season/{season_number}/videos',
      path: {
        series_id: seriesId,
        season_number: seasonNumber,
      },
      query: {
        include_video_language: includeVideoLanguage,
        language: language,
      },
    })
  }
  /**
   * Credits
   * @param seriesId
   * @param seasonNumber
   * @param episodeNumber
   * @param language
   * @returns any 200
   * @throws ApiError
   */
  public tvEpisodeCredits(
    seriesId: number,
    seasonNumber: number,
    episodeNumber: number,
    language: string = 'en-US',
  ): CancelablePromise<{
    cast?: Array<{
      adult?: boolean
      gender?: number
      id?: number
      known_for_department?: string
      name?: string
      original_name?: string
      popularity?: number
      profile_path?: string
      character?: string
      credit_id?: string
      order?: number
    }>
    crew?: Array<{
      department?: string
      job?: string
      credit_id?: string
      adult?: boolean
      gender?: number
      id?: number
      known_for_department?: string
      name?: string
      original_name?: string
      popularity?: number
      profile_path?: string
    }>
    guest_stars?: Array<{
      character?: string
      credit_id?: string
      order?: number
      adult?: boolean
      gender?: number
      id?: number
      known_for_department?: string
      name?: string
      original_name?: string
      popularity?: number
      profile_path?: string
    }>
    id?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/credits',
      path: {
        series_id: seriesId,
        season_number: seasonNumber,
        episode_number: episodeNumber,
      },
      query: {
        language: language,
      },
    })
  }
  /**
   * External IDs
   * Get a list of external IDs that have been added to a TV episode.
   * @param seriesId
   * @param seasonNumber
   * @param episodeNumber
   * @returns any 200
   * @throws ApiError
   */
  public tvEpisodeExternalIds(
    seriesId: number,
    seasonNumber: number,
    episodeNumber: string,
  ): CancelablePromise<{
    id?: number
    imdb_id?: string
    freebase_mid?: string
    freebase_id?: string
    tvdb_id?: number
    tvrage_id?: number
    wikidata_id?: string
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/external_ids',
      path: {
        series_id: seriesId,
        season_number: seasonNumber,
        episode_number: episodeNumber,
      },
    })
  }
  /**
   * Translations
   * Get the translations that have been added to a TV episode.
   * @param seriesId
   * @param seasonNumber
   * @param episodeNumber
   * @returns any 200
   * @throws ApiError
   */
  public tvEpisodeTranslations(
    seriesId: number,
    seasonNumber: number,
    episodeNumber: number,
  ): CancelablePromise<{
    id?: number
    translations?: Array<{
      iso_3166_1?: string
      iso_639_1?: string
      name?: string
      english_name?: string
      data?: {
        name?: string
        overview?: string
      }
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/translations',
      path: {
        series_id: seriesId,
        season_number: seasonNumber,
        episode_number: episodeNumber,
      },
    })
  }
  /**
   * Videos
   * Get the videos that belong to a TV episode.
   * @param seriesId
   * @param seasonNumber
   * @param episodeNumber
   * @param includeVideoLanguage filter the list results by language, supports more than one value by using a comma
   * @param language
   * @returns any 200
   * @throws ApiError
   */
  public tvEpisodeVideos(
    seriesId: number,
    seasonNumber: number,
    episodeNumber: number,
    includeVideoLanguage?: string,
    language: string = 'en-US',
  ): CancelablePromise<{
    id?: number
    results?: Array<{
      iso_639_1?: string
      iso_3166_1?: string
      name?: string
      key?: string
      site?: string
      size?: number
      type?: string
      official?: boolean
      published_at?: string
      id?: string
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/videos',
      path: {
        series_id: seriesId,
        season_number: seasonNumber,
        episode_number: episodeNumber,
      },
      query: {
        include_video_language: includeVideoLanguage,
        language: language,
      },
    })
  }
  /**
   * Add Rating
   * Rate a TV episode and save it to your rated list.
   * @param seriesId
   * @param seasonNumber
   * @param episodeNumber
   * @param guestSessionId
   * @param sessionId
   * @param contentType
   * @param requestBody
   * @returns any 200
   * @throws ApiError
   */
  public tvEpisodeAddRating(
    seriesId: number,
    seasonNumber: number,
    episodeNumber: number,
    guestSessionId?: string,
    sessionId?: string,
    contentType: string = 'application/json;charset=utf-8',
    requestBody?: {
      RAW_BODY: string
    },
  ): CancelablePromise<{
    status_code?: number
    status_message?: string
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/rating',
      path: {
        series_id: seriesId,
        season_number: seasonNumber,
        episode_number: episodeNumber,
      },
      headers: {
        'Content-Type': contentType,
      },
      query: {
        guest_session_id: guestSessionId,
        session_id: sessionId,
      },
      body: requestBody,
      mediaType: 'application/json',
    })
  }
  /**
   * Delete Rating
   * Delete your rating on a TV episode.
   * @param seriesId
   * @param seasonNumber
   * @param episodeNumber
   * @param contentType
   * @param guestSessionId
   * @param sessionId
   * @returns any 200
   * @throws ApiError
   */
  public tvEpisodeDeleteRating(
    seriesId: number,
    seasonNumber: number,
    episodeNumber: number,
    contentType: string = 'application/json;charset=utf-8',
    guestSessionId?: string,
    sessionId?: string,
  ): CancelablePromise<{
    status_code?: number
    status_message?: string
  }> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/rating',
      path: {
        series_id: seriesId,
        season_number: seasonNumber,
        episode_number: episodeNumber,
      },
      headers: {
        'Content-Type': contentType,
      },
      query: {
        guest_session_id: guestSessionId,
        session_id: sessionId,
      },
    })
  }
  /**
   * Details
   * @param accountId
   * @param sessionId
   * @returns any 200
   * @throws ApiError
   */
  public accountDetails(
    accountId: number = null,
    sessionId?: string,
  ): CancelablePromise<{
    avatar?: {
      gravatar?: {
        hash?: string
      }
      tmdb?: {
        avatar_path?: string
      }
    }
    id?: number
    iso_639_1?: string
    iso_3166_1?: string
    name?: string
    include_adult?: boolean
    username?: string
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/account/{account_id}',
      path: {
        account_id: accountId,
      },
      query: {
        session_id: sessionId,
      },
    })
  }
  /**
   * Lists
   * @param accountId
   * @param page
   * @param sessionId
   * @returns any 200
   * @throws ApiError
   */
  public accountLists(
    accountId: number = null,
    page: number = 1,
    sessionId?: string,
  ): CancelablePromise<{
    page?: number
    results?: Array<{
      description?: string
      favorite_count?: number
      id?: number
      item_count?: number
      iso_639_1?: string
      list_type?: string
      name?: string
      poster_path?: any
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/account/{account_id}/lists',
      path: {
        account_id: accountId,
      },
      query: {
        page: page,
        session_id: sessionId,
      },
    })
  }
  /**
   * Favorite Movies
   * @param accountId
   * @param language
   * @param page
   * @param sessionId
   * @param sortBy
   * @returns any 200
   * @throws ApiError
   */
  public accountGetFavorites(
    accountId: number = null,
    language: string = 'en-US',
    page: number = 1,
    sessionId?: string,
    sortBy: 'created_at.asc' | 'created_at.desc' = 'created_at.asc',
  ): CancelablePromise<{
    page?: number
    results?: Array<{
      adult?: boolean
      backdrop_path?: string
      genre_ids?: Array<number>
      id?: number
      original_language?: string
      original_title?: string
      overview?: string
      popularity?: number
      poster_path?: string
      release_date?: string
      title?: string
      video?: boolean
      vote_average?: number
      vote_count?: number
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/account/{account_id}/favorite/movies',
      path: {
        account_id: accountId,
      },
      query: {
        language: language,
        page: page,
        session_id: sessionId,
        sort_by: sortBy,
      },
    })
  }
  /**
   * Favorite TV
   * @param accountId
   * @param language
   * @param page
   * @param sessionId
   * @param sortBy
   * @returns any 200
   * @throws ApiError
   */
  public accountFavoriteTv(
    accountId: number = null,
    language: string = 'en-US',
    page: number = 1,
    sessionId?: string,
    sortBy: 'created_at.asc' | 'created_at.desc' = 'created_at.asc',
  ): CancelablePromise<{
    page?: number
    results?: Array<{
      adult?: boolean
      backdrop_path?: string
      genre_ids?: Array<number>
      id?: number
      origin_country?: Array<string>
      original_language?: string
      original_name?: string
      overview?: string
      popularity?: number
      poster_path?: string
      first_air_date?: string
      name?: string
      vote_average?: number
      vote_count?: number
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/account/{account_id}/favorite/tv',
      path: {
        account_id: accountId,
      },
      query: {
        language: language,
        page: page,
        session_id: sessionId,
        sort_by: sortBy,
      },
    })
  }
  /**
   * Rated Movies
   * @param accountId
   * @param language
   * @param page
   * @param sessionId
   * @param sortBy
   * @returns any 200
   * @throws ApiError
   */
  public accountRatedMovies(
    accountId: number = null,
    language: string = 'en-US',
    page: number = 1,
    sessionId?: string,
    sortBy: 'created_at.asc' | 'created_at.desc' = 'created_at.asc',
  ): CancelablePromise<{
    page?: number
    results?: Array<{
      adult?: boolean
      backdrop_path?: string
      genre_ids?: Array<number>
      id?: number
      original_language?: string
      original_title?: string
      overview?: string
      popularity?: number
      poster_path?: string
      release_date?: string
      title?: string
      video?: boolean
      vote_average?: number
      vote_count?: number
      rating?: number
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/account/{account_id}/rated/movies',
      path: {
        account_id: accountId,
      },
      query: {
        language: language,
        page: page,
        session_id: sessionId,
        sort_by: sortBy,
      },
    })
  }
  /**
   * Rated TV
   * @param accountId
   * @param language
   * @param page
   * @param sessionId
   * @param sortBy
   * @returns any 200
   * @throws ApiError
   */
  public accountRatedTv(
    accountId: number = null,
    language: string = 'en-US',
    page: number = 1,
    sessionId?: string,
    sortBy: 'created_at.asc' | 'created_at.desc' = 'created_at.asc',
  ): CancelablePromise<{
    page?: number
    results?: Array<{
      adult?: boolean
      backdrop_path?: string
      genre_ids?: Array<number>
      id?: number
      origin_country?: Array<string>
      original_language?: string
      original_name?: string
      overview?: string
      popularity?: number
      poster_path?: string
      first_air_date?: string
      name?: string
      vote_average?: number
      vote_count?: number
      rating?: number
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/account/{account_id}/rated/tv',
      path: {
        account_id: accountId,
      },
      query: {
        language: language,
        page: page,
        session_id: sessionId,
        sort_by: sortBy,
      },
    })
  }
  /**
   * Rated TV Episodes
   * @param accountId
   * @param language
   * @param page
   * @param sessionId
   * @param sortBy
   * @returns any 200
   * @throws ApiError
   */
  public accountRatedTvEpisodes(
    accountId: number = null,
    language: string = 'en-US',
    page: number = 1,
    sessionId?: string,
    sortBy: 'created_at.asc' | 'created_at.desc' = 'created_at.asc',
  ): CancelablePromise<{
    page?: number
    results?: Array<{
      air_date?: string
      episode_number?: number
      id?: number
      name?: string
      overview?: string
      production_code?: string
      runtime?: number
      season_number?: number
      show_id?: number
      still_path?: string
      vote_average?: number
      vote_count?: number
      rating?: number
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/account/{account_id}/rated/tv/episodes',
      path: {
        account_id: accountId,
      },
      query: {
        language: language,
        page: page,
        session_id: sessionId,
        sort_by: sortBy,
      },
    })
  }
  /**
   * Watchlist Movies
   * @param accountId
   * @param language
   * @param page
   * @param sessionId
   * @param sortBy
   * @returns any 200
   * @throws ApiError
   */
  public accountWatchlistMovies(
    accountId: number = null,
    language: string = 'en-US',
    page: number = 1,
    sessionId?: string,
    sortBy: 'created_at.asc' | 'created_at.desc' = 'created_at.asc',
  ): CancelablePromise<{
    page?: number
    results?: Array<{
      adult?: boolean
      backdrop_path?: string
      genre_ids?: Array<number>
      id?: number
      original_language?: string
      original_title?: string
      overview?: string
      popularity?: number
      poster_path?: string
      release_date?: string
      title?: string
      video?: boolean
      vote_average?: number
      vote_count?: number
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/account/{account_id}/watchlist/movies',
      path: {
        account_id: accountId,
      },
      query: {
        language: language,
        page: page,
        session_id: sessionId,
        sort_by: sortBy,
      },
    })
  }
  /**
   * Watchlist TV
   * @param accountId
   * @param language
   * @param page
   * @param sessionId
   * @param sortBy
   * @returns any 200
   * @throws ApiError
   */
  public accountWatchlistTv(
    accountId: number = null,
    language: string = 'en-US',
    page: number = 1,
    sessionId?: string,
    sortBy: 'created_at.asc' | 'created_at.desc' = 'created_at.asc',
  ): CancelablePromise<{
    page?: number
    results?: Array<{
      adult?: boolean
      backdrop_path?: string
      genre_ids?: Array<number>
      id?: number
      origin_country?: Array<string>
      original_language?: string
      original_name?: string
      overview?: string
      popularity?: number
      poster_path?: string
      first_air_date?: string
      name?: string
      vote_average?: number
      vote_count?: number
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/account/{account_id}/watchlist/tv',
      path: {
        account_id: accountId,
      },
      query: {
        language: language,
        page: page,
        session_id: sessionId,
        sort_by: sortBy,
      },
    })
  }
  /**
   * Add Favorite
   * @param accountId
   * @param sessionId
   * @param requestBody
   * @returns any 200
   * @throws ApiError
   */
  public accountAddFavorite(
    accountId: number = null,
    sessionId?: string,
    requestBody?: {
      RAW_BODY: string
    },
  ): CancelablePromise<{
    status_code?: number
    status_message?: string
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/3/account/{account_id}/favorite',
      path: {
        account_id: accountId,
      },
      query: {
        session_id: sessionId,
      },
      body: requestBody,
      mediaType: 'application/json',
    })
  }
  /**
   * Add To Watchlist
   * @param accountId
   * @param sessionId
   * @param requestBody
   * @returns any 200
   * @throws ApiError
   */
  public accountAddToWatchlist(
    accountId: number = null,
    sessionId?: string,
    requestBody?: {
      RAW_BODY: string
    },
  ): CancelablePromise<{
    status_code?: number
    status_message?: string
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/3/account/{account_id}/watchlist',
      path: {
        account_id: accountId,
      },
      query: {
        session_id: sessionId,
      },
      body: requestBody,
      mediaType: 'application/json',
    })
  }
  /**
   * Movie Certifications
   * Get an up to date list of the officially supported movie certifications on TMDB.
   * @returns any 200
   * @throws ApiError
   */
  public certificationMovieList(): CancelablePromise<{
    certifications?: {
      AU?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      BG?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      BR?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      CA?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      'CA-QC'?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      DE?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      DK?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      ES?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      FI?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      FR?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      GB?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      HU?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      IN?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      IT?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      LT?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      MY?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      NL?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      NO?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      NZ?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      PH?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      PT?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      RU?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      SE?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      US?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      KR?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      SK?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      TH?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      MX?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      ID?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      TR?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      AR?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      GR?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      TW?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      ZA?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      SG?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      IE?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      PR?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      JP?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      VI?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      CH?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      IL?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      HK?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      MO?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      LV?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      LU?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
    }
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/certification/movie/list',
    })
  }
  /**
   * TV Certifications
   * @returns any 200
   * @throws ApiError
   */
  public certificationsTvList(): CancelablePromise<{
    certifications?: {
      AU?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      BR?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      CA?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      'CA-QC'?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      DE?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      ES?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      FR?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      GB?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      HU?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      KR?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      LT?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      NL?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      PH?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      PT?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      RU?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      SK?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      TH?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      US?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      IT?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      FI?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      MY?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      NZ?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      NO?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      BG?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      MX?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      IN?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      DK?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      SE?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      ID?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      TR?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      AR?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      PL?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      MA?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      GR?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      IL?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      TW?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      ZA?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      SG?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      PR?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
      VI?: Array<{
        certification?: string
        meaning?: string
        order?: number
      }>
    }
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/certification/tv/list',
    })
  }
  /**
   * Movie List
   * Get a list of all of the movie ids that have been changed in the past 24 hours.
   * @param endDate
   * @param page
   * @param startDate
   * @returns any 200
   * @throws ApiError
   */
  public changesMovieList(
    endDate?: string,
    page: number = 1,
    startDate?: string,
  ): CancelablePromise<{
    results?: Array<{
      id?: number
      adult?: boolean
    }>
    page?: number
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/movie/changes',
      query: {
        end_date: endDate,
        page: page,
        start_date: startDate,
      },
    })
  }
  /**
   * TV List
   * @param endDate
   * @param page
   * @param startDate
   * @returns any 200
   * @throws ApiError
   */
  public changesTvList(
    endDate?: string,
    page: number = 1,
    startDate?: string,
  ): CancelablePromise<{
    results?: Array<{
      id?: number
      adult?: boolean
    }>
    page?: number
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/changes',
      query: {
        end_date: endDate,
        page: page,
        start_date: startDate,
      },
    })
  }
  /**
   * People List
   * @param endDate
   * @param page
   * @param startDate
   * @returns any 200
   * @throws ApiError
   */
  public changesPeopleList(
    endDate?: string,
    page: number = 1,
    startDate?: string,
  ): CancelablePromise<{
    results?: Array<{
      id?: number
      adult?: boolean
    }>
    page?: number
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/person/changes',
      query: {
        end_date: endDate,
        page: page,
        start_date: startDate,
      },
    })
  }
  /**
   * Details
   * Get collection details by ID.
   * @param collectionId
   * @param language
   * @returns any 200
   * @throws ApiError
   */
  public collectionDetails(
    collectionId: number,
    language: string = 'en-US',
  ): CancelablePromise<{
    id?: number
    name?: string
    overview?: string
    poster_path?: string
    backdrop_path?: string
    parts?: Array<{
      adult?: boolean
      backdrop_path?: string
      id?: number
      title?: string
      original_language?: string
      original_title?: string
      overview?: string
      poster_path?: string
      media_type?: string
      genre_ids?: Array<number>
      popularity?: number
      release_date?: string
      video?: boolean
      vote_average?: number
      vote_count?: number
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/collection/{collection_id}',
      path: {
        collection_id: collectionId,
      },
      query: {
        language: language,
      },
    })
  }
  /**
   * Images
   * Get the images that belong to a collection.
   * @param collectionId
   * @param includeImageLanguage specify a comma separated list of ISO-639-1 values to query, for example: `en,null`
   * @param language
   * @returns any 200
   * @throws ApiError
   */
  public collectionImages(
    collectionId: number,
    includeImageLanguage?: string,
    language?: string,
  ): CancelablePromise<{
    id?: number
    backdrops?: Array<{
      aspect_ratio?: number
      height?: number
      iso_639_1?: any
      file_path?: string
      vote_average?: number
      vote_count?: number
      width?: number
    }>
    posters?: Array<{
      aspect_ratio?: number
      height?: number
      iso_639_1?: string
      file_path?: string
      vote_average?: number
      vote_count?: number
      width?: number
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/collection/{collection_id}/images',
      path: {
        collection_id: collectionId,
      },
      query: {
        include_image_language: includeImageLanguage,
        language: language,
      },
    })
  }
  /**
   * Translations
   * @param collectionId
   * @returns any 200
   * @throws ApiError
   */
  public collectionTranslations(collectionId: number): CancelablePromise<{
    id?: number
    translations?: Array<{
      iso_3166_1?: string
      iso_639_1?: string
      name?: string
      english_name?: string
      data?: {
        title?: string
        overview?: string
        homepage?: string
      }
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/collection/{collection_id}/translations',
      path: {
        collection_id: collectionId,
      },
    })
  }
  /**
   * Details
   * Get the company details by ID.
   * @param companyId
   * @returns any 200
   * @throws ApiError
   */
  public companyDetails(companyId: number): CancelablePromise<{
    description?: string
    headquarters?: string
    homepage?: string
    id?: number
    logo_path?: string
    name?: string
    origin_country?: string
    parent_company?: any
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/company/{company_id}',
      path: {
        company_id: companyId,
      },
    })
  }
  /**
   * Alternative Names
   * Get the company details by ID.
   * @param companyId
   * @returns any 200
   * @throws ApiError
   */
  public companyAlternativeNames(companyId: number): CancelablePromise<{
    id?: number
    results?: Array<{
      name?: string
      type?: string
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/company/{company_id}/alternative_names',
      path: {
        company_id: companyId,
      },
    })
  }
  /**
   * Images
   * Get the company logos by id.
   * @param companyId
   * @returns any 200
   * @throws ApiError
   */
  public companyImages(companyId: number): CancelablePromise<{
    id?: number
    logos?: Array<{
      aspect_ratio?: number
      file_path?: string
      height?: number
      id?: string
      file_type?: string
      vote_average?: number
      vote_count?: number
      width?: number
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/company/{company_id}/images',
      path: {
        company_id: companyId,
      },
    })
  }
  /**
   * Details
   * Get a movie or TV credit details by ID.
   * @param creditId
   * @returns any 200
   * @throws ApiError
   */
  public creditDetails(creditId: string): CancelablePromise<{
    credit_type?: string
    department?: string
    job?: string
    media?: {
      adult?: boolean
      backdrop_path?: string
      id?: number
      name?: string
      original_language?: string
      original_name?: string
      overview?: string
      poster_path?: string
      media_type?: string
      genre_ids?: Array<number>
      popularity?: number
      first_air_date?: string
      vote_average?: number
      vote_count?: number
      origin_country?: Array<string>
      character?: string
      episodes?: any[]
      seasons?: Array<{
        air_date?: string
        episode_count?: number
        id?: number
        name?: string
        overview?: string
        poster_path?: string
        season_number?: number
        show_id?: number
      }>
    }
    media_type?: string
    id?: string
    person?: {
      adult?: boolean
      id?: number
      name?: string
      original_name?: string
      media_type?: string
      popularity?: number
      gender?: number
      known_for_department?: string
      profile_path?: string
    }
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/credit/{credit_id}',
      path: {
        credit_id: creditId,
      },
    })
  }
  /**
   * Movie List
   * Get the list of official genres for movies.
   * @param language
   * @returns any 200
   * @throws ApiError
   */
  public genreMovieList(language: string = 'en'): CancelablePromise<{
    genres?: Array<{
      id?: number
      name?: string
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/genre/movie/list',
      query: {
        language: language,
      },
    })
  }
  /**
   * TV List
   * Get the list of official genres for TV shows.
   * @param language
   * @returns any 200
   * @throws ApiError
   */
  public genreTvList(language: string = 'en'): CancelablePromise<{
    genres?: Array<{
      id?: number
      name?: string
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/genre/tv/list',
      query: {
        language: language,
      },
    })
  }
  /**
   * Rated Movies
   * Get the rated movies for a guest session.
   * @param guestSessionId
   * @param language
   * @param page
   * @param sortBy
   * @returns any 200
   * @throws ApiError
   */
  public guestSessionRatedMovies(
    guestSessionId: string,
    language: string = 'en-US',
    page: number = 1,
    sortBy: 'created_at.asc' | 'created_at.desc' = 'created_at.asc',
  ): CancelablePromise<{
    page?: number
    results?: Array<{
      adult?: boolean
      backdrop_path?: string
      genre_ids?: Array<number>
      id?: number
      original_language?: string
      original_title?: string
      overview?: string
      popularity?: number
      poster_path?: string
      release_date?: string
      title?: string
      video?: boolean
      vote_average?: number
      vote_count?: number
      rating?: number
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/guest_session/{guest_session_id}/rated/movies',
      path: {
        guest_session_id: guestSessionId,
      },
      query: {
        language: language,
        page: page,
        sort_by: sortBy,
      },
    })
  }
  /**
   * Rated TV
   * Get the rated TV shows for a guest session.
   * @param guestSessionId
   * @param language
   * @param page
   * @param sortBy
   * @returns any 200
   * @throws ApiError
   */
  public guestSessionRatedTv(
    guestSessionId: string,
    language: string = 'en-US',
    page: number = 1,
    sortBy: 'created_at.asc' | 'created_at.desc' = 'created_at.asc',
  ): CancelablePromise<{
    page?: number
    results?: Array<{
      adult?: boolean
      backdrop_path?: string
      genre_ids?: Array<number>
      id?: number
      origin_country?: Array<string>
      original_language?: string
      original_name?: string
      overview?: string
      popularity?: number
      poster_path?: string
      first_air_date?: string
      name?: string
      vote_average?: number
      vote_count?: number
      rating?: number
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/guest_session/{guest_session_id}/rated/tv',
      path: {
        guest_session_id: guestSessionId,
      },
      query: {
        language: language,
        page: page,
        sort_by: sortBy,
      },
    })
  }
  /**
   * Rated TV Episodes
   * Get the rated TV episodes for a guest session.
   * @param guestSessionId
   * @param language
   * @param page
   * @param sortBy
   * @returns any 200
   * @throws ApiError
   */
  public guestSessionRatedTvEpisodes(
    guestSessionId: string,
    language: string = 'en-US',
    page: number = 1,
    sortBy: 'created_at.asc' | 'created_at.desc' = 'created_at.asc',
  ): CancelablePromise<{
    page?: number
    results?: Array<{
      air_date?: string
      episode_number?: number
      id?: number
      name?: string
      overview?: string
      production_code?: string
      runtime?: number
      season_number?: number
      show_id?: number
      still_path?: string
      vote_average?: number
      vote_count?: number
      rating?: number
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/guest_session/{guest_session_id}/rated/tv/episodes',
      path: {
        guest_session_id: guestSessionId,
      },
      query: {
        language: language,
        page: page,
        sort_by: sortBy,
      },
    })
  }
  /**
   * Available Regions
   * Get the list of the countries we have watch provider (OTT/streaming) data for.
   * @param language
   * @returns any 200
   * @throws ApiError
   */
  public watchProvidersAvailableRegions(
    language: string = 'en-US',
  ): CancelablePromise<{
    results?: Array<{
      iso_3166_1?: string
      english_name?: string
      native_name?: string
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/watch/providers/regions',
      query: {
        language: language,
      },
    })
  }
  /**
   * Movie Providers
   * Get the list of streaming providers we have for movies.
   * @param language
   * @param watchRegion
   * @returns any 200
   * @throws ApiError
   */
  public watchProvidersMovieList(
    language: string = 'en-US',
    watchRegion?: string,
  ): CancelablePromise<{
    results?: Array<{
      display_priorities?: {
        CA?: number
        AE?: number
        AR?: number
        AT?: number
        AU?: number
        BE?: number
        BO?: number
        BR?: number
        BG?: number
        CH?: number
        CL?: number
        CO?: number
        CR?: number
        CZ?: number
        DE?: number
        DK?: number
        EC?: number
        EE?: number
        EG?: number
        ES?: number
        FI?: number
        FR?: number
        GB?: number
        GR?: number
        GT?: number
        HK?: number
        HN?: number
        HU?: number
        ID?: number
        IE?: number
        IN?: number
        IT?: number
        JP?: number
        LT?: number
        LV?: number
        MX?: number
        MY?: number
        NL?: number
        NO?: number
        NZ?: number
        PE?: number
        PH?: number
        PL?: number
        PT?: number
        PY?: number
        RU?: number
        SA?: number
        SE?: number
        SG?: number
        SK?: number
        TH?: number
        TR?: number
        TW?: number
        US?: number
        VE?: number
        ZA?: number
        SI?: number
        CV?: number
        GH?: number
        MU?: number
        MZ?: number
        UG?: number
        IL?: number
      }
      display_priority?: number
      logo_path?: string
      provider_name?: string
      provider_id?: number
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/watch/providers/movie',
      query: {
        language: language,
        watch_region: watchRegion,
      },
    })
  }
  /**
   * TV Providers
   * Get the list of streaming providers we have for TV shows.
   * @param language
   * @param watchRegion
   * @returns any 200
   * @throws ApiError
   */
  public watchProviderTvList(
    language: string = 'en-US',
    watchRegion?: string,
  ): CancelablePromise<{
    results?: Array<{
      display_priorities?: {
        CA?: number
        AE?: number
        AR?: number
        AT?: number
        AU?: number
        BE?: number
        BO?: number
        BR?: number
        BG?: number
        CH?: number
        CL?: number
        CO?: number
        CR?: number
        CZ?: number
        DE?: number
        DK?: number
        EC?: number
        EE?: number
        EG?: number
        ES?: number
        FI?: number
        FR?: number
        GB?: number
        GR?: number
        GT?: number
        HK?: number
        HN?: number
        HU?: number
        ID?: number
        IE?: number
        IN?: number
        IT?: number
        JP?: number
        LT?: number
        LV?: number
        MX?: number
        MY?: number
        NL?: number
        NO?: number
        NZ?: number
        PE?: number
        PH?: number
        PL?: number
        PT?: number
        PY?: number
        RU?: number
        SA?: number
        SE?: number
        SG?: number
        SK?: number
        TH?: number
        TR?: number
        TW?: number
        US?: number
        VE?: number
        ZA?: number
        SI?: number
        CV?: number
        GH?: number
        MU?: number
        MZ?: number
        UG?: number
        IL?: number
      }
      display_priority?: number
      logo_path?: string
      provider_name?: string
      provider_id?: number
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/watch/providers/tv',
      query: {
        language: language,
        watch_region: watchRegion,
      },
    })
  }
  /**
   * Details
   * @param keywordId
   * @returns any 200
   * @throws ApiError
   */
  public keywordDetails(keywordId: number): CancelablePromise<{
    id?: number
    name?: string
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/keyword/{keyword_id}',
      path: {
        keyword_id: keywordId,
      },
    })
  }
  /**
   * Movies
   * @param keywordId
   * @param includeAdult
   * @param language
   * @param page
   * @returns any 200
   * @throws ApiError
   */
  public keywordMovies(
    keywordId: string,
    includeAdult: boolean = false,
    language: string = 'en-US',
    page: number = 1,
  ): CancelablePromise<{
    id?: number
    page?: number
    results?: Array<{
      adult?: boolean
      backdrop_path?: string
      genre_ids?: Array<number>
      id?: number
      original_language?: string
      original_title?: string
      overview?: string
      popularity?: number
      poster_path?: string
      release_date?: string
      title?: string
      video?: boolean
      vote_average?: number
      vote_count?: number
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/keyword/{keyword_id}/movies',
      path: {
        keyword_id: keywordId,
      },
      query: {
        include_adult: includeAdult,
        language: language,
        page: page,
      },
    })
  }
  /**
   * Details
   * @param listId
   * @param language
   * @param page
   * @returns any 200
   * @throws ApiError
   */
  public listDetails(
    listId: number,
    language: string = 'en-US',
    page: number = 1,
  ): CancelablePromise<{
    created_by?: string
    description?: string
    favorite_count?: number
    id?: string
    items?: Array<{
      adult?: boolean
      backdrop_path?: string
      genre_ids?: Array<number>
      id?: number
      media_type?: string
      original_language?: string
      original_title?: string
      overview?: string
      popularity?: number
      poster_path?: string
      release_date?: string
      title?: string
      video?: boolean
      vote_average?: number
      vote_count?: number
    }>
    item_count?: number
    iso_639_1?: string
    name?: string
    poster_path?: string
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/list/{list_id}',
      path: {
        list_id: listId,
      },
      query: {
        language: language,
        page: page,
      },
    })
  }
  /**
   * Delete
   * Delete a list.
   * @param listId
   * @param sessionId
   * @returns any 200
   * @throws ApiError
   */
  public listDelete(
    listId: number,
    sessionId: string,
  ): CancelablePromise<{
    status_code?: number
    status_message?: string
  }> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/3/list/{list_id}',
      path: {
        list_id: listId,
      },
      query: {
        session_id: sessionId,
      },
    })
  }
  /**
   * Check Item Status
   * Use this method to check if an item has already been added to the list.
   * @param listId
   * @param language
   * @param movieId
   * @returns any 200
   * @throws ApiError
   */
  public listCheckItemStatus(
    listId: number,
    language: string = 'en-US',
    movieId?: number,
  ): CancelablePromise<{
    id?: number
    item_present?: boolean
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/list/{list_id}/item_status',
      path: {
        list_id: listId,
      },
      query: {
        language: language,
        movie_id: movieId,
      },
    })
  }
  /**
   * Create
   * @param sessionId
   * @param requestBody
   * @returns any 200
   * @throws ApiError
   */
  public listCreate(
    sessionId: string,
    requestBody?: {
      RAW_BODY: string
    },
  ): CancelablePromise<{
    status_message?: string
    success?: boolean
    status_code?: number
    list_id?: number
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/3/list',
      query: {
        session_id: sessionId,
      },
      body: requestBody,
      mediaType: 'application/json',
    })
  }
  /**
   * Add Movie
   * Add a movie to a list.
   * @param listId
   * @param sessionId
   * @param requestBody
   * @returns any 200
   * @throws ApiError
   */
  public listAddMovie(
    listId: number,
    sessionId: string,
    requestBody?: {
      RAW_BODY?: string
    },
  ): CancelablePromise<{
    status_code?: number
    status_message?: string
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/3/list/{list_id}/add_item',
      path: {
        list_id: listId,
      },
      query: {
        session_id: sessionId,
      },
      body: requestBody,
      mediaType: 'application/json',
    })
  }
  /**
   * Remove Movie
   * Remove a movie from a list.
   * @param listId
   * @param sessionId
   * @param requestBody
   * @returns any 200
   * @throws ApiError
   */
  public listRemoveMovie(
    listId: number,
    sessionId: string,
    requestBody?: {
      RAW_BODY: string
    },
  ): CancelablePromise<{
    status_code?: number
    status_message?: string
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/3/list/{list_id}/remove_item',
      path: {
        list_id: listId,
      },
      query: {
        session_id: sessionId,
      },
      body: requestBody,
      mediaType: 'application/json',
    })
  }
  /**
   * Clear
   * Clear all items from a list.
   * @param listId
   * @param sessionId
   * @param confirm
   * @returns any 200
   * @throws ApiError
   */
  public listClear(
    listId: number,
    sessionId: string,
    confirm: boolean = false,
  ): CancelablePromise<{
    status_code?: number
    status_message?: string
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/3/list/{list_id}/clear',
      path: {
        list_id: listId,
      },
      query: {
        session_id: sessionId,
        confirm: confirm,
      },
    })
  }
  /**
   * Details
   * @param networkId
   * @returns any 200
   * @throws ApiError
   */
  public networkDetails(networkId: number): CancelablePromise<{
    headquarters?: string
    homepage?: string
    id?: number
    logo_path?: string
    name?: string
    origin_country?: string
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/network/{network_id}',
      path: {
        network_id: networkId,
      },
    })
  }
  /**
   * Alternative Names
   * Get the alternative names of a network.
   * @param networkId
   * @returns any 200
   * @throws ApiError
   */
  public detailsCopy(networkId: number): CancelablePromise<{
    id?: number
    results?: Array<{
      name?: string
      type?: string
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/network/{network_id}/alternative_names',
      path: {
        network_id: networkId,
      },
    })
  }
  /**
   * Images
   * Get the TV network logos by id.
   * @param networkId
   * @returns any 200
   * @throws ApiError
   */
  public alternativeNamesCopy(networkId: number): CancelablePromise<{
    id?: number
    logos?: Array<{
      aspect_ratio?: number
      file_path?: string
      height?: number
      id?: string
      file_type?: string
      vote_average?: number
      vote_count?: number
      width?: number
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/network/{network_id}/images',
      path: {
        network_id: networkId,
      },
    })
  }
  /**
   * Details
   * Retrieve the details of a movie or TV show review.
   * @param reviewId
   * @returns any 200
   * @throws ApiError
   */
  public reviewDetails(reviewId: string): CancelablePromise<{
    id?: string
    author?: string
    author_details?: {
      name?: string
      username?: string
      avatar_path?: string
      rating?: number
    }
    content?: string
    created_at?: string
    iso_639_1?: string
    media_id?: number
    media_title?: string
    media_type?: string
    updated_at?: string
    url?: string
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/review/{review_id}',
      path: {
        review_id: reviewId,
      },
    })
  }
  /**
   * Validate Key
   * Test your API Key to see if it's valid.
   * @returns any 200
   * @throws ApiError
   */
  public authenticationValidateKey(): CancelablePromise<{
    success?: boolean
    status_code?: number
    status_message?: string
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/authentication',
      errors: {
        401: `401`,
      },
    })
  }
  /**
   * Watch Providers
   * Get the list of streaming providers we have for a TV season.
   * @param seriesId
   * @param seasonNumber
   * @param language
   * @returns any 200
   * @throws ApiError
   */
  public tvSeasonWatchProviders(
    seriesId: number,
    seasonNumber: number,
    language: string = 'en-US',
  ): CancelablePromise<{
    id?: number
    results?: {
      AE?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      AR?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      AT?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      AU?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      BA?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      BB?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      BE?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      BG?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      BO?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      BR?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      BS?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      CA?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      CH?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      CI?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      CL?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      CO?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      CR?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      CZ?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      DE?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      DK?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      DO?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      DZ?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      EC?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      EG?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      ES?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      FI?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      FR?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      GB?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      GF?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      GH?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      GQ?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      GT?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      HK?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      HN?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      HR?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      HU?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      ID?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      IE?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      IL?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      IQ?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      IT?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      JM?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      JP?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      KE?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      KR?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      LB?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      LY?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      MD?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      MK?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      MU?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      MX?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      MY?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      MZ?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      NE?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      NG?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      NL?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      NO?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      NZ?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      PA?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      PE?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      PH?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      PL?: {
        link?: string
        rent?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      PS?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      PT?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      PY?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      RO?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      RS?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      RU?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      SA?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      SC?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      SE?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      SG?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      SI?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      SK?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      SN?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      SV?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      TH?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      TR?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      TT?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      TW?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      TZ?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      UG?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      US?: {
        link?: string
        buy?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        free?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      UY?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      VE?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      ZA?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
      ZM?: {
        link?: string
        flatrate?: Array<{
          logo_path?: string
          provider_id?: number
          provider_name?: string
          display_priority?: number
        }>
      }
    }
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/{series_id}/season/{season_number}/watch/providers',
      path: {
        series_id: seriesId,
        season_number: seasonNumber,
      },
      query: {
        language: language,
      },
    })
  }
  /**
   * Countries
   * Get the list of countries (ISO 3166-1 tags) used throughout TMDB.
   * @param language
   * @returns any 200
   * @throws ApiError
   */
  public configurationCountries(language: string = 'en-US'): CancelablePromise<
    Array<{
      iso_3166_1?: string
      english_name?: string
      native_name?: string
    }>
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/configuration/countries',
      query: {
        language: language,
      },
    })
  }
  /**
   * Jobs
   * Get the list of the jobs and departments we use on TMDB.
   * @returns any 200
   * @throws ApiError
   */
  public configurationJobs(): CancelablePromise<
    Array<{
      department?: string
      jobs?: Array<string>
    }>
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/configuration/jobs',
    })
  }
  /**
   * Languages
   * Get the list of languages (ISO 639-1 tags) used throughout TMDB.
   * @returns any 200
   * @throws ApiError
   */
  public configurationLanguages(): CancelablePromise<
    Array<{
      iso_639_1?: string
      english_name?: string
      name?: string
    }>
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/configuration/languages',
    })
  }
  /**
   * Primary Translations
   * Get a list of the officially supported translations on TMDB.
   * @returns string 200
   * @throws ApiError
   */
  public configurationPrimaryTranslations(): CancelablePromise<Array<string>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/configuration/primary_translations',
    })
  }
  /**
   * Timezones
   * Get the list of timezones used throughout TMDB.
   * @returns any 200
   * @throws ApiError
   */
  public configurationTimezones(): CancelablePromise<
    Array<{
      iso_3166_1?: string
      zones?: Array<string>
    }>
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/configuration/timezones',
    })
  }
  /**
   * Create Session (with login)
   * This method allows an application to validate a request token by entering a username and password.
   * @param requestBody
   * @returns any 200
   * @throws ApiError
   */
  public authenticationCreateSessionFromLogin(requestBody?: {
    RAW_BODY: string
  }): CancelablePromise<{
    success?: boolean
    expires_at?: string
    request_token?: string
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/3/authentication/token/validate_with_login',
      body: requestBody,
      mediaType: 'application/json',
    })
  }
  /**
   * Latest
   * Get the newest created person. This is a live response and will continuously change.
   * @returns any 200
   * @throws ApiError
   */
  public personLatestId(): CancelablePromise<{
    adult?: boolean
    also_known_as?: any[]
    biography?: string
    birthday?: any
    deathday?: any
    gender?: number
    homepage?: any
    id?: number
    imdb_id?: any
    known_for_department?: any
    name?: string
    place_of_birth?: any
    popularity?: number
    profile_path?: any
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/person/latest',
    })
  }
  /**
   * Changes
   * Get the recent changes for a TV episode.
   * @param episodeId
   * @returns any 200
   * @throws ApiError
   */
  public tvEpisodeChangesById(episodeId: number): CancelablePromise<{
    changes?: Array<{
      key?: string
      items?: Array<{
        id?: string
        action?: string
        time?: string
        value?: string
      }>
    }>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/episode/{episode_id}/changes',
      path: {
        episode_id: episodeId,
      },
    })
  }
  /**
   * Details
   * Get the details of a TV episode group.
   * @param tvEpisodeGroupId
   * @returns any 200
   * @throws ApiError
   */
  public tvEpisodeGroupDetails(tvEpisodeGroupId: string): CancelablePromise<{
    description?: string
    episode_count?: number
    group_count?: number
    groups?: Array<{
      id?: string
      name?: string
      order?: number
      episodes?: Array<{
        air_date?: string
        episode_number?: number
        id?: number
        name?: string
        overview?: string
        production_code?: string
        runtime?: any
        season_number?: number
        show_id?: number
        still_path?: string
        vote_average?: number
        vote_count?: number
        order?: number
      }>
      locked?: boolean
    }>
    id?: string
    name?: string
    network?: {
      id?: number
      logo_path?: string
      name?: string
      origin_country?: string
    }
    type?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/tv/episode_group/{tv_episode_group_id}',
      path: {
        tv_episode_group_id: tvEpisodeGroupId,
      },
    })
  }
  /**
   * Company
   * Search for companies by their original and alternative names.
   * @param query
   * @param page
   * @returns any 200
   * @throws ApiError
   */
  public searchCompany(
    query: string,
    page: number = 1,
  ): CancelablePromise<{
    page?: number
    results?: Array<{
      id?: number
      logo_path?: string
      name?: string
      origin_country?: string
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/search/company',
      query: {
        query: query,
        page: page,
      },
    })
  }
  /**
   * Collection
   * Search for collections by their original, translated and alternative names.
   * @param query
   * @param includeAdult
   * @param language
   * @param page
   * @param region
   * @returns any 200
   * @throws ApiError
   */
  public searchCollection(
    query: string,
    includeAdult: boolean = false,
    language: string = 'en-US',
    page: number = 1,
    region?: string,
  ): CancelablePromise<{
    page?: number
    results?: Array<{
      adult?: boolean
      backdrop_path?: string
      id?: number
      name?: string
      original_language?: string
      original_name?: string
      overview?: string
      poster_path?: string
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/search/collection',
      query: {
        query: query,
        include_adult: includeAdult,
        language: language,
        page: page,
        region: region,
      },
    })
  }
  /**
   * Keyword
   * Search for keywords by their name.
   * @param query
   * @param page
   * @returns any 200
   * @throws ApiError
   */
  public searchKeyword(
    query: string,
    page: number = 1,
  ): CancelablePromise<{
    page?: number
    results?: Array<{
      id?: number
      name?: string
    }>
    total_pages?: number
    total_results?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/3/search/keyword',
      query: {
        query: query,
        page: page,
      },
    })
  }
}
