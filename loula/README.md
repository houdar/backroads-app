# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

 <!-- html -->
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Backroads || Tour Company</title>
    <!-- favicon -->
    <link rel="shortcut icon" href="./images/favicon.ico" type="image/x-icon" />
    <!-- font-awesome -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0/css/all.min.css"
      integrity="sha512-c93ifPoTvMdEJH/rKIcBx//AL1znq9+4/RmMGafI/vnTFe/dKwnn1uoeszE2zJBQTS1Ck5CqSBE+34ng2PthJg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

    <!-- styles css -->
    <link rel="stylesheet" href="./css/styles.css" />

  </head>
  <body>
    <nav class="navbar">
      <div class="nav-center">
        <div class="nav-header">
          <img src="./images/logo.svg" class="nav-logo" alt="backroads" />
          <button type="button" class="nav-toggle" id="nav-toggle">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <!-- left this comment on purpose -->
        <ul class="nav-links" id="nav-links">
          <li>
            <a href="#home" class="nav-link"> home </a>
          </li>

          <li>
            <a href="#about" class="nav-link"> about </a>
          </li>

          <li>
            <a href="#services" class="nav-link"> services </a>
          </li>

          <li>
            <a href="#tours" class="nav-link"> tours</a>
          </li>
        </ul>

        <ul class="nav-icons">
          <li>
            <a href="https://www.twitter.com" target="_blank" class="nav-icon"
              ><i class="fab fa-facebook"></i
            ></a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" class="nav-icon"
              ><i class="fab fa-twitter"></i
            ></a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" class="nav-icon"
              ><i class="fab fa-squarespace"></i
            ></a>
          </li>
        </ul>
      </div>
    </nav>

    <section class="hero" id="home">
      <div class="hero-banner">
        <h1>continue exploring</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          explicabo debitis est autem dicta.
        </p>
        <a href="#tours" class="btn hero-btn">explore tours</a>
      </div>
    </section>

    <section class="section" id="about">
      <div class="section-title">
        <h2>about <span>us</span></h2>
      </div>

      <div class="section-center about-center">
        <div class="about-img">
          <img
            src="./images/about.jpeg"
            class="about-photo"
            alt="awesome beach"
          />
        </div>
        <article class="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a href="#" class="btn">read more</a>
        </article>
      </div>
    </section>

    <section class="section" id="about">
      <div class="section-title">
        <h2>about <span>us</span></h2>
      </div>

      <div class="section-center about-center">
        <div class="about-img">
          <img
            src="./images/about.jpeg"
            class="about-photo"
            alt="awesome beach"
          />
        </div>
        <article class="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a href="#" class="btn">read more</a>
        </article>
      </div>
    </section>

    <section class="section" id="tours">
      <div class="section-title">
        <h2>featured <span>tours</span></h2>
      </div>

      <div class="section-center featured-center">
        <article class="tour-card">
          <div class="tour-img-container">
            <img src="./images/tour-1.jpeg" class="tour-img" alt="" />
            <p class="tour-date">august 26th, 2020</p>
          </div>
          <div class="tour-info">
            <div class="tour-title">
              <h4>Tibet Adventure</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div class="tour-footer">
              <p>
                <span><i class="fas fa-map"></i></span> china
              </p>
              <p>6 days</p>
              <p>from $2100</p>
            </div>
          </div>
        </article>

        <article class="tour-card">
          <div class="tour-img-container">
            <img src="./images/tour-2.jpeg" class="tour-img" alt="" />
            <p class="tour-date">october 1th, 2020</p>
          </div>
          <div class="tour-info">
            <h4>best of java</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div class="tour-footer">
              <p>
                <span><i class="fas fa-map"></i></span> indonesia
              </p>
              <p>11 days</p>
              <p>from $1400</p>
            </div>
          </div>
        </article>

        <article class="tour-card">
          <div class="tour-img-container">
            <img src="./images/tour-3.jpeg" class="tour-img" alt="" />
            <p class="tour-date">september 15th, 2020</p>
          </div>
          <div class="tour-info">
            <h4>explore hong kong</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div class="tour-footer">
              <p>
                <span><i class="fas fa-map"></i></span> hong kong
              </p>
              <p>8 days</p>
              <p>from $5000</p>
            </div>
          </div>
        </article>

        <article class="tour-card">
          <div class="tour-img-container">
            <img src="./images/tour-4.jpeg" class="tour-img" alt="" />
            <p class="tour-date">december 5th, 2019</p>
          </div>
          <div class="tour-info">
            <h4>kenya highlights</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div class="tour-footer">
              <p>
                <span><i class="fas fa-map"></i></span> kenya
              </p>
              <p>20 days</p>
              <p>from $3300</p>
            </div>
          </div>
        </article>
      </div>
    </section>

    <footer class="section footer">
      <ul class="footer-links">
        <li>
          <a href="#home" class="footer-link">home</a>
        </li>
        <li>
          <a href="#about" class="footer-link">about</a>
        </li>
        <li>
          <a href="#services" class="footer-link">services</a>
        </li>
        <li>
          <a href="#featured" class="footer-link">featured</a>
        </li>
      </ul>
      <ul class="footer-icons">
        <li>
          <a href="https://www.twitter.com" target="_blank" class="footer-icon"
            ><i class="fab fa-facebook"></i
          ></a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" class="footer-icon"
            ><i class="fab fa-twitter"></i
          ></a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" class="footer-icon"
            ><i class="fab fa-squarespace"></i
          ></a>
        </li>
      </ul>
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
    <script src="./js/app.js"></script>

  </body>
</html>
