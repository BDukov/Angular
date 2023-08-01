import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css'],
})
export class NewQuoteComponent {
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router
  ) {}

  create(createForm: NgForm): void {
    const { appUrl } = environment;
    const data = createForm.value;

    if (createForm.valid) {
      console.log(data);

      this.http
        .post(`${appUrl}/quotes.json`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'key=AAAAFaHKJhg:APA91bGZ48eMQh22H5OxPv5Hc8Z_8zG_s77_ETV4ebvagBu7CnCg4OkDcb6PEC9pfH4_X6GJ_WhBEUn9fYw-ApqOL8-493YVKvvBcAsqkkS-zLEk9etPZhnIkZDDtsa640poQ_7w-uOa',
          },
        })
        .subscribe((res) => {
          this.router.navigate(['/books']);
        });
    }
  }
}
