import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'nx-angular-nest-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public backendStatus: Observable<{ status: string }> | undefined;

  public constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.backendStatus = this.httpClient.get<{ status: string }>(
      'http://localhost:3333/api/health'
    );
  }

  getHealthStatus() {
    this.backendStatus = this.httpClient.get<{ status: string }>(
      'http://localhost:3333/api/health'
    );
  }
}
