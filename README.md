# What
A Chrome extension to strip out referral links from RedFlagDeals because I'm tired of adding temporary uBlock permissions for URL redirect links that don't even work in the end (I'm looking at you Dell).

# How it works
Most referral urls will have the reffered URL embedded somewhere as a query parameter.
This extension parses all "auto linker" URLs on the forums and tries to replaces them with the found query parameter if it exists. 

# Thanks
- https://github.com/googlefonts/noto-emoji
- Stackoverflow
- rsvg-covert

# No Thanks
- JavaScript Callbacks