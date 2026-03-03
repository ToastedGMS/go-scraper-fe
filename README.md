# Go Scraper Frontend

This is the client-side application for the [Go Scraper](https://github.com/ToastedGMS/go-scraper) engine. It provides a clean, responsive interface for users to search, group, and navigate through consolidated news from multiple sources.

## Tech Stack

- **React & Tailwind CSS:** Used for a utility-first UI, focusing on readability and mobile-first responsiveness.
- **TanStack Query:** Implemented to manage server state, providing efficient caching and robust loading/error handling for the Go API.
- **React Router:** For seamless navigation and clean URL routing between views.

## Key Features & Engineering Challenges

- **Server State Management:** Instead of basic `useEffect` hooks, I used **TanStack Query** to handle the asynchronous nature of the scraper. This ensures that once a search is performed, the result is cached, preventing redundant and expensive hits to the backend.
- **Data Normalization:** The UI is built to consume a unified data structure. It successfully maps diverse news formats (G1, CNN, etc.) into a single, cohesive "Article Card" component.
- **UX for Long-Running Tasks:** Since the backend performs heavy CPU-bound clustering and I/O-bound scraping, the frontend implements clear loading states to maintain a smooth user experience during the processing period.

## Future Optimizations

- **Skeleton Screens:** Implementing ghost loaders to improve perceived performance while the Go backend performs concurrent scraping.
- **Real-time Progress:** Using WebSockets or SSE (Server-Sent Events) to show the scraping progress source-by-source.

## Related Projects

- [Backend (Go Scraper Engine)](https://github.com/ToastedGMS/go-scraper)

## Live Demo

- You can see a live demo of this project [here](https://go-scraper-fe-production.up.railway.app/). 
