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
    name: Skip(String),
    title: String,
    link: Skip({
      target: String
    }),
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
  var field = props.field;
  var form = props.form;
  var store = props.store;
  var name = field.name,
    title = field.title,
    orient = field.orient,
    kind = field.kind;
  var classes = 'vxg-basic-field vxg-basic-field-' + orient + ' vxg-basic-field-' + kind + ' ' + field.classes;
  var data = useSelector(function (state) {
    return state[form.slice][form.name];
  });
  var value = useSelector(function (state) {
    return state[form.slice][form.name][name];
  });

  value = null == value ? null == field.value ? '' : field.value : value;
  var onChange = function onChange(ev) {
    try {
      var _value = ev.target.value;

      if ('toggle' === field.kind && false === ev.target.checked) {
        _value = null;
      }
      return Promise.resolve(store.dispatch({
        type: form.slice + '/setFormField',
        payload: {
          form: form.name,
          name: name,
          value: _value
        }
      })).then(function () {
        var newdata = _extends({}, data);
        newdata[name] = _value;
        var valid = {
          ok: true
        };
        if (form.valid) {
          valid = form.valid(newdata);
        }

        if (form.onChange) {
          form.onChange({
            field: field,
            value: _value,
            data: newdata,
            meta: {
              valid: valid
            }
          });
        }
      });
    } catch (e) {
      return Promise.reject(e);
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
  }) : /*#__PURE__*/React.createElement(Fragment, null), field.link ? /*#__PURE__*/React.createElement("a", {
    href: field.link.target,
    rel: 'noopener noreferrer',
    target: '_blank'
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: name
  }, title)) : /*#__PURE__*/React.createElement("label", {
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
  })) : /*#__PURE__*/React.createElement(Fragment, null), 'custom' === field.kind ? field.cmp({
    onChange: onChange
  }) : /*#__PURE__*/React.createElement(Fragment, null));
}
function getBasicForm(conf) {
  var store = conf.store;
  function BasicForm(props) {

    var form = BasicFormShape(props.form);
    var data = useSelector(function (state) {
      return state[form.slice][form.name];
    });
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
    console.log('TEST ', title);
    var fields = Object.entries(form.field).reduce(function (a, entry) {
      return entry[1].name = entry[0], a.push(_extends({}, entry[1])), a;
    }, []);

    var valid = {
      ok: true
    };
    if (form.valid) {
      valid = form.valid(data);
    }

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
