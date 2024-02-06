import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const UserScalarFieldEnumSchema = z.enum(['id','googleId','email','name']);

export const MovieScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','title','posterPath','releaseDate','imdbScore','rottenTomatoes','score','watched','userId']);

export const SerieScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','title','posterPath','firstAired','imdbScore','rottenTomatoes','score','watched','userId']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string(),
  googleId: z.string(),
  email: z.string(),
  name: z.string(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// MOVIE SCHEMA
/////////////////////////////////////////

export const MovieSchema = z.object({
  id: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  title: z.string(),
  posterPath: z.string(),
  releaseDate: z.coerce.date(),
  imdbScore: z.number().int().nullable(),
  rottenTomatoes: z.number().int().nullable(),
  score: z.number().int().nullable(),
  watched: z.boolean(),
  userId: z.string(),
})

export type Movie = z.infer<typeof MovieSchema>

/////////////////////////////////////////
// SERIE SCHEMA
/////////////////////////////////////////

export const SerieSchema = z.object({
  id: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  title: z.string(),
  posterPath: z.string(),
  firstAired: z.coerce.date(),
  imdbScore: z.number().int().nullable(),
  rottenTomatoes: z.number().int().nullable(),
  score: z.number().int().nullable(),
  watched: z.boolean(),
  userId: z.string(),
})

export type Serie = z.infer<typeof SerieSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  movies: z.union([z.boolean(),z.lazy(() => MovieFindManyArgsSchema)]).optional(),
  series: z.union([z.boolean(),z.lazy(() => SerieFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  movies: z.boolean().optional(),
  series: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  googleId: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
  movies: z.union([z.boolean(),z.lazy(() => MovieFindManyArgsSchema)]).optional(),
  series: z.union([z.boolean(),z.lazy(() => SerieFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// MOVIE
//------------------------------------------------------

export const MovieIncludeSchema: z.ZodType<Prisma.MovieInclude> = z.object({
  User: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const MovieArgsSchema: z.ZodType<Prisma.MovieDefaultArgs> = z.object({
  select: z.lazy(() => MovieSelectSchema).optional(),
  include: z.lazy(() => MovieIncludeSchema).optional(),
}).strict();

export const MovieSelectSchema: z.ZodType<Prisma.MovieSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  title: z.boolean().optional(),
  posterPath: z.boolean().optional(),
  releaseDate: z.boolean().optional(),
  imdbScore: z.boolean().optional(),
  rottenTomatoes: z.boolean().optional(),
  score: z.boolean().optional(),
  watched: z.boolean().optional(),
  userId: z.boolean().optional(),
  User: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// SERIE
//------------------------------------------------------

export const SerieIncludeSchema: z.ZodType<Prisma.SerieInclude> = z.object({
  User: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const SerieArgsSchema: z.ZodType<Prisma.SerieDefaultArgs> = z.object({
  select: z.lazy(() => SerieSelectSchema).optional(),
  include: z.lazy(() => SerieIncludeSchema).optional(),
}).strict();

export const SerieSelectSchema: z.ZodType<Prisma.SerieSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  title: z.boolean().optional(),
  posterPath: z.boolean().optional(),
  firstAired: z.boolean().optional(),
  imdbScore: z.boolean().optional(),
  rottenTomatoes: z.boolean().optional(),
  score: z.boolean().optional(),
  watched: z.boolean().optional(),
  userId: z.boolean().optional(),
  User: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  googleId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  movies: z.lazy(() => MovieListRelationFilterSchema).optional(),
  series: z.lazy(() => SerieListRelationFilterSchema).optional()
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  googleId: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  movies: z.lazy(() => MovieOrderByRelationAggregateInputSchema).optional(),
  series: z.lazy(() => SerieOrderByRelationAggregateInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    googleId: z.string(),
    email: z.string()
  }),
  z.object({
    id: z.string(),
    googleId: z.string(),
  }),
  z.object({
    id: z.string(),
    email: z.string(),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    googleId: z.string(),
    email: z.string(),
  }),
  z.object({
    googleId: z.string(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  googleId: z.string().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  movies: z.lazy(() => MovieListRelationFilterSchema).optional(),
  series: z.lazy(() => SerieListRelationFilterSchema).optional()
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  googleId: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  googleId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const MovieWhereInputSchema: z.ZodType<Prisma.MovieWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MovieWhereInputSchema),z.lazy(() => MovieWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MovieWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MovieWhereInputSchema),z.lazy(() => MovieWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  posterPath: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  releaseDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  imdbScore: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  rottenTomatoes: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  score: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  watched: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  userId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  User: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
}).strict();

export const MovieOrderByWithRelationInputSchema: z.ZodType<Prisma.MovieOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  posterPath: z.lazy(() => SortOrderSchema).optional(),
  releaseDate: z.lazy(() => SortOrderSchema).optional(),
  imdbScore: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  rottenTomatoes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  score: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  watched: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  User: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const MovieWhereUniqueInputSchema: z.ZodType<Prisma.MovieWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    title: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    title: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  title: z.string().optional(),
  AND: z.union([ z.lazy(() => MovieWhereInputSchema),z.lazy(() => MovieWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MovieWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MovieWhereInputSchema),z.lazy(() => MovieWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  posterPath: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  releaseDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  imdbScore: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  rottenTomatoes: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  score: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  watched: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  userId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  User: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
}).strict());

export const MovieOrderByWithAggregationInputSchema: z.ZodType<Prisma.MovieOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  posterPath: z.lazy(() => SortOrderSchema).optional(),
  releaseDate: z.lazy(() => SortOrderSchema).optional(),
  imdbScore: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  rottenTomatoes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  score: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  watched: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MovieCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => MovieAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MovieMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MovieMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => MovieSumOrderByAggregateInputSchema).optional()
}).strict();

export const MovieScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MovieScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => MovieScalarWhereWithAggregatesInputSchema),z.lazy(() => MovieScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => MovieScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MovieScalarWhereWithAggregatesInputSchema),z.lazy(() => MovieScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  posterPath: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  releaseDate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  imdbScore: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  rottenTomatoes: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  score: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  watched: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  userId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const SerieWhereInputSchema: z.ZodType<Prisma.SerieWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SerieWhereInputSchema),z.lazy(() => SerieWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SerieWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SerieWhereInputSchema),z.lazy(() => SerieWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  posterPath: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  firstAired: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  imdbScore: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  rottenTomatoes: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  score: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  watched: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  userId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  User: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
}).strict();

export const SerieOrderByWithRelationInputSchema: z.ZodType<Prisma.SerieOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  posterPath: z.lazy(() => SortOrderSchema).optional(),
  firstAired: z.lazy(() => SortOrderSchema).optional(),
  imdbScore: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  rottenTomatoes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  score: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  watched: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  User: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const SerieWhereUniqueInputSchema: z.ZodType<Prisma.SerieWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    title: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    title: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  title: z.string().optional(),
  AND: z.union([ z.lazy(() => SerieWhereInputSchema),z.lazy(() => SerieWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SerieWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SerieWhereInputSchema),z.lazy(() => SerieWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  posterPath: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  firstAired: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  imdbScore: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  rottenTomatoes: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  score: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  watched: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  userId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  User: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
}).strict());

export const SerieOrderByWithAggregationInputSchema: z.ZodType<Prisma.SerieOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  posterPath: z.lazy(() => SortOrderSchema).optional(),
  firstAired: z.lazy(() => SortOrderSchema).optional(),
  imdbScore: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  rottenTomatoes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  score: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  watched: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SerieCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SerieAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SerieMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SerieMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SerieSumOrderByAggregateInputSchema).optional()
}).strict();

export const SerieScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SerieScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SerieScalarWhereWithAggregatesInputSchema),z.lazy(() => SerieScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SerieScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SerieScalarWhereWithAggregatesInputSchema),z.lazy(() => SerieScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  posterPath: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  firstAired: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  imdbScore: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  rottenTomatoes: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  score: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  watched: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  userId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().optional(),
  googleId: z.string(),
  email: z.string(),
  name: z.string(),
  movies: z.lazy(() => MovieCreateNestedManyWithoutUserInputSchema).optional(),
  series: z.lazy(() => SerieCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  googleId: z.string(),
  email: z.string(),
  name: z.string(),
  movies: z.lazy(() => MovieUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  series: z.lazy(() => SerieUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  googleId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  movies: z.lazy(() => MovieUpdateManyWithoutUserNestedInputSchema).optional(),
  series: z.lazy(() => SerieUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  googleId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  movies: z.lazy(() => MovieUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  series: z.lazy(() => SerieUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().optional(),
  googleId: z.string(),
  email: z.string(),
  name: z.string()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  googleId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  googleId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MovieCreateInputSchema: z.ZodType<Prisma.MovieCreateInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string(),
  posterPath: z.string(),
  releaseDate: z.coerce.date(),
  imdbScore: z.number().int().optional().nullable(),
  rottenTomatoes: z.number().int().optional().nullable(),
  score: z.number().int().optional().nullable(),
  watched: z.boolean().optional(),
  User: z.lazy(() => UserCreateNestedOneWithoutMoviesInputSchema).optional()
}).strict();

export const MovieUncheckedCreateInputSchema: z.ZodType<Prisma.MovieUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string(),
  posterPath: z.string(),
  releaseDate: z.coerce.date(),
  imdbScore: z.number().int().optional().nullable(),
  rottenTomatoes: z.number().int().optional().nullable(),
  score: z.number().int().optional().nullable(),
  watched: z.boolean().optional(),
  userId: z.string()
}).strict();

export const MovieUpdateInputSchema: z.ZodType<Prisma.MovieUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  posterPath: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  releaseDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  imdbScore: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rottenTomatoes: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  score: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  watched: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  User: z.lazy(() => UserUpdateOneWithoutMoviesNestedInputSchema).optional()
}).strict();

export const MovieUncheckedUpdateInputSchema: z.ZodType<Prisma.MovieUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  posterPath: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  releaseDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  imdbScore: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rottenTomatoes: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  score: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  watched: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MovieCreateManyInputSchema: z.ZodType<Prisma.MovieCreateManyInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string(),
  posterPath: z.string(),
  releaseDate: z.coerce.date(),
  imdbScore: z.number().int().optional().nullable(),
  rottenTomatoes: z.number().int().optional().nullable(),
  score: z.number().int().optional().nullable(),
  watched: z.boolean().optional(),
  userId: z.string()
}).strict();

export const MovieUpdateManyMutationInputSchema: z.ZodType<Prisma.MovieUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  posterPath: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  releaseDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  imdbScore: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rottenTomatoes: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  score: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  watched: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MovieUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MovieUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  posterPath: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  releaseDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  imdbScore: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rottenTomatoes: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  score: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  watched: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SerieCreateInputSchema: z.ZodType<Prisma.SerieCreateInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string(),
  posterPath: z.string(),
  firstAired: z.coerce.date(),
  imdbScore: z.number().int().optional().nullable(),
  rottenTomatoes: z.number().int().optional().nullable(),
  score: z.number().int().optional().nullable(),
  watched: z.boolean().optional(),
  User: z.lazy(() => UserCreateNestedOneWithoutSeriesInputSchema).optional()
}).strict();

export const SerieUncheckedCreateInputSchema: z.ZodType<Prisma.SerieUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string(),
  posterPath: z.string(),
  firstAired: z.coerce.date(),
  imdbScore: z.number().int().optional().nullable(),
  rottenTomatoes: z.number().int().optional().nullable(),
  score: z.number().int().optional().nullable(),
  watched: z.boolean().optional(),
  userId: z.string()
}).strict();

export const SerieUpdateInputSchema: z.ZodType<Prisma.SerieUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  posterPath: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstAired: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  imdbScore: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rottenTomatoes: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  score: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  watched: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  User: z.lazy(() => UserUpdateOneWithoutSeriesNestedInputSchema).optional()
}).strict();

export const SerieUncheckedUpdateInputSchema: z.ZodType<Prisma.SerieUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  posterPath: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstAired: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  imdbScore: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rottenTomatoes: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  score: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  watched: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SerieCreateManyInputSchema: z.ZodType<Prisma.SerieCreateManyInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string(),
  posterPath: z.string(),
  firstAired: z.coerce.date(),
  imdbScore: z.number().int().optional().nullable(),
  rottenTomatoes: z.number().int().optional().nullable(),
  score: z.number().int().optional().nullable(),
  watched: z.boolean().optional(),
  userId: z.string()
}).strict();

export const SerieUpdateManyMutationInputSchema: z.ZodType<Prisma.SerieUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  posterPath: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstAired: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  imdbScore: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rottenTomatoes: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  score: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  watched: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SerieUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SerieUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  posterPath: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstAired: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  imdbScore: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rottenTomatoes: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  score: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  watched: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UuidFilterSchema: z.ZodType<Prisma.UuidFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidFilterSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const MovieListRelationFilterSchema: z.ZodType<Prisma.MovieListRelationFilter> = z.object({
  every: z.lazy(() => MovieWhereInputSchema).optional(),
  some: z.lazy(() => MovieWhereInputSchema).optional(),
  none: z.lazy(() => MovieWhereInputSchema).optional()
}).strict();

export const SerieListRelationFilterSchema: z.ZodType<Prisma.SerieListRelationFilter> = z.object({
  every: z.lazy(() => SerieWhereInputSchema).optional(),
  some: z.lazy(() => SerieWhereInputSchema).optional(),
  none: z.lazy(() => SerieWhereInputSchema).optional()
}).strict();

export const MovieOrderByRelationAggregateInputSchema: z.ZodType<Prisma.MovieOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SerieOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SerieOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  googleId: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  googleId: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  googleId: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UuidWithAggregatesFilterSchema: z.ZodType<Prisma.UuidWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const UserNullableRelationFilterSchema: z.ZodType<Prisma.UserNullableRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => UserWhereInputSchema).optional().nullable()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const MovieCountOrderByAggregateInputSchema: z.ZodType<Prisma.MovieCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  posterPath: z.lazy(() => SortOrderSchema).optional(),
  releaseDate: z.lazy(() => SortOrderSchema).optional(),
  imdbScore: z.lazy(() => SortOrderSchema).optional(),
  rottenTomatoes: z.lazy(() => SortOrderSchema).optional(),
  score: z.lazy(() => SortOrderSchema).optional(),
  watched: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MovieAvgOrderByAggregateInputSchema: z.ZodType<Prisma.MovieAvgOrderByAggregateInput> = z.object({
  imdbScore: z.lazy(() => SortOrderSchema).optional(),
  rottenTomatoes: z.lazy(() => SortOrderSchema).optional(),
  score: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MovieMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MovieMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  posterPath: z.lazy(() => SortOrderSchema).optional(),
  releaseDate: z.lazy(() => SortOrderSchema).optional(),
  imdbScore: z.lazy(() => SortOrderSchema).optional(),
  rottenTomatoes: z.lazy(() => SortOrderSchema).optional(),
  score: z.lazy(() => SortOrderSchema).optional(),
  watched: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MovieMinOrderByAggregateInputSchema: z.ZodType<Prisma.MovieMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  posterPath: z.lazy(() => SortOrderSchema).optional(),
  releaseDate: z.lazy(() => SortOrderSchema).optional(),
  imdbScore: z.lazy(() => SortOrderSchema).optional(),
  rottenTomatoes: z.lazy(() => SortOrderSchema).optional(),
  score: z.lazy(() => SortOrderSchema).optional(),
  watched: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MovieSumOrderByAggregateInputSchema: z.ZodType<Prisma.MovieSumOrderByAggregateInput> = z.object({
  imdbScore: z.lazy(() => SortOrderSchema).optional(),
  rottenTomatoes: z.lazy(() => SortOrderSchema).optional(),
  score: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const SerieCountOrderByAggregateInputSchema: z.ZodType<Prisma.SerieCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  posterPath: z.lazy(() => SortOrderSchema).optional(),
  firstAired: z.lazy(() => SortOrderSchema).optional(),
  imdbScore: z.lazy(() => SortOrderSchema).optional(),
  rottenTomatoes: z.lazy(() => SortOrderSchema).optional(),
  score: z.lazy(() => SortOrderSchema).optional(),
  watched: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SerieAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SerieAvgOrderByAggregateInput> = z.object({
  imdbScore: z.lazy(() => SortOrderSchema).optional(),
  rottenTomatoes: z.lazy(() => SortOrderSchema).optional(),
  score: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SerieMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SerieMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  posterPath: z.lazy(() => SortOrderSchema).optional(),
  firstAired: z.lazy(() => SortOrderSchema).optional(),
  imdbScore: z.lazy(() => SortOrderSchema).optional(),
  rottenTomatoes: z.lazy(() => SortOrderSchema).optional(),
  score: z.lazy(() => SortOrderSchema).optional(),
  watched: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SerieMinOrderByAggregateInputSchema: z.ZodType<Prisma.SerieMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  posterPath: z.lazy(() => SortOrderSchema).optional(),
  firstAired: z.lazy(() => SortOrderSchema).optional(),
  imdbScore: z.lazy(() => SortOrderSchema).optional(),
  rottenTomatoes: z.lazy(() => SortOrderSchema).optional(),
  score: z.lazy(() => SortOrderSchema).optional(),
  watched: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SerieSumOrderByAggregateInputSchema: z.ZodType<Prisma.SerieSumOrderByAggregateInput> = z.object({
  imdbScore: z.lazy(() => SortOrderSchema).optional(),
  rottenTomatoes: z.lazy(() => SortOrderSchema).optional(),
  score: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MovieCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.MovieCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => MovieCreateWithoutUserInputSchema),z.lazy(() => MovieCreateWithoutUserInputSchema).array(),z.lazy(() => MovieUncheckedCreateWithoutUserInputSchema),z.lazy(() => MovieUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MovieCreateOrConnectWithoutUserInputSchema),z.lazy(() => MovieCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MovieCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MovieWhereUniqueInputSchema),z.lazy(() => MovieWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SerieCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SerieCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SerieCreateWithoutUserInputSchema),z.lazy(() => SerieCreateWithoutUserInputSchema).array(),z.lazy(() => SerieUncheckedCreateWithoutUserInputSchema),z.lazy(() => SerieUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SerieCreateOrConnectWithoutUserInputSchema),z.lazy(() => SerieCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SerieCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SerieWhereUniqueInputSchema),z.lazy(() => SerieWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MovieUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.MovieUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => MovieCreateWithoutUserInputSchema),z.lazy(() => MovieCreateWithoutUserInputSchema).array(),z.lazy(() => MovieUncheckedCreateWithoutUserInputSchema),z.lazy(() => MovieUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MovieCreateOrConnectWithoutUserInputSchema),z.lazy(() => MovieCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MovieCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MovieWhereUniqueInputSchema),z.lazy(() => MovieWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SerieUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SerieUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SerieCreateWithoutUserInputSchema),z.lazy(() => SerieCreateWithoutUserInputSchema).array(),z.lazy(() => SerieUncheckedCreateWithoutUserInputSchema),z.lazy(() => SerieUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SerieCreateOrConnectWithoutUserInputSchema),z.lazy(() => SerieCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SerieCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SerieWhereUniqueInputSchema),z.lazy(() => SerieWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const MovieUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.MovieUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => MovieCreateWithoutUserInputSchema),z.lazy(() => MovieCreateWithoutUserInputSchema).array(),z.lazy(() => MovieUncheckedCreateWithoutUserInputSchema),z.lazy(() => MovieUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MovieCreateOrConnectWithoutUserInputSchema),z.lazy(() => MovieCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MovieUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => MovieUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MovieCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MovieWhereUniqueInputSchema),z.lazy(() => MovieWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MovieWhereUniqueInputSchema),z.lazy(() => MovieWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MovieWhereUniqueInputSchema),z.lazy(() => MovieWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MovieWhereUniqueInputSchema),z.lazy(() => MovieWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MovieUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => MovieUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MovieUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => MovieUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MovieScalarWhereInputSchema),z.lazy(() => MovieScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SerieUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SerieUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SerieCreateWithoutUserInputSchema),z.lazy(() => SerieCreateWithoutUserInputSchema).array(),z.lazy(() => SerieUncheckedCreateWithoutUserInputSchema),z.lazy(() => SerieUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SerieCreateOrConnectWithoutUserInputSchema),z.lazy(() => SerieCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SerieUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SerieUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SerieCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SerieWhereUniqueInputSchema),z.lazy(() => SerieWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SerieWhereUniqueInputSchema),z.lazy(() => SerieWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SerieWhereUniqueInputSchema),z.lazy(() => SerieWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SerieWhereUniqueInputSchema),z.lazy(() => SerieWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SerieUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SerieUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SerieUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SerieUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SerieScalarWhereInputSchema),z.lazy(() => SerieScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MovieUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.MovieUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => MovieCreateWithoutUserInputSchema),z.lazy(() => MovieCreateWithoutUserInputSchema).array(),z.lazy(() => MovieUncheckedCreateWithoutUserInputSchema),z.lazy(() => MovieUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MovieCreateOrConnectWithoutUserInputSchema),z.lazy(() => MovieCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MovieUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => MovieUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MovieCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MovieWhereUniqueInputSchema),z.lazy(() => MovieWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MovieWhereUniqueInputSchema),z.lazy(() => MovieWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MovieWhereUniqueInputSchema),z.lazy(() => MovieWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MovieWhereUniqueInputSchema),z.lazy(() => MovieWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MovieUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => MovieUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MovieUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => MovieUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MovieScalarWhereInputSchema),z.lazy(() => MovieScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SerieUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SerieUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SerieCreateWithoutUserInputSchema),z.lazy(() => SerieCreateWithoutUserInputSchema).array(),z.lazy(() => SerieUncheckedCreateWithoutUserInputSchema),z.lazy(() => SerieUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SerieCreateOrConnectWithoutUserInputSchema),z.lazy(() => SerieCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SerieUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SerieUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SerieCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SerieWhereUniqueInputSchema),z.lazy(() => SerieWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SerieWhereUniqueInputSchema),z.lazy(() => SerieWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SerieWhereUniqueInputSchema),z.lazy(() => SerieWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SerieWhereUniqueInputSchema),z.lazy(() => SerieWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SerieUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SerieUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SerieUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SerieUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SerieScalarWhereInputSchema),z.lazy(() => SerieScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutMoviesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutMoviesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutMoviesInputSchema),z.lazy(() => UserUncheckedCreateWithoutMoviesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutMoviesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const UserUpdateOneWithoutMoviesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutMoviesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutMoviesInputSchema),z.lazy(() => UserUncheckedCreateWithoutMoviesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutMoviesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutMoviesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutMoviesInputSchema),z.lazy(() => UserUpdateWithoutMoviesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutMoviesInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutSeriesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSeriesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSeriesInputSchema),z.lazy(() => UserUncheckedCreateWithoutSeriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSeriesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneWithoutSeriesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutSeriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSeriesInputSchema),z.lazy(() => UserUncheckedCreateWithoutSeriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSeriesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSeriesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutSeriesInputSchema),z.lazy(() => UserUpdateWithoutSeriesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSeriesInputSchema) ]).optional(),
}).strict();

export const NestedUuidFilterSchema: z.ZodType<Prisma.NestedUuidFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidFilterSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedUuidWithAggregatesFilterSchema: z.ZodType<Prisma.NestedUuidWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const MovieCreateWithoutUserInputSchema: z.ZodType<Prisma.MovieCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string(),
  posterPath: z.string(),
  releaseDate: z.coerce.date(),
  imdbScore: z.number().int().optional().nullable(),
  rottenTomatoes: z.number().int().optional().nullable(),
  score: z.number().int().optional().nullable(),
  watched: z.boolean().optional()
}).strict();

export const MovieUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.MovieUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string(),
  posterPath: z.string(),
  releaseDate: z.coerce.date(),
  imdbScore: z.number().int().optional().nullable(),
  rottenTomatoes: z.number().int().optional().nullable(),
  score: z.number().int().optional().nullable(),
  watched: z.boolean().optional()
}).strict();

export const MovieCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.MovieCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => MovieWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MovieCreateWithoutUserInputSchema),z.lazy(() => MovieUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const MovieCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.MovieCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => MovieCreateManyUserInputSchema),z.lazy(() => MovieCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const SerieCreateWithoutUserInputSchema: z.ZodType<Prisma.SerieCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string(),
  posterPath: z.string(),
  firstAired: z.coerce.date(),
  imdbScore: z.number().int().optional().nullable(),
  rottenTomatoes: z.number().int().optional().nullable(),
  score: z.number().int().optional().nullable(),
  watched: z.boolean().optional()
}).strict();

export const SerieUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.SerieUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string(),
  posterPath: z.string(),
  firstAired: z.coerce.date(),
  imdbScore: z.number().int().optional().nullable(),
  rottenTomatoes: z.number().int().optional().nullable(),
  score: z.number().int().optional().nullable(),
  watched: z.boolean().optional()
}).strict();

export const SerieCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.SerieCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => SerieWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SerieCreateWithoutUserInputSchema),z.lazy(() => SerieUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SerieCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.SerieCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SerieCreateManyUserInputSchema),z.lazy(() => SerieCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const MovieUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.MovieUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => MovieWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MovieUpdateWithoutUserInputSchema),z.lazy(() => MovieUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => MovieCreateWithoutUserInputSchema),z.lazy(() => MovieUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const MovieUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.MovieUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => MovieWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MovieUpdateWithoutUserInputSchema),z.lazy(() => MovieUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const MovieUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.MovieUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => MovieScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MovieUpdateManyMutationInputSchema),z.lazy(() => MovieUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const MovieScalarWhereInputSchema: z.ZodType<Prisma.MovieScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MovieScalarWhereInputSchema),z.lazy(() => MovieScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MovieScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MovieScalarWhereInputSchema),z.lazy(() => MovieScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  posterPath: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  releaseDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  imdbScore: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  rottenTomatoes: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  score: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  watched: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  userId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
}).strict();

export const SerieUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SerieUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SerieWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SerieUpdateWithoutUserInputSchema),z.lazy(() => SerieUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => SerieCreateWithoutUserInputSchema),z.lazy(() => SerieUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SerieUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SerieUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SerieWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SerieUpdateWithoutUserInputSchema),z.lazy(() => SerieUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const SerieUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.SerieUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => SerieScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SerieUpdateManyMutationInputSchema),z.lazy(() => SerieUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const SerieScalarWhereInputSchema: z.ZodType<Prisma.SerieScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SerieScalarWhereInputSchema),z.lazy(() => SerieScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SerieScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SerieScalarWhereInputSchema),z.lazy(() => SerieScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  posterPath: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  firstAired: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  imdbScore: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  rottenTomatoes: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  score: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  watched: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  userId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
}).strict();

export const UserCreateWithoutMoviesInputSchema: z.ZodType<Prisma.UserCreateWithoutMoviesInput> = z.object({
  id: z.string().optional(),
  googleId: z.string(),
  email: z.string(),
  name: z.string(),
  series: z.lazy(() => SerieCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutMoviesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutMoviesInput> = z.object({
  id: z.string().optional(),
  googleId: z.string(),
  email: z.string(),
  name: z.string(),
  series: z.lazy(() => SerieUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutMoviesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutMoviesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutMoviesInputSchema),z.lazy(() => UserUncheckedCreateWithoutMoviesInputSchema) ]),
}).strict();

export const UserUpsertWithoutMoviesInputSchema: z.ZodType<Prisma.UserUpsertWithoutMoviesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutMoviesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutMoviesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutMoviesInputSchema),z.lazy(() => UserUncheckedCreateWithoutMoviesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutMoviesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutMoviesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutMoviesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutMoviesInputSchema) ]),
}).strict();

export const UserUpdateWithoutMoviesInputSchema: z.ZodType<Prisma.UserUpdateWithoutMoviesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  googleId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  series: z.lazy(() => SerieUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutMoviesInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutMoviesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  googleId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  series: z.lazy(() => SerieUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutSeriesInputSchema: z.ZodType<Prisma.UserCreateWithoutSeriesInput> = z.object({
  id: z.string().optional(),
  googleId: z.string(),
  email: z.string(),
  name: z.string(),
  movies: z.lazy(() => MovieCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutSeriesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSeriesInput> = z.object({
  id: z.string().optional(),
  googleId: z.string(),
  email: z.string(),
  name: z.string(),
  movies: z.lazy(() => MovieUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutSeriesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSeriesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutSeriesInputSchema),z.lazy(() => UserUncheckedCreateWithoutSeriesInputSchema) ]),
}).strict();

export const UserUpsertWithoutSeriesInputSchema: z.ZodType<Prisma.UserUpsertWithoutSeriesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutSeriesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSeriesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutSeriesInputSchema),z.lazy(() => UserUncheckedCreateWithoutSeriesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutSeriesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSeriesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutSeriesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSeriesInputSchema) ]),
}).strict();

export const UserUpdateWithoutSeriesInputSchema: z.ZodType<Prisma.UserUpdateWithoutSeriesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  googleId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  movies: z.lazy(() => MovieUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutSeriesInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSeriesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  googleId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  movies: z.lazy(() => MovieUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const MovieCreateManyUserInputSchema: z.ZodType<Prisma.MovieCreateManyUserInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string(),
  posterPath: z.string(),
  releaseDate: z.coerce.date(),
  imdbScore: z.number().int().optional().nullable(),
  rottenTomatoes: z.number().int().optional().nullable(),
  score: z.number().int().optional().nullable(),
  watched: z.boolean().optional()
}).strict();

export const SerieCreateManyUserInputSchema: z.ZodType<Prisma.SerieCreateManyUserInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string(),
  posterPath: z.string(),
  firstAired: z.coerce.date(),
  imdbScore: z.number().int().optional().nullable(),
  rottenTomatoes: z.number().int().optional().nullable(),
  score: z.number().int().optional().nullable(),
  watched: z.boolean().optional()
}).strict();

export const MovieUpdateWithoutUserInputSchema: z.ZodType<Prisma.MovieUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  posterPath: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  releaseDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  imdbScore: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rottenTomatoes: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  score: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  watched: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MovieUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.MovieUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  posterPath: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  releaseDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  imdbScore: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rottenTomatoes: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  score: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  watched: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MovieUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.MovieUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  posterPath: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  releaseDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  imdbScore: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rottenTomatoes: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  score: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  watched: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SerieUpdateWithoutUserInputSchema: z.ZodType<Prisma.SerieUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  posterPath: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstAired: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  imdbScore: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rottenTomatoes: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  score: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  watched: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SerieUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.SerieUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  posterPath: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstAired: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  imdbScore: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rottenTomatoes: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  score: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  watched: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SerieUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.SerieUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  posterPath: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstAired: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  imdbScore: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rottenTomatoes: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  score: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  watched: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const MovieFindFirstArgsSchema: z.ZodType<Prisma.MovieFindFirstArgs> = z.object({
  select: MovieSelectSchema.optional(),
  include: MovieIncludeSchema.optional(),
  where: MovieWhereInputSchema.optional(),
  orderBy: z.union([ MovieOrderByWithRelationInputSchema.array(),MovieOrderByWithRelationInputSchema ]).optional(),
  cursor: MovieWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MovieScalarFieldEnumSchema,MovieScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const MovieFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MovieFindFirstOrThrowArgs> = z.object({
  select: MovieSelectSchema.optional(),
  include: MovieIncludeSchema.optional(),
  where: MovieWhereInputSchema.optional(),
  orderBy: z.union([ MovieOrderByWithRelationInputSchema.array(),MovieOrderByWithRelationInputSchema ]).optional(),
  cursor: MovieWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MovieScalarFieldEnumSchema,MovieScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const MovieFindManyArgsSchema: z.ZodType<Prisma.MovieFindManyArgs> = z.object({
  select: MovieSelectSchema.optional(),
  include: MovieIncludeSchema.optional(),
  where: MovieWhereInputSchema.optional(),
  orderBy: z.union([ MovieOrderByWithRelationInputSchema.array(),MovieOrderByWithRelationInputSchema ]).optional(),
  cursor: MovieWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MovieScalarFieldEnumSchema,MovieScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const MovieAggregateArgsSchema: z.ZodType<Prisma.MovieAggregateArgs> = z.object({
  where: MovieWhereInputSchema.optional(),
  orderBy: z.union([ MovieOrderByWithRelationInputSchema.array(),MovieOrderByWithRelationInputSchema ]).optional(),
  cursor: MovieWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const MovieGroupByArgsSchema: z.ZodType<Prisma.MovieGroupByArgs> = z.object({
  where: MovieWhereInputSchema.optional(),
  orderBy: z.union([ MovieOrderByWithAggregationInputSchema.array(),MovieOrderByWithAggregationInputSchema ]).optional(),
  by: MovieScalarFieldEnumSchema.array(),
  having: MovieScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const MovieFindUniqueArgsSchema: z.ZodType<Prisma.MovieFindUniqueArgs> = z.object({
  select: MovieSelectSchema.optional(),
  include: MovieIncludeSchema.optional(),
  where: MovieWhereUniqueInputSchema,
}).strict() ;

export const MovieFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.MovieFindUniqueOrThrowArgs> = z.object({
  select: MovieSelectSchema.optional(),
  include: MovieIncludeSchema.optional(),
  where: MovieWhereUniqueInputSchema,
}).strict() ;

export const SerieFindFirstArgsSchema: z.ZodType<Prisma.SerieFindFirstArgs> = z.object({
  select: SerieSelectSchema.optional(),
  include: SerieIncludeSchema.optional(),
  where: SerieWhereInputSchema.optional(),
  orderBy: z.union([ SerieOrderByWithRelationInputSchema.array(),SerieOrderByWithRelationInputSchema ]).optional(),
  cursor: SerieWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SerieScalarFieldEnumSchema,SerieScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SerieFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SerieFindFirstOrThrowArgs> = z.object({
  select: SerieSelectSchema.optional(),
  include: SerieIncludeSchema.optional(),
  where: SerieWhereInputSchema.optional(),
  orderBy: z.union([ SerieOrderByWithRelationInputSchema.array(),SerieOrderByWithRelationInputSchema ]).optional(),
  cursor: SerieWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SerieScalarFieldEnumSchema,SerieScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SerieFindManyArgsSchema: z.ZodType<Prisma.SerieFindManyArgs> = z.object({
  select: SerieSelectSchema.optional(),
  include: SerieIncludeSchema.optional(),
  where: SerieWhereInputSchema.optional(),
  orderBy: z.union([ SerieOrderByWithRelationInputSchema.array(),SerieOrderByWithRelationInputSchema ]).optional(),
  cursor: SerieWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SerieScalarFieldEnumSchema,SerieScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SerieAggregateArgsSchema: z.ZodType<Prisma.SerieAggregateArgs> = z.object({
  where: SerieWhereInputSchema.optional(),
  orderBy: z.union([ SerieOrderByWithRelationInputSchema.array(),SerieOrderByWithRelationInputSchema ]).optional(),
  cursor: SerieWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SerieGroupByArgsSchema: z.ZodType<Prisma.SerieGroupByArgs> = z.object({
  where: SerieWhereInputSchema.optional(),
  orderBy: z.union([ SerieOrderByWithAggregationInputSchema.array(),SerieOrderByWithAggregationInputSchema ]).optional(),
  by: SerieScalarFieldEnumSchema.array(),
  having: SerieScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SerieFindUniqueArgsSchema: z.ZodType<Prisma.SerieFindUniqueArgs> = z.object({
  select: SerieSelectSchema.optional(),
  include: SerieIncludeSchema.optional(),
  where: SerieWhereUniqueInputSchema,
}).strict() ;

export const SerieFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SerieFindUniqueOrThrowArgs> = z.object({
  select: SerieSelectSchema.optional(),
  include: SerieIncludeSchema.optional(),
  where: SerieWhereUniqueInputSchema,
}).strict() ;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const MovieCreateArgsSchema: z.ZodType<Prisma.MovieCreateArgs> = z.object({
  select: MovieSelectSchema.optional(),
  include: MovieIncludeSchema.optional(),
  data: z.union([ MovieCreateInputSchema,MovieUncheckedCreateInputSchema ]),
}).strict() ;

export const MovieUpsertArgsSchema: z.ZodType<Prisma.MovieUpsertArgs> = z.object({
  select: MovieSelectSchema.optional(),
  include: MovieIncludeSchema.optional(),
  where: MovieWhereUniqueInputSchema,
  create: z.union([ MovieCreateInputSchema,MovieUncheckedCreateInputSchema ]),
  update: z.union([ MovieUpdateInputSchema,MovieUncheckedUpdateInputSchema ]),
}).strict() ;

export const MovieCreateManyArgsSchema: z.ZodType<Prisma.MovieCreateManyArgs> = z.object({
  data: z.union([ MovieCreateManyInputSchema,MovieCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const MovieDeleteArgsSchema: z.ZodType<Prisma.MovieDeleteArgs> = z.object({
  select: MovieSelectSchema.optional(),
  include: MovieIncludeSchema.optional(),
  where: MovieWhereUniqueInputSchema,
}).strict() ;

export const MovieUpdateArgsSchema: z.ZodType<Prisma.MovieUpdateArgs> = z.object({
  select: MovieSelectSchema.optional(),
  include: MovieIncludeSchema.optional(),
  data: z.union([ MovieUpdateInputSchema,MovieUncheckedUpdateInputSchema ]),
  where: MovieWhereUniqueInputSchema,
}).strict() ;

export const MovieUpdateManyArgsSchema: z.ZodType<Prisma.MovieUpdateManyArgs> = z.object({
  data: z.union([ MovieUpdateManyMutationInputSchema,MovieUncheckedUpdateManyInputSchema ]),
  where: MovieWhereInputSchema.optional(),
}).strict() ;

export const MovieDeleteManyArgsSchema: z.ZodType<Prisma.MovieDeleteManyArgs> = z.object({
  where: MovieWhereInputSchema.optional(),
}).strict() ;

export const SerieCreateArgsSchema: z.ZodType<Prisma.SerieCreateArgs> = z.object({
  select: SerieSelectSchema.optional(),
  include: SerieIncludeSchema.optional(),
  data: z.union([ SerieCreateInputSchema,SerieUncheckedCreateInputSchema ]),
}).strict() ;

export const SerieUpsertArgsSchema: z.ZodType<Prisma.SerieUpsertArgs> = z.object({
  select: SerieSelectSchema.optional(),
  include: SerieIncludeSchema.optional(),
  where: SerieWhereUniqueInputSchema,
  create: z.union([ SerieCreateInputSchema,SerieUncheckedCreateInputSchema ]),
  update: z.union([ SerieUpdateInputSchema,SerieUncheckedUpdateInputSchema ]),
}).strict() ;

export const SerieCreateManyArgsSchema: z.ZodType<Prisma.SerieCreateManyArgs> = z.object({
  data: z.union([ SerieCreateManyInputSchema,SerieCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const SerieDeleteArgsSchema: z.ZodType<Prisma.SerieDeleteArgs> = z.object({
  select: SerieSelectSchema.optional(),
  include: SerieIncludeSchema.optional(),
  where: SerieWhereUniqueInputSchema,
}).strict() ;

export const SerieUpdateArgsSchema: z.ZodType<Prisma.SerieUpdateArgs> = z.object({
  select: SerieSelectSchema.optional(),
  include: SerieIncludeSchema.optional(),
  data: z.union([ SerieUpdateInputSchema,SerieUncheckedUpdateInputSchema ]),
  where: SerieWhereUniqueInputSchema,
}).strict() ;

export const SerieUpdateManyArgsSchema: z.ZodType<Prisma.SerieUpdateManyArgs> = z.object({
  data: z.union([ SerieUpdateManyMutationInputSchema,SerieUncheckedUpdateManyInputSchema ]),
  where: SerieWhereInputSchema.optional(),
}).strict() ;

export const SerieDeleteManyArgsSchema: z.ZodType<Prisma.SerieDeleteManyArgs> = z.object({
  where: SerieWhereInputSchema.optional(),
}).strict() ;