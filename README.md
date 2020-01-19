# Coding Guidelines

This project collects coding conventions and best practices.


## Static Code Analysis

### Using PMD

This project contains the following [PMD](https://pmd.github.io/) rule sets.

* `allrules.xml`
  * `javabettercode.xml`
  * `javaexceptions.xml`
  * `javalogging.xml`
  * `javamaintainability.xml`
  * `javastyle.xml`

They can be used to check Java source code using [Maven](https://maven.apache.org/) as follows:

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-pmd-plugin</artifactId>
    <version>3.12.0</version>
    <configuration>
        <rulesets>
            <ruleset>/allrules.xml</ruleset>
        </rulesets>
        <linkXRef>false</linkXRef>
        <printFailingErrors>true</printFailingErrors>
        <failOnViolation>true</failOnViolation>
    </configuration>
    <dependencies>
        <dependency>
            <groupId>net.sourceforge.pmd</groupId>
            <artifactId>pmd-core</artifactId>
            <version>6.20.0</version>
        </dependency>
        <dependency>
            <groupId>net.sourceforge.pmd</groupId>
            <artifactId>pmd-java</artifactId>
            <version>6.20.0</version>
        </dependency>
        <dependency>
            <groupId>de.cwkr</groupId>
            <artifactId>cwkr-coding-guidelines</artifactId>
            <version>1.2.0</version>
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


### Using Checkstyle

This project contains a [Checkstyle](https://checkstyle.org/) configuration file named `cwkr_checks.xml`.
It can be used to check Java source code formatting using [Maven](https://maven.apache.org/) as follows:

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
            <version>1.2.0</version>
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
