theme: Next, 1

# [fit] Capstone Flow

---

This is not a waterfall, but a cycle

[.column]

```
Instead
  |
  -> Of
     |
     -> This
        |
        -> DONE!
```

[.column]

```

We should   <--------
|                   |
-> Be doing      Like this
   |                ^
   -> Something   --|
```

---

# [fit] Catalog of St Pete Murals

---

# [fit] User Stories

---

[.autoscale: true]

[.column]

- As a muralist I should be able to login and have an account
- As a muralist I should be to add a new mural of my own
- As a muralist I should be able to name my murals
- As a muralist I should be able to add a main photo of my mural
- As a muralist I should be able to add a series of photos in a timeline
- As a muralist I should be able to add text of the story of my mural
- As a muralist I should be able to add the location of the mural

[.column]

- As a visitor I should be able to see a map of murals
- As a visitor I should be able to see the murals nearest me
- As a visitor I should be able to "favorite" murals and keep a list
- As a visitor I should be able to see a map showing me the best path to visit all my favorited murals

---

# Validate

Check with your peers.
Check with your potential users.
See if you have captured their ideas and needs.

---

# Building slices, not layers

![inline](https://brianpagan.net/wp-content/uploads/2015/08/Bya3nBvCQAASBGi.png)

---

# Iterating

- Make successive slices through the pyramid
- Maybe by feature or a few groups of features at a time
- Make the feature functional, then reliable, then usable, then ensure the design. Move to another feature.
- Revisit past features and each of the layers: functionality, usability, etc.
- Continuously review and iterate

---

# Sketch your interface

Do a rough sketch of the wireframe of the app.
Design mobile first.
Show what the same view is for larger viewports.
Indicate navigation paths.
Show relative sizes of elements, text, pictures, maps, etc.

---

# Revalidate

Show your wireframes and explain the flow

---

# Create your ERD

Review your wireframes and identify all the "nouns"
Identify all of the attributes of these nouns
Describe their relations "belongs to" or "many to many"
Draw out your ERD

---

# Validate the ERD

Walk peers through your ERD
Review it with your potential users
Find out if all the information they want to track is present and organized

---

# Start building key HTML pages

Build the _static_ version of the page first
Build enough HTML and CSS that you can see where it is going
Then: **VALIDATE**
Don't build everything only to realize another approach is better

---

# Build out an API endpoint to satisfy that page

Start with being able to _view_ data, it's easier!
Manually populate your database with a good amount of sample data
Make existing pages dynamic
Validate that the interactions are good

---

# Deploy EARLY

As soon as you have one page using one API endpoint: DEPLOY
Then continuously deploy!
Even consider setting up continuous deployment from Github

---

# Maintain your app in an "always working" state

Even if some pages are just static, they will **look** done.
Or you can always say, "thats for version two"
A static version of some part of the app is **`1000X`** better than nothing

---

# Get beta testers

As soon as your app is usable, have someone try it!
