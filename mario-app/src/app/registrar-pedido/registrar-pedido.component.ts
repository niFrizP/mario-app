import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registrar-pedido',
  templateUrl: './registrar-pedido.component.html',
  styleUrls: ['./registrar-pedido.component.scss'],
})
export class RegistrarPedidoComponent  implements OnInit {
  productos: { [key: string]: number } = {
    chocman: 0,
    alfajor: 0,
    chokita: 0
  };
  detalleEntrega: string = '';
  comentario: string = '';

  constructor(private formBuilder: FormBuilder) { }

  agregarCantidad(producto: string) {
    this.productos[producto] += 1;
  }

  registrarPedido() {
    
    console.log('Pedido registrado:', this.productos, this.detalleEntrega, this.comentario);
  }

  ngOnInit() {}

}
