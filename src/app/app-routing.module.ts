import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeroComponent } from './pages/hero/hero.component';
import { ServicesComponent } from './pages/services/services.component';
import { ConveniosComponent } from './pages/convenios/convenios.component';
import { BlogComponent } from './pages/blog/blog.component';


const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'about', component: AboutComponent },

  { path: 'contact', component: ContactComponent },

  { path: 'hero', component: HeroComponent },

  { path: 'services', component: ServicesComponent },

  { path: 'convenios', component: ConveniosComponent },

  { path: 'blog', component: BlogComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
