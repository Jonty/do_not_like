Do Not Like
===========

Twitter has badly targetted in-stream adverts on every single device, and they're extremely annoying.

This is a tiny Chrome extension that automatically clicks "I Do Not Like This Ad" on every single one, which removes them from your feed.

By doing this it trains Twitters Giant Bird Brain that you do not like the adverts. Any adverts. Once you've been running this for a day or two you'll stop seeing any adverts on any device when browsing Twitter, not just the website.

Hurrah.

Installing
----------

Do Not Like is available to install [from the Chrome Webstore](https://chrome.google.com/webstore/detail/do-not-like/gphlpdohbkajeckfepokpmjedkjaefhf).

Manual installation in Chrome:

1. Enable Developer Mode in `chrome://extensions`
2. "Load unpacked"
3. Select the `chrome_extension` folder within this project

Manual installation in Firefox:

1. Enable add-on debugging in `about:debugging#addons`
2. "Load Temporary Add-on"
3. Select either the zip file or the manifest file

Development
-----------

To build the extension:

```bash
make clean && make
```

This will output do_not_like.zip

Dear Twitter
------------

Please just let me pay you.
