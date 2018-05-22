import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { Lista } from '../../app/class/listas';
import { ListaItem } from '../../app/class/lista-item';
import { AlertController, NavController } from 'ionic-angular';

@Component({
    selector: 'app-agregar',
    templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

    nombreLista: string = '';
    nombreItem: string = '';

    items: ListaItem[] = [];

    constructor(public listaDeseosService: ListaDeseosService,
        public alertCtrl: AlertController,
        public navCtrl: NavController) { }

    ngOnInit() { }

    agregarItem() {
        if (this.nombreItem.length == 0) {
            return;
        }

        let item = new ListaItem();
        item.nombre = this.nombreItem;

        this.items.push(item);
        this.nombreItem = '';
    }

    eliminar(index: number) {
        this.items.splice(index, 1);
    }

    agregarLista() {
        if (this.nombreLista.length == 0) {
            console.log('entra al metodo');
            let alert = this.alertCtrl.create({
                title: 'Nombre de la lista',
                subTitle: 'El nombre de la lista es obligatório',
                buttons: ['OK']
            });
            alert.present();
        }

        let lista = new Lista(this.nombreLista);
        lista.items = this.items;

        console.log(this.items);

        this.listaDeseosService.listas.push(lista);

        this.navCtrl.pop();

    }
}
