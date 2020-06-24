import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from 'src/app/pages';
import { CarroModule } from './pages/carro/carro.module';
import { BuscaDetalhadaModule } from './pages/busca-detalhada/busca-detalhada.module';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => HomeModule
  },
  {
    path: 'carro/:id',
    loadChildren: () => CarroModule
  },
  {
    path: 'busca',
    loadChildren: () => BuscaDetalhadaModule
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      anchorScrolling: 'disabled',
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
