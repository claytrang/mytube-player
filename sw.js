self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // หน้าที่ของ Service worker ในโปรเจกต์นี้คือทำให้เว็บเข้าเกณฑ์ PWA เท่านั้น
  // ไม่ได้ cache ไฟล์ เพื่อให้แอปอัปเดตโค้ดเสมอ
});
