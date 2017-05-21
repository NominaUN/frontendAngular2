
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

export class Employee{
  id:number = 0;
  document_type:string = "";
  document_number:number = 0;
  first_name:string = "";
  other_name:string = "";
  last_name:string = "";
  second_surname:string = "";
  birthdate:string = "1920-01-01";
  birthplace:string = "";
  address:string = "";
  phones:string = "";
  email:string = "";
  contract: string = "";
  admission_date:string = "1960-06-01";
  retirement_date:string = "1960-06-01";
  salary:string = "";
  transport_aid:boolean = false;
  integral_salary:boolean = false;
  area:any = {};
  area_id?:number = 1; //id_for send
  position:any = {};
  fond_employees:Array<any>;
  fonds:Array<any> = [];
  payday_details:Array<any>;
  vacations:Array<any>;
  novelties:Array<any>;
}
