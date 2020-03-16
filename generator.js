//*在哪不重要
//*在哪不重要
function* gen(){
    yield "1";//yield:让出
    yield "2";
    yield "3";
    return "4"


}
//不是一下执行完，调用next()执行下一条语句，可多次返回。超次调用不会报错，只是会提示已经执行完了。
/**
 * 应用：序列的求值懒加载（惰性求值）----出现无限时可以使用
 * next()可以向函数内传值、generator函数可以实现异步函数和awt???、异常处理（略）
 * next()函数：q.next("end")，可以向函数内传值，将yield curr整体的值替换掉（curr本身是个值）
 * next()函数：实现函数内部状态和外部状态的交互，（可改变函数内部执行顺序）--和普通函数不同，generator函数语句执行顺序可以被改变
 * generator函数返回一个迭代器。let xx=xx,从而实现一步一步的执行。
 * 打印前十个：
 * var i=0;
 * for(let v of fib()){if(i++>30) break;console.log(v)}
 * 懒加载
 */

function* fib(){
    let [prev,curr] = [0,1];
    while(true){
        [prev,curr] = [curr,prev+curr]
        //yield curr
        let m =yield curr
        if (m =="end"){
            break;
        }
    }
    return "gnn end"
}
//浏览器单线程模型

/**结构坑
 * [...numbers（）]使用...将numbers变成数组
 * [“a”...numbers（）,"b"]数组拼接
 */
//yield*的使用


function* bar(){
    yield 1
    yield 2
    var a=3;
    yield 4;

}

function* foo(){
    yield "a"
    yield* bar()//功能类似...三个点。实现函数组合
    yield "b"
}
//不是一下执行完，调用next()执行下一条语句，可多次返回。超次调用不会报错，只是会提示已经执行完了。
/**
 * 应用：序列的求值懒加载（惰性求值）----出现无限时可以使用
 * next()可以向函数内传值、generator函数可以实现异步函数和awt???、异常处理（略）
 * next()函数：q.next("end")，可以向函数内传值，将yield curr整体的值替换掉（curr本身是个值）
 * next()函数：实现函数内部状态和外部状态的交互，（可改变函数内部执行顺序）--和普通函数不同，generator函数语句执行顺序可以被改变
 * generator函数返回一个迭代器。let xx=xx,从而实现一步一步的执行。
 * 打印前十个：
 * var i=0;
 * for(let v of fib()){if(i++>30) break;console.log(v)}
 * 懒加载
 */

function* fib(){
    let [prev,curr] = [0,1];
    while(true){
        [prev,curr] = [curr,prev+curr]
        //yield curr
        let m =yield curr
        if (m =="end"){
            break;
        }
    }
    return "gnn end"
}
//浏览器单线程模型

/**结构坑
 * [...numbers（）]使用...将numbers变成数组
 * [“a”...numbers（）,"b"]数组拼接
 */
//yield*的使用


function* bar(){
    yield 1
    yield 2

}

function* foo(){
    yield "a"
    yield* bar()//功能类似...三个点。实现函数组合
    yield "b"
}