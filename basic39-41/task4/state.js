let wholestate = []

function getChecked(){
    let result = []
    document.querySelectorAll('input[checkbox-type=one]:checked').forEach((e)=>{
        result.push(e.value)
    })
    return result
}

window.onpopstate = (e)=>{
    wholestate = history.state
    console.log(wholestate)
    updateCheckbox()
}