import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

import { Notification, NotificationsService } from '../../services/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(500, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(500, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ],
})
export class NotificationsComponent implements OnInit {
  notifications: Notification[] = [];

  constructor(
    private readonly notificationsService: NotificationsService
  ) { }

  ngOnInit(): void {
    this.notificationsService.notifications.subscribe(
      (notifications) => this.notifications = notifications,
    );
  }

  add(notification: Notification): void {
    this.notificationsService.addNotification(notification);
  }

  remove(notification: Notification): void {
    console.info(notification);
    this.notificationsService.removeNotification(notification);
  }
}
