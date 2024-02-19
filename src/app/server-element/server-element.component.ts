import { Component , Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent {
  @Input() element : {type: string, name: string, content: string};
  @Input() name: string;


  constructor() {
    console.log('Constructor Called!')
  }

  ngOnChanges(changes:SimpleChanges){
    console.log('OnChanges Called')
    console.log(changes)
  }

  ngOnInit(){
    console.log('OnInit Called')
  }

  ngDoCheck(){
    console.log('Docheck Called')
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit Called')
  }


}
