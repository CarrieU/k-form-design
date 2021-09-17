const data = {
  list: [
    {
      type: "input",
      label: "公司名称",
      options: {
        type: "text",
        width: "100%",
        defaultValue: "",
        placeholder: "请输入",
        clearable: false,
        maxLength: null,
        hidden: false,
        disabled: false
      },
      model: "companyName",
      key: "input_1603939737389",
      rules: [
        {
          required: false,
          message: "必填项"
        }
      ]
    },
    {
      type: "radio",
      label: "公司类型",
      options: {
        disabled: false,
        hidden: false,
        defaultValue: "",
        dynamicKey: "",
        dynamic: false,
        options: [
          {
            value: "2",
            label: "国企"
          },
          {
            value: "3",
            label: "民营"
          }
        ]
      },
      model: "companyType",
      key: "radio_1631084922298",
      help: "",
      rules: [
        {
          required: false,
          message: "必填项"
        }
      ]
    },
    {
      type: "input",
      label: "公司规模",
      options: {
        type: "text",
        width: "100%",
        defaultValue: "",
        placeholder: "请输入",
        clearable: false,
        maxLength: null,
        addonBefore: "",
        addonAfter: "",
        hidden: false,
        disabled: false
      },
      model: "companyMode",
      key: "input_1631084936510",
      help: "",
      rules: [
        {
          required: false,
          message: "必填项"
        }
      ]
    }
  ],
  config: {
    layout: "horizontal",
    labelCol: {
      xs: 4,
      sm: 4,
      md: 4,
      lg: 4,
      xl: 4,
      xxl: 4
    },
    wrapperCol: {
      xs: 18,
      sm: 18,
      md: 18,
      lg: 18,
      xl: 18,
      xxl: 18
    },
    hideRequiredMark: false,
    customStyle: ""
  },
  cascade: [
    {
      // for test
      key: 'companyName_1',
      source: [
        {
          id: 'input_1603939737389', // 控件id
          type: 'eq', // ，eq|like|between等
          negation: false, // type 取反
          ruleType: '0', // 0:文本 1:正则
          ruleValue: '',
          ruleReg: '',
        },
      ],
      // 受到影响的控件，可以多个
      target: [
        {
          id: 'radio_1631084922298',
          rules: [],
        },
      ],
      effect: 'hide', // 变动类型 show|hide|等
      enable: true, // 联动控制启用 true|false
    }
  ]
}

export default data