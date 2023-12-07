import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  imports: [MatButtonModule, MatCardModule],
  exports: [MatButtonModule, MatCardModule, MatInputModule],
})
export class MaterialsModule {}
