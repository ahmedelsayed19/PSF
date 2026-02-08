// Firebase Messaging Service Worker for Web Push Notifications
// This file MUST be placed in the web root directory (web/)

importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Firebase configuration - must match firebase_options.dart web config
firebase.initializeApp({
  apiKey: "AIzaSyDnYI07wQNUJNnXJR8lTiD1drExCnUW6_0",
  authDomain: "swiftrise-f7f10.firebaseapp.com",
  databaseURL: "https://swiftrise-f7f10-default-rtdb.firebaseio.com",
  projectId: "swiftrise-f7f10",
  storageBucket: "swiftrise-f7f10.firebasestorage.app",
  messagingSenderId: "284081475088",
  appId: "1:284081475088:web:3675c1a386318f74590495",
  measurementId: "G-XEWXL9EEN5"
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message:', payload);

  // Extract notification data
  const notificationTitle = payload.notification?.title || payload.data?.title || 'New Notification';
  const notificationOptions = {
    body: payload.notification?.body || payload.data?.body || payload.data?.message || 'You have a new notification',
    icon: '/icons/Icon-192.png',
    badge: '/icons/Icon-192.png',
    tag: payload.data?.type || 'general',
    data: payload.data || {},
    requireInteraction: true,
    actions: [
      {
        action: 'open',
        title: 'Open'
      },
      {
        action: 'dismiss',
        title: 'Dismiss'
      }
    ]
  };

  // Show the notification
  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification click
self.addEventListener('notificationclick', (event) => {
  console.log('[firebase-messaging-sw.js] Notification clicked:', event);

  event.notification.close();

  if (event.action === 'dismiss') {
    return;
  }

  // Get notification data
  const data = event.notification.data || {};
  let targetUrl = '/';

  // Build URL based on notification type
  if (data.type === 'chat' || data.senderId) {
    targetUrl = '/#/chat';
  } else if (data.targetType) {
    // Handle different target types
    targetUrl = '/#/notifications';
  }

  // Open or focus the app window
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then((windowClients) => {
        // Check if there is already a window open
        for (let i = 0; i < windowClients.length; i++) {
          const client = windowClients[i];
          if (client.url.includes(self.registration.scope) && 'focus' in client) {
            // Focus existing window and navigate if needed
            client.focus();
            if (targetUrl !== '/') {
              client.navigate(targetUrl);
            }
            // Post message to the client about the notification click
            client.postMessage({
              type: 'NOTIFICATION_CLICK',
              data: data
            });
            return;
          }
        }
        // If no window is open, open a new one
        if (clients.openWindow) {
          return clients.openWindow(targetUrl);
        }
      })
  );
});

// Service Worker installation
self.addEventListener('install', (event) => {
  console.log('[firebase-messaging-sw.js] Service Worker installed');
  self.skipWaiting();
});

// Service Worker activation
self.addEventListener('activate', (event) => {
  console.log('[firebase-messaging-sw.js] Service Worker activated');
  event.waitUntil(clients.claim());
});
