const loadText=document.querySelector('.loading-text')
const bg=document.querySelector('.bg')

let load=0
let int=setInterval(bluring,50)

function bluring(){
    load++
    if(load>99){
        clearInterval(int)
    }
    loadText.innerText=`${load}%`
    loadText.style.opacity=1-load/100
    bg.style.filter=`blur(${(100-load)/3}px)`
    console.log(bg.style.filter)
}