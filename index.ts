
// An interface for a Dog, a template.
interface derHund<TypeOf> {
    items: TypeOf[];
    add: (b: TypeOf) => void;
}

// Implement a dog with the template.
class Hund implements derHund<number> {
    items: number[] = [];

    add(b: number): void {
        this.items.push(b)
    }
}

// Create a new dog using the class that uses the template
let dog: Hund = new Hund();

// use the add function
dog.add(1);
dog.add(2);
dog.add(3);

// print items
console.log(dog.items)
