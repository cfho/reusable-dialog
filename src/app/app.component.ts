import { Component } from '@angular/core';
import { ConfirmDialogService } from './confirm-dialog/confirm-dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private dialogService: ConfirmDialogService) {}

  handleClick() {
    const options = {
      title: '儲存',
      message: '請問你要儲存嗎？',
      cancelText: '取消',
      confirmText: '確定',
    };

    this.dialogService.open(options);

    this.dialogService.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        this.saveData();
      }
    });
  }
  saveData() {
    console.log('HCF save the Data');
  }
}
