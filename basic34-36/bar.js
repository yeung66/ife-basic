var ns = 'http://www.w3.org/2000/svg'

function drawBars(data){
    var width = 600+20
    var height = 400
    var barWidth = 35
    var spaceWidth = 15
    var colorAxis = 'black'
    var colorBar = 'lightblue'

    var max = Math.max.apply(null,data)
    var ratio = max / height

    
    var svg = createSVG(width,height)
    
    setAxisAttr(svg,0,height,width,height,colorAxis)
    setAxisAttr(svg,0,height,0,0,colorAxis)

    for(var i=0;i<data.length;i++){
        svg.appendChild(drawOneBar(spaceWidth+i*(barWidth+spaceWidth),height-data[i]/ratio-2,barWidth,data[i]/ratio,colorBar))
    }
    return svg
}

function createSVG(width,height){
    var svg = document.createElementNS(ns,'svg')
    svg.setAttribute('width',width+'px')
    svg.setAttribute('height',height+'px')
    svg.setAttribute('version',"1.1")
    return svg
}

function setAxisAttr(container,x1,y1,x2,y2,color){
    var xAxis = document.createElementNS(ns,'line')
    xAxis.setAttribute("x1",x1)
    xAxis.setAttribute("y1",y1)
    xAxis.setAttribute("x2",x2)
    xAxis.setAttribute('y2',y2)
    //xAxis.setAttribute("width",2)
    xAxis.setAttribute('style','stroke:'+color+";stroke-width:3;")
    container.appendChild(xAxis)
}

function drawOneBar(x,y,width,height,color){
    var bar = document.createElementNS(ns,'rect')
    bar.setAttribute('x',x)
    bar.setAttribute('y',y)
    bar.setAttribute('height',height)
    bar.setAttribute('width',width)
    bar.setAttribute('style','fill:'+color+";")
    return bar
}

