# Coding Guidelines

This project collects coding conventions and best practices.


## Static Code Analysis using PMD

This project contains the following [PMD](https://pmd.github.io/) rule sets.

* `category/java/cwkr/recommended.xml`
  * `category/java/cwkr/codestyle.xml`
  * `category/java/cwkr/exceptions.xml`
  * `category/java/cwkr/logging.xml`
  * `category/java/cwkr/maintainability.xml`
  * `category/java/cwkr/performance.xml`

They can be used to check Java source code using [Maven](https://maven.apache.org/) as follows:

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-pmd-plugin</artifactId>
    <version>3.20.0</version>
    <configuration>
        <rulesets>
            <ruleset>/category/java/cwkr/recommended.xml</ruleset>
        </rulesets>
        <linkXRef>false</linkXRef>
        <printFailingErrors>true</printFailingErrors>
        <failOnViolation>true</failOnViolation>
    </configuration>
    <dependencies>
        <dependency>
            <groupId>net.sourceforge.pmd</groupId>
            <artifactId>pmd-core</artifactId>
            <version>6.55.0</version>
        </dependency>
        <dependency>
            <groupId>net.sourceforge.pmd</groupId>
            <artifactId>pmd-java</artifactId>
            <version>6.55.0</version>
        </dependency>
        <dependency>
            <groupId>de.cwkr</groupId>
            <artifactId>cwkr-pmd</artifactId>
            <version>1.4.0</version>
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
