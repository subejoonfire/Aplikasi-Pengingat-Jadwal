import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(private _apiService: ApiService) {
    this._apiService.getPengingat().subscribe(
      (res: any) => {
        console.log('Berhasil', res);
        this.pengingat = res;
      },
      (error: any) => {
        console.log('Gagal', error);
      }
    );
  }
  pengingat: any;

  idpengingat: any;
  Judul: any;
  Isi: any;
  Waktu: any;
  Button: any = 'Tambah';

  addPengingat() {
    let data = {
      Judul: this.Judul,
      Isi: this.Isi,
      Waktu: this.Waktu,
      idpengingat: this.idpengingat,
    };

    if (this.Button == 'Edit') {
      console.log(data);
      this._apiService.editPengingat(data).subscribe(
        (res: any) => {
          console.log('Berhasil Edit Data Pengingat', res);
          this.Judul = '';
          this.Isi = '';
          this.Waktu = '';
          window.location.reload();
        },
        (error: any) => {
          console.log('Gagal Edit Data Pengingat', error);
        }
      );
    } else {
      this._apiService.addPengingat(data).subscribe(
        (res: any) => {
          console.log('Berhasil Menambahkan Data Pengingat', res);
          this.Judul = '';
          this.Isi = '';
          this.Waktu = '';
          window.location.reload();
        },
        (error: any) => {
          console.log('Gagal Menambahkan Data Pengingat', error);
        }
      );
    }
  }
  HapusPengingat(idPengingat: any) {
    this._apiService.deletePengingat(idPengingat).subscribe(
      (res: any) => {
        console.log('Berhasil', res);
        window.location.reload();
      },
      (error: any) => {
        console.log('Gagal', error);
      }
    );
  }
  EditPengingat(data: any) {
    this.idpengingat = data.idpengingat;
    this.Judul = data.judul;
    this.Isi = data.isi;
    this.Waktu = data.waktu;
    this.Button = 'Edit';
  }
}
