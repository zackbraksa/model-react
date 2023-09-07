import { describe, it, expect } from 'vitest'
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { renderWithProviders } from './mocks/test-utils'
import {
  BasicAdmin,
  BasicAppBar,
  BasicAuth,
  BasicButton,
  BasicDrawer,
  BasicDrawerHeader,
  BasicEdit,
  BasicFoot,
  BasicHead,
  BasicLed,
  BasicList,
  BasicMain,
  BasicSide,
} from '../src/lib/index'

/*
// MEDIUM
import { render, waitFor } from '../../../utils/test-utils'
import { handlers } from '../../../__mocks__/character'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import CharactersContainer from '../CharactersContainer'

class ResizeObserver {
  observe() {}
  unobserve() {}
}

const server = setupServer(...handlers)

// Establish API mocking before all tests.
beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())

it('shows user characters', async () => {
  window.ResizeObserver = ResizeObserver
  render(<CharactersContainer />)
})
*/

describe('render-component', () => {
  const initialState = {}
  const mockStore = configureStore()
  let store

  // it('render-basic-admin', () => {
  //   // BasicHead causing issues
  //   let ctx = () => {
  //     return {
  //       model: {
  //         app: { web: { frame: { frame: { part: { foot: 'foot' } } } } },
  //       },
  //     }
  //   }
  //   let spec = { frame: 'frame' }
  //   render(<BasicAdmin ctx={ctx} spec={spec} />)
  // })

  it('render-basic-appbar', () => {
    render(<BasicAppBar />)
    // screen.debug()
  })

  it('render-basic-auth', () => {
    let ctx = () => {}
    let spec = { img: { logo: 'logo' }, handle: { signin: () => {} } }
    render(<BasicAuth ctx={ctx} spec={spec} />)
  })

  it('render-basic-button', () => {
    render(<BasicButton />)
    // screen.debug()
  })

  it('render-basic-drawer', () => {
    render(<BasicDrawer />)
    // screen.debug()
  })

  it('render-basic-drawer-header', () => {
    render(<BasicDrawerHeader />)
    // screen.debug()
  })

  // it('render-basic-edit', () => {
  //   // vitest thinks .map() is an attribute and not a function
  //   let ctx = () => {
  //     return { model: 'model', seneca: 'seneca', custom: 'custom' }
  //   }
  //   let spec = {
  //     content: { def: 'def' },
  //     itemFields: { field1: { name: 'name' }, field2: { name: 'name' } },
  //   }
  //   render(<BasicEdit ctx={ctx} spec={spec} />)
  // })

  it('render-basic-foot', () => {
    let ctx = () => {
      return {
        model: {
          app: { web: { frame: { frame: { part: { foot: 'foot' } } } } },
        },
      }
    }
    let spec = { frame: 'frame' }
    render(<BasicFoot ctx={ctx} spec={spec} />)
  })

  // it('render-basic-head', () => {
  //   // Cannot read properties of undefined (reading 'auth') -> const user = useSelector((state:any)=>state.main.auth.user)
  //   let ctx = () => {
  //     return {
  //       model: {
  //         app: {
  //           web: {
  //             frame: { frame: { part: { head: { tool: { def: {} } } } } },
  //           },
  //         },
  //       },
  //       seneca: 'seneca',
  //     }
  //   }
  //   let spec = { frame: 'frame' }

  //   store = mockStore(initialState)
  //   render(
  //     <Provider store={store}>
  //       <BasicHead ctx={ctx} spec={spec} />
  //     </Provider>,
  //     { wrapper: BrowserRouter }
  //   )

  //   // renderWithProviders(<BasicHead ctx={ctx} spec={spec} />, {
  //   //   wrapper: BrowserRouter,
  //   //   // initialState: {
  //   //   //   dataready: true, // pass data for selector
  //   //   // },
  //   // })
  // })

  // it('render-basic-led', () => {
  //   // Cannot read properties of undefined (reading 'vxg') -> const vxgState = useSelector((state: any) => state.main.vxg)
  //   store = mockStore(initialState)
  //   let ctx = () => {
  //     return { model: 'model', seneca: 'seneca', custom: 'custom' }
  //   }
  //   let spec = {}
  //   render(
  //     <Provider store={store}>
  //       <BasicLed ctx={ctx} spec={spec} />
  //     </Provider>,
  //     { wrapper: BrowserRouter }
  //   )
  // })

  // it('render-basic-list', () => {
  //   // Cannot read properties of undefined (reading 'vxg') -> const vxg = useSelector((state: any) => state.main.vxg)
  //   store = mockStore(initialState)
  //   let ctx = () => {
  //     return { model: 'model', seneca: 'seneca', custom: 'custom' }
  //   }
  //   let spec = {}
  //   render(
  //     <Provider store={store}>
  //       <BasicList ctx={ctx} spec={spec} />
  //     </Provider>,
  //     { wrapper: BrowserRouter }
  //   )
  // })

  // it('render-basic-main', () => {
  //   // Cannot read properties of undefined (reading 'vxg') -> const sideOpen = useSelector((state: any) => state.main.vxg.cmp.BasicSi…
  //   store = mockStore(initialState)
  //   let ctx = () => {
  //     return {
  //       model: {
  //         app: {
  //           web: {
  //             frame: {
  //               frame: { part: { foot: 'foot' } },
  //               private: { view: 'view' },
  //             },
  //           },
  //         },
  //       },
  //       content: 'content',
  //     }
  //   }
  //   let spec = { frame: 'frame' }
  //   render(
  //     <Provider store={store}>
  //       <BasicMain ctx={ctx} spec={spec} />
  //     </Provider>,
  //     { wrapper: BrowserRouter }
  //   )
  // })

  // it('render-basic-side', () => {
  //   // Cannot read properties of undefined (reading 'vxg') -> const vxgState = useSelector((state: any) => state.main.vxg)
  //   store = mockStore(initialState)
  //   let ctx = () => {
  //     return { model: 'model', seneca: 'senca' }
  //   }
  //   let spec = {}
  //   render(
  //     <Provider store={store}>
  //       <BasicSide ctx={ctx} spec={spec} />
  //     </Provider>,
  //     { wrapper: BrowserRouter }
  //   )
  // })
})
