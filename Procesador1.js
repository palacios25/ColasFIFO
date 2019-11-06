class Proceso{
    constructor(){
        this.vida = this.randomVida();
    }

    randomVida(){
        let vida = Math.floor((Math.random()*11+4));
        return vida;
    }
} 
class Procesador{

    constructor(){
        this.items = {};
        this.front = 0;
        this.end = 0;
        
    }

    procesoCompleto(){
        let procesoTerminado = 0;
        let procesoFuera = 0;
        let procesoTotal = 0;

        for(let i = 0; i <= 300; i++){
            let procesos = this._procesoPreHecho();

            if(procesos != null){
                this._enqueve(procesos);
                procesoTotal ++;
                console.log(procesos);
            } 
            if(this.items === null){
                procesoFuera++;
            } 
            if (this.items != null){
                this.items.vida--;
            }
            if(this.items != null && this.items.vida === 0){
                if(this.items != null){
                    this.items = this.items;
                    procesoTerminado++;
                }
            }
            let ciclo = 0;
            let process = 0;
    
            while(this._items != null){
                ciclo +- this._items.vida;
                process ++;
                this._items = this._items;
            }
            
            
        }
        console.log("Total de procesos creados: " + procesoTotal);
        console.log("Procesos que fueron completados: "+ procesoTerminado);
        //console.log("Numero de procesos en fila: " + process);
        //console.log("Total de ciclos que faltan para terminar la fila" + ciclo);    
        console.log("Ciclos en que la fila estuvo vacia: " + procesoFuera); 

      
    }

    _procesoPreHecho(){
        let preHecho = this._probabilidad();
        if(preHecho <= 39){
            let process = new Proceso();
            this._procesoTotal++;
            return process;
        }
    }

    _probabilidad(){
        let probabilidad = Math.floor(Math.random()*100+1);
        return probabilidad;
    }

    _enqueve(data) {
      this.items[this.end] = data;
      this.end++;  
    }

    salir(){
        if(this.front === this.end){
            return null;
        }
        const data = this.items[this.front];
        this.front++;
        return data;
    }

    tamaño(){
        return this.end - this.front;
    }

    vacia(){
        if(this.tamaño() === 0){
            return true;
        } else {
            return false;
        }
    }

    imprimir(){
        if(this.tamaño() === 0){
            return null;
        }
        let result = "";
        for(let i = this.front; i < this.end; i++){
            result += this.items[i] + " ";
        }
        return result;
    }

}
const procesador = new Procesador();

console.log(procesador.procesoCompleto());
