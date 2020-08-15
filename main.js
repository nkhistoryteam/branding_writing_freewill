const r = randomi => (Math.random() - 0.5) * randomi
let genStyleObj = randomi => {return {transform: `
    translateX(${r(randomi)}px) translateY(${r(randomi)}px) rotate(${r(randomi)}deg)
`}}

let bars = ''
for (let i = 0; i < 4; i++) bars += `
    <div class="bar bar-${i}">
    <div :style="styles[${i}]"/>
    </div>
`

Vue.component('box', {
    props: ['randomi'],
    template: `<div class="box">${bars}</div>`,
    computed: {
        styles() {
            let arr = []
            for (let i = 0; i < 4; i++) arr.push(genStyleObj(this.randomi))
            return arr
        }
    }
})

let boxes = []
for (let i = 0; i < 286; i++) {
    boxes.push({randomi: i * 0.2})
}

let app = new Vue({
    el: '#app',
    data: {
        boxes
    }
})
