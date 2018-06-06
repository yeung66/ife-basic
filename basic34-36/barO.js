bar = {
    data:[],

    width:620,
    height:400,
    barWidth :35,
    spaceWidth: 15,
    colorAxis : 'black',
    colorBar : 'lightblue',
    ns:  'http://www.w3.org/2000/svg',

    drawBars: function(){
        document.querySelector('#svg').innerHTML=''
        var max = Math.max.apply(null,this.data)
        var ratio = max / this.height

        
        var svg = this.createSVG()
        
        this.setAxisAttr(svg,0,this.height,this.width,this.height,this.colorAxis)
        this.setAxisAttr(svg,0,this.height,0,0,this.colorAxis)

        for(var i=0;i<this.data.length;i++){
            svg.appendChild(this.drawOneBar(this.spaceWidth+i*(this.barWidth+this.spaceWidth),this.height-this.data[i]/ratio-2,this.data[i]/ratio))
        }
        document.querySelector('#svg').appendChild(svg)
        
    },

    createSVG:function(){
        var svg = document.createElementNS(this.ns,'svg')
        svg.setAttribute('width',this.width+'px')
        svg.setAttribute('height',this.height+'px')
        svg.setAttribute('version',"1.1")
        return svg
    },

    setAxisAttr:function(container,x1,y1,x2,y2){
        var xAxis = document.createElementNS(this.ns,'line')
        xAxis.setAttribute("x1",x1)
        xAxis.setAttribute("y1",y1)
        xAxis.setAttribute("x2",x2)
        xAxis.setAttribute('y2',y2)
        //xAxis.setAttribute("width",2)
        xAxis.setAttribute('style','stroke:'+this.colorAxis+";stroke-width:3;")
        container.appendChild(xAxis)
    },
    drawOneBar:function(x,y,height){
        var bar = document.createElementNS(this.ns,'rect')
        bar.setAttribute('x',x)
        bar.setAttribute('y',y)
        bar.setAttribute('height',height)
        bar.setAttribute('width',this.barWidth)
        bar.setAttribute('style','fill:'+this.colorBar+";")
        return bar
    },

    updateData:function(data){
        this.data=data
        this.drawBars()
    }
}