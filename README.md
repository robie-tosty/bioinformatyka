# bioinformatyka

## Schemat robienia branchów

![image](https://user-images.githubusercontent.com/106035813/204865207-9b983e1d-a4c0-4c5e-b03a-c61e71794543.png)

## Ściąga do gita

![image](https://user-images.githubusercontent.com/106035813/204866729-c524a550-8108-41bb-8f67-9bfd100c829a.png)

## Typy commitów

| Commit Type | Title                    | Description                                                                                                 | Emoji | Release                        | Include in changelog |
| :---------: | ------------------------ | ----------------------------------------------------------------------------------------------------------- | :---: | ------------------------------ | :------------------: |
|   `feat`    | Features                 | A new feature                                                                                               |   ✨   | `minor`                        |        `true`        |
|    `fix`    | Bug Fixes                | A bug Fix                                                                                                   |   🐛   | `patch`                        |        `true`        |
|   `docs`    | Documentation            | Documentation only changes                                                                                  |   📚   | `patch` if `scope` is `readme` |        `true`        |
|   `style`   | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |   💎   | -                              |        `true`        |
| `refactor`  | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   |   📦   | -                              |        `true`        |
|   `perf`    | Performance Improvements | A code change that improves performance                                                                     |   🚀   | `patch`                        |        `true`        |
|   `test`    | Tests                    | Adding missing tests or correcting existing tests                                                           |   🚨   | -                              |        `true`        |
|   `build`   | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |   🛠   | `patch`                        |        `true`        |
|    `ci`     | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |   ⚙️   | -                              |        `true`        |
|   `chore`   | Chores                   | Other changes that don't modify src or test files                                                           |   ♻️   | -                              |        `true`        |
|  `revert`   | Reverts                  | Reverts a previous commit                                                                                   |   🗑   | -                              |        `true`        |
