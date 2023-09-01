import { describe, it, expect } from 'vitest'
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

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

  it('render-basic-head', () => {
    store = mockStore(initialState)
    // could not find react-redux context value; please ensure the component is wrapped in a <Provider>
    let ctx = () => {
      return {
        model: {
          app: {
            web: {
              frame: { frame: { part: { head: { tool: { def: {} } } } } },
            },
          },
        },
        seneca: 'seneca',
      }
    }
    let spec = { frame: 'frame' }

    render(
      <Provider store={store}>
        <BasicHead ctx={ctx} spec={spec} />
      </Provider>,
      { wrapper: BrowserRouter }
    )
  })

  // it('render-basic-led', () => {
  //   // Could not find react-redux context value; please ensure the component is wrapped in a <Provider>
  //   let ctx = () => {
  //     return { model: 'model', seneca: 'seneca', custom: 'custom' }
  //   }
  //   let spec = {}
  //   render(<BasicLed ctx={ctx} spec={spec} />)
  // })

  // it('render-basic-list', () => {
  //   // Could not find react-redux context value; please ensure the component is wrapped in a <Provider>
  //   let ctx = () => {
  //     return { model: 'model', seneca: 'seneca', custom: 'custom' }
  //   }
  //   let spec = {}
  //   render(<BasicList ctx={ctx} spec={spec} />)
  // })

  // it('render-basic-main', () => {
  //   // Could not find react-redux context value; please ensure the component is wrapped in a <Provider>
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
  //   render(<BasicMain ctx={ctx} spec={spec} />)
  // })

  // it('render-basic-side', () => {
  //   // Could not find react-redux context value; please ensure the component is wrapped in a <Provider>
  //   let ctx = () => {
  //     return { model: 'model', seneca: 'senca' }
  //   }
  //   let spec = {}
  //   render(<BasicSide ctx={ctx} spec={spec} />)
  // })
})
