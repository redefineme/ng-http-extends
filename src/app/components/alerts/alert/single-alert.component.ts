/**
 * Created by iZel on 4/25/17.
 */
import { Component, Input,EventEmitter,Output,OnInit,ViewContainerRef} from '@angular/core';

@Component({
  selector:'single-alert',
  templateUrl:'./single-alert.component.html'
})

export class singleComponent implements OnInit{

  @Input() type:string='success';
  @Input() msg:string='undefined';
  @Input() place?:string='right-bottom';
  @Input() size?:string='default';
  @Input() timeout?:number;
  @Output() onClosed=new EventEmitter();
  dissmiss=true;
  constructor(){}

  ngOnInit(){
    setTimeout(()=>{
      this.dissmiss=false;
      this.onClosed.emit();
    },this.timeout||3000)
  }
}
