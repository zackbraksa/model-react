function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactRedux = require('react-redux');
var gubu = require('gubu');

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

var BasicFormShape = gubu.Gubu({
  name: String,
  slice: String,
  title: gubu.Skip(String),
  intro: gubu.Skip(String),
  btnTitle: gubu.Skip(String),
  field: gubu.Value({
    name: gubu.Skip(String),
    title: String,
    link: gubu.Skip({
      target: String,
      text: String
    }),
    kind: gubu.Exact('line', 'toggle', 'choice', 'custom'),
    subkind: gubu.Skip(String),
    placeholder: gubu.Skip(String),
    items: gubu.Skip([{
      value: gubu.Required(gubu.Any()),
      text: String
    }]),
    explainer: gubu.Skip(String),
    orient: 'vertical',
    classes: '',
    cmp: gubu.Any(),
    value: gubu.Any()
  }, {}),
  submit: Function,
  submitCmp: gubu.Any(),
  orient: 'vertical',
  classes: '',
  valid: gubu.Skip(Function),
  onChange: gubu.Skip(Function),
  onRender: gubu.Skip(Function)
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
  var data = reactRedux.useSelector(function (state) {
    return state[form.slice][form.name];
  });
  var value = reactRedux.useSelector(function (state) {
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
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes
  }, 'toggle' === field.kind ? /*#__PURE__*/React__default.createElement("input", {
    type: "checkbox",
    id: form.name + '-' + field.name,
    name: field.name,
    value: field.value,
    onChange: onChange,
    defaultChecked: 'y' === data[name]
  }) : /*#__PURE__*/React__default.createElement(React.Fragment, null), /*#__PURE__*/React__default.createElement("label", {
    htmlFor: form.name + '-' + field.name
  }, title, field.link ? /*#__PURE__*/React__default.createElement("a", {
    href: field.link.target,
    rel: 'noopener noreferrer',
    target: '_blank'
  }, ' ', field.link.text) : /*#__PURE__*/React__default.createElement(React.Fragment, null)), 'line' === field.kind ? /*#__PURE__*/React__default.createElement("input", {
    id: form.name + '-' + field.name,
    name: field.name,
    placeholder: field.placeholder,
    value: value,
    onChange: onChange
  }) : /*#__PURE__*/React__default.createElement(React.Fragment, null), 'choice' === field.kind ? /*#__PURE__*/React__default.createElement("select", {
    id: form.name + '-' + field.name,
    name: field.name,
    placeholder: field.placeholder,
    value: value,
    onChange: onChange
  }, field.items.map(function (item) {
    return /*#__PURE__*/React__default.createElement("option", {
      key: item.value,
      value: item.value
    }, item.text);
  })) : /*#__PURE__*/React__default.createElement(React.Fragment, null), 'custom' === field.kind ? field.cmp({
    onChange: onChange
  }) : /*#__PURE__*/React__default.createElement(React.Fragment, null));
}
function getBasicForm(conf) {
  var store = conf.store;
  function BasicForm(props) {

    var form = BasicFormShape(props.form);
    var data = reactRedux.useSelector(function (state) {
      return state[form.slice][form.name];
    });
    var meta = reactRedux.useSelector(function (state) {
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
      return entry[1].name = entry[0], a.push(_extends({}, entry[1])), a;
    }, []);

    var valid = {
      ok: true
    };
    if (form.valid) {
      valid = form.valid(data);
    }

    return /*#__PURE__*/React__default.createElement("form", {
      name: name,
      onSubmit: submit,
      className: 'vxg-basic-form vxg-basic-form-' + orient + ' ' + classes
    }, null != title ? /*#__PURE__*/React__default.createElement("h2", null, title) : /*#__PURE__*/React__default.createElement(React.Fragment, null), null != intro ? /*#__PURE__*/React__default.createElement("p", {
      className: "intro"
    }, intro) : /*#__PURE__*/React__default.createElement(React.Fragment, null), fields.map(function (field) {
      return /*#__PURE__*/React__default.createElement(BasicField, {
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

exports.getBasicForm = getBasicForm;
//# sourceMappingURL=model-react.js.map
