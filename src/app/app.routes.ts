import { Routes } from '@angular/router';
import { CriarConta } from './pages/criar-conta/criar-conta';
import { BoasVindas } from './pages/boas-vindas/boas-vindas';
import { CadastroEmpresa } from './pages/cadastro-empresa/cadastro-empresa';
import { Empresa } from './pages/empresa/empresa';
import { Menu } from './pages/menu/menu';

export const routes: Routes = [
  {
    path: '',
    component: CriarConta,
    title: 'Criar Conta'
  },
  {
    path: 'boas-vindas',
    component: BoasVindas,
    title: 'Boas Vindas'
  },
  {
    path: 'cadastro-empresa',
    component: CadastroEmpresa,
    title: 'Configurar Empresa'
  },
  {
    path: 'empresa',
    component: Empresa,
    title: 'Dados Empresa'
  },
  {
    path: 'Menu',
    component: Menu,
    title: 'Menu'
  }
];
