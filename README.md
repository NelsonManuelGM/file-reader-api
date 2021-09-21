# **Read-file-api demoing instructions**

Read-file-api is a small app demo that receive a document (*.txt) and a string of keywords to cross out on the document.

Then return the static address from broth (old and new) document.

## Pull the project from GitHub

```bash
> git init
> git pull https://github.com/NelsonManuelGM/file-reader-api.git

```

## Install dependencies and start

### if using npm

```bash
> npm install
> npm start
```

### if using yarn

```bash
> yarn install
> yarn start
```

## Routers

### static files for old and new document

* /document  

### upload file and keywords

* /api/classify

### any other path will receive a 404 with some routing information

* '*'  

## Considerations

There is an .env file that **_should not be there_**. But it's there for demoing purpose.

The demo was developed to receive **only files .txt** in order to make it simpler.
