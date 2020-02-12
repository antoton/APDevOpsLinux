import { Component, OnInit, Input } from '@angular/core';
import { AbrarService, IPassword } from '../abrar.service';
import { InputTextModule } from 'primeng/inputtext';
import { YoncalikService } from '../../yoncalik3/yoncalik.service';


@Component({
  selector: 'app-abrar-child',
  templateUrl: './abrar-child.component.html',
  styleUrls: ['./abrar-child.component.css']
})
export class AbrarChildComponent implements OnInit {

  @Input("PasswordLength") passwordLength: number;
  @Input("PasswordLimit") passwordLimit: number;

  public math: string;
  public year: string;
  public date: string;
  public trivia: string;
  public org: string = '';
  public city: string = '';
  public postal: string = '';
  public country: string = '';
  public ipAddress: string = '';
  public latitude: string = '';
  public longitude: string = '';

  public iPass: string[] = [];
  public Password: IPassword[];

  public check: boolean;
  public ipData: boolean;
  public showDetails: boolean;

  public passGeneratorUrl: string = "../../../assets/images/pass.png";
  public searchImageUrl: string = "../../../../assets/images/search.png";
  public watchingEye: string = "../../../assets/images/whatchingEye.png";
  public notWatchingEye: string = "../../../../assets/images/notWatchingEye.png";
  public inputError: string = "---Check your password length or number of passwords input!";
  public alertError: string = "********************Check your inputs!********************";

  constructor(private childService: AbrarService, private ipService: YoncalikService) {
    this.check = false;
    this.ipData = false;
    this.showDetails = false;
  }

  showData = () => {
    this.ipService.getIpAddress().subscribe(res => {
      this.org = res['org'];
      this.city = res['city'];
      this.ipAddress = res['ip'];
      this.postal = res['postal'];
      this.country = res['country'];
      this.latitude = res['latitude'];
      this.longitude = res['longitude'];
      this.showDetails = true;
    })
  }

  hideData = () => {
    this.showDetails = false;
  }

  GetPassword = (passwordLength: number, passwordLimit: number) => {
    this.childService.GetData(passwordLength, passwordLimit).subscribe(result => {
      this.iPass = [];

      if (passwordLength == null || passwordLength < 10 || passwordLimit == null || passwordLimit == 0) {

        alert(this.alertError);
        console.log(this.inputError);
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
    this.childService.GetIYear().subscribe(yearRes => {
      this.year = yearRes.text;
    })
  }

  GetMathFacts = () => {
    this.childService.GetIMath().subscribe(mathRes => {
      this.math = mathRes.text;
    })
  }

  GetTriviaFacts = () => {
    this.childService.GetITrivia().subscribe(triviaRes => {
      this.trivia = triviaRes.text;
    })
  }

  GetDateFacts = () => {
    this.childService.GetIDate().subscribe(dateRes => {
      this.date = dateRes.text;
    })
  }

  ngOnInit() {
  }
}
