
/*
Import { Model } from './model';


class resEmployeeData {
    param1: string;
}

@Component({
    selector: "testWidget",
    template: "<div>This is a test and {{model.param1}} is my param.</div>",
    providers: [Model]
})

export class testWidget {
    constructor(private model: Model) {}
}

*/

export class Vacation{
  id:number = 0;
  paid_days:number = 0;
  taken_days:number = 0;
  start_date:string = "1960-06-01";
  end_date:string = "1960-06-01";
  employee:any = {};
  employee_id:number = 1;
  payday_master:any = {};
  payday_master_id:number = 1;  
}
