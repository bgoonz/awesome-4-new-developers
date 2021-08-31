# RealWorld End-to-End Integration Testing

[![CircleCI](https://circleci.com/gh/anishkny/realworld-e2e-test.svg?style=shield)](https://circleci.com/gh/anishkny/realworld-e2e-test)

An end-to-end integration test example for a [RealWorld](https://realworld.io) [React](https://github.com/gothinkster/react-redux-realworld-example-app)/[NodeJS](https://github.com/gothinkster/node-express-realworld-example-app) stack using [Mocha](https://mochajs.org) and [Chrome Puppeteer](https://github.com/GoogleChrome/puppeteer).

Demonstrates spinning up both the frontend (React/Redux) and backend (NodeJS) stacks for the RealWorld Conduit webapp, and then using Mocha to drive a headless Chrome via Puppeteer.

Designed to work with [CircleCI](https://circleci.com/gh/anishkny/realworld-e2e-test).

![Screencast](https://realworld-e2e-test-assets.netlify.app/realworld-e2e-test.gif)

## Getting Started

### Prerequisites

```
Docker CE 17+ (for Mongo)
Node 7+ (for Puppeteer)
```

### Installing

Pull MongoDB image and run it
```
docker pull mongo
docker run -p 27017:27017 mongo
```

Install dependencies and start the app aka system under test (SUT)
```
npm install
npm run start
```
This step will start the backend server at port 3000 and frontend static server at port 4100. If all went well, you can navigate your browser to: http://localhost:4100/

## Running the tests

```
npm test
```

[![asciicast](https://realworld-e2e-test-assets.netlify.app/screencast-short.gif)](https://asciinema.org/a/147023?t=0)

<!---
Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
--->
