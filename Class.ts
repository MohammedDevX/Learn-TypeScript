class Test {
    private nom: string;
    private prenom: string;

    public Test(nom: string, prenom: string) {
        this.nom = nom;
        this.prenom = prenom;
    }

    public afficher(): void {
        console.log(this.nom, this.prenom);
    }
}