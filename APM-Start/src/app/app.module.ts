import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./products/products-list.component";
import { StarComponent } from "./shared/star/star.component";
import { ConvertToSpacesPipe } from "./shared/convert-to-spaces.pipe";

import { ProductService } from "./products/product.service";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
