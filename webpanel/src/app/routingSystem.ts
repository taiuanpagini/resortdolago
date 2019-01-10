/*--------------
V 1.0.0 - Criado por Larner Diogo

DESCIÇÃO:
Roteamento (admin) da aplicacao


COMPONENTS
***********************************************************/
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**********************************************************
GUARDS
***********************************************************/
import { GuardService } from './globals/guard';

/**********************************************************
PAGES
***********************************************************/
import { isLoggedLayout } from './isLogged';
import { noLoggedLayout } from './noLogged';

import { LoginComponent } from './shared/login/login';
import { LockComponent } from './shared/lock/lock';

import { DashComponent } from './shared/dash/dash';

import { UsuarioListComponent } from './pages/usuario/list';
import { UsuarioNewComponent } from './pages/usuario/new';
import { UsuarioEditComponent } from './pages/usuario/edit';

import { SuporteTecnicoComponent } from './shared/suporte/suporte';
import { UsuarioPerfilComponent } from './pages/usuario/perfil';
import { RecuperarSenhaComponent } from './shared/recuperar-senha/recuperar-senha';
import { BannerListComponent } from './pages/banner/list';
import { BannerNewComponent } from './pages/banner/new';
import { BannerEditComponent } from './pages/banner/edit';
import { BannerUploadComponent } from './pages/banner/upload';
import { DepoimentoListComponent } from './pages/depoimento/list';
import { DepoimentoNewComponent } from './pages/depoimento/new';
import { DepoimentoEditComponent } from './pages/depoimento/edit';
import { VideoListComponent } from './pages/video/list';
import { VideoNewComponent } from './pages/video/new';
import { VideoEditComponent } from './pages/video/edit';
import { MidiaListComponent } from './pages/midia/list';
import { MidiaNewComponent } from './pages/midia/new';
import { MidiaEditComponent } from './pages/midia/edit';
import { ContatoListComponent } from './pages/contato/list';
import { ContatoNewComponent } from './pages/contato/new';
import { ContatoEditComponent } from './pages/contato/edit';
import { UsuarioSenhaComponent } from './pages/usuario/senha';
import { BannerEditImageComponent } from './pages/banner/edit-image';
import { AtracoesListComponent } from './pages/atracao/list';
import { AtracoesNewComponent } from './pages/atracao/new';
import { AtracoesEditComponent } from './pages/atracao/edit';
import { AtracoesUploadComponent } from './pages/atracao/upload';
import { AtracoesEditImageComponent } from './pages/atracao/edit-image';
import { CaldasListComponent } from './pages/caldas-novas/list';
import { CaldasNewComponent } from './pages/caldas-novas/new';
import { CaldasEditComponent } from './pages/caldas-novas/edit';
import { CaldasUploadComponent } from './pages/caldas-novas/upload';
import { CaldasEditImageComponent } from './pages/caldas-novas/edit-image';
import { ResortListComponent } from './pages/resort/list';
import { ResortNewComponent } from './pages/resort/new';
import { ResortEditComponent } from './pages/resort/edit';
import { ResortUploadComponent } from './pages/resort/upload';
import { ResortEditImageComponent } from './pages/resort/edit-image';

export const Routing: Routes = [

  //ROTA PROTEGIDA
  {
    path: '',
    canActivate: [GuardService],
    component: isLoggedLayout,
    children: [

      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },

      /*DASHBOARD*/
      {
        path: '',
        component: DashComponent,
        data: {
          title: 'Dashboard'
        }
      },

      /*MODELO USUARIOS*/
      {
        path: 'usuario/lista',
        component: UsuarioListComponent,
        data: {
          title: 'Gerenciar itens'
        }
      },
      {
        path: 'usuario/novo',
        component: UsuarioNewComponent,
        data: {
          title: 'Adicionar item'
        }
      },
      {
        path: 'usuario/:id',
        component: UsuarioEditComponent,
        data: {
          title: 'Editar item'
        }
      },
      {
        path: 'usuario/:id/editar-perfil',
        component: UsuarioPerfilComponent,
        data: {
          title: 'Editar item'
        }
      },
      {
        path: 'usuario/:id/alterar-senha',
        component: UsuarioSenhaComponent,
        data: {
          title: 'Editar item'
        }
      },
      {
        path: 'banner/lista',
        component: BannerListComponent,
        data: {
          title: 'Gerenciar itens'
        }
      },
      {
        path: 'banner/novo',
        component: BannerNewComponent,
        data: {
          title: 'Adicionar item'
        }
      },
      {
        path: 'banner/:id',
        component: BannerEditComponent,
        data: {
          title: 'Editar item'
        }
      },
      {
        path: 'banner/:id/upload-imagem',
        component: BannerUploadComponent,
        data: {
          title: 'Upload item'
        }
      },
      {
        path: 'banner/:id/editar-imagem',
        component: BannerEditImageComponent,
        data: {
          title: 'Editar imagem upload'
        }
      },
      {
        path: 'depoimento/lista',
        component: DepoimentoListComponent,
        data: {
          title: 'Gerenciar itens'
        }
      },
      {
        path: 'depoimento/novo',
        component: DepoimentoNewComponent,
        data: {
          title: 'Adicionar item'
        }
      },
      {
        path: 'depoimento/:id',
        component: DepoimentoEditComponent,
        data: {
          title: 'Editar item'
        }
      },
      {
        path: 'video/lista',
        component: VideoListComponent,
        data: {
          title: 'Gerenciar itens'
        }
      },
      {
        path: 'video/novo',
        component: VideoNewComponent,
        data: {
          title: 'Adicionar item'
        }
      },
      {
        path: 'video/:id',
        component: VideoEditComponent,
        data: {
          title: 'Editar item'
        }
      },
      {
        path: 'midia/lista',
        component: MidiaListComponent,
        data: {
          title: 'Gerenciar itens'
        }
      },
      {
        path: 'midia/novo',
        component: MidiaNewComponent,
        data: {
          title: 'Adicionar item'
        }
      },
      {
        path: 'midia/:id',
        component: MidiaEditComponent,
        data: {
          title: 'Editar item'
        }
      },
      {
        path: 'contato/lista',
        component: ContatoListComponent,
        data: {
          title: 'Gerenciar itens'
        }
      },
      {
        path: 'contato/novo',
        component: ContatoNewComponent,
        data: {
          title: 'Adicionar item'
        }
      },
      {
        path: 'contato/:id',
        component: ContatoEditComponent,
        data: {
          title: 'Editar item'
        }
      },
      {
        path: 'atracao/lista',
        component: AtracoesListComponent,
        data: {
          title: 'Gerenciar itens'
        }
      },
      {
        path: 'atracao/novo',
        component: AtracoesNewComponent,
        data: {
          title: 'Adicionar item'
        }
      },
      {
        path: 'atracao/:id',
        component: AtracoesEditComponent,
        data: {
          title: 'Editar item'
        }
      },
      {
        path: 'atracao/:id/upload-imagem',
        component: AtracoesUploadComponent,
        data: {
          title: 'Upload item'
        }
      },
      {
        path: 'atracao/:id/editar-imagem',
        component: AtracoesEditImageComponent,
        data: {
          title: 'Editar imagem upload'
        }
      },
      {
        path: 'caldas-novas/lista',
        component: CaldasListComponent,
        data: {
          title: 'Gerenciar itens'
        }
      },
      {
        path: 'caldas-novas/novo',
        component: CaldasNewComponent,
        data: {
          title: 'Adicionar item'
        }
      },
      {
        path: 'caldas-novas/:id',
        component: CaldasEditComponent,
        data: {
          title: 'Editar item'
        }
      },
      {
        path: 'caldas-novas/:id/upload-imagem',
        component: CaldasUploadComponent,
        data: {
          title: 'Upload item'
        }
      },
      {
        path: 'caldas-novas/:id/editar-imagem',
        component: CaldasEditImageComponent,
        data: {
          title: 'Editar imagem upload'
        }
      },
      {
        path: 'resort/lista',
        component: ResortListComponent,
        data: {
          title: 'Gerenciar itens'
        }
      },
      {
        path: 'resort/novo',
        component: ResortNewComponent,
        data: {
          title: 'Adicionar item'
        }
      },
      {
        path: 'resort/:id',
        component: ResortEditComponent,
        data: {
          title: 'Editar item'
        }
      },
      {
        path: 'resort/:id/upload-imagem',
        component: ResortUploadComponent,
        data: {
          title: 'Upload item'
        }
      },
      {
        path: 'resort/:id/editar-imagem',
        component: ResortEditImageComponent,
        data: {
          title: 'Editar imagem upload'
        }
      },

      /*SUPORTE TECNICO*/
      {
        path: 'suporte',
        component: SuporteTecnicoComponent,
        data: {
          title: 'Suporte Técnico'
        }
      },

    ]
  },

  //ROTA GERAL
  {
    path: '',
    component: noLoggedLayout,
    children: [

      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Acesso restrito'
        }
      },

      {
        path: 'recuperar-senha',
        component: RecuperarSenhaComponent,
        data: {
          title: 'Acesso restrito'
        }
      },

      /*LOCK*/
      {
        path: 'lock',
        component: LockComponent,
        data: {
          title: 'Sessão Bloqueada'
        }
      },

    ]
  },

];
