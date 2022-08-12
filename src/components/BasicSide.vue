<template>
  <v-navigation-drawer
    app
    class="vxg-side"
    :style="drawerStyle"
    >
    <v-sheet style="display: flex; flex-direction: column; height:100%;">
      <div style="display: flex; justify-content: space-between;">
        <div style="" v-html="logo"></div>

        <v-icon
          large
          @click="closeDrawer"
          style="width:48px;"
          dark
          >mdi-chevron-left</v-icon>
      </div>


      <v-btn-toggle style="background-color: rgb(var(--vxg-cb1)) !important;"
        v-model="menuViewIndex"
        mandatory
        >
        <v-btn
          v-for="menuView in menuViewList"
          :key="menuView.name"
          :to="'/'+menuView.name"
          outlined 
          class="pa-4 text-center secondary text-no-wrap rounded-sm btn-style" color= "white"
          >
          {{ menuView.btnTitle }}
        </v-btn>
      </v-btn-toggle>

      <!--
      <h1 v-if="menuShowTitle">{{ menuView.title }} </h1>
      -->
      
      <template
        v-if="'standard' === menuView.mode"
        v-for="item in menu">
        <component
          v-if="allow(item)"
          :is="'router-link'"
          :to="'/'+item.code"
          :key="item.code"
          :class="item.klass"
          style="flex-grow:1;"
          >
          <v-icon>mdi-{{ item.icon }}</v-icon> {{ item.title }}
        </component>
      </template>

      <component
        v-if="'custom' === menuView.mode"
        :is="menuView.cmp"
        :spec="menuView.view.spec"
        >
      </component>

      
      <div style="flex-grow:100;"></div>
      <v-divider></v-divider>

      <component
        v-if="spec.footer.active"
        :is="spec.footer.cmp"
        :spec="spec.footer.spec"
        >
      </component>
      
           
    </v-sheet>
  </v-navigation-drawer>
</template>

<script>

import Nua from 'nua'
import { Gubu, Open, Required, Skip, Value } from 'gubu'


const SpecShape = Gubu({
  spec: Required(Open({
    footer: {
      active: false,
      cmp: Skip(String),
      spec: Open({}),
    },

    view: Value(Open({
      mode: String
    }),Open({}))
  })),
  logo: String,
})

export default {

  props: {
    spec: {
      type: Object,
      required: true,
    },
    logo: String,
  },
  
  data () {
    return {
      open: true,
      menuShowTitle: false,
      menuViewIndex: null,
      menuViewList: [],
      menuView: null,
      roomName: '',
    }
  },

  beforeCreate() {
    Nua(this.$options.propsData, SpecShape(this.$options.propsData))
  },
  
  created () {
    console.log('BasicSide created', this.spec)
    
    let menuViewList = []
    for(let name in this.spec.view) {
      let menuView = this.spec.view[name]
      menuView.name = name
      menuViewList.push(menuView)
    }
    this.menuViewList = menuViewList
    this.menuView = menuViewList[0]
  },


  watch: {
    menuViewIndex(index) {
      this.menuView = this.menuViewList[index]

      let pathname = null
      pathname = this.menuView.name
      if('custom' === this.menuView.mode) {
        pathname = this.menuView.name
      }
      else {
        pathname = this.menuView.menu.default
      }

      if(pathname && pathname !== this.$route.name ) {
        this.$router.push(pathname)
      }
    }
  },
  
  
  computed: {
    menu () {
      let active_item_code = this.$route.meta.view

      let ux_items = []

      if('standard' === this.menuView.mode) {
        let menu = this.menuView.menu
        let spec_items = menu.items
        let ordered_codes = menu.order.split(/\s*,\s*/)
        ux_items =
          ordered_codes
          .reduce((a,c)=>(a.push(Object.assign({code:c},spec_items[c])),a),[])
          .map(item=>{
            item.klass = Object.assign({
              'vxg-router-link': true,
            })
            return item
          })
      }
      
      return ux_items
    },

    drawerStyle() {
      return {}
    }
  },

  methods: {
    allow(item) {
      let out = (item && item.allow) ? this.$vxg.allow( item.allow ) : true
      return out
    },
    openDrawer() {
      this.$store.dispatch('set_cmp_flags',{name:'BasicSide', flags:{show:true}})
    },
    closeDrawer() {
      this.$store.dispatch('set_cmp_flags',{name:'BasicSide', flags:{show:false}})
    },
    action(name) {
      this.$emit('action', name)
    }
  }

}
</script>


<style lang="scss">
nav.vxg-side {
    background-color: rgb(var(--vxg-cb1)) !important;

    .v-sheet {
        background-color: rgb(var(--vxg-cb1)) !important;
    }

    .v-divider {
        border-color: rgb(var(--vxg-ct2)) !important;
        margin: 16px 8px;
    }
}
.btn-style{
	background-color: rgb(0, 0, 26) !important;
	width: 130px;
}
a.vxg-router-link {
    display: block;
    margin: 0px 8px;
    padding: 16px 8px;
    text-decoration: none !important;
    color: rgb(var(--vxg-ct1)) !important;
    border-radius: 8px;
    
    .v-icon {
        color: rgb(var(--vxg-ct2)) !important;
    }
    
    &.router-link-active {
        background-color: rgb(var(--vxg-cb2)) !important;
        color: rgb(var(--vxg-ct1)) !important;
        .v-icon {
            color: rgb(var(--vxg-ct1)) !important;
        }
    }

}
.vxg-side-open {
    width: 48px;
    height: 48px;
}
</style>
