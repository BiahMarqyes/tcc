import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'bpc',
    loadChildren: () => import('./bpc/bpc.module').then( m => m.BpcPageModule)
  },
  {
    path: 'auxdoen',
    loadChildren: () => import('./auxdoen/auxdoen.module').then( m => m.AuxdoenPageModule)
  },
  {
    path: 'aposen',
    loadChildren: () => import('./aposen/aposen.module').then( m => m.AposenPageModule)
  },
  {
    path: 'transporte',
    loadChildren: () => import('./transporte/transporte.module').then( m => m.TransportePageModule)
  },
  {
    path: 'imposto',
    loadChildren: () => import('./imposto/imposto.module').then( m => m.ImpostoPageModule)
  },
  {
    path: 'concurso',
    loadChildren: () => import('./concurso/concurso.module').then( m => m.ConcursoPageModule)
  },
  {
    path: 'automoveis',
    loadChildren: () => import('./automoveis/automoveis.module').then( m => m.AutomoveisPageModule)
  },
  {
    path: 'cotas',
    loadChildren: () => import('./cotas/cotas.module').then( m => m.CotasPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
