// await loadJs('https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js')
await loadJs('https://unpkg.com/vue@2.6.11/dist/vue.min.js')

// await loadJs('https://unpkg.com/three@0.115.0/build/three.min.js')
await loadJs('https://unpkg.com/three@0.81.2/build/three.min.js')

// await loadJs('https://unpkg.com/vue-threejs@0.2.0-alpha.1/lib/VueThreejs.umd.min.js')
await loadJs('https://unpkg.com/vue-threejs@0.2.0-alpha.1/lib/VueThreejs.umd.js')

appendCss(`
#mountNode { overflow:hidden }
`)

Vue.use(VueThreejs)

let Cube = Vue.extend({
  template: `
    <mesh name="Cube">
      <geometry type="Box" :args="[size, size, size]"></geometry>
      <material type="MeshBasic">
        <texture :url="\`http://fritx.github.io/vue-threejs/static/textures/\${texture}.png\`"></texture>
      </material>
    </mesh>
  `,
  mixins: [VueThreejs.Object3D],
  props: { size: Number, texture: String }
})

let App = {
  components: { Cube },
  template: `
    <div class="container">
      <renderer :size="size">
        <scene>
          <camera :position="{ x: 9, y: 21, z: 20 }"
            :rotation="{ x: 2, y: 0, z: 3 }"></camera>
          <light :hex="0xefefff" :intensity="2" :position="{ x: 50, y: 50, z: 50 }"></light>
          <light :hex="0xefefff" :intensity="2" :position="{ x: -50, y: -50, z: -50 }"></light>
          <div :key="ui.sysKey">
            <movement-system>
              <mass-object :rv0="{ x: 2, y: 2 }" :v0="{ x: 10 }"
                  :f="{ x: -3, y: -2 }" :m="1">
                <cube texture="cobblestone" :size="1"></cube>
              </mass-object>
              <mass-object :rv0="{ x: 2, z: 2 }" :v0="{ z: 20 }"
                  :f="{ y: -1, z: -8 }" :m="1.2">
                <cube texture="diamond" :size="1.2"></cube>
              </mass-object>
              <movement-object :rv0="{ x: 2, z: 2 }" :v0="{ x: 15, z: -20 }"
                  :a="{ x: -6, y: .5, z: 6 }">
                <cube texture="redwool" :size="1.1"></cube>
              </movement-object>
            </movement-system>
          </div>
        </scene>
      </renderer>
    </div>
  `,
  data() {
    return {
      size: { w: window.innerWidth, h: window.innerHeight },
      ui: { sysKey: 0 }
    }
  }
}
