import React, { Fragment, useEffect } from 'react'

import { useSelector } from 'react-redux'

import { Gubu, Skip, Exact, Any, Required, Value } from 'gubu'



const BasicFormShape = Gubu({
  name: String,
  slice: String,
  title: Skip(String),
  intro: Skip(String),
  btnTitle: Skip(String),
  field: Value({
    name: Skip(String),
    title: String,
    link: Skip({
      target: String,
      text: String,
    }),
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
    value: Any(),
  },{}),
  submit: Function,
  submitCmp: Any(),
  // orient: Default('vertical', Exact('vertical','horizontal'))
  orient: 'vertical',
  classes: '',
  valid: Skip(Function),
  onChange: Skip(Function),
  onRender: Skip(Function),
})



function BasicField(props) {
  const field = props.field
  const form = props.form
  const store = props.store

  const { name, title, orient, kind } = field

  const classes = 'vxg-basic-field vxg-basic-field-'+orient+
        ' vxg-basic-field-'+kind+' '+
        field.classes

  const data = useSelector(state => state[form.slice][form.name])
  let value = useSelector(state => state[form.slice][form.name][name])

  // console.log('BasicField value', name, value, field.value, data[name])
  value = null == value ? (null == field.value ? '' : field.value) : value


  const onChange = async (ev)=>{
    let value = ev.target.value

    // console.log('BasicField onChange checked',name,{...ev.target},ev.target.checked)
    if('toggle' === field.kind && false === ev.target.checked) {
      value = null
    }

    await store.dispatch({
      type: form.slice + '/setFormField',
      payload: { form: form.name, name, value: value }
    })

    let newdata = {...data}
    newdata[name] = value

    let valid = {ok:true}
    if(form.valid) {
      valid = form.valid(newdata)
    }

    // console.log('FIELD onChange', field)

    if(form.onChange) {
      form.onChange({
        field,
        value,
        data:newdata,
        meta:{valid}
      })
    }
  }


  return (
    <div className={classes}>

      { 'toggle' === field.kind ?
        <input
          type="checkbox"
          id={form.name+'-'+field.name}
          name={field.name}
          value={field.value}
          onChange={onChange}
          defaultChecked={'y'===data[name]}
        /> : <></> }

      <label htmlFor={name}>
        {title}
      {
        field.link ?
          <a href={field.link.target} rel={'noopener noreferrer'} target={'_blank'}>
            {' '}
            {field.link.text}
        </a>
          :
          <></>
      }
      </label>

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

      { 'custom' === field.kind ? field.cmp({onChange}) : <></> }

    </div>
  )
}


function getBasicForm(conf) {
  let { store } = conf

  function BasicForm(props) {
    // console.log('BasicForm A', props)

    const form = BasicFormShape(props.form)

    const data = useSelector(state => state[form.slice][form.name])
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
          .reduce(((a,entry)=>(entry[1].name=entry[0],a.push({...entry[1]}),a)),[])

    // console.log('BasicForm fields', fields)


    let valid = {ok:true}
    if(form.valid) {
      valid = form.valid(data)
    }

    // if(form.onRender) {
    //   form.onRender({data,meta:{valid}})
    // }



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
