a vue2 component. Taking a cue from react-resizable and react-draggable.

![DEMO](https://raw.githubusercontent.com/tigerlove/vue-drag-resize-rotate/master/screenshot.gif)

## Install
```
npm install vue-drag-resize-rotate
```

## Usage
```
<template>
<div>
  <vue-drr :w='180' :h='180' :r='0' :rotatable='false' v-on:change="showchange">
    I can be dragged anywhere
  </vue-drr>
  <div style="height: 500px; width: 500px;float:left;position: relative;border: 1px solid black;padding:5px">
    <vue-drr :w='180' :h='180' :bounds='{parent:true}' :rotatable='true'>
      <div>I can only be moved in any parent.</div>
    </vue-drr>
  </div>
  <!-- 	<vue-drr :w='180' :h='180' :r='30' :rotatable='true'>
  		 rotated 30deg at the begaining
      </vue-drr> -->
  <vue-drr :w='180' :h='180' axis='x' :rotatable='true'>
    I can only be dragged horizonally
  </vue-drr>
  <vue-drr :w='180' :h='180' axis='y' :rotatable='true'>
    I can only be dragged vertically
  </vue-drr>
  <vue-drr :w='180' :h='180' handle='.dragme' :rotatable='true'>
    <div class='dragme' style='background: #ccc;border: 1px solid black;padding:5px'>drag here</div>
    <div>lalalalaala</div>
  </vue-drr>
  <vue-drr :w='180' :h='180' cancel='.dnotdragme' :rotatable='true'>
    <div class='dnotdragme' style='background: #ccc;border: 1px solid black;padding:5px'>don't drag here</div>
    <div>lalalalaala</div>
  </vue-drr>
  <vue-drr :w='180' :h='180' :grid='[50,50]' :rotatable='true'>

    <div>snap to 50 * 50</div>
  </vue-drr>
  <vue-drr :w='180' :h='180' :bounds='{top: -100, left: -100, right: 100, bottom: 100}' :rotatable='true'>
    <div>I can only be moved 100px in any direction.</div>
  </vue-drr>
</div>
</template>
<style>

</style>
<script>
import VueDRR from 'vue-drag-resize-rotate'
export default {
  name: 'app',
  components: {
    'vue-drr': VueDRR
  },
  methods: {
    showchange: function (data) {
      console.log(JSON.stringify(data))
    }
  }
}
</script>
```
