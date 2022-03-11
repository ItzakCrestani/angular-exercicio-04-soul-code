import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  subtitle: string = "Basic"

  @Input()
  title1: string = "$"

  @Input()
  title2: string = "19.99"

  @Input()
  listItem1: string = "500 GB Storage"

  @Input()
  listItem2: string = "2 Users Allowed"

  @Input()
  listItem3: string = "Send up to 3 GB"

  @Input()
  height: string = "28rem"

  @Input()
  background: string = "#ffffff"

  @Input()
  colorSubtitle: string = "#696b7a"

  @Input()
  colorTitle: string = "#4d5062"

  @Input()
  colorItem1: string = "#696b7a"

  @Input()
  colorItem2: string = "#696b7a"

  @Input()
  colorItem3: string = "#696b7a"

  @Input()
  backgroundDivider: string = "#e2e2e2"

  @Input()
  borderColorButton: string = "#696b7a"

  @Input()
  colorButton: string = "#7d81e4"

  @Input()
  borderRadius: string = "1rem"

  constructor(private _snackBar: MatSnackBar) {}

  showSnackBar(): void {
    this._snackBar.open("Package was purchased!", "Close")
  }
}
