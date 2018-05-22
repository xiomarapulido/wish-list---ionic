import { Injectable } from '@angular/core'
import { Lista } from '../class/listas';

@Injectable()
export class ListaDeseosService {

    listas: Lista[] = [];

    constructor() {
        let lista1 = new Lista('Compras de supermercado');
        let lista2 = new Lista('Tareas de la universidad');
        let lista3 = new Lista('Cuentas por pagar');

        this.listas.push(lista1);
        this.listas.push(lista2);
        this.listas.push(lista3);

    }
}