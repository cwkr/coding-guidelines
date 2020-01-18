# Coding Guidelines

This project collects coding conventions and best best practices.


## Static Code Analysis

### Using Checkstyle

This project contains a [Checkstyle](https://checkstyle.org/) configuration file named `cwkr_checks.xml`. It can be used to check Java source code formatting using [Maven](https://maven.apache.org/):

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-checkstyle-plugin</artifactId>
    <version>3.1.0</version>
    <configuration>
        <configLocation>cwkr_checks.xml</configLocation>
        <encoding>UTF-8</encoding>
        <failsOnError>true</failsOnError>
        <consoleOutput>false</consoleOutput>
        <failOnViolation>false</failOnViolation>
        <linkXRef>false</linkXRef>
    </configuration>
    <dependencies>
        <dependency>
            <groupId>com.puppycrawl.tools</groupId>
            <artifactId>checkstyle</artifactId>
            <version>8.28</version>
        </dependency>
        <dependency>
            <groupId>de.cwkr</groupId>
            <artifactId>cwkr-coding-guidelines</artifactId>
            <version>1.1</version>
        </dependency>
    </dependencies>
    <executions>
        <execution>
            <id>validate</id>
            <phase>validate</phase>
            <goals>
                <goal>check</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```


## Licensing

[The Apache License, Version 2.0](LICENSE)
