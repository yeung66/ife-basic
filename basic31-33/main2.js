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

function getData(){
    var result = []
    var region = getValues(document.querySelectorAll('#region-radio-wrapper > input[checkbox-type=one]:checked'))
    var product = getValues(document.querySelectorAll('#product-radio-wrapper > input[checkbox-type=one]:checked'))
    sourceData.forEach((item)=>{
        if(region.indexOf(item.region)!=-1 && product.indexOf(item.product)!=-1) result.push(item)
    })
    return result
}

function getValues(elements) {
    var result = []
    for(var i=0;i<elements.length;i++){
        result.push(elements[i].value)
    }
    return result
}

function updateTable(){
    var numRegion = document.querySelectorAll('#region-radio-wrapper > input[checkbox-type=one]:checked').length
    var numProduct = document.querySelectorAll('#product-radio-wrapper > input[checkbox-type=one]:checked').length
    var data = getData()
    var bool;
    if(numProduct>1 && numRegion==1){
        sortArr(data,'region')
        bool = true
    }else{
        sortArr(data,'product')
        bool = false
    }
    var table = createTable(bool,data)
    document.querySelector('#result').innerHTML=''
    document.querySelector('#result').appendChild(table)
    var values = document.querySelectorAll('tr td:nth-of-type(1)')
    var start=0
    for(var i=0;i<values.length;i++){
        if(values[start].innerText!=values[i].innerText){
            mergeCell(values,start,i)
            start = i
        }
        if(i==values.length-1 && start!=i) mergeCell(values,start,i+1)
    }
}

function mergeCell(values,start,i){
    values[start].setAttribute('rowspan',i-start)
            for(var j=start+1;j<i;j++){
                values[j].remove()
            }
}

function createTable(bool,data) {
    var table = document.createElement('table')
    var tr = document.createElement('tr')
    var dict = ['product','region','1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    if(bool) [dict[0],dict[1]] = [dict[1],dict[0]]
    dict.forEach((item)=>{
        var th = document.createElement('th')
        th.innerText = item
        tr.appendChild(th)
    })
    
    table.appendChild(tr)
    data.forEach((item)=>{
        var tr = document.createElement('tr')
        for(var i=0;i<dict.length;i++){
            var td = document.createElement('td')
            if(i<2) td.innerText=item[dict[i]]
            else td.innerText = item.sale[i-2]
            tr.appendChild(td)
        }
        table.appendChild(tr)
    })
    return table
}

function sortArr(data,type){
    
    for(var i=0;i<data.length-1;i++){
        for(var j=0;j<data.length-i-1;j++){
            if((data[j][type])>data[j+1][type]) [data[j],data[j+1]] = [data[j+1],data[j]]
        }
    }
    
}

createCheckbox(document.querySelector('#region-radio-wrapper'),['华南','华东','华北'])
createCheckbox(document.querySelector('#product-radio-wrapper'),['手机','笔记本','智能音箱'])
