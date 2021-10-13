# Gatsby Starter Obsidian Garden

A Gatsby starter template created by [@desktopofsamuel](https://desktopofsamuel.com/?utm_source=obsidian-garden) to host Obsidian vault for free with Gatsby Cloud.

## Tutorial

1. Fork this starter or setup a new gatsby with `gatsby new *sitename* https://github.com/desktopofsamuel/gatsby-starter-obsidian-garden.git`
2. The Obsidian vault is available at `content/vault` after cloning
3. You can install Obsidian Git community plugin in order to sync the vault separately. (Refer to [this tutorial](https://desktopofsamuel.com/how-to-sync-obsidian-vault-for-free-using-git/?utm_source=obsidian-garden))

---

## Features

- YAML is not compulsory, fallback using file name as note title

---

## FAQ

## Read this if you are migrating from existing file vault

- Settings - Files & Links: Use [[Wikilinks]] option should be OFF
- Settings - Attachment folder path: Should be a folder named `media`, remember to update the config in `gatsby-source-filesystem` in `gatsby-config.js` if the media folder has changed.
- By default, all pages are published directly, but add frontmatter `publish: false` if you wish to hide certain notes.

## Why `gatsby-remark-relative-images` need to be not the latest version?

https://stackoverflow.com/questions/63698552/gatsby-node-js-threw-an-error-while-running-the-oncreatenode-lifecycle-fmimag

---

## Roadmap & Todo

- [x] Use filename as fallback for frontmatter title
- [x] Use createTime as fallback for frontmatter date
- [] Support D3 Graph

## Creator

Samuel Wong ([@desktopofsamuel](https://twitter.com/desktopofsamuel)) for [Gatsby Starter Obsidian Garden](https://github.com/desktopofsamuel/gatsby-starter-lamma)
forked from [gatsby-starter-ts](https://github.com/jpedroschmitz/gatsby-starter-ts) by João Pedro Schmitz ([@Vagr9K](hey@joaopedro.dev))
