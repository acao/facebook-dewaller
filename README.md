# Set up

`yarn` to install web-ext

# Run

`yarn run` will execute `web-ext run` locally, loading the extension in your  local firefox browser

# How it works

A few lines of CSS, essentially!

Ok and an observer for shutting off CTAs in the background.

# Potential Issues
Update: The reCaptcha issue might be fixed for the most part. If you do run into a lot of reCaptchas still, submit an issue and we will figure it out asap!

# Up Next
- [ ] other browsers - monorepo? or just multiple manifests?
  - [X] chrome/desktop
  - [ ] safari/desktop
  - [ ] any other commonly used desktop/mobile browsers with plugins of some kind?
- [ ] expose page/people/etc? search in top navigation
  - [ ] allow a search parameter, dropdown with pages/people/groups
  - [ ] submission pushes user to public search path with argument
  - [ ] be careful to not look like a bot
- [ ] take the hrefs from the `a.btn` elements in the cta that we hide, and make the facebook logo navigate back to login and to the same page using a much more suble button
- [ ] the login dropdown that opens at random would be nice to reign in
- [ ] write e2e tests that prove it works... in desktop and firefox for android?
- [ ] workaround reCaptcha issue?
  - [X] potential fix implemented and released


# Development

## Requirements

The npm scripts build toolchain may only work on macosx (confirmed), linux (assumed)
- zip
- node.js
- yarn
- firefox browser
- chrome browser

## Scripts

- **`yarn dev:moz`** - `web-ext run`
- **`yarn dev:moz:android`** - `web-ext run` with target android
- **`yarn release:chrome`** - manually zips using local `zip` binary
- **`yarn release:moz`**: - `web-ext build` with overwrite, so that you can iterate on the same version
- **`yarn release`**: - both releases in one script