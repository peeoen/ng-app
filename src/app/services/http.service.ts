import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class HttpService {
    title: string;
    constructor(private httpClient: HttpClient) { }

    getCity() {
        return this.httpClient.get('http://192.168.2.98:3013/admin/get_city')
        .pipe(
            map((res: any) => {
                return res.data;
            }),
        )
        .toPromise();
        // return 'city';
    }
}
