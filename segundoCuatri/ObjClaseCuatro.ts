class Decodificador {

    public tomaCanalAire: boolean;
    public tomaCanalDigital: boolean;
  
    constructor (paramDecodificaAire: boolean, paramDecodificaDigital: boolean){
    this.tomaCanalAire=paramDecodificaAire;
    this.tomaCanalDigital=paramDecodificaDigital;
}

}

class Televisor {

    private decodificador: Decodificador;
    private estaPrendido: boolean;
    private volumen: number;


/*prenderApagar(): void {
if (estaPrendido)
estaPrendido = false
else
estaPrendido = true
}*/

constructor (paramPrendido: boolean, paramDecodificador: Decodificador, paramVolumen:number){
this.estaPrendido=paramPrendido;
this.decodificador=paramDecodificador;
this.volumen=paramVolumen;

}

prenderApagar():void{
if(this.estaPrendido === true) {
    this.estaPrendido = false;    } 
else {
    this.estaPrendido = true;     }
    };
    
obtenerVolumen():number{
return this.volumen;    
};

subirVolumen():void{
this.volumen = this.volumen++;
    };

bajarVolumen():void{
this.volumen = this.volumen--;
    };

}

let deco1 = new Decodificador (true, false);
let tv = new Televisor (true, deco1, 60);