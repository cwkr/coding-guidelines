# RESTful API Style Guide

# Introduction

This document serves as the definition of standards that must be applied when designing RESTful APIs.

# Terminologies

The following are the most important terms related to RESTful APIs

- **Resource** is an object or representation of something, which has some associated data with it and there can be set of methods to operate on it. E.g. Animals, schools and employees are resources and delete, add, update are the operations to be performed on these resources.
- **Collection Resources** are set of resources, e.g Companies is the collection of Company resource.
- **URI** (Uniform Resource Identifier) is a path through which a **resource** can be located and some actions can be performed on it. An **URL** (Uniform Resource Locator) is a specialized form of an URI.
- HTTP **Verbs** are also known as methods. They are the **actions** that can be performed on **resources**.
- HTTP **Status Codes** provide an information the request's overarching result.

The REST (Representational State Transfer) architectural pattern as described by Roy Fielding defines the followig principles or constraints.

- **Client-server architecture**
- **Statelessness** - no client context being stored on the server between requests
- **Cacheability** - responses must, implicitly or explicitly, define themselves as either cacheable or non-cacheable to prevent clients from providing stale or inappropriate data in response to further requests
- **Layered system**
- **Code on demand (optional)**
- **Uniform interface**
    - Resource identification using URIs
    - Resource manipulation through representations
    - Self-descriptive requests and responses
    - Hypermedia as the engine of application state (HATEOAS)

Leonard Richardson divided web service designs into four categories based on how much they are REST compliant. This model of division of REST services to identify their maturity level is called **Richardson Maturity Model**.

- Level 0: Exporting an API over HTTP (single URI/single Verb)
- Level 1: Exporting resources instead of methods (multiple URIs)
- Level 2: Proper use of HTTP Verbs and Status Codes
- Level 3: Exporting hypertext with objects that make all or part of the API discoverable (HATEOAS)

Level 2 is considered "good enough" and HATEOAS is not required.


# Resources and URI

A resource can be a singleton or a collection. For example, "customers" is a collection resource and "customer" is a singleton resource. We can identify the "customers" collection resource using the URI "/customers". We can identify a single "customer" resource using the URI "/customers/{customerId}".

A resource may contain sub-resources or sub-collection resources also. For example, sub-collection resource "accounts" of a particular "customer" can be identified using the URI "/customers/{customerId}/accounts". Similarly, a singleton resource "account" inside the sub-collection resource "accounts" can be identified as follows: "/customers/{customerId}/accounts/{accountId}".

## Resource Naming Best Practices

- **Don't** use verbs to represent resources, use nouns
- **Do** use singular names for singleton resources
- **Do** use plural names for collection resources
- **Do** use forward slash (/) to indicate hierarchical relationships
- **Don't** use more than one path parameter per segment
- **Do** seperate path parameters with at least one static path segment
- **Don't** use trailing forward slash (/) in URIs
- **Don't** use underscores ( _ ), use hyphens (-) to improve the readability of URIs
- **Do** use lowercase letters in URIs
- **Don't** ever use CRUD function names in URIs, HTTP verbs should be used to indicate which CRUD function is performed

### Examples

```
http://localhost:8080/myapp-foobar/customers/56/orders/23
http://localhost:8080/myapp-foobar/documents/11/binary-data
http://localhost:8080/myapp-foobar/business-processes/customer-registration
```

## Parameters

Parameters in URIs can either be **path parameters** or **query parameters** (contained in the query string). Path parameters are always required. Query parameters can be repeated multiple times, then they are handled as a list of values.

### Examples

```
http://localhost:8080/foobar/customers/56
http://localhost:8080/foobar/customers?name=foo&name=bar
```

# Resource Representations

Structured data should be represented as **JSON** (JavaScript Object Notation) with the media type `application/json`. As an alternative **XML** (media type: `application/xml`) or **CSV** (Comma-Separated Values; media type: `text/csv`) can be used.

Custom media types for structured data should be an `application/*` type and use the correct "+"suffix of the underlying structure like `application/vnd.myapi.v1+json`.

Binary data should be transfered as byte stream using the appropriate media type.
If necessary, binary data can be embedded into **JSON** or **XML** as Base64 encoded text.

Error messages should be represented as **JSON** following the [Problem Details for HTTP APIs](https://tools.ietf.org/html/rfc7807) standard using the media type `application/problem+json`. Error messages must only be contained in responses with an error status code (>= 400).

Date and time values in structured data must use ISO 8601 format as described in
[Date and Time Formats](https://www.w3.org/TR/NOTE-datetime), [JSON Schema](https://json-schema.org/understanding-json-schema/reference/string.html#dates-and-times) or [XML Schema](https://www.w3.org/TR/xmlschema11-2/#built-in-primitive-datatypes).

# Verbs

The HTTP verbs **GET**, **POST**, **PUT**, **DELETE** or **HEAD** must be used to perform action on resources.

- **GET** requests should be used for read operations and must not alter application state and usually will generate a **404** if the resource does not exist
- **GET** requests on collection resources should generate a **200** even if the collection is empty
- **PUT** requests should be used for update operations and can be used for create operation if the id of the resource is provided and not generated
- **PUT** requests must replace entire resources, use a sub-resource when partial updates are required
- **PUT** must generate a **200** when updating or a **201** when creating resources, they may generate a **204** when resources are updated and no response body is returned
- **DELETE** requests must be used to delete resources and usually will generate a **204**
- **POST** requests must be used to create single resources on a collection resource and should return the given resource containing all generated values or a `Location` header containing the URL of the created resource with a **201**
- **POST** requests should generally be used for all scenarios that cannot be covered by other verbs
- Whenever client-side input fails validation use **400**.
- You can use **410** instead of **404** to indicate a logical deletion.
- **HEAD** requests must return an identical set of headers as a corresponding **GET** request on the same resource.

# Status Codes

## 2xx Success

- 200 OK
- 201 Created
- 202 Accepted
- 204 No Content

## 4xx Client errors

- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 405 Method Not Allowed
- 409 Conflict
- 410 Gone
- 412 Precondition Failed
- 413 Content Too Large
- 415 Unsupported Media Type
- 428 Precondition Required

## 5xx Server errors

- 500 Internal Server Error
- 501 Not Implemented
- 502 Bad Gateway
- 503 Service Unavailable
- 504 Gateway Timeout

# Headers

Custom headers should be prefixed with `X-`.

# Links
- ["Architectural Styles and the Design of Network-based Software Architectures" von Roy Fielding (PDF)](https://www.ics.uci.edu/~fielding/pubs/dissertation/fielding_dissertation.pdf)
- [Richardson Maturity Model](https://martinfowler.com/articles/richardsonMaturityModel.html)
- [JSON (JavaScript Object Notation)](https://www.json.org/)
- [W3C Extensible Markup Language (XML)](https://www.w3.org/TR/xml/)
- [RFC 2616 - Hypertext Transfer Protocol](https://tools.ietf.org/html/rfc2616)
- [RFC 4180 - Common Format and MIME Type for Comma-Separated Values (CSV) Files](https://tools.ietf.org/html/rfc4180)
- [RFC 7807 - Problem Details for HTTP APIs](https://tools.ietf.org/html/rfc7807)
- [RFC 3339 - Date and Time on the Internet: Timestamps](https://tools.ietf.org/html/rfc3339)
- [W3C Date and Time Formats](https://www.w3.org/TR/NOTE-datetime)
- [W3C XML Schema Definition Language (XSD) Part 2: Datatypes](https://www.w3.org/TR/xmlschema11-2/)
- [JSON Schema Reference](https://json-schema.org/understanding-json-schema/reference/)
