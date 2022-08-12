function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactRedux = require('react-redux');
var gubu = require('gubu');

var BasicFormShape = gubu.Gubu({
  name: String,
  slice: String,
  title: gubu.Skip(String),
  intro: gubu.Skip(String),
  btnTitle: gubu.Skip(String),
  fields: [{
    name: String,
    title: String,
    kind: gubu.Exact('line', 'toggle', 'choice'),
    subkind: gubu.Skip(String),
    placeholder: gubu.Skip(String),
    items: gubu.Skip([{
      value: gubu.Required(gubu.Any()),
      text: String
    }]),
    explainer: gubu.Skip(String),
    orient: 'vertical',
    classes: ''
  }],
  submit: Function,
  submitCmp: gubu.Any(),
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
  var value = reactRedux.useSelector(function (state) {
    return state[form.slice][form.name][name];
  });

  var onChange = function onChange(ev) {
    store.dispatch({
      type: form.slice + '/setField_' + form.name,
      payload: {
        name: name,
        value: ev.target.value
      }
    });
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: classes
  }, 'toggle' === field.kind ? /*#__PURE__*/React__default.createElement("input", {
    type: "checkbox",
    id: form.name + '-' + field.name,
    name: field.name,
    value: value,
    onChange: onChange
  }) : /*#__PURE__*/React__default.createElement(React.Fragment, null), /*#__PURE__*/React__default.createElement("label", {
    htmlFor: name
  }, title), 'line' === field.kind ? /*#__PURE__*/React__default.createElement("input", {
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
  })) : /*#__PURE__*/React__default.createElement(React.Fragment, null));
}

function getBasicForm(conf) {
  var store = conf.store;

  function BasicForm(props) {
    console.log('BasicForm', props);
    var form = BasicFormShape(props.form);
    var meta = reactRedux.useSelector(function (state) {
      return state[form.slice].form[form.name];
    });
    var title = form.title;
    var intro = form.intro;
    var fields = form.fields || [];

    var submit = form.submit || function () {
      return null;
    };

    var submitCmp = form.submitCmp;
    var orient = form.orient;
    var classes = form.classes;
    return /*#__PURE__*/React__default.createElement("form", {
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
