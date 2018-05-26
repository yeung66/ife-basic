function createCheckbox(container,arr){
    var allChkbox = document.createElement('input')
    allChkbox.type = 'checkbox'
    allChkbox.setAttribute('checkbox-type','all')
    container.innerHTML='全选'
    container.appendChild(allChkbox)
    arr.forEach((item)=>{
        var chkbox = document.createElement('input')
        chkbox.type = 'checkbox'
        chkbox.value = item
        chkbox.setAttribute('checkbox-type','one')
        container.innerHTML += item  
        container.appendChild(chkbox)
        
    })

    container.addEventListener('change',(e)=>{
        if(e.target.type == 'checkbox'){
            var target = e.target
            if(target.getAttribute('checkbox-type')=='all'){
                container.querySelectorAll('input[checkbox-type=one]').forEach((i)=>{
                    i.checked = true
                })
            }else{
                var count = container.querySelectorAll('input[checkbox-type=one]:checked').length
                var all = container.querySelector('input[checkbox-type=all]')
                if(e.target.checked) {
                    if(count==arr.length){
                        all.checked=true
                    }
                }else{
                    if(count==0){
                        target.checked=true
                    }else if(count==arr.length-1){
                        all.checked=false
                    }
                }
            }
            updateTable()
        }
    })
    
}