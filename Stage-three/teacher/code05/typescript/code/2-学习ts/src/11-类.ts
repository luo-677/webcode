class People {
    a:number = 1 
    fn (a:number,b:number):number {
        return a + b 
    }
    add (a:number,b:number):void {
        console.log(a,b)
    }

    static b:number = 2
    static handler (n:string,m:number):string {
        return n + m 
    }

    private c:number = 3
    private func (a:number,b:number):number {
        return a + b 
    }
}

const people = new People()
people.a
people.fn(10,20)

People.b
People.handler('a',100)
