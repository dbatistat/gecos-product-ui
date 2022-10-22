import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LayoutComponent } from './layout/layout.component'
import { RouterModule } from '@angular/router'
import { SpinnerComponent } from './global-spinner/spinner/spinner.component'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

@NgModule({
  declarations: [LayoutComponent, SpinnerComponent],
  imports: [
    RouterModule,
    CommonModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule {}
