
import React from 'react'

import BasicHead from './BasicHead'
import BasicSide from './BasicSide'
import BasicMain from './BasicMain'
import BasicFoot from './BasicFoot'


function BasicAdmin(props: any) {
  const { ctx, spec } = props
  const model = ctx().model

  const { frame } = spec
  
  const part = model.app.web.frame[frame].part.admin
  
  const headSpec: any = {
    frame
  }

  const sideSpec: any = {
    frame
  }

  const mainSpec: any = {
    frame
  }

  const footSpec: any = {
    frame
  }
  
  return (
    <div>
      <BasicHead ctx={ctx} spec={headSpec} />
      <BasicSide ctx={ctx} spec={sideSpec} />
      <BasicMain ctx={ctx} spec={mainSpec} />
      <BasicFoot ctx={ctx} spec={footSpec} />
    </div>
  )
}


export default BasicAdmin
