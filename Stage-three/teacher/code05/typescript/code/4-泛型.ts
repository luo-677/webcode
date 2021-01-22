/* 
    * 泛型 
        * 给未来数据定义类型
        * 优势
            * 参数或者返回值的数据类型可以多变  
        * 泛型一般用大驼峰表示
*/

function handler (a:number,b:number){}


function fn<T,U> (a:T,b:U) {
    console.log( a  )
    console.log( b  )

}

fn<number,string>(10,'a')
fn<boolean,string>(true,'a')