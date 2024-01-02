# URL Shortener API

This URL shortener API, developed in Node.js with MongoDB, allows you to create short URLs similar to services like bitly.com. The project utilizes the following packages:

1. **mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
2. **shortid**: Library for generating short, unique, and non-sequential IDs.
3. **valid-url**: Utility to validate URLs.

## Endpoints

### 1. Create Short URL

#### @POST /api/url/shortener

This endpoint creates or returns a short URL for the provided original URL.

### 2. Redirect to Original Website

#### @GET /:urlCode

This endpoint redirects users to the original URL when someone accesses it using the short URL.

---

**Developed by**: Prince
**Contact**: princelalla24@gmail.com
