import { Component, NgModule, ViewChild } from '@angular/core';
import { BeforeOpenCloseMenuEventArgs, MenuComponent, MenuItemModel, MenuModule } from '@syncfusion/ej2-angular-navigations'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'app-menu',
  imports: [ MenuModule, ButtonModule ],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {
    @ViewChild('menu')
    public menuObj?: MenuComponent;
    public menuItems: MenuItemModel[] = [
        {
            text: 'Config. da empresa',
            items: [
                { text: 'Minha Empresa' },
                { text: 'Benefícios' },
                { text: 'Áreas' },
                { text: 'Cargos' },
                { text: 'Filiais' }
            ]
        },
        {
            text: 'Config. de sistema',
            items: [
                { text: 'Now Showing' },
                { text: 'Coming Soon' }
            ]
        },
        {
            text: 'Vagas',
            items: [
                { text: 'Gestão de vagas' }
            ]
        },
        {
            text: 'Usuários',
            items: [
                { text: 'Meu Perfil' },
                { text: 'Todos os usuários' }
            ]
        }
    ];

    public hiddenItems: string[] = [
      'Config. de sistema',
       'Vagas',
       'Usuários',
       'Benefícios',
       'Áreas',
       'Cargos',
       'Filiais'
      ];

    public beforeOpen(args: BeforeOpenCloseMenuEventArgs): void {
        //Handling sub menu items
        for (let i: number = 0; i < args.items.length; i++) {
            if (this.hiddenItems.indexOf(args.items[i].text as string) > -1) {
                this.menuObj?.hideItems([args.items[i].text as string], false);
            }
        }
    }

    public created(): void {
        // Disable menu items
        this.menuObj?.hideItems(this.hiddenItems, false);
    }

    public btnClick(): void {
        // Show menu items
        this.menuObj?.showItems(this.hiddenItems, false);
        this.hiddenItems = [];
    }
}
