if ('serviceWorker' in navigator) { 
  navigator.serviceWorker.register('service-worker.js') 
    .then(registration => { 
      console.log('تم تسجيل خدمة العمل بنطاق:', registration.scope); 
    }) 
    .catch(error => { 
      console.log('فشل تسجيل خدمة العمل:', error); 
    }); 
}

// كود لحث المستخدم على التثبيت
self.addEventListener('beforeinstallprompt', event => { 
  event.preventDefault(); 
  const installButton = document.getElementById('install-button'); 
  if (installButton) { 
    installButton.style.display = 'block'; 
    installButton.addEventListener('click', () => { 
      event.prompt(); 
    }); 
  } 
});
