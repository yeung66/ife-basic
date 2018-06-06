function drawLine(data){
    var canvasHeight = 400
    var canvasWidth = 600
    var dotRadius = 3
    var dotColor = 'blue'
    var lineWidth = 2
    var lineColor = 'lightblue'
    var dotSpace = 50
    var canvas = createCanvas(canvasHeight,canvasWidth)
    var ctx = canvas.getContext('2d')

    var max = Math.max.apply(null,data)
    var ratio = canvasHeight / max

    drawAxis(ctx,canvasWidth,canvasHeight)

    for(var i=0;i<data.length;i++){
        var x = dotSpace + i*dotSpace - dotRadius
        var y = canvasHeight - data[i]*ratio +dotRadius
        if(i!=0) drawOneLine(ctx,x,y,lineColor)
        drawDot(ctx,x,y,dotRadius,dotColor)
    }
    document.querySelector('#canvas').appendChild(canvas)
    
}

function createCanvas(height,width){
    var canvas = document.createElement('canvas')
    canvas.height = height
    canvas.width = width
    document.body.appendChild(canvas) 
    return canvas
}

function drawAxis(ctx,width,height){
    ctx.beginPath()
    ctx.moveTo(0,0)
    ctx.lineTo(0,height)
    ctx.lineTo(width,height)
    ctx.stroke()
}

function drawDot(ctx,x,y,r,color){
    ctx.beginPath()   
    ctx.arc(x,y,r,0,Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawOneLine(ctx,x,y,color){
    ctx.strokeStyle=color
    ctx.lineTo(x,y)
    ctx.stroke()
}

//drawLine(sourceData[0].sale)