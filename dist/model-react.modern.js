import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Gubu, Skip, Value, Exact, Required, Any } from 'gubu';

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

var BasicFormShape = Gubu({
  name: String,
  slice: String,
  title: Skip(String),
  intro: Skip(String),
  btnTitle: Skip(String),
  field: Value({
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
    cmp: Any()
  }, {}),
  submit: Function,
  submitCmp: Any(),
  orient: 'vertical',
  classes: ''
});

function BasicField(props) {
  var field = props.field;
  var form = props.form;
  var store = props.store;
  var name = field.name,
      title = field.title,
      orient = field.orient,
      kind = field.kind;
  var classes = 'vxg-basic-field vxg-basic-field-' + orient + ' vxg-basic-field-' + kind + ' ' + field.classes;
  var value = useSelector(function (state) {
    return state[form.slice][form.name][name];
  });

  var onChange = function onChange(ev) {
    store.dispatch({
      type: form.slice + '/setFormField',
      payload: {
        form: form.name,
        name: name,
        value: ev.target.value
      }
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: classes
  }, 'toggle' === field.kind ? /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    id: form.name + '-' + field.name,
    name: field.name,
    value: value,
    onChange: onChange
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
  }, field.items.map(function (item) {
    return /*#__PURE__*/React.createElement("option", {
      key: item.value,
      value: item.value
    }, item.text);
  })) : /*#__PURE__*/React.createElement(Fragment, null), 'custom' === field.kind ? field.cmp : /*#__PURE__*/React.createElement(Fragment, null));
}

function getBasicForm(conf) {
  var store = conf.store;

  function BasicForm(props) {
    console.log('BasicForm A', props);
    var form = BasicFormShape(props.form);
    var meta = useSelector(function (state) {
      return state[form.slice].form[form.name];
    });
    var title = form.title;
    var intro = form.intro;
    var name = form.name;

    var submit = form.submit || function () {
      return null;
    };

    var submitCmp = form.submitCmp;
    var orient = form.orient;
    var classes = form.classes;
    var fields = Object.entries(form.field).reduce(function (a, entry) {
      return a.push(_extends({
        name: entry[0]
      }, entry[1])), a;
    }, []);
    return /*#__PURE__*/React.createElement("form", {
      name: name,
      onSubmit: submit,
      className: 'vxg-basic-form vxg-basic-form-' + orient + ' ' + classes
    }, null != title ? /*#__PURE__*/React.createElement("h2", null, title) : /*#__PURE__*/React.createElement(Fragment, null), null != intro ? /*#__PURE__*/React.createElement("p", {
      className: "intro"
    }, intro) : /*#__PURE__*/React.createElement(Fragment, null), fields.map(function (field) {
      return /*#__PURE__*/React.createElement(BasicField, {
        key: field.name,
        field: field,
        form: form,
        store: store
      });
    }), submitCmp);
  }

  return {
    BasicFormShape: BasicFormShape,
    BasicField: BasicField,
    BasicForm: BasicForm
  };
}

export { getBasicForm };
//# sourceMappingURL=model-react.modern.js.map
