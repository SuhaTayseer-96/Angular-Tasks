import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductComponent } from './product/product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { SubServicesComponent } from './sub-services/sub-services.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { UsersubComponent } from './usersub/usersub.component';
import { UserComponent } from './user/user.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { AddServiceComponent } from './Admin/add-service/add-service.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ServicesComponent,
    SubServicesComponent,
    SubscriptionComponent,
    UsersubComponent,
    UserComponent,
    LoginuserComponent,
    AddServiceComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" }, // full just for default
      { path: "Category", component: CategoryComponent },
      { path: "Product", component: ProductComponent },
      { path: "Aboutus", component: AboutUsComponent },
      { path: "Contactus", component: ContactUsComponent },
      { path: "Home", component: HomeComponent },

      { path: "Services", component: ServicesComponent },
      { path: "SubServices/:id", component: SubServicesComponent },
      { path: "Sub", component: SubscriptionComponent },

      { path: "User", component: UserComponent },

      { path: "Login", component: LoginuserComponent },
      {
        path: "dashboard", component: DashboardComponent, children: [
          { path: "addService", component: AddServiceComponent },
          { path: "**", component: DashboardComponent }
        ]
      }


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
