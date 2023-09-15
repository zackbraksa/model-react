import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'

import type { RenderOptions } from '@testing-library/react'

interface IExtendedRenderOptions extends RenderOptions {
  withRouter?: boolean
  withRedux?: boolean
  mockInitialState?: any
}

const wrapInRouter = (componentTree: JSX.Element) => (
  <BrowserRouter>{componentTree}</BrowserRouter>
)

const wrapInRedux = (
  componentTree: JSX.Element,
  { mockInitialState }: IExtendedRenderOptions
) => {
  const storeMock = configureStore([thunk])(mockInitialState)
  return <Provider store={storeMock}>{componentTree}</Provider>
}

const setupComponent = (
  ui: JSX.Element,
  renderOptions?: IExtendedRenderOptions
) => {
  let componentTree = <>{ui}</>
  componentTree = wrapInRouter(componentTree)
  componentTree = wrapInRedux(componentTree, renderOptions)
  return componentTree
}

export function customRender(
  ui: JSX.Element,
  renderOptions?: IExtendedRenderOptions
) {
  const componentTree = setupComponent(ui, renderOptions)
  return render(componentTree)
}
