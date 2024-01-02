# Shortener Url

This shortener url API creates short url like bitly.com. It is sample project how this url shortener works.
It is a Nodejs project with MongoDB.
Package Used:

1. mongoose
2. shortid
3. valid-url

# Endpoints

There are two endpoints in this API.

1. Create Short URL.

## @POST /api/url/shortener

    Create or returns short url.

2. Redirects to original websites

## @GET /:urlCode

    Redirects to original url when someone hits using short url.

<!-- Developed by : Prince @ princelalla24@gmail.com -->
