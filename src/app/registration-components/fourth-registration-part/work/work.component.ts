import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  workForm = new FormGroup({
    work: new FormControl('', [Validators.required]),
  });
  rateForJobs = [0, 0, 0, 0, 0];

  dataForTable = [
    {position: 1, name: 'Snake milker', description: 'A snake milker extracts a snakes venom to support research and development processes', rating: ''},
    {position: 2, name: 'Dog food taster', description: 'A dog food taster evaluates the nutritional value of a dogs food by tasting them.', rating: ''},
    {position: 3, name: 'Water Slide Tester', description: 'Water Slide Testers check to see if the water slides in resorts, theme parks and hotels are both fun and safe.', rating: ''},
    {position: 4, name: 'Worm Picker', description: 'Worm pickers work in the great outdoors “hunting” and collecting earth worms.', rating: ''},
    {position: 5, name: 'Paper Towel Sniffer', description: ' You would be sniff testing products to check if they smell good (or not).', rating: ''},
  ];

  displayedColumns = ['position', 'name', 'description', 'rating'];

  constructor(private _snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  unemploymentChanged({checked}: MatCheckboxChange) {
    if(checked) {
      this.workForm.get('work').disable();
      this.workForm.get('work').setValue('A drag of society I see...');
    }
    else {
       this.workForm.get('work').enable();
       this.workForm.get('work').setValue('');
    }
  }

  rateSelected(index: number, {position}) {
    this.rateForJobs[position - 1] = index;
    if( (position === 2 || position === 1) && index === 5)
    this._snackbar.open('Common its not that weird...', '', {duration: 2500, panelClass: 'snackBar'})
  }

}
