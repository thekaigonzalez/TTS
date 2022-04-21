class WithMethods {
    mymethod(h: string): number {
        return 1;
    }
}

class WithExtension extends WithMethods {
    override mymethod(h: string): number {
        return 2;
    }
}

let class1: WithMethods = new WithMethods();
let class2: WithExtension = new WithExtension();

console.log("%d", class1.mymethod(""));

console.log("%d", class2.mymethod(""));
