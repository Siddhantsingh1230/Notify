// Service Worker code
self.addEventListener('push', function(event) {
  event.waitUntil(
    self.registration.showNotification('Hello, World!', {
      body: 'This is a push notification.'
    })
  );
});