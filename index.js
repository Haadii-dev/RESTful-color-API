const colorInput = document.getElementById("color")
const modeInput = document.getElementById("mode-box")
const getBtn = document.getElementById("get-btn")
const display = document.getElementById("color-display")

getBtn.addEventListener('click', function(e){
    e.preventDefault()
    
    const seedColor = colorInput.value.slice(1)
    const selectedMode = modeInput.value
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${selectedMode}`)
    .then(res => res.json())
    .then(data => {
        const colorsHtml = data.colors.map(color => {
            return `
                <div class="color-column">
                    <div class="color-block" style="background-color: ${color.hex.value};"></div>
                    <p class="color-hex" class="tooltip" class="tooltiptext" id="myTooltip" onclick="copyToClipboard('${color.hex.value}')">${color.hex.value}</p>
                </div>
            `
        }).join('')
        display.innerHTML = colorsHtml
    })
})

function copyToClipboard(text){
    navigator.clipboard.writeText(text)
}