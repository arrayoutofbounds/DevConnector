# Social Platform For Developers

This is a basic social media website for developers.

### Aim

The aim of this is to show the basic MERN stack with auth.

### Start

Download with git and run yarn run dev to run locally.

If you want to point to the correct mongo db then add a file called `default.json`

and add in something like:

```
{
  "mongoURI": "",
  "jwtSecret": "",
  "githubToken": ""
}

```

mongoURI is the mongo db uri.

jwt secret is used by the API for auth.

githubToken is for calling github APIs.

### Testing

This can be added using jest and enzyme. Havent done it here since its a small project.
