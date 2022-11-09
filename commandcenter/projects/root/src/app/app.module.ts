import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthLibModule } from 'auth-lib';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { LoginComponent } from './login/login.component';
import { MatCardModule} from '@angular/material/card';
import { MatDialogModule } from "@angular/material/dialog";

import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { CommonModule } from '@angular/common';

import { UserComponent } from './user/user.component';
import { TicketComponent } from './ticket/ticket.component';
import { AuthGuard } from './shared/auth.guard';
import { WidgetComponent } from './widget/widget.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay'
import { CdkMenuModule } from '@angular/cdk/menu'
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardMenuComponent } from './dashboardmenu/dashboardmenu.component';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardComponent } from './card/card.component';
import { ResizableModule } from 'angular-resizable-element';
import { KtdGridModule } from '@katoid/angular-grid-layout';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ModalComponent } from './modal/modal.component';
// import { NgChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    BrowserModule,
    AuthLibModule,
    HttpClientModule,
    FlexLayoutModule,
    KtdGridModule,
    NgxChartsModule,
    RouterModule.forRoot(APP_ROUTES),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    FormsModule,
    CommonModule,
  MatToolbarModule,
  MatButtonModule, 
  MatCardModule,
  MatDividerModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  DragDropModule,
  OverlayModule,
  CdkMenuModule,
  ResizableModule,
  // NgChartsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    UserComponent,
    TicketComponent,
    WidgetComponent,
    BodyComponent,
    DashboardMenuComponent,
    SidenavComponent,
    ModalComponent,
    CardComponent
  ],
  entryComponents:[ModalComponent],
  providers: [AuthGuard],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
