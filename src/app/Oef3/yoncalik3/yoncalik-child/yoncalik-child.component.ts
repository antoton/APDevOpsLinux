import { Component, OnInit, Input } from '@angular/core';
import { YoncalikService } from '../yoncalik.service';
import { TobbackChildComponent } from '../../tobback3/tobback-child/tobback-child.component';
import { AbrarService, IPassword } from '../../../Oef3/abrar3/abrar.service';
import { InputText } from 'primeng/inputtext';

@Component({
  selector: 'app-yoncalik-child',
  templateUrl: './yoncalik-child.component.html',
  styleUrls: ['./yoncalik-child.component.css']
})
export class YoncalikChildComponent implements OnInit {

  @Input("passwordLength") passwordLength: number;
  @Input("passwordLimit") passwordLimit: number;

  name = 'Angular';
  ipaddress: string = '';
  latitude: string = '';
  longitude: string = '';
  currency: string = '';
  city: string = '';
  country: string = '';
  in_eu: string = '';
  languages: string = '';
  region: string = '';
  region_code: string = '';
  country_name: string = '';
  continent_code: string = '';
  postal: string = '';
  timezone: string = '';
  utc_offset: string = '';
  country_calling_code = '';
  org: string = '';
  answer: string = '';
  gif: string = '';
  iPass: string[] = [];
  public check: boolean;
  public passGeneratorUrl: string = "../../../assets/images/pass.png"
  public searchImageUrl: string = "../../../../assets/images/search.png"
  iMath: string;
  iYear: string;
  iTrivia: string;
  iDate: string;
  public ipData: boolean;


  constructor(private visitorsService: YoncalikService, private childService: AbrarService) {
    this.ipData = false;
  }

  ngOnInit() {


    this.visitorsService.getIpAddress().subscribe(res => {

      this.ipaddress = res['ip'];
      this.latitude = res['latitude'];
      this.longitude = res['longitude'];
      this.currency = res['currency'];
      this.city = res['city'];
      this.country = res['country'];
      this.in_eu = res['in_eu'];
      this.languages = res['languages'];
      this.region = res['region'];
      this.region_code = res['region_code'];
      this.country_name = res['country_name'];
      this.continent_code = res['continent_code'];
      this.postal = res['postal'];
      this.timezone = res['timezone'];
      this.utc_offset = res['utc_offset'];
      this.country_calling_code = res['country_calling_code'];
      this.org = res['org'];
      console.log(res);
    });

    this.visitorsService.getYesNoData().subscribe(res => {

      this.answer = res['answer'];
      this.gif = res['image'];
      console.log(res);
    });

  }

  GetPassword = (passwordLength: number, passwordLimit: number) => {
    this.childService.GetData(passwordLength, passwordLimit).subscribe(result => {
      console.log(passwordLength, passwordLimit);
      this.iPass = [];

      if (passwordLength == null || passwordLength < 10 || passwordLimit == null || passwordLimit == 0) {

        alert("********************Check your inputs!********************")
        console.log("---Check your password length or number of passwords input!")
        this.ipData = false;

      } else {

        for (var i = 0; i < passwordLimit; i++) {
          this.iPass.push(result.passwords[i]);
        }
        this.ipData = true;
      }
    })
  }


  GetYearFacts = () => {
    this.childService.GetIYear().subscribe(jaar => {
      this.iYear = jaar.text;
    })
  }

  GetMathFacts = () => {
    this.childService.GetIMath().subscribe(math => {
      this.iMath = math.text;
    })
  }

  GetTriviaFacts = () => {
    this.childService.GetITrivia().subscribe(trivia => {
      this.iTrivia = trivia.text;
    })
  }

  GetDateFacts = () => {
    this.childService.GetIDate().subscribe(date => {
      this.iDate = date.text;
    })
  }
}
