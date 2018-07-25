function Restaurant(obj){
    this.cash=obj.cash
    this.seats=obj.seats
    this.staff=obj.staff
}

Restaurant.prototype.hire = function(employee){
    this.staff.push(employee)
}

Restaurant.prototype.fire = function(employee){
    var index = this.staff.indexOf(employee);
    if (index >= 0) {
        this.staff.splice(index, 1);
    }
}

function Employee(id,name,salary){
    this.id=id
    this.name=name
    this.salary=salary
    function doJob(){}
}

function ServiceEmpl(id,name,salary){
    Employee.call(this,id,name,salary)
    function doJob(param){
        if(Array.isArray(param)) console.log('点菜')
        else console.log('上菜')
    }
}

ServiceEmpl.prototype = Object.create(Employee.prototype)
ServiceEmpl.prototype.constructor = Employee.prototype.constructor

function Cook(id,name,salary){
    Employee.call(this,id,name,salary)
    function doJob(){
        //cook
    }
}

Cook.prototype = Object.create(Employee.prototype)
Cook.prototype.constructor = Employee.prototype.constructor

function Customer(){
    function order(dishes){

    }
    function eat(){

    }
}

function Dish(name,cost,price){
    this.name=name
    this.cost=cost
    this.price=price
}