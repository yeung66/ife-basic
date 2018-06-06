function createTable(data){
    var table = document.createElement('table')
    var header = ['product','region']
    for(var i=1;i<=12;i++) header.push(i+'月')
    var tr = document.createElement('tr')
    for(var i=0;i<header.length;i++){
        var th = document.createElement('th')
        th.innerText=header[i]
        tr.appendChild(th)
    }
    table.appendChild(tr)
    for(var i=0;i<data.length;i++){
        var tr = document.createElement('tr')
        tr.name = i
        var td = document.createElement('td')
        td.innerText=data[i].product
        tr.appendChild(td)
        td = document.createElement('td')
        td.innerText=data[i].region
        tr.appendChild(td)
        for(var j=0;j<data[i].sale.length;j++){
            td = document.createElement('td')
            td.innerText=data[i].sale[j]
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    return table
}

function addEvent(table,bar,line,lines){
    table.addEventListener('mouseover',(e)=>{
        if(e.target.nodeName =='TD'){
            var id = e.target.parentNode.name
            bar.updateData(sourceData[id].sale)
            line.updateData(sourceData[id].sale)
        }
    })
    table.addEventListener('mouseout',(e)=>{
        console.log(e.target)
        if(e.target.nodeName =='TABLE'|| e.target.nodeName =='TD'){
            lines.drawLine()
        }
    })
}