import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { klona } from 'klona/json';

export interface Notification {
  title: string;
  description: string;
  type: NotificationType;
}

export enum NotificationType {
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
}

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private notificationState = new BehaviorSubject<Notification[]>([
    {
      title: 'Item 1',
      description: 'Desc 1',
      type: NotificationType.WARNING,
    },
    {
      title: 'Item 2',
      description: 'Desc 2',
      type: NotificationType.WARNING,
    },
  ]);

  get notifications(): Observable<Notification[]> {
    return this.notificationState.asObservable();
  }

  addNotification(notification: Notification): void {
    this.notificationState.next([...this.notificationState.value, notification]);
  }

  removeNotification(notification: Notification): void {
    const index = this.notificationState.value.indexOf(notification);
    // const clonedNotificationState = klona(this.notificationState.value);
    // clonedNotificationState.splice(index, 1);
    this.notificationState.value.splice(index, 1);

    this.notificationState.next(this.notificationState.value);
  }
}
