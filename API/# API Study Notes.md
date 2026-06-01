# API Study Notes

---

# 1. REST API

## What is a REST API?

**REST (Representational State Transfer)** is an architectural style used for designing web APIs. It is **not a protocol** like HTTP or FTP. REST APIs commonly use HTTP for communication.

REST defines a set of constraints that make APIs scalable, simple, and easy to maintain.

### Example

```javascript
// GET request using fetch
fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(data => console.log(data));
```

### Practice Questions

1. Is REST a protocol?

   * No, it is an architectural style.

2. Which protocol is commonly used with REST?

   * HTTP.

3. What does REST stand for?

   * Representational State Transfer.

4. Can REST APIs return XML?

   * Yes, although JSON is more common.

### Common Pitfalls

❌ Thinking REST is a protocol.

✅ REST is a design style; HTTP is the protocol.

---

# 2. Stateless

## Concept

Each API request must contain all information needed to process it.

The server does not remember previous requests.

### Example

```http
GET /users/1
Authorization: Bearer xyz123
```

The token must be sent every request.

### Benefits

* Easy scaling
* Better reliability
* Load balancing becomes simpler

### Practice Questions

1. What does stateless mean?

   * Server stores no client session between requests.

2. Why is statelessness useful?

   * Makes scaling easier.

3. Does REST require statelessness?

   * Yes.

### Common Pitfalls

❌ Assuming server remembers previous requests.

✅ Send all required information in every request.

---

# 3. Uniform Interface

## Concept

REST APIs should have a consistent way of interacting with resources.

### Example

```http
GET /users
GET /users/1
POST /users
DELETE /users/1
```

Consistent patterns make APIs easier to use.

### Practice Questions

1. Why is a uniform interface important?

   * Consistency and simplicity.

2. Which HTTP method retrieves data?

   * GET.

3. Which method deletes data?

   * DELETE.

### Common Pitfalls

❌ Mixing naming conventions.

```http
/getUsers
/createUser
/removeUser
```

✅ Use resources.

```http
/users
```

---

# 4. Resource-Based Design

## Concept

Everything is treated as a resource.

Examples:

* User
* Product
* Order

### Example

```http
/users
/products
/orders
```

### Practice Questions

1. What is a resource?

   * Any object/data exposed by an API.

2. Is "users" a resource?

   * Yes.

3. Should actions be in endpoint names?

   * Generally no.

### Common Pitfalls

❌

```http
/createUser
```

✅

```http
POST /users
```

---

# 5. Self-Descriptive Messages

## Concept

Requests and responses should contain enough information to understand them.

### Example

```http
Content-Type: application/json
Authorization: Bearer token
```

Response:

```json
{
  "id": 1,
  "name": "John"
}
```

### Practice Questions

1. What header specifies data format?

   * Content-Type.

2. Why use descriptive responses?

   * Easier debugging.

### Common Pitfalls

❌ Missing headers.

✅ Clearly specify content type.

---

# 6. Endpoint in API

## Concept

An endpoint is a URL through which clients access resources.

### Example

```http
GET /users
```

```http
GET /products/10
```

### Practice Questions

1. What is an endpoint?

   * URL exposed by API.

2. Is `/users` an endpoint?

   * Yes.

### Common Pitfalls

❌ Using unclear endpoint names.

---

# 7. Path Parameters

## Concept

Path parameters identify specific resources.

### Example

```http
GET /users/10
```

Here:

```text
10 = Path Parameter
```

Express Example:

```javascript
app.get('/users/:id', (req, res) => {
  console.log(req.params.id);
});
```

### Practice Questions

1. What is the path parameter?

   * Dynamic value in URL path.

2. In `/users/5`, what is 5?

   * Path parameter.

### Common Pitfalls

❌ Using query parameters for resource identification.

---

# 8. Types of APIs

## REST

Uses resources and HTTP methods.

```http
GET /users
```

## GraphQL

Client specifies required fields.

```graphql
query {
  user(id: 1) {
    name
    email
  }
}
```

## SOAP

XML-based protocol.

```xml
<soap:Envelope>
</soap:Envelope>
```

## gRPC

Uses Protocol Buffers and HTTP/2.

```protobuf
service UserService {
  rpc GetUser(UserRequest) returns (UserResponse);
}
```

### Practice Questions

1. Which API type uses queries?

   * GraphQL.

2. Which uses XML?

   * SOAP.

3. Which is fastest generally?

   * gRPC.

---

# 9. HTTP Methods

---

## GET (Get All Items)

```http
GET /users
```

Returns all users.

### Example

```javascript
fetch('/users');
```

---

## GET (Specific Item)

```http
GET /users/1
```

Returns one user.

---

## POST (Create Item)

```http
POST /users
```

```json
{
  "name": "John"
}
```

---

## PUT (Update Existing Item)

Replaces entire resource.

```http
PUT /users/1
```

```json
{
  "name": "John",
  "age": 25
}
```

---

## DELETE

```http
DELETE /users/1
```

---

## PATCH

Updates only specified fields.

```http
PATCH /users/1
```

```json
{
  "age": 26
}
```

---

## OPTIONS

Returns supported methods.

```http
OPTIONS /users
```

Response:

```http
Allow: GET, POST, PUT
```

### Practice Questions

1. Which method creates data?

   * POST.

2. Difference between PUT and PATCH?

   * PUT replaces entire resource, PATCH updates partial data.

3. Which method deletes data?

   * DELETE.

4. Which method retrieves data?

   * GET.

5. Which method shows supported methods?

   * OPTIONS.

### Common Pitfalls

❌ Using GET to create records.

✅ Use POST.

---

# 10. Hierarchical IDs

## Concept

Used for nested resources.

### Example

```http
/users/10/orders/20
```

User 10's order 20.

### Practice Questions

1. Why use hierarchical IDs?

   * Show parent-child relationships.

### Common Pitfalls

Avoid excessively deep nesting.

---

# 11. Query Parameters

## Concept

Used for filtering, sorting, searching.

### Example

```http
/users?page=1&limit=10
```

Express:

```javascript
app.get('/users', (req, res) => {
  console.log(req.query.page);
});
```

### Practice Questions

1. What are query parameters used for?

   * Filtering and pagination.

2. Are query parameters optional?

   * Usually yes.

### Common Pitfalls

❌ Using query params for resource identity.

---

# 12. Status Codes

## Concept

Indicate request result.

### Common Codes

| Code | Meaning               |
| ---- | --------------------- |
| 200  | OK                    |
| 201  | Created               |
| 204  | No Content            |
| 400  | Bad Request           |
| 401  | Unauthorized          |
| 403  | Forbidden             |
| 404  | Not Found             |
| 500  | Internal Server Error |

### Practice Questions

1. Status code for successful creation?

   * 201.

2. Resource not found?

   * 404.

3. Server error?

   * 500.

### Common Pitfalls

❌ Returning 200 for errors.

---

# 13. Meaningful Error Messages

## Example

❌ Bad

```json
{
  "error": "Failed"
}
```

✅ Good

```json
{
  "error": "Email already exists"
}
```

### Practice Questions

1. Why meaningful messages?

   * Easier debugging.

### Common Pitfalls

Avoid exposing internal system details.

---

# 14. Meaningful Error Codes

## Example

```json
{
  "code": "USER_NOT_FOUND",
  "message": "User does not exist"
}
```

### Benefits

* Easy frontend handling
* Consistent responses

### Practice Questions

1. Why use custom error codes?

   * Programmatic handling.

---

# 15. Content Type

## Concept

Specifies data format.

### Examples

```http
Content-Type: application/json
```

```http
Content-Type: text/html
```

### Practice Questions

1. JSON content type?

   * application/json.

### Common Pitfalls

Wrong content type causes parsing errors.

---

# 16. Error Handling

## Example

```javascript
try {
  const user = await getUser();
} catch (error) {
  console.error(error);
}
```

API Response:

```json
{
  "success": false,
  "message": "Something went wrong"
}
```

### Best Practices

* Consistent structure
* Correct status codes
* Logging

---

# 17. Rate Limiting

## Concept

Limits number of requests from a client.

### Example

```text
100 requests/minute
```

Express Example

```javascript
const rateLimit = require('express-rate-limit');

app.use(rateLimit({
  windowMs: 60000,
  max: 100
}));
```

### Practice Questions

1. Why rate limit APIs?

   * Prevent abuse.

2. What happens after limit?

   * Request rejected.

### Common Pitfalls

Setting limits too strict.

---

# 18. API Throttling

## Concept

Controls request speed instead of completely blocking.

### Example

Allow:

```text
10 requests/second
```

Extra requests are delayed.

### Rate Limiting vs Throttling

| Rate Limiting   | Throttling      |
| --------------- | --------------- |
| Blocks requests | Slows requests  |
| Hard limit      | Controlled flow |

---

# 19. Pagination

## Concept

Returns data in chunks.

### Example

```http
GET /users?page=1&limit=20
```

Response

```json
{
  "page": 1,
  "totalPages": 10,
  "data": []
}
```

### Practice Questions

1. Why pagination?

   * Better performance.

2. What does limit mean?

   * Records per page.

### Common Pitfalls

Returning thousands of records at once.

---

# 20. Cross-Site Scripting (XSS)

## Concept

Attacker injects malicious JavaScript.

### Example

```html
<script>alert('Hacked')</script>
```

### Prevention

```javascript
const sanitized = DOMPurify.sanitize(input);
```

### Practice Questions

1. What is XSS?

   * Script injection attack.

2. How prevent XSS?

   * Sanitize input.

### Common Pitfalls

Displaying user input directly.

---

# 21. SQL Injection Prevention

## Concept

Attacker injects SQL commands.

### Vulnerable

```javascript
const query =
`SELECT * FROM users WHERE email='${email}'`;
```

### Safe

```javascript
db.query(
  'SELECT * FROM users WHERE email = ?',
  [email]
);
```

### Practice Questions

1. What causes SQL injection?

   * Unsanitized input.

2. Best prevention?

   * Parameterized queries.

### Common Pitfalls

String concatenation in SQL.

---

# 22. API Deprecation

## Concept

Marking APIs for future removal.

### Example

Response Header

```http
Deprecation: true
Sunset: Wed, 31 Dec 2026
```

### Best Practices

* Give notice
* Provide migration guide
* Maintain backward compatibility

### Practice Questions

1. What is API deprecation?

   * Planned retirement of an API.

---

# 23. Types of Versioning

## URI Versioning

```http
/api/v1/users
/api/v2/users
```

Most common.

---

## Query Parameter Versioning

```http
/users?version=1
```

---

## Header Versioning

```http
Accept-Version: v1
```

---

## Content Negotiation

```http
Accept: application/vnd.api.v1+json
```

### Practice Questions

1. Most common versioning?

   * URI versioning.

2. Which versioning uses headers?

   * Header versioning.

### Common Pitfalls

Breaking old clients without versioning.

---

# 24. OpenAPI

## Concept

OpenAPI is a specification used to describe REST APIs in a standard format.

Formerly known as **Swagger Specification**.

### Example

```yaml
openapi: 3.0.0

paths:
  /users:
    get:
      summary: Get all users
```

### Benefits

* Auto-generated documentation
* Client SDK generation
* API testing
* Better collaboration

### Practice Questions

1. What is OpenAPI?

   * API specification standard.

2. What was its old name?

   * Swagger Specification.

3. Why use OpenAPI?

   * Documentation and automation.

### Common Pitfalls

❌ Documentation not matching actual API.

✅ Keep OpenAPI spec updated with code.

---

# Quick Interview Revision Sheet

| Topic             | Key Point                         |
| ----------------- | --------------------------------- |
| REST              | Architectural style, not protocol |
| Stateless         | Server stores no client state     |
| Uniform Interface | Consistent API design             |
| Resource Based    | APIs expose resources             |
| GET               | Read data                         |
| POST              | Create data                       |
| PUT               | Full update                       |
| PATCH             | Partial update                    |
| DELETE            | Remove data                       |
| Status Codes      | Communicate result                |
| Query Params      | Filtering, sorting, pagination    |
| Path Params       | Resource identification           |
| Rate Limiting     | Restrict request count            |
| Throttling        | Control request speed             |
| Pagination        | Split large datasets              |
| XSS               | JavaScript injection attack       |
| SQL Injection     | Malicious SQL execution           |
| Versioning        | Manage API changes                |
| OpenAPI           | API documentation standard        |

These notes cover the core API concepts typically expected in backend, Node.js, Express.js, and REST API interviews.
