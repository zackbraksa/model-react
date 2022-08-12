<template>
<v-app-bar app style="height:64px;background-color:white;">

  <v-icon
    v-if="!drawerOpen && tool.expandSide.active"
    large
    @click="openDrawer"
    style="display:inline-block;"
    light
    >mdi-chevron-right</v-icon>
  <v-divider
    v-if="!drawerOpen && tool.expandSide.active"
    vertical style="margin:0px 16px;"></v-divider>


  <v-select
    v-if="show('select') && tool.select.active"
    style="max-width:20%;display:inline-block;margin-left:10px;"
    :items="selectItems()"
    :label="tool.select.title"
    v-model="select"
    tile
    outlined
    hide-details
    dense
    ></v-select>

  
  <v-divider
    v-if="show('select') && tool.select.active"
    vertical style="margin:0px 16px;"></v-divider>


  <v-btn
    v-if="show('add') && tool.add.active"
    tile
    class="vxg-head-btn"
    @click="addItem"
    >
    <v-icon left medium>
      mdi-map-marker-path
    </v-icon>
    Add {{ itemName }}
  </v-btn>
  
  <v-divider
    v-if="show('add') && tool.add.active"
    vertical style="margin:0px 16px;"></v-divider>


  <v-btn
    v-if="show('remove') && tool.remove.active"
    tile
    class="vxg-head-btn"
    @click="removeItem"
    >
    <v-icon left medium>
      mdi-map-marker-path
    </v-icon>
    Remove {{ itemName }}
  </v-btn>
  
  <v-divider
    v-if="show('remove') && tool.remove.active"
    vertical style="margin:0px 16px;"></v-divider>

  <v-combobox
    v-if="tool.search.active && show('search')"
    v-model="search"
    :items="getTags()"
    flat
    hide-details
    outlined
    dense
    clearable
    placeholder="Search"
    append-icon="mdi-filter"
    @click:append="filter"
    ></v-combobox> 

  <v-spacer
    v-if="tool.avatar.active || tool.expandMain.active"
    ></v-spacer>

  <v-icon
    v-if="tool.avatar.active"
    large
    @click="action('avatar')"
    style="display:inline-block;"
    light
    >mdi-account</v-icon>


  <v-divider
    v-if="!detailOpen && tool.expandMain.active"
    vertical style="margin:0px 16px;"></v-divider>


  <v-icon
    v-if="!detailOpen && tool.expandMain.active"
    large
    @click="closeDetail"
    style="display:inline-block;"
    light
    >mdi-chevron-left</v-icon>

</v-app-bar>
</template>

<style lang="scss">
.vxg-head-btn {

    height: 100%;
    background-color: white !important;
    color: rgb(var(--vxg-ct0));
    text-transform: none !important;
    box-shadow: none !important;
    
    .v-icon {
        color: rgb(var(--vxg-ci0)) !important;
    }
}
</style>

<script>
export default {
  props: ['logo'],

  data () {
    return {
      search: '',
      select: '',
      view: {
        tool: {}
      }
    }
  },


  mounted () {
    if(this.tool.select.active) {
      this.select = this.tool.select.initial
    }
  },
  

  watch: {
    search () {
      this.$store.dispatch('trigger_search', {term:this.search})
    },
    select () {
      console.log('SELECT', this.select)
      this.$store.dispatch('trigger_select', {value:this.select})
    },
    '$store.vxg.cmp.BasicHead.allow.add': {
      handler() {
        this.$forceUpdate()
      }
    },
    '$store.vxg.cmp.BasicHead.allow.remove': {
      handler() {
        this.$forceUpdate()
      }
    },
    '$route.path':{
      handler(val){
	if(val != '/oneview'){
          this.tool.select.active = false
          this.tool.add.active = true
          this.tool.remove.active = true


	  this.$store.state.vxg.cmp.BasicHead.show.select = false
	  this.$store.state.vxg.cmp.BasicHead.show.add = true
	  this.$store.state.vxg.cmp.BasicHead.show.remove = true
      	}
      	else if(val == '/oneview'){
	  // console.log("ONEVIEW: ", this.tool.select)
          this.tool.select.active = 
	    this.$store.state.vxg.cmp.BasicHead.show.select = 
	      this.$store.state.vxg.cmp.BasicHead.show.search = true

          this.tool.add.active = false
          this.tool.remove.active = false

	  this.$store.state.vxg.cmp.BasicHead.show.add = false
	  this.$store.state.vxg.cmp.BasicHead.show.remove = false

        }
      }
    },
    route$: {
      immediate: true,
      handler (val) {
        let name = this.$route.name
        let view = this.$model.main.app.web.view[name]
        if(view && view.head) {
          this.view.tool = view.head.tool
        }
      }
    }
  },
  
  computed: {
    drawerOpen() {
      return this.$store.state.vxg.cmp.BasicSide.show
    },
    detailOpen() {
      return !this.$store.state.vxg.cmp.BasicMain.show
    },
    itemName() {
      return this.$store.state.vxg.ent.meta.name
    },
    tool() {
      // TODO: better if main.app.web.parts.head was provided directly
      let headtool = this.$model.main.app.web.parts.head.tool
      let viewtool = this.view.tool
      let tool = this.$main.seneca.util.deep(headtool, viewtool)
      return tool
    }
  },
  
  methods: {
    getTags(){
	return this.$store.state.main_asset.map(asset=>asset.tag)
    },

    addItem () {
      this.$store.dispatch('trigger_led_add')
    },

    removeItem () {
      this.$store.dispatch('trigger_led_remove')
    },

    selectItems () {
      let items = []
      if(this.tool.select.items) {
        Object.entries(this.tool.select.items).reduce((items, entry)=>{
          items.push({value:entry[0], text:entry[1].title})
          return items
        }, items)
      }
      console.log('selectItems', items)
      return items
    },

    filter() {
      this.$store.dispatch('trigger_toggle_filter')
    },
    
    show(action) {
      return this.allow(action) &&
        this.$store.state.vxg.cmp.BasicHead.show[action] 
    },
    
    allow(action) {
      let allowed = this.$store.state.vxg.cmp.BasicHead.allow[action]
      return null == allowed ? true : allowed
    },
    openDrawer() {
      this.$store.dispatch('set_cmp_flags',{name:'BasicSide', flags:{show:true}})
    },
    closeDetail() {
      this.$store.dispatch('set_cmp_flags',{name:'BasicMain', flags:{show:false}})
    },

    action(name) {
      this.$emit('action', name)
    }
  }
};
</script>
