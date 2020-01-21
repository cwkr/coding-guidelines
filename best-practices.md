# Best Practices

## Java

### Data types

- **Don't** use `java.util.Date`, `java.util.Calendar` or `java.text.SimpleDateFormat`, use `java.time.*` to handle and format date and time values
- **Don't** use `double` or `float` to represent currency or for monetary calculations, use `java.math.BigDecimal` or [Java Money API](https://javamoney.github.io/)
- **Don't** return null values from collection properties or from methods returning collections, do return an empty collection maybe using `java.util.Collections.emptyList()` or `java.util.Collections.emptySet()`

### Exceptions

- **Don't** catch `java.lang.Exception`, `java.lang.RuntimeException`, `java.lang.NullPointerExcpetion`, `java.lang.Error` or `java.lang.Throwable`, catch specific exceptions
- **Don't** throw `java.lang.Exception`, `java.lang.RuntimeException` or `java.lang.Error`, throw specific exceptions
- **Do** log stack traces in catch blocks with `org.slf4j.Logger.error​(String, Throwable)`, `org.slf4j.Logger.warn(String, Throwable)` or `org.slf4j.Logger.info(String, Throwable)`
- **Don't** rethrow exceptions or throw a new exception with equal type in catch blocks
- **Don't** use empty catch blocks to hide exceptions, do et least log them
- **Do** extend custom exceptions from `java.lang.RuntimeException` avoiding checked exceptions

### Logging

- **Don't** use System.out or System.err methods, use a Logger
- **Do** use [SLF4J](http://www.slf4j.org/) private static final `org.slf4j.Logger` for logging: `private static final Logger logger = LoggerFactory.getLogger(Classname.class);`

### Spring

- **Don't** use XML based configuration, use Java based configuration
- **Don't** use [JPA](https://docs.jboss.org/hibernate/jpa/2.2/api/) or [JDBC API](https://docs.oracle.com/javase/8/docs/technotes/guides/jdbc/index.html) in Services directly, use a Repository
- **Don't** use `RestTemplate` directly, use a proxy implementation when calling API methods
- **Don't** use [Spring Web MVC](https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html) annotations directly in Service implementations, use a Controller


## TypeScript

### Angular

- **Don't** use `HttpClient` directly, use a Service as proxy when calling API methods
