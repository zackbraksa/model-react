import { rest } from 'msw'

/*
// MEDIUM

import { rest } from 'msw'

const characters = [
  {
    id: 1,
    name: 'Rocko',
    background: 'Noble',
    race: 'Dwarf',
    klass: 'Fighter',
    alignment: 'Neutral',
    experience: 0,
    image_url:
      'https://i.pinimg.com/736x/4c/bf/af/4cbfafee43753bcf121ccf636c034a7a.jpg',
    strength: 18,
    dexterity: 18,
    constitution: 18,
    intelligence: 18,
    wisdom: 18,
    charisma: 18,
    campaign: {
      id: 1,
      name: 'Star Wards',
    },
    user: {
      id: 1,
    },
  },
]

const [character1] = characters
const indexRoute = '/api/characters'
const showRoute = `/api/campaigns/${character1.campaign.id}/characters/${character1.id}`
const postRoute = `/api/campaigns/1/characters`
const deleteRoute = `/api/campaigns/${character1.campaign.id}/characters/${character1.id}`


export const characterHandlers = [
  rest.get(indexRoute, (req, res, ctx) => {
    return res(ctx.json(characters), ctx.status(200))
  }),
  rest.get(showRoute, (req, res, ctx) => {
    return res(ctx.json(character1), ctx.status(200))
  }),
  rest.post(postRoute, (req, res, ctx) => {
    req.id = 3
    return res(ctx.json(req), ctx.status(201))
  }),
  rest.delete(deleteRoute, (req, res, ctx) => {
    return res(ctx.status(200))
  }),
]
*/

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem('is-authenticated', 'true')

    return res(
      // Respond with a 200 status code
      ctx.status(200)
    )
  }),

  rest.get('/user', (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem('is-authenticated')

    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),

        ctx.json({
          errorMessage: 'Not authorized',
        })
      )
    }

    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),

      ctx.json({
        username: 'admin',
      })
    )
  }),
]
