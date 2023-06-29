import { Component, OnInit } from '@angular/core';

class Product {
  id: number;
  name: string;
  description: string;

  constructor(id: number, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

@Component({
  selector: 'app-root',
  template: `
    <h1>Product List</h1>
    <ul>
      <li *ngFor="let product of products">
        {{ product.name }} - {{ product.description }}
        <ion-button (click)="deleteProduct(product)">Delete</ion-button>
        <ion-button (click)="editProduct(product)">Edit</ion-button>
      </li>
    </ul>

    <div *ngIf="editingProduct">
      <h2>Edit Product</h2>
      <ion-label>Name:</ion-label>
      <input [(ngModel)]="editingProduct.name" type="text"><br>
      <ion-label>Description:</ion-label>
      <input [(ngModel)]="editingProduct.description" type="text"><br>
      <ion-button (click)="saveProduct()">Save</ion-button>
      <ion-button (click)="cancelEditing()">Cancel</ion-button>
    </div>
  `,
  styles: []
})
export class ModificarPage{

  products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is product 1.'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is product 2.'
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is product 3.'
    }
  ];

  editingProduct: Product | null = null;

  ngOnInit() {}

  deleteProduct(product: Product) {
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }

  editProduct(product: Product) {
    this.editingProduct = { ...product }; // Create a copy of the product being edited
  }

  saveProduct() {
    if (this.editingProduct) {
      // Find the index of the editingProduct in the products array
      const index = this.products.findIndex(p => p.id === this.editingProduct!.id);
      if (index !== -1) {
        // Update the product at the found index with the edited values
        this.products[index] = { ...this.editingProduct };
        this.editingProduct = null; // Clear the editingProduct variable
      }
    }
  }

  cancelEditing() {
    this.editingProduct = null;
  }
}