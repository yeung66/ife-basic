lines = {
    height:400,
    width:600,
    dotRadius:3,
    lineWidth:2,
    dotColor:'blue',
    LineColors:['red','lightblue','black',
    'yellow','green','purple','lightred','lightgreen','grey'],
    dotSpace:50,
    data:sourceData.map((item)=>item.sale),

    drawLine:function(){
        document.querySelector('#canvas').innerHTML=''
        var canvas = this.createCanvas()
        var ctx = canvas.getContext('2d')

        var max = this.data.map(Function.apply.bind(Math.max, null))
        max = Math.max.apply(null,max)
        var ratio = this.height / max
        this.drawAxis(ctx)
        for(var j=0;j<this.data.length;j++){
            for(var i=0;i<this.data[j].length;i++){
                var x = this.dotSpace + i*this.dotSpace - this.dotRadius
                var y = this.height - this.data[j][i]*ratio +this.dotRadius
                if(i!=0) this.drawOneLine(ctx,x,y,this.LineColors[j])
                this.drawDot(ctx,x,y)
            }
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

    drawOneLine:function(ctx,x,y,color){
        ctx.strokeStyle=color
        ctx.lineTo(x,y)
        ctx.stroke()       
    },
    
}