import React, { Fragment, useCallback } from 'react'

import { useSelector } from 'react-redux'

import { Gubu, Skip, Exact, Any, Required, Value } from 'gubu'



const BasicFormShape = Gubu({
  name: String,
  slice: String,
  title: Skip(String),
  intro: Skip(String),
  btnTitle: Skip(String),
  field: Value({
    // name: String,
    title: String,
    kind: Exact('line','toggle','choice','custom'),
    // subtype: Skip(Exact('email')),
    subkind: Skip(String),
    placeholder: Skip(String),
    items: Skip([{
      value: Required(Any()),
      text: String,
    }]),
    explainer: Skip(String),
    orient: 'vertical',
    classes: '',
    cmp: Any(),
  },{}),
  submit: Function,
  submitCmp: Any(),
  // orient: Default('vertical', Exact('vertical','horizontal'))
  orient: 'vertical',
  classes: '',
})



function BasicField(props) {
  const field = props.field
  const form = props.form
  const store = props.store
  
  const { name, title, orient, kind } = field

  const classes = 'vxg-basic-field vxg-basic-field-'+orient+
        ' vxg-basic-field-'+kind+' '+
        field.classes

  const value = useSelector(state => state[form.slice][form.name][name])
  
  const onChange = (ev)=>{
    store.dispatch({
      // type: form.slice + '/setField_' + form.name,
      // payload: { name, value: ev.target.value }
      type: form.slice + '/setFormField',
      payload: { form: form.name, name, value: ev.target.value }
    })
  }

  
  
  return (
    <div className={classes}>

      { 'toggle' === field.kind ?
        <input
          type="checkbox"
          id={form.name+'-'+field.name}
          name={field.name}
          value={value}
          onChange={onChange}
        /> : <></> }

      <label htmlFor={name}>{title}</label>

      { 'line' === field.kind ?
        <input
          id={form.name+'-'+field.name}
          name={field.name}
          placeholder={field.placeholder}
          value={value}
          onChange={onChange}
        /> : <></> }

      { 'choice' === field.kind ?
        <select
          id={form.name+'-'+field.name}
          name={field.name}
          placeholder={field.placeholder}
          value={value}
          onChange={onChange}
        >

          { field.items.map(
            item=>
              <option
                key={item.value}
                value={item.value}
              >
                {item.text}
              </option>
          )}

        </select> : <></> }

      { 'custom' === field.kind ? field.cmp : <></> }

    </div>
  )
}


function getBasicForm(conf) {
  let { store } = conf
  
  function BasicForm(props) {
    console.log('BasicForm A', props)

    const form = BasicFormShape(props.form)
    
    const meta = useSelector(state => state[form.slice].form[form.name])
    
    const title = form.title
    const intro = form.intro
    const name = form.name
    const slice = form.slice
    const btnTitle = form.btnTitle
    const blank = form.blank
    const submit = form.submit || (() => null)
    const submitCmp = form.submitCmp
    const orient = form.orient
    const classes = form.classes


    const fields = Object.entries(form.field)
          .reduce(((a,entry)=>(a.push({name:entry[0],...entry[1]}),a)),[])
    
    return (
      <form
        name={name}
        onSubmit={submit}
        className={'vxg-basic-form vxg-basic-form-'+orient+' '+classes}
      >
        {null != title ? <h2>{title}</h2> : <></>}

        {null != intro ? <p className="intro">{intro}</p> : <></>}

        { fields
          .map(field =>
               <BasicField
                 key={field.name}
                 field={field}
                 form={form}
                 store={store}

               />) }

        { submitCmp }
        
      </form>
    )

    
  }

  return {
    BasicFormShape,
    BasicField,
    BasicForm,
  }
}


export {
  getBasicForm
}

