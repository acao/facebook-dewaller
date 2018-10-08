# Set up

`yarn` to install web-ext

# Run

`yarn run` will execute `web-ext run` locally, loading the extension in your  local firefox browser

# How it works

A few lines of CSS, essentially!

# Potential Issues
Even with a normal logged-out firefox session, I still get prompted here and there to prove my non-roboticness. Wondering if a delayed click to the already hidden 'No Thanks' button would help that? Gonna try this soon. Maybe use the `object.watch` polyfill? Or find a way to listen to the synthetic react events?

# Up Next
- other browsers - monorepo? or just multiple manifests?
  - chrome/desktop
  - chrome/ios
  - chrome/android
- expose page/people/etc? search in top navigation
- re-introduce subtle optional "login here" button so that you can easily login and like something if you need that. just swipe the hrefs from the `a.btn` elements in the header that we hide.  
- the login dropdown that opens at random would be nice to reign in
- write e2e tests that prove it works... in desktop and firefox for android?
- workaround reCaptcha issue
