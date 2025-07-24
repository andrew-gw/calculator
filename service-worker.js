// Enables push notifications, offline storage, and background
// operations like sync.
//
// Runs in separate thread, allowing the app to remain responsive to
// user input while resources are being fetched and cached.

const cacheResources = async (resources) => {
  const cache = await caches.open('calculator')
  await cache.addAll(resources)
}

// Cache critical resources immediately upon app install
self.addEventListener('install', (event) => {
  event.waitUntil(
    cacheResources([
      'index.html',

      'css/base.css',
      'css/typography.css',
      'css/controls.css',
      'css/color.css',

      'js/math.js',
      'js/mouse-events.js',
      'js/keyboard-events.js',
      'js/text-resize.js',
      'js/thousands-separators.js',
      'js/main.js'
    ]),
  )
})

const cacheRequest = async (request, response) => {
  const cache = await caches.open('calculator')
  await cache.put(request, response)
}

// Cache-first strategy
// Attempt network only if not cached
// Add to cache if found, else fallback provided
const cacheFirst = async ({ request, fallbackUrl }) => {
  // Cache-first
  const cacheResponse = await caches.match(request)
  if (cacheResponse) {
    return cacheResponse
  }
  // Try network
  try {
    const networkResponse = await fetch(request)
    // Cache on success
    cacheRequest(request, networkResponse.clone())
    return networkResponse
  } catch (error) {
    // Fallback from cache
    const fallbackResponse = await caches.match(fallbackUrl)
    if (fallbackResponse) {
      return fallbackResponse
    }
    // Fallback failed
    return new Response('Network error', {
      status: 408,
      headers: {
        'Content-Type': 'text/plain'
      },
    })
  }
}

self.addEventListener('fetch', (event) => {
  event.respondWith(
    cacheFirst({
      request: event.request,
      fallbackUrl: 'index.html',
    }),
  )
})
