import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent {
  empleado = {
    id: '',
    departamento: '',
    turno: '',
    horario: '',
  };
  datos = {
    id: '',
    precioF: 0,
  };
  art = {
    codigo: null,
    descripcion: null,
    precio: null,
    cantidad: null,
  };

  articulos = [
    { codigo: 1, descripcion: 'Chocolate Crocante', precio: 50, cantidad: 2 },
    {
      codigo: 2,
      descripcion: 'Chocolate con leche',
      precio: 100,
      cantidad: 2,
    },
    { codigo: 3, descripcion: 'Chocolate relleno', precio: 40, cantidad: 2 },
    { codigo: 4, descripcion: 'Bombones', precio: 60, cantidad: 2 },
    { codigo: 5, descripcion: 'Chocolate amargo', precio: 50, cantidad: 2 },
  ];

  hayRegistros() {
    return this.articulos.length > 0;
  }

  borrar(art) {
    for (let x = 0; x < this.articulos.length; x++)
      if (this.articulos[x].codigo == art.codigo) {
        this.articulos.splice(x, 1);
        return;
      }
  }

  agregar() {
    for (let x = 0; x < this.articulos.length; x++)
      if (this.articulos[x].codigo == this.art.codigo) {
        alert('ya existe un articulo con dicho codigo');
        return;
      }
    this.articulos.push({
      codigo: this.art.codigo,
      descripcion: this.art.descripcion,
      precio: this.art.precio,
      cantidad: this.art.cantidad,
    });
    this.art.codigo = null;
    this.art.descripcion = null;
    this.art.precio = null;
    this.art.cantidad = null;
  }

  seleccionar(art) {
    this.art.codigo = art.codigo;
    this.art.descripcion = art.descripcion;
    this.art.precio = art.precio;
    this.art.cantidad = art.cantidad;
  }

  modificar() {
    for (let x = 0; x < this.articulos.length; x++)
      if (this.articulos[x].codigo == this.art.codigo) {
        this.articulos[x].descripcion = this.art.descripcion;
        this.articulos[x].precio = this.art.precio;
        this.articulos[x].cantidad = this.art.cantidad;
        return;
      }
    alert('No existe el código de articulo ingresado');
  }
  calcular() {
    this.datos.precioF = 0;
    for (let x = 0; x < this.articulos.length; x++) {
      this.datos.precioF +=
        this.articulos[x].precio * this.articulos[x].cantidad;
    }
  }
}
