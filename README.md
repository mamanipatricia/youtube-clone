# YouTube Clone

A YouTube clone developed using React [DEMO](http://pattty.com)

The project follows a Nodejs folder structure.

## Requirements
Have installed

* [nodejs >12](https://nodejs.org/en/download/) - Latest LTS Version: 14.17.0 (includes npm 6.14.13)
* [yarn](https://classic.yarnpkg.com/en/docs/getting-started) - Install via npm
* [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) - Depends on the Operating System

## Steps

1. Clone the repository
2. In the project directory, run:

To install packages

```shell
$ yarn
```

3. Configure environment variables

---

To generate this variables `API_URL` and `API_KEY` go to [YouTube Data API Overview](https://developers.google.com/youtube/v3/getting-started) and follow the steps.

---

Create `.env` file from `.env.sample` using the following command: (or simply create a `.env` file manually and then paste the variables required )

```shell
$ cp .env.sample .env
```

Please, be sure to update correctly the environment variables in created `.env` file.

4. Finally, to run the app in the development mode:

```shell
$ yarn start
```
