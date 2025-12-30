class Employe {
    protected  id: number;
    protected nom: string;
    protected prenom: string;
    public static counter: number;

    // N.B: In Ts multiple constructors are not allowed
    public constructor(id: number, nom: string, prenom: string) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
    }

    // Getter syntax :
    public get _id() {
        return this.id;
    }

    // Setter syntax : shoulnt decalre the type in the setter 
    public set _id(id: number) {
        this.id = id;
    }

    public afficher(): void {
        console.log(this.id, this.nom, this.prenom);
    }
}

class Manager extends Employe {
    public constructor(id: number, nom: string, prenom: string) {
        super(id, nom, prenom);
    }
}

let emp = new Employe(1, "bakhtaoui", "mohammed");
console.log(emp);
emp.afficher();
console.log()
console.log(emp._id);
emp._id = 12;
emp.afficher();
let manager = new Manager(2, "Elouali", "Samad");
manager.afficher();