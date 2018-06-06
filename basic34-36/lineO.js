line = {
    height:400,
    width:600,
    dotRadius:3,
    lineWidth:2,
    dotColor:'blue',
    lineColor:'lightblue',
    dotSpace:50,

    drawLine:function(){
        document.querySelector('#canvas').innerHTML=''
        var canvas = this.createCanvas()
        var ctx = canvas.getContext('2d')

        var max = Math.max.apply(null,this.data)
        var ratio = this.height / max
        this.drawAxis(ctx)
        for(var i=0;i<this.data.length;i++){
            var x = this.dotSpace + i*this.dotSpace - this.dotRadius
            var y = this.height - this.data[i]*ratio +this.dotRadius
            if(i!=0) this.drawOneLine(ctx,x,y)
            this.drawDot(ctx,x,y)
        }
        document.querySelector('#canvas').appendChild(canvas)        
    },

    createCanvas:function(){
        var canvas = document.createElement('canvas')
        canvas.height = this.height
        canvas.width = this.width
        return canvas
    },

    drawAxis:function(ctx){
        ctx.beginPath()
        ctx.moveTo(0,0)
        ctx.lineTo(0,this.height)
        ctx.lineTo(this.width,this.height)
        ctx.stroke()       
    },

    drawDot:function(ctx,x,y){
        ctx.beginPath()   
        ctx.arc(x,y,this.dotRadius,0,Math.PI * 2)
        ctx.fillStyle = this.dotColor
        ctx.fill()        
    },

    drawOneLine:function(ctx,x,y){
        ctx.strokeStyle=this.lineColor
        ctx.lineTo(x,y)
        ctx.stroke()       
    },
    updateData:function(d){
        this.data=d
        this.drawLine()
    }
}