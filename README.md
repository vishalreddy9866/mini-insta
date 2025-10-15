SLU-Stagram — Lab 2 (React Mini Insta)

React mini social feed with accessible design, persistent posts and localStorage.  
Implemented keyboard submission, hover effects and meaningful alt text.

Screenshots:
--
System Font & Centered Layout
Uses `font-family: system-ui` and centered container (≤720px).
![Font Layout](./screenshots/1-font-layout.png)

--
Hover Effect
Buttons visibly change background/border color on hover.
![Hover Effect](./screenshots/2-hover-effect.png)

--
Keyboard Accessibility
**Enter key** in Composer submits new post (adds immediately to feed).  
![Enter Submit](./screenshots/3a-enter-submit.png)

**Like button** uses `aria-pressed={post.likedByMe}`.
![Aria Pressed](./screenshots/3b-aria-pressed.png)

---
Meaningful Alt Attributes
Avatar : `alt="vishal avatar"`  
Post photo : `alt="Photo by @vishal"`
![Avatar Alt](./screenshots/4a-avatar-alt.png)  
![Post Alt](./screenshots/4b-post-alt.png)

---


Console Clean: 
App runs without errors or warnings in the console.
![Console Clean](./screenshots/5-console-clean.png)

---

Routing Verification:
Profile pages render posts filtered by author (`/u/:handle`).
![Routing Proof](./screenshots/6-routing.png)

---

Feed with Two Posts:
Feed shows two posts — one liked and one unliked.
![Two Posts](./screenshots/7a-feed-two-posts.png)

---

Comment Added:
Shows a post with a visible comment displayed under it.
![Comment Added](./screenshots/7b-comment-added.png)

---

Features Implemented:

Create posts with image URL & caption  
Like / Unlike with live counter  
Comment under each post  
Keyboard accessibility (Enter to post)  
Meaningful alt text for all images  
Persistent data via localStorage  
Responsive centered layout  
Hover effects for buttons  


--

Components Overview:

App.jsx:        Holds the main `posts` state and controls persistence using `localStorage`. Passes data to child components as props. 
Composer.jsx:   Handles the creation of new posts. Submits when pressing Enter or clicking “Share”. 
Feed.jsx:       Displays a list of all posts. 
PostCard.jsx :  Renders a single post with avatar, image, like/unlike button and comments section. 
CommentForm.jsx & CommentList.jsx: Manage adding and displaying comments under each post. 
Profile.jsx:    Filters posts by author when visiting `/u/:handle`. 
Navbar.jsx:     Shows the title and navigation buttons (Upload / MSG). 

---

State Location: 
All posts are stored in `App.jsx` under the `posts` state variable.  
They are passed down via props to other components.  
Posts persist automatically in browser `localStorage`.

----



Technologies Used:
React + Vite  
React Router  
JavaScript ES6  
LocalStorage API  
CSS (system font, hover, responsive)
--