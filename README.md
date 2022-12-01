# bioinformatyka

## Praca w wersji lokalnej

1. Zainstaluj node.js w wersji LTS (<https://nodejs.org/>)
2. Zainstaluj git (<https://git-scm.com/>)
3. W GitHubie stwórz swój branch np. `feat-ui` (feature branch zaczynajmy od `feat-`), w okienku tworzenia brancha ustaw `Branch source` na `development`
4. Sklonuj swój branch z repozytorium

        git clone -b feat-ui https://github.com/robie-tosty/bioinformatyka.git

5. Otwórz folder w VS Code
6. Zainstaluj rekomendowane rozszerzenia, dzięki którym każdy będzie miał taki sam styl kodu
          ![image](https://tattoocoder.com/content/images/size/w2000/2019/08/Screen-Shot-2019-08-14-at-2.53.11-PM-1.png)
          <!-- markdownlint-disable MD033 -->
          <br>Jeśli takie okno się nie pojawi, to wejdź w plik `.vscode/extensions.json` i skopiuj po kolei nazwy rozszerzeń do wyszukiwarki rozszerzeń w VS Code i je zainstaluj

7. W ustawieniach VS Code ustaw `Editor: Default Formatter` na `Prettier - Code formatter` oraz włącz opcję `Editor: Format On Save`

8. Otwórz wbudowany w edytor terminal i aktywuj `yarn`

        corepack enable
        corepack prepare yarn@stable --activate

9. Zainstaluj biblioteki

        yarn install

10. Uruchom aplikację w trybie deweloperskim (automatyczne odświeżanie po zmianie kodu)

        yarn dev

11. Jeśli chcesz zbudować aplikację do wersji dla zwykłego użytkownika

        yarn build

12. Po dodaniu i przetestowaniu zmian dodaj commit (nazwy commitów po angielsku, zaczynają się zgodnie z [tą tabelką](#typy-commitów), np. `feat: completed ui`)

            git add .
            git commit -m "Opis zmian"
            git push

13. Po zakończeniu pracy na branchu zrób pull requesta do brancha `development`

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
