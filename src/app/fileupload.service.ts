import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {
  baseURL = "http://laposys-009:82/";
  token = '';

  constructor(private http: HttpClient) { }

  getMethod(path: any) {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders({ Authorization: 'Bearer' + this.token });
      this.http.get(this.baseURL + 'api/' + path, { headers: header })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }



  // getMethod(path: any): Promise<any> {
  //   const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.token });
  //   const url = this.baseURL + 'api/' + path;

  //   return this.http.get(url, { headers }).toPromise();
  // }

}
