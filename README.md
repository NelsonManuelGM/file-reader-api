# **Read-file-api demoing instructions**

## Pull the project from GitHub

```bash
> git init
> git pull https://github.com/NelsonManuelGM/file-reader-api.git

```

## Install dependencies

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
