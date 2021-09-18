<template>
  <div class="properties-centent kk-checkbox">
    <div class="properties-body">
      <a-empty
        class="hint-box"
        v-show="selectItem.key === ''"
        description="未选择控件"
      />

      <a-form v-show="selectItem.key !== ''">
        <a-form-item label="主动控件">
          {{ selectItem.label }} / {{ selectItem.model }}
          <p><a @click="handleAddItem">增加联动</a></p>
        </a-form-item>
        <template v-for="(item, index) in data">
          <a-form-item
            :label="`联动配置${index+1}`"
            :key="item.key"
            v-if="item.source.length > 0"
          >
            <a-row>
              <a-col>
                <kCheckbox v-model="item.enable" label="启用" />
              </a-col>
            </a-row>
            <a-row>
              <a-col span="8">
                <span>规则类型：</span>
              </a-col>
              <a-col span="16">
                <a-radio-group
                  buttonStyle="solid"
                  v-model="item.source[0].ruleType"
                >
                  <a-radio-button value="0">文本</a-radio-button>
                  <a-radio-button value="1">正则</a-radio-button>
                </a-radio-group>
              </a-col>
            </a-row>
            <a-row>
              <a-col>
                <a-textarea v-if="item.source[0].ruleType==0" v-model="item.source[0].ruleValue" placeholder="请输入规则内容"></a-textarea>
                <a-textarea v-else v-model="item.source[0].ruleReg" placeholder="请输入规则内容(正则表达式)"></a-textarea>
              </a-col>
            </a-row>
            <!-- <a-row>
              <a-col span="8">
                <span>规则取反:</span>
              </a-col>
              <a-col span="16">
                <kCheckbox v-model="item.source[0].negation" />
              </a-col>
            </a-row> -->
            <!-- <a-row>
              <a-col>控件{{index}}：{{item.target[0]}}</a-col>
            </a-row> -->
            <a-row>
              <a-col span="8">
                <span>联动控件：</span>
              </a-col>
              <a-col span="16">
                <a-select v-model="item.target[0].id" v-if="item.target[0]">
                  <a-select-option :value="item.key" v-for="item in formItemOptions" :key="`${index}_${item.key}`"
                    >{{ item.text }}</a-select-option
                  >
                </a-select>
              </a-col>
            </a-row>
            <a-row>
              <a-col span="8">
                <span>控件变形：</span>
              </a-col>
              <a-col span="16">
                <a-radio-group v-model="item.effect">
                  <a-radio value="hide">隐藏</a-radio>
                  <a-radio value="show">显示</a-radio>
                  <a-radio value="read">只读</a-radio>
                  <a-radio value="edit">可写</a-radio>
                </a-radio-group>
              </a-col>
            </a-row>
            <a-row>
              <a-col>
                <a-button @click="handleRemoveItem(index)">删除</a-button>
              </a-col>
            </a-row>
          </a-form-item>
        </template>
        <a-form-item>
          <a-button @click="getdata">打印</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script>
/*
 * author Carrie
 * date 2021-09-07
 * description 表单控件联动设置
 */
import KCheckbox from '../../KCheckbox/index.vue'
// import formCascadeOption from './formCascadeOption.vue'

export default {
  name: 'formItemProperties',
  data() {
    return {
      data: this.formCascade,
    }
  },
  computed: {
    formItemOptions() {
      return this.formItemList.filter(el => el.value != this.selectItem.model)
    },
  },
  props: {
    selectItem: {
      type: Object,
      required: true,
    },
    hideModel: {
      type: Boolean,
      default: false,
    },
    formItemList: {
      type: Array,
      required: true
    },
    formCascade: {
      type: Array,
      required: true
    }
  },
  components: {
    KCheckbox,
    // formCascadeOption,
  },
  watch: {
    formCascade: {
      handler(e) {
        this.$nextTick(() => {
          this.data = e
        })
      },
      deep: true,
      immediate: true
    },
    // data: {
    //   handler(e) {
    //     // this.$nextTick(() => {
    //     //   this.revoke.push(e);
    //     // }); 
    //     console.log('watch formCascade data has changed:', e)
    //   },
    //   deep: true,
    //   immediate: true
    // }
  },
  methods: {
    handleAddItem() {
      if (this.formItemOptions && this.formItemOptions.length > 0) {
        let add = {
          key: `${this.selectItem.model}_${new Date().getTime()}`,
          // 引起级联的控件，可以多个
          source: [
            {
              id: this.selectItem.key, // 控件id
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
              id: this.formItemOptions[0].key,
              rules: [],
            },
          ],
          effect: 'hide', // 变动类型 show|hide|等
          enable: true, // 联动控制启用 true|false
        }
        this.$emit('spliceCascade', add, 'add')
      } else {
        this.$message.error('没有可以关联的控件')
      }
    },
    handleRemoveItem(index) {
      // this.data.splice(index, 1)
      this.$emit('spliceCascade', index, 'removeByIndex')
    },
    getdata() {
      // console.log(this.data)
      console.log('props selectItem:', this.selectItem)
      console.log('props formItemList:', this.formItemList)
      console.log('props formCascade:', this.formCascade)
    },
    setdata(data) {
      this.data = data
    }
  },
  mounted() {
  },
}
</script>
