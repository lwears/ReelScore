// This package re-exports types from the API for use in the web app
// This avoids direct coupling between web and api packages

export type { AppRouter } from './router.js'
export type { RouterInputs, RouterOutputs } from './types.js'
