## Process I used to setup this app

- npx degit solidjs/templates/ts NWS-Prediction-Evaluator
    ```
    $ npx degit solidjs/templates/ts NWS-Prediction-Evaluator
    > cloned solidjs/templates#HEAD to NWS-Prediction-Evaluator

    tomla@DESKTOP-4QSML4N MINGW64 /d/Computer Science/Original Applications/NWS-Prediction-Evaluator
    $
    ```
- npm i
    ```
    $ npm i

    added 71 packages, and audited 72 packages in 18s

    11 packages are looking for funding
    run `npm fund` for details

    found 0 vulnerabilities

    tomla@DESKTOP-4QSML4N MINGW64 /d/Computer Science/Original Applications/NWS-Prediction-Evaluator/NWS-Prediction-Evaluator
    $
    ```
- npm run build
    ```
    $ npm run build

    > vite-template-solid@0.0.0 build
    > vite build

    vite v6.0.6 building for production...
    ✓ 9 modules transformed.
    dist/index.html                    0.60 kB │ gzip: 0.36 kB
    dist/assets/favicon-mtvwWgEY.ico  15.09 kB
    dist/assets/index-kNDHXHrP.css     0.71 kB │ gzip: 0.47 kB
    dist/assets/index-Dv8B4f7S.js      9.44 kB │ gzip: 3.81 kB
    ✓ built in 392ms

    tomla@DESKTOP-4QSML4N MINGW64 /d/Computer Science/Original Applications/NWS-Prediction-Evaluator/NWS-Prediction-Evaluator
    $
    ```
- git init
    ```
    $ git init
    Initialized empty Git repository in D:/Computer Science/Original Applications/NWS-Prediction-Evaluator/NWS-Prediction-Evaluator/.git/


    tomla@DESKTOP-4QSML4N MINGW64 /d/Computer Science/Original Applications/NWS-Prediction-Evaluator/NWS-Prediction-Evaluator (master)
    $ 
    ```
- At this I pushed it to [this repo](https://github.com/tlangan1/NWS-Prediction-Evaluator) on Github.
- Next, I followed [these](https://stackoverflow.com/questions/42941170/how-to-set-up-github-pages-to-look-for-index-html-in-a-different-location) instructions to allow the `index.html` to be launched from the `.dist` folder.
  - I went to settings->Pages for the repo
  - ![alt text](images/image-1.png)
  - Then I clicked the Source drop-down and went from there
  - The only thing I changed was the ? entry from ./ t0 ./dist/
    ```
     # Build job
    build:
        runs-on: ubuntu-latest
        steps:
        - name: Checkout
            uses: actions/checkout@v3
        - name: Setup Pages
            uses: actions/configure-pages@v3
        - name: Build with Jekyll
            uses: actions/jekyll-build-pages@v1
            with:
            source: ./dist/  // CHANGE THAT TO WHATEVER YOU WANT
            destination: ./_site
        - name: Upload artifact
            uses: actions/upload-pages-artifact@v2
    ```

## Process I used to setup this app a second time

- Notes:
  - I had to reference the assets using `./` instead of `/` in the index.html page to get anything to work but by that time I had blown away the get actions deployment.
  - Hence, to test the integrity of the entire process I am going to do the following:
    - remove the repo from Github
    - recreate the app from scratch
    - rebuild the app
    - recreate the local git repo
    - edit the .gitignore file to deliver the dist folder
    - edit the index.html file in the dist folder
    - push the repo to Github
    - deploy the page using Github actions

- npx degit solidjs/templates/ts NWS-Prediction-Evaluator
    ```
    $ npx degit solidjs/templates/ts NWS-Prediction-Evaluator
    > cloned solidjs/templates#HEAD to NWS-Prediction-Evaluator

    tomla@DESKTOP-4QSML4N MINGW64 /d/Computer Science/Original Applications/NWS-Prediction-Evaluator
    $
    ```
- npm i
    ```
    $ npm i

    added 71 packages, and audited 72 packages in 16s

    11 packages are looking for funding
    run `npm fund` for details

    found 0 vulnerabilities

    tomla@DESKTOP-4QSML4N MINGW64 /d/Computer Science/Original Applications/NWS-Prediction-Evaluator/NWS-Prediction-Evaluator
    $
    ```

- npm run build
    ```
    $ npm run build

    > vite-template-solid@0.0.0 build
    > vite build

    vite v6.0.6 building for production...
    ✓ 9 modules transformed.
    dist/index.html                    0.60 kB │ gzip: 0.36 kB
    dist/assets/favicon-mtvwWgEY.ico  15.09 kB
    dist/assets/index-kNDHXHrP.css     0.71 kB │ gzip: 0.47 kB
    dist/assets/index-Dv8B4f7S.js      9.44 kB │ gzip: 3.81 kB
    ✓ built in 419ms

    tomla@DESKTOP-4QSML4N MINGW64 /d/Computer Science/Original Applications/NWS-Prediction-Evaluator/NWS-Prediction-Evaluator
    $
    ```

- git init
    ```
    $ git init
    Initialized empty Git repository in D:/Computer Science/Original Applications/NWS-Prediction-Evaluator/NWS-Prediction-Evaluator/.git/


    tomla@DESKTOP-4QSML4N MINGW64 /d/Computer Science/Original Applications/NWS-Prediction-Evaluator/NWS-Prediction-Evaluator (master)
    $ 
    ```
- At this I pushed it to [this repo](https://github.com/tlangan1/NWS-Prediction-Evaluator) on Github.
- Next, I followed [these](https://stackoverflow.com/questions/42941170/how-to-set-up-github-pages-to-look-for-index-html-in-a-different-location) instructions to allow the `index.html` to be launched from the `.dist` folder.
  - I went to settings->Pages for the repo
  - ![alt text](images/image-1.png)
  - Then I clicked the Source drop-down and went from there
  - The only thing I changed was the ? entry from ./ t0 ./dist/
    ```
     # Build job
    build:
        runs-on: ubuntu-latest
        steps:
        - name: Checkout
            uses: actions/checkout@v3
        - name: Setup Pages
            uses: actions/configure-pages@v3
        - name: Build with Jekyll
            uses: actions/jekyll-build-pages@v1
            with:
            source: ./dist/  // CHANGE THAT TO WHATEVER YOU WANT
            destination: ./_site
        - name: Upload artifact
            uses: actions/upload-pages-artifact@v2
    ```
