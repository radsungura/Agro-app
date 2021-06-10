import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss'],
})
export class PhotosListComponent implements OnInit {
@Input() imageUploads: any;
  constructor() { }

  ngOnInit() {}

}
