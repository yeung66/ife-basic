function getHashData(){
    let hash = location.hash
    hash = hash.slice(1,hash.length)
    hash = hash.split('|').filter((i)=>i.length!=0)
    let result = {}
    hash.forEach((i)=>{
        let key = i.split('=')[0]
        let value = i.split('=')[1]
        value=decodeURI(value)
        value = value.split(',')
        result[key]=value
    })
    return result
    
}

function updateHash(hashValues){
    let hash = '#'
    hash+='region='+hashValues['region'].join(',')+'|'
    hash+='product='+hashValues['product'].join(',')
    location.hash = hash
}

window.onhashchange = ()=>{
    render()
}

function render(){
    if(location.hash.length==0) return
    updateTable()
    updateCheckbox()
}

render()