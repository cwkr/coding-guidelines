# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).


## [1.3.0] - 2020-06-27

### Added

- `category/java/cwkr/performance.xml`
- `UseCommonsStringUtils` rule
- `AvoidLombokExperimental` rule

### Changed

- Maven Artefact name changed from **cwkr-coding-guidelines** to **cwkr-pmd**
- `allrules.xml` moved to `category/java/cwkr/recommended.xml`
- `javastyle.xml` moved to `category/java/cwkr/codestyle.xml`
- `javaexceptions.xml` moved to `category/java/cwkr/exceptions.xml`
- `javalogging.xml` moved to `category/java/cwkr/logging.xml`
- `javamaintainability.xml` moved to `maintainability.xml`

### Removed

- `cwkr_checks.xml`


## [1.2.0] - 2020-01-19

### Added

- Predefined PMD rule sets `allrules.xml`, `javabettercode.xml`, `javaexceptions.xml`, `javalogging.xml`, `javamaintainability.xml` and `javastyle.xml`
- `AvoidFinalizeMethod` rule
- `UseJavaTimeApi` rule


## [1.1] - 2020-01-18

### Changed

- Artifact name changed from **cwkr-checkstyle** to **cwkr-coding-guidelines**
- Made `HideUtilityClassConstructorCheck` aware of Spring Boot and Lombok
- `LineLengthCheck` ignore pattern extended

### Removed

- `StringLiteralEqualityCheck` from `cwkr_checks.xml`
- `EqualsHashCodeCheck` from `cwkr_checks.xml`
- `UnusedImportsCheck` from `cwkr_checks.xml`
- `MutableExceptionCheck` from `cwkr_checks.xml`
- `IllegalThrowsCheck` from `cwkr_checks.xml`
- `CyclomaticComplexityCheck` from `cwkr_checks.xml`
- `MethodLengthCheck` from `cwkr_checks.xml`


## [1.0] - 2020-01-13

### Added

- Checkstyle configuration file named `cwkr_checks.xml`
