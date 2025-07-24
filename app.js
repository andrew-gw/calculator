// Installs service worker for push notifications, offline storage,
// and background operations like sync

const registerServiceWorker = async (path) => {
  // Attempt install only in secure context
  if (location.protocol !== 'https:') { return }

  if ('serviceWorker' in navigator) {
    try {
      const app = await navigator.serviceWorker.register(path)

      if (app.installing) {
        // Service worker installing
      } else if (app.waiting) {
        // Service worker installed
      } else if (app.active) {
        // Service worker active
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`)
    }
  }
}
