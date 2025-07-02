import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'boas-vindas',
    renderMode: RenderMode.Server
  },
  {
    path: 'empresa',
    renderMode: RenderMode.Server
  }
];
