import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getPengingat() {
    return this.http.get('https://harlanprofile.000webhostapp.com/pengingat-read.php');
  }
  addPengingat(data: any) {
    return this.http.get(`https://harlanprofile.000webhostapp.com/pengingat-create.php?Judul=${data.Judul}&Isi=${data.Isi}&Waktu=${data.Waktu}`)
  }
  deletePengingat(idPengingat: any) {
    return this.http.get(`https://harlanprofile.000webhostapp.com/pengingat-delete.php?idpengingat=${idPengingat}`)
  }
  editPengingat(data: any) {
    return this.http.get(`https://harlanprofile.000webhostapp.com/pengingat-update.php?Judul=${data.Judul}&Isi=${data.Isi}&Waktu=${data.Waktu}&idpengingat=${data.idpengingat}`)
  }
}
