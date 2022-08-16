import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Gubu, Skip, Value, Exact, Required, Any } from 'gubu';

const BasicFormShape = Gubu({
  name: String,
  slice: String,
  title: Skip(String),
  intro: Skip(String),
  btnTitle: Skip(String),
  field: Value({
    name: Skip(String),
    title: String,
    kind: Exact('line', 'toggle', 'choice', 'custom'),
    subkind: Skip(String),
    placeholder: Skip(String),
    items: Skip([{
      value: Required(Any()),
      text: String
    }]),
    explainer: Skip(String),
    orient: 'vertical',
    classes: '',
    cmp: Any(),
    value: Any()
  }, {}),
  submit: Function,
  submitCmp: Any(),
  orient: 'vertical',
  classes: '',
  valid: Skip(Function),
  onChange: Skip(Function),
  onRender: Skip(Function)
});

function BasicField(props) {
  const field = props.field;
  const form = props.form;
  const store = props.store;
  const {
    name,
    title,
    orient,
    kind
  } = field;
  const classes = 'vxg-basic-field vxg-basic-field-' + orient + ' vxg-basic-field-' + kind + ' ' + field.classes;
  const data = useSelector(state => state[form.slice][form.name]);
  let value = useSelector(state => state[form.slice][form.name][name]);
  value = null == value ? null == field.value ? '' : field.value : value;

  const onChange = async ev => {
    let value = ev.target.value;

    if ('toggle' === field.kind && false === ev.target.checked) {
      value = null;
    }

    await store.dispatch({
      type: form.slice + '/setFormField',
      payload: {
        form: form.name,
        name,
        value: value
      }
    });
    let newdata = { ...data
    };
    newdata[name] = value;
    let valid = {
      ok: true
    };

    if (form.valid) {
      valid = form.valid(newdata);
    }

    if (form.onChange) {
      form.onChange({
        field,
        value,
        data: newdata,
        meta: {
          valid
        }
      });
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: classes
  }, 'toggle' === field.kind ? /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    id: form.name + '-' + field.name,
    name: field.name,
    value: field.value,
    onChange: onChange,
    defaultChecked: 'y' === data[name]
  }) : /*#__PURE__*/React.createElement(Fragment, null), /*#__PURE__*/React.createElement("label", {
    htmlFor: name
  }, title), 'line' === field.kind ? /*#__PURE__*/React.createElement("input", {
    id: form.name + '-' + field.name,
    name: field.name,
    placeholder: field.placeholder,
    value: value,
    onChange: onChange
  }) : /*#__PURE__*/React.createElement(Fragment, null), 'choice' === field.kind ? /*#__PURE__*/React.createElement("select", {
    id: form.name + '-' + field.name,
    name: field.name,
    placeholder: field.placeholder,
    value: value,
    onChange: onChange
  }, field.items.map(item => /*#__PURE__*/React.createElement("option", {
    key: item.value,
    value: item.value
  }, item.text))) : /*#__PURE__*/React.createElement(Fragment, null), 'custom' === field.kind ? field.cmp : /*#__PURE__*/React.createElement(Fragment, null));
}

function getBasicForm(conf) {
  let {
    store
  } = conf;

  function BasicForm(props) {
    console.log('BasicForm A', props);
    const form = BasicFormShape(props.form);
    const data = useSelector(state => state[form.slice][form.name]);
    const meta = useSelector(state => state[form.slice].form[form.name]);
    const title = form.title;
    const intro = form.intro;
    const name = form.name;

    const submit = form.submit || (() => null);

    const submitCmp = form.submitCmp;
    const orient = form.orient;
    const classes = form.classes;
    const fields = Object.entries(form.field).reduce((a, entry) => (entry[1].name = entry[0], a.push({ ...entry[1]
    }), a), []);
    console.log('BasicForm fields', fields);
    let valid = {
      ok: true
    };

    if (form.valid) {
      valid = form.valid(data);
    }

    if (form.onRender) {
      form.onRender({
        data,
        meta: {
          valid
        }
      });
    }

    return /*#__PURE__*/React.createElement("form", {
      name: name,
      onSubmit: submit,
      className: 'vxg-basic-form vxg-basic-form-' + orient + ' ' + classes
    }, null != title ? /*#__PURE__*/React.createElement("h2", null, title) : /*#__PURE__*/React.createElement(Fragment, null), null != intro ? /*#__PURE__*/React.createElement("p", {
      className: "intro"
    }, intro) : /*#__PURE__*/React.createElement(Fragment, null), fields.map(field => /*#__PURE__*/React.createElement(BasicField, {
      key: field.name,
      field: field,
      form: form,
      store: store
    })), submitCmp);
  }

  return {
    BasicFormShape,
    BasicField,
    BasicForm
  };
}

export { getBasicForm };
//# sourceMappingURL=model-react.modern.js.map
