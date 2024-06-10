import { Component, OnInit } from '@angular/core';

interface Product {
  name: string;
  category: string;
  image: string;
  price: number;
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: Product[] = [
    {
      name: 'Forgeon Perdition RGB Ratón Gaming 16.000 DPI Negro',
      category: 'mouse',
      image: '../../../assets/img/forgeon-perdition-raton-gaming-rgb-16000dpi.webp',
      price: 59.99
    },
    {
      name: 'Krom Kick Ratón Gaming 12000 DPI Negro',
      category: 'mouse',
      image: '../../../assets/img/1135-krom-kick-raton-gaming-12000-dpi-negro.webp',
      price: 24.99
    },
    {
      name: 'Tempest X2 Custodian RGB Ratón Gaming 8000 DPI Negro',
      category: 'mouse',
      image: '../../../assets/img/forgeon-perdition-raton-gaming-rgb-16000dpi.webp',
      price: 11.99
    },
    {
      name: 'Tempest Diablo Teclado Mecánico Gaming RGB Switch Red',
      category: 'keyboard',
      image: '../../../assets/img/tempest-diablo-teclado-mecanico-gaming-rgb-switch-red.webp',
      price: 59.99
    },
    {
      name: 'Tempest Doom H-Mech Teclado RGB',
      category: 'keyboard',
      image: '../../../assets/img/1277-tempest-doom-rgb-h-teclado-mecanico.webp',
      price: 24.99
    },
    {
      name: 'Newskill Serike V2 Teclado Mecánico Gaming RGB Blanco NewSwitch Red',
      category: 'keyboard',
      image: '../../../assets/img/1474-newskill-serike-v2-teclado-mecanico-gaming-rgb-blanco-newswitch-red.webp',
      price: 84.90
    },
    {
      name: 'ASUS TUF Gaming F15 FX506HE-71BT5PS1 Intel Core i7-11800H/16GB/512GB SSD/RTX 3050Ti/15.6\'\' (PT)',
      category: 'laptop',
      image: '../../../assets/img/1898-asus-tuf-gaming-f15.webp',
      price: 962.89
    },
    {
      name: 'MSI Stealth GS66 12UE-263XES Intel Core i7-12700H/32GB/1TB SSD/RTX 3060/15.6" Reacondicionado',
      category: 'laptop',
      image: '../../../assets/img/1852-msi-stealth.webp',
      price: 1220.55
    },
    {
      name: 'MSI Stealth GS66 12UHS-006ES Intel Core i7-12700H/32GB/1TB SSD/RTX 3080Ti/15.6" Reacondicionado',
      category: 'laptop',
      image: '../../../assets/img/1785-msi-stealth-gs66.webp',
      price: 2428.15
    },
  ];

  filteredProducts: Product[] = [];

  ngOnInit() {
    this.filteredProducts = this.products;
  }

  filterProducts(category: string) {
    if (category === 'all') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product => product.category === category);
    }
  }
}
