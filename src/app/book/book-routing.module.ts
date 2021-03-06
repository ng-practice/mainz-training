import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';

import {BookWrapper} from './book-wrapper/book-wrapper.component';
import {BookDetail} from './book-detail/book-detail.component';
import {BookList} from './book-list/book-list.component';
import { BookForm } from './book-form/book-form.component';

const routes: Route[] = [
  {
    path: '',
    component: BookWrapper,
    children: [
      { path: '', component: BookList },
      { path: 'create', component: BookForm },
      { path: ':isbn', component: BookDetail }
    ]
  }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class BookRoutingModule {}
