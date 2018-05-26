document.querySelector('#region-select').addEventListener('change',updateTable)

document.querySelector('#product-select').addEventListener('change',updateTable)

function updateTable() {
    var table = document.querySelector('#result')
    table.innerHTML = ""
    var th = createHead()
    table.appendChild(th)
    var rows = insertRows()
    rows.forEach((row)=>{
        table.appendChild(row)
    })
}

function createHead(){
    var tr = document.createElement('tr')
    var header = ['商品','地区','1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    for(var i =0;i<14;i++){
        var th = document.createElement('td')
        th.innerText = header[i]
        tr.appendChild(th)
    }
    return tr
}

function insertRows() {
    var result = []
    var values = getValues()
    values.forEach((item)=>{      
        var tr = document.createElement('tr')
        var td = document.createElement('td')
        td.innerText = item.product
        tr.appendChild(td)
        td = document.createElement('td')
        td.innerText = item.region
        tr.appendChild(td)
        var sale = item.sale
        sale.forEach((s)=>{
            var td = document.createElement('td')
            td.innerText = s
            tr.appendChild(td)
        })
        result.push(tr)
        
    })
    return result
}

function getValues(){
    result = []
    var selectRegion = document.querySelector('#region-select').value
    var selectProduct = document.querySelector('#product-select').value
    var chooseRegion = (region)=>selectRegion?selectRegion==region:true
    var chooseProduct = (product)=>selectProduct?selectProduct==product:true
    sourceData.forEach((item)=>{
        if(chooseProduct(item.product) && chooseRegion(item.region)) result.push(item)
    })
    return result
}