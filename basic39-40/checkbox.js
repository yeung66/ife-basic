function createCheckbox(list,type){
    let wrapper = document.querySelector('#'+type+'-radio-wrapper')
    let allCheck = '全选<input type="checkbox" checkbox-type="all">'
    wrapper.innerHTML = allCheck
    
    list.forEach((e)=>{
        allCheck += e+'<input type="checkbox" checkbox-type="one" value="'+e+'">'
    })

    wrapper.innerHTML = allCheck
    wrapper.addEventListener('change',callback)

}

function callback(e){
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
    }
}