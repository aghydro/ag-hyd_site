Drop your gallery photos here, named sequentially starting at 1:

  photo-1.jpg
  photo-2.jpg
  photo-3.jpg
  ...and so on, with no gaps in the numbering.

The homepage automatically detects however many photo-N.jpg files exist
(it checks photo-1.jpg, photo-2.jpg, etc. and stops at the first missing
number) and builds the scrolling gallery from them — no HTML/CSS changes
needed. Add a new file, refresh the page, done. The gallery also grows
automatically as you add more photos over time.

Recommended: landscape orientation, at least 720x520px, JPG format,
each under ~500KB (compress with squoosh.app or similar so the page
stays fast).

Want a different naming pattern (e.g. non-sequential names)? Ask and
I'll adjust js/main.js's buildGallery() function accordingly.
