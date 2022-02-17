# YouTube Clone

<!-- A YouTube clone developed using React [DEMO](https://pattty.com) -->
A YouTube clone developed using React [DEMO](https://youtube-clone-pattty.surge.sh/)

## Repositories
<div style="display: flex; gap: 16px; margin-bottom: 30px">
    <div>
        <h1 style="display: flex; justify-content: center; align-items: center; gap: 8px"> Frontend <img src="https://avatars.githubusercontent.com/u/6412038?s=200&v=4" width="30px" />
        </h1>
        <a target="_blank" href="https://github.com/mamanipatricia/youtube-clone-frontend" >github.com/mamanipatricia/youtube-clone-frontend </a>
    </div>
    <div>
        <h1 style="display: flex; justify-content: center; align-items: center; gap: 8px" > Backend <img src="https://nodejs.org/static/images/logo-light.svg" width="40px" />
        </h1>
        <a target="_blank" href="https://github.com/mamanipatricia/backend-youtube-clone-record" >github.com/mamanipatricia/backend-youtube-clone-record </a>
    </div>
</div>

# 🚀 Deployment

This project follows a CI/CD pipeline using **GitHub Actions** to deploy on AWS. See the workflow file here: [aws.yml](https://github.com/mamanipatricia/youtube-clone/blob/master/.github/workflows/aws.yml)

## 📦 AWS
There is a slide to explain the AWS architecture here: [AWS Architecture](https://slides.com/d/Z1OkMFM/live)


<br>

---

<br>
<br>

# Now it's time to get started with the Frontend!
⭐ The project follows a `Nodejs folder structure`.

## Requirements

- [nodejs >12](https://nodejs.org/en/download/) - Latest LTS Version: 14.17.0 (includes npm 6.14.13)
- [yarn](https://classic.yarnpkg.com/en/docs/getting-started) - Install via npm
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) - Depends on the Operating System

## Steps to run locally

1. Clone this repository
2. In the project directory, run:

To install packages

```shell
$ yarn
```

3. Configure environment variables

Create `.env` file from `.env.sample` using the following command: (or simply create a `.env` file manually and then paste the variables required )

```shell
$ cp .env.sample .env
```

> To generate this variables `API_URL` and `API_KEY` go to [YouTube Data API Overview](https://developers.google.com/youtube/v3/getting-started) and follow the steps.

Please, be sure to update correctly the environment variables in created `.env` file.

4. Finally, to run the app in the development mode:

```shell
$ yarn start
```
Then open the browser to http://localhost:3000/

<br>

# Now it's time to get started with the Backend!
Go to [backend repository](https://github.com/mamanipatricia/backend-youtube-clone-record) and follow the steps.