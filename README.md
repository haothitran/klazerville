
# Klazerville

This repository contains the source files for [klazerville.com](https://klazerville.com).

A reference guide for various aspects of Final Fantasy XIV.

This site is a continuous work in progress.

## Tools

- [MkDocs](https://www.mkdocs.org/) for being a static site generator geared towards documentation.
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme for its numerous built-in features:
  - Customizable colour scheme
  - Responsiveness
  - Mobile-friendly navigation
  - Search
  - Integration with [Python Markdown Extensions](https://python-markdown.github.io/extensions/)

Using [GitHub Actions](https://github.com/features/actions) to automate deployment:

```yml
name: ci
on:
  push:
    branches:
      - master
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-python@v2
        with:
          python-version: 3.x
      - run: pip install mkdocs-material
      - run: mkdocs gh-deploy --force
```

When a commit is pushed to the `master` branch, the site is then built and deployed from the [`gh-pages`](https://github.com/haothitran/klazerville/tree/gh-pages) branch.
