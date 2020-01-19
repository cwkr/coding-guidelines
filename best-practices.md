# Best Practices

## Java

### Exceptions

- Don't catch `Exception`, `RuntimeException`, `NullPointerExcpetion` or `Throwable`, catch specific exceptions
- Don't throw `Exception` or `RuntimeException`, throw specific exceptions
- Log stack traces in catch blocks
- Don't rethrow exceptions or throw a new exception with equal type in catch blocks

### Logging

- Don't use System.out or System.err methods, use a Logger
- Use [SLF4J](http://www.slf4j.org/) private static final Logger for logging: `private static final Logger logger = LoggerFactory.getLogger(Classname.class);`

### Spring

- Don't use [JPA](https://docs.jboss.org/hibernate/jpa/2.2/api/) or [JDBC API](https://docs.oracle.com/javase/8/docs/technotes/guides/jdbc/index.html) in Services directly, use a Repository
- Don't use `RestTemplate` directly, use a proxy implementation when calling API methods


## TypeScript

### Angular

- Don't use `HttpClient` directly, use a Service as proxy when calling API methods
