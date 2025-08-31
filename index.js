const getColorBtn = document.getElementById('get-color-btn')
const colorPicker = document.getElementById('color-picker')

getColorBtn.addEventListener('click', function(){
    let colorValue = colorPicker.value
    colorValue = colorValue.substring(1)
    console.log(colorValue)
    selectedValue = theme.value
    let url = ""
    if(selectedValue == 'monochrome'){
        url = `https://www.thecolorapi.com/scheme?hex=${colorValue}&format=json&mode=monochrome&count=6`
    } 
    else if(selectedValue == 'monochrome-dark'){
        url = `https://www.thecolorapi.com/scheme?hex=${colorValue}&format=json&mode=monochrome-dark&count=6`
    } 
    else if(selectedValue == 'monochrome-light'){
        url = `https://www.thecolorapi.com/scheme?hex=${colorValue}&format=json&mode=monochrome-light&count=6`
    } 
    else if(selectedValue == 'analogic'){
        url = `https://www.thecolorapi.com/scheme?hex=${colorValue}&format=json&mode=analogic&count=6`
    } 
    else if(selectedValue == 'complement'){
        url = `https://www.thecolorapi.com/scheme?hex=${colorValue}&format=json&mode=complement&count=6`
    } 
    else if(selectedValue == 'analogic-complement'){
        url = `https://www.thecolorapi.com/scheme?hex=${colorValue}&format=json&mode=analogic-complement&count=6`
    } 
    else if(selectedValue == 'triad'){
        url = `https://www.thecolorapi.com/scheme?hex=${colorValue}&format=json&mode=triad&count=6`
    } 
    else if(selectedValue == 'quad'){
        url = `https://www.thecolorapi.com/scheme?hex=${colorValue}&format=json&mode=quad&count=6`
    } 
    
    fetch(url)
        .then(res => res.json())
            .then(data => {
                let html = "";
                
                for(color of data.colors){  
                    html +=`<div class="box" style = "background-color:${color.hex.value}"><p class= "hex-code">${color.hex.value}</p></div>
                    `;   
                }
                document.getElementById("container").innerHTML = html
                })
})

fetch("https://www.thecolorapi.com/scheme?hex=F55A5A&format=json&mode=monochrome&count=6")
 .then(res => res.json())
    .then(data => { 
        let html = "";
        
        for(color of data.colors){    
            html +=`<div class="box" style = "background-color:${color.hex.value}"><p class= "hex-code">${color.hex.value}</p></div>
            `;  
        }
        document.getElementById("container").innerHTML = html
    })
