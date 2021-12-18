// Your code here
class Polygon {
    constructor(arrayOfIntegers){
        this.arrayOfIntegers = arrayOfIntegers
    }
    get countSides(){
        return this.arrayOfIntegers.length;
    }
    get perimeter(){
        return this.arrayOfIntegers.reduce(function(one, value){
            return one + value
        }, 0)
    }
}

class Triangle extends Polygon {
    get isValid(){
        if(this.arrayOfIntegers[0] === this.arrayOfIntegers[1]){
            return true;
        } else{return false;}
    }
}

class Square extends Polygon {
    get isValid(){
        if(this.arrayOfIntegers[0] === this.arrayOfIntegers[1]){
            return true;
        } else{return false;}
    }
    get area(){
        return this.arrayOfIntegers[0] * this.arrayOfIntegers[1]
    }
}