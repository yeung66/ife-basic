function createCheckbox(list,type){
    let wrapper = document.querySelector('#'+type+'-radio-wrapper')
    let allCheck = '全选<input type="checkbox" checkbox-type="all">'
    wrapper.innerHTML = allCheck
    
    list.forEach((e)=>{
        allCheck += e+'<input type="checkbox" checkbox-type="one" value="'+e+'">'
    })

    wrapper.innerHTML = allCheck

    wrapper.addEventListener('change',function (e){
        if(e.target.type == 'checkbox'){
            let container = wrapper
            var target = e.target
            let hash = type+'='
            let hashValues = getHashData()
            if(target.getAttribute('checkbox-type')=='all'){
                let values = []
                container.querySelectorAll('input[checkbox-type=one]').forEach((i)=>{
                    i.checked = true
                    values.push(i.value)
                })
                hashValues[type] = values
            }else{
                var count = container.querySelectorAll('input[checkbox-type=one]:checked').length
                var all = container.querySelector('input[checkbox-type=all]')
                
                if(e.target.checked) {
                    if(count==3){
                        all.checked=true
                        
                    }
                    hashValues[type].pushe.target.value
                }else{
                    let ifChange = true
                    if(count==0){
                        target.checked=true
                        ifChange = false
                    }else if(count==2){
                        all.checked=false
                    }
                    if(ifChange) hashValues[type].splice(hashValues[type].indexOf(e.target.value),1)
                }
                
            }
            updateHash(hashValues)
            
        }
    })

}

function updateCheckbox(){
    let hashValues = getHashData()
    for(var i in hashValues){
        hashValues[i].forEach((v)=>{
            document.querySelector('input[value='+v+']').checked=true
            if(hashValues[i].length==3) document.querySelector('input[value='+v+']').parentElement.firstElementChild.checked=true
        })
        //if(hashValues[i].length==3) hashValues[i][0].previousElementSibling.checked=true
    }
}