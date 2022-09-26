function receivesAFunction(cb){
    cb("Hello")
}

function returnsANamedFunction(){
    return function aFunction(cb){
        cb("Hello")
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        
    }

}