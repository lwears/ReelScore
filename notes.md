# Notes for learning

```ts
function isEntityOfType<T extends Content, K extends keyof T>(
  obj: any,
  typeCheckProperty: K,
): obj is T {
  return typeof obj === 'object' && obj !== null && typeCheckProperty in obj
}

// Usage:

const isMovie = (obj: any): obj is Movie =>
  isEntityOfType<Movie, 'releaseDate'>(obj, 'releaseDate')
const isSerie = (obj: any): obj is Serie =>
  isEntityOfType<Serie, 'firstAired'>(obj, 'firstAired')

type EntityValidator<T extends Content> = (obj: any) => obj is T

interface CrudRouterConfig<T extends Content> {
  // We provide some way to select an ORM repository
  entityName: 'movie' | 'serie'

  // We need an entity validator for procedure inputs
  entityType: EntityValidator<T>

  // We need a filter validator for procedure inputs
  //listFilter: z.infer<typeof contentFilter>
  //  service:
}

const contentFilter = z.object({
  watched: z.boolean(),
  title: z.string(),
  score: z.number().int().max(10).min(0),
})

const appRouter2 = router({
  movies: createCrudRouter<Movie, Prisma.MovieDelegate>({
    entityName: 'movie',
    entityType: isMovie,
    //listFilter: contentFilter,
  }),
  series: createCrudRouter<Serie, Prisma.SerieDelegate>({
    entityName: 'serie',
    entityType: isSerie,
    //listFilter: contentFilter,
  }),
})

function createCrudRouter<T extends Content>(config: CrudRouterConfig<T>) {
  return router({
    list: publicProcedure
      .input(contentFilter)
      .output(array(config.entityType))
      .query(({ ctx }) => {
        const repo = ctx.prisma[config.entityName]
        return repo.findMany()
      }),
    get: publicProcedure
      .input(z.string().uuid())
      .output(config.entityType)
      .query((opts) => {
        const repo = opts.ctx.orm[config.entityName]
        return repo.fetchById(opts.input.id)
      }),
    update: publicProcedure
      .input(config.entityType)
      .output(config.entityType)
      .mutation((opts) => {
        const repo = opts.ctx.orm[config.entityName]
        return repo.update(opts.input.id, opts.input)
      }),
    delete: publicProcedure.input(JustId).mutation((opts) => {
      const repo = opts.ctx.orm[config.entityName]
      return repo.delete(opts.input.id)
    }),
  })
}
```
