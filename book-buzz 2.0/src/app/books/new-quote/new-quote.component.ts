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
        .post(`${appUrl}/quotes.json`, data)
        .subscribe((res) => {
          this.router.navigate(['/books']);
        });
    }
  }
}
