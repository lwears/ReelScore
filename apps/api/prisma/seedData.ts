import type { Prisma } from '@prisma/client'

export const movieSeed: Prisma.MovieCreateManyInput[] = [
  {
    releaseDate: new Date('2018-01-16 09:00:00'),
    posterPath: '/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
    title: 'Avengers: Infinity War',
    userId: '8855dd27-77d1-45ec-ad04-76fcd697f228',
    tmdbId: 299536,
  },
  {
    releaseDate: new Date('2012-01-16 09:00:00'),
    posterPath: '/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
    title: 'The Avengers',
    userId: '8855dd27-77d1-45ec-ad04-76fcd697f228',
    tmdbId: 24428,
  },
  {
    releaseDate: new Date('2019-01-16 09:00:00'),
    posterPath: '/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
    title: 'Avengers: Endgame',
    userId: '8855dd27-77d1-45ec-ad04-76fcd697f228',
    tmdbId: 299534,
  },
  {
    posterPath: '/hx0sdduAsr4rq03RZKZzglR25z7.jpg',
    releaseDate: new Date('1998-08-21'),
    title: 'Blade',
    userId: '8855dd27-77d1-45ec-ad04-76fcd697f228',
    tmdbId: 36647,
  },
  {
    posterPath: '/hQQCdZrsHtZyR6NbKH2YyCqd2fR.jpg',
    releaseDate: new Date('2001-08-21'),
    title: "Ocean's Eleven",
    userId: '8855dd27-77d1-45ec-ad04-76fcd697f228',
    tmdbId: 161,
  },
  {
    posterPath: '/Ad55M8newGWemFWCsMAkxO3fDwl.jpg',
    releaseDate: new Date('2004-08-21'),
    title: "Ocean's Twelve",
    userId: '8855dd27-77d1-45ec-ad04-76fcd697f228',
    tmdbId: 163,
  },
  {
    posterPath: '/uQBbjrLVsUibWxNDGA4Czzo8lwz.jpg',
    releaseDate: new Date('2012-08-21'),
    title: 'Jack Reacher',
    userId: '8855dd27-77d1-45ec-ad04-76fcd697f228',
    tmdbId: 75780,
  },
  {
    posterPath: '/cOg3UT2NYWHZxp41vpxAnVCOC4M.jpg',
    releaseDate: new Date('2016-08-21'),
    title: 'Jack Reacher: Never Go Back',
    userId: '8855dd27-77d1-45ec-ad04-76fcd697f228',
    tmdbId: 343611,
  },
  {
    posterPath: '/5weKu49pzJCt06OPpjvT80efnQj.jpg',
    releaseDate: new Date('2023-08-21'),
    title: 'Spider-Man: No Way Home',
    userId: '8855dd27-77d1-45ec-ad04-76fcd697f228',
    tmdbId: 634649,
  },
  {
    posterPath: '/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg',
    releaseDate: new Date('2017-08-21'),
    title: 'Spider-Man: Homecoming',
    userId: '8855dd27-77d1-45ec-ad04-76fcd697f228',
    tmdbId: 315635,
  },
]

export const serieSeed: Prisma.SerieCreateManyInput[] = [
  {
    posterPath: '/2koX1xLkpTQM4IZebYvKysFW1Nh.jpg',
    firstAired: new Date('1994-08-21'),
    title: 'Friends',
    userId: '8855dd27-77d1-45ec-ad04-76fcd697f228',
    tmdbId: 1668,
  },
  {
    posterPath: '/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg',
    firstAired: new Date('2008-08-21'),
    title: 'Breaking Bad',
    userId: '8855dd27-77d1-45ec-ad04-76fcd697f228',
    tmdbId: 1396,
  },
  {
    posterPath: '/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg',
    firstAired: new Date('2016-08-21'),
    title: 'Peaky Blinders',
    userId: '8855dd27-77d1-45ec-ad04-76fcd697f228',
    tmdbId: 60574,
  },
  {
    posterPath: '/huxmY6Dmzwpv5Q2hnNft0UMK7vf.jpg',
    firstAired: new Date('2016-08-21'),
    title: 'This Is Us',
    userId: '8855dd27-77d1-45ec-ad04-76fcd697f228',
    tmdbId: 67136,
  },
  {
    posterPath: '/bBfMth0m4A4f8ChiS6MXrRhdEqf.jpg',
    firstAired: new Date('2011-08-21'),
    title: 'The Bridge',
    userId: '8855dd27-77d1-45ec-ad04-76fcd697f228',
    tmdbId: 45016,
  },
  {
    posterPath: '/mOzYV3QH5Nwm8CwkVIUmb0Ae0IO.jpg',
    firstAired: new Date('2011-08-21'),
    title: 'The Killing',
    userId: '8855dd27-77d1-45ec-ad04-76fcd697f228',
    tmdbId: 34415,
  },
  {
    posterPath: '/tFTJ3YbOor3BtabI96QehXxEBii.jpg',
    firstAired: new Date('2017-08-21'),
    title: "The Handmaid's Tale",
    userId: '8855dd27-77d1-45ec-ad04-76fcd697f228',
    tmdbId: 69478,
  },
]

export const userSeed: Prisma.UserCreateInput = {
  email: 'liamwears@gmail.com',
  id: '8855dd27-77d1-45ec-ad04-76fcd697f228',
  googleId: '111573196264245181275',
  name: 'Liam Wears',
}
