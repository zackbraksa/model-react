
import React from 'react'

import { useSelector } from 'react-redux'

import {
  Routes,
  Route
} from 'react-router-dom'


import BasicLed from './BasicLed'
  

function makeCmp(view: any, ctx: any) {
  let cmp: any = ()=><div>NONE</div>

  const content = view.content || {}

  if('custom' === content.kind) {
    cmp = ctx().cmp[content.cmp]
  }
  else if('led' === content.kind) {
    cmp = BasicLed
  }

  return cmp 
}



function BasicMain(props: any) {
  const { ctx, spec } = props
  const { model, content } = ctx()
  
  const { frame } = spec
  
  const vxg = useSelector((state: any) => state.main.vxg)
  
  const part = model.app.web.frame[frame].part.main

  const views = Object.values(model.app.web.frame.private.view)
  
  const sideOpen = vxg.cmp.BasicSide.show
  const divStyle = {
    'paddingLeft': sideOpen ? '11.5em' : '0em',
    'paddingRight': sideOpen ? '1em' : '1em',
  }
  
  return (
    <div className="BasicMain">
      <div style={{width:'100%',height:'100%', ...divStyle }}>
        <Routes>
          <Route path="/view">
            { views.map((view:any)=> {
              const Cmp:any = makeCmp(view, ctx)
              return <Route
                key={view.name}
                path={'/view/'+view.name}
                element={<Cmp ctx={ctx} spec={view}/>}
              />
            })}
        </Route>
      </Routes>
      </div>
    </div>
  )
}


export default BasicMain
