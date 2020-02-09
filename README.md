# mmtechsoftjhipster

This application was generated using JHipster 6.7.0, you can find documentation and help at [https://www.jhipster.tech/documentation-archive/v6.7.0](https://www.jhipster.tech/documentation-archive/v6.7.0).

## Development

Before you can build this project, you must install and configure the following dependencies on your machine:

1. [Node.js][]: We use Node to run a development web server and build the project.
   Depending on your system, you can install Node either from source or as a pre-packaged bundle.

After installing Node, you should be able to run the following command to install development tools.
You will only need to run this command when dependencies change in [package.json](package.json).

    npm install

We use npm scripts and [Webpack][] as our build system.

Run the following commands in two separate terminals to create a blissful development experience where your browser
auto-refreshes when files change on your hard drive.

    ./mvnw
    npm start

Npm is also used to manage CSS and JavaScript dependencies used in this application. You can upgrade dependencies by
specifying a newer version in [package.json](package.json). You can also run `npm update` and `npm install` to manage dependencies.
Add the `help` flag on any command to see how you can use it. For example, `npm help update`.

The `npm run` command will list all of the scripts available to run for this project.

### PWA Support

JHipster ships with PWA (Progressive Web App) support, and it's turned off by default. One of the main components of a PWA is a service worker.

The service worker initialization code is commented out by default. To enable it, uncomment the following code in `src/main/webapp/index.html`:

```html
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js').then(function() {
      console.log('Service Worker Registered');
    });
  }
</script>
```

Note: [Workbox](https://developers.google.com/web/tools/workbox/) powers JHipster's service worker. It dynamically generates the `service-worker.js` file.

### Managing dependencies

For example, to add [Leaflet][] library as a runtime dependency of your application, you would run following command:

    npm install --save --save-exact leaflet

To benefit from TypeScript type definitions from [DefinitelyTyped][] repository in development, you would run following command:

    npm install --save-dev --save-exact @types/leaflet

Then you would import the JS and CSS files specified in library's installation instructions so that [Webpack][] knows about them:
Edit [src/main/webapp/app/vendor.ts](src/main/webapp/app/vendor.ts) file:

```
import 'leaflet/dist/leaflet.js';
```

Edit [src/main/webapp/content/scss/vendor.scss](src/main/webapp/content/scss/vendor.scss) file:

```
@import '~leaflet/dist/leaflet.css';
```

Note: There are still a few other things remaining to do for Leaflet that we won't detail here.

For further instructions on how to develop with JHipster, have a look at [Using JHipster in development][].

### Using Angular CLI

You can also use [Angular CLI][] to generate some custom client code.

For example, the following command:

    ng generate component my-component

will generate few files:

    create src/main/webapp/app/my-component/my-component.component.html
    create src/main/webapp/app/my-component/my-component.component.ts
    update src/main/webapp/app/app.module.ts

## Building for production

### Packaging as jar

To build the final jar and optimize the mmtechsoftjhipster application for production, run:

    ./mvnw -Pprod clean verify

This will concatenate and minify the client CSS and JavaScript files. It will also modify `index.html` so it references these new files.
To ensure everything worked, run:

    java -jar target/*.jar

Then navigate to [http://localhost:8080](http://localhost:8080) in your browser.

Refer to [Using JHipster in production][] for more details.

### Packaging as war

To package your application as a war in order to deploy it to an application server, run:

    ./mvnw -Pprod,war clean verify

## Testing

To launch your application's tests, run:

    ./mvnw verify

### Client tests

Unit tests are run by [Jest][] and written with [Jasmine][]. They're located in [src/test/javascript/](src/test/javascript/) and can be run with:

    npm test

For more information, refer to the [Running tests page][].

### Code quality

Sonar is used to analyse code quality. You can start a local Sonar server (accessible on http://localhost:9001) with:

```
docker-compose -f src/main/docker/sonar.yml up -d
```

You can run a Sonar analysis with using the [sonar-scanner](https://docs.sonarqube.org/display/SCAN/Analyzing+with+SonarQube+Scanner) or by using the maven plugin.

Then, run a Sonar analysis:

```
./mvnw -Pprod clean verify sonar:sonar
```

If you need to re-run the Sonar phase, please be sure to specify at least the `initialize` phase since Sonar properties are loaded from the sonar-project.properties file.

```
./mvnw initialize sonar:sonar
```

or

For more information, refer to the [Code quality page][].

## Using Docker to simplify development (optional)

You can use Docker to improve your JHipster development experience. A number of docker-compose configuration are available in the [src/main/docker](src/main/docker) folder to launch required third party services.

For example, to start a mariadb database in a docker container, run:

    docker-compose -f src/main/docker/mariadb.yml up -d

To stop it and remove the container, run:

    docker-compose -f src/main/docker/mariadb.yml down

You can also fully dockerize your application and all the services that it depends on.
To achieve this, first build a docker image of your app by running:

    ./mvnw -Pprod verify jib:dockerBuild

Then run:

    docker-compose -f src/main/docker/app.yml up -d

For more information refer to [Using Docker and Docker-Compose][], this page also contains information on the docker-compose sub-generator (`jhipster docker-compose`), which is able to generate docker configurations for one or several JHipster applications.

## Continuous Integration (optional)

To configure CI for your project, run the ci-cd sub-generator (`jhipster ci-cd`), this will let you generate configuration files for a number of Continuous Integration systems. Consult the [Setting up Continuous Integration][] page for more information.

[jhipster homepage and latest documentation]: https://www.jhipster.tech
[jhipster 6.7.0 archive]: https://www.jhipster.tech/documentation-archive/v6.7.0
[using jhipster in development]: https://www.jhipster.tech/documentation-archive/v6.7.0/development/
[service discovery and configuration with the jhipster-registry]: https://www.jhipster.tech/documentation-archive/v6.7.0/microservices-architecture/#jhipster-registry
[using docker and docker-compose]: https://www.jhipster.tech/documentation-archive/v6.7.0/docker-compose
[using jhipster in production]: https://www.jhipster.tech/documentation-archive/v6.7.0/production/
[running tests page]: https://www.jhipster.tech/documentation-archive/v6.7.0/running-tests/
[code quality page]: https://www.jhipster.tech/documentation-archive/v6.7.0/code-quality/
[setting up continuous integration]: https://www.jhipster.tech/documentation-archive/v6.7.0/setting-up-ci/
[node.js]: https://nodejs.org/
[yarn]: https://yarnpkg.org/
[webpack]: https://webpack.github.io/
[angular cli]: https://cli.angular.io/
[browsersync]: https://www.browsersync.io/
[jest]: https://facebook.github.io/jest/
[jasmine]: https://jasmine.github.io/2.0/introduction.html
[protractor]: https://angular.github.io/protractor/
[leaflet]: https://leafletjs.com/
[definitelytyped]: https://definitelytyped.org/


# What is JHipster?
    Together with a handful of other developers, Julien Dubois started the JHipster (short for “Java Hipster”) website. The name stood primarily for the concept of a website generator, since JHipster is meant to unite Java with other web development tools. Today, the Framework collection targets the enterprise sector in particular, with a focus on enabling high productivity during the development process as well as high-quality, application development. A team of more than 15 core developers and hundreds of contributors are responsible for continuous further development. The JHipster code, which is distributed with the Apache 2.0 license, is freely available to anyone on GitHub.

# An overview of JHipster’s components
    JHipster provides solutions for creating and designing on the front end, as well as the necessary tools for back end development. For example, Spring Boot provides the perfect basis for generating a robust Java stack on the server side, which can then be easily connected to various databases, virtualization engines, and monitoring tools, and is linked to the front end through the REST interface. Among others, JHipster supports the following server-side options:

# Applications using Jhipster 
    Databanks: MariaDB, PostgreSQL, Oracle, MySQL, MongoDB
    Virtualization: Docker, Kubernetes, AWS
    Testing environment: Karma, Cucumber
    Indexing: ElasticSearch
    Caching: Ehcache, Infinispan
    Monitoring: Prometheus
    

# Quick start
First of all, create an empty directory in which you will create your application:
mkdir myapplication
Go to that directory:
cd myapplication/

To generate your application, type:

# jhipster
    Answer the questions asked by the generator to create an application tailored to your needs. Those options are described in the next section.
    Once the application is generated, you can launch it using Maven (./mvnw on Linux/MacOS/Windows PowerShell, mvnw on Windows Cmd) or Gradle (./gradlew on Linux/MacOS/Windows PowerShell, gradlew on Windows Cmd).
    Note if you are using Maven and changed front end files after first run of the ./mvnw command then you must run ./mvnw -Pwebpack to see the latest front end version (Gradle detects front end changes automatically and recompiles front end if needed).
    The application will be available on http://localhost:8080
# jhipster types 
    Monolithic application: this a classical, one-size-fits-all application. It’s easier to use and develop, and is our recommended default.
    Microservice application: in a microservices architecture, this is one of the services.
    Microservice gateway: in a microservices architecture, this is an edge server that routes and secures requests.
    JHipster UAA server: in a microservices architecture, this is an OAuth2 authentication server that secures microservices. Refer to the JHipster UAA documentation for more information.
    What is the base name of your application?
    This is the name of your application.



C:\JHipster\myApp>jHipster
    INFO! Using JHipster version installed globally
    INFO! Running default command
    INFO! Executing jhipster:app
    INFO! Options: from-cli: true
    
    
            ██╗ ██╗   ██╗ ████████╗ ███████╗   ██████╗ ████████╗ ████████╗ ███████╗
            ██║ ██║   ██║ ╚══██╔══╝ ██╔═══██╗ ██╔════╝ ╚══██╔══╝ ██╔═════╝ ██╔═══██╗
            ██║ ████████║    ██║    ███████╔╝ ╚█████╗     ██║    ██████╗   ███████╔╝
      ██╗   ██║ ██╔═══██║    ██║    ██╔════╝   ╚═══██╗    ██║    ██╔═══╝   ██╔══██║
      ╚██████╔╝ ██║   ██║ ████████╗ ██║       ██████╔╝    ██║    ████████╗ ██║  ╚██╗
       ╚═════╝  ╚═╝   ╚═╝ ╚═══════╝ ╚═╝       ╚═════╝     ╚═╝    ╚═══════╝ ╚═╝   ╚═╝
    
                                https://www.jhipster.tech
    
    Welcome to JHipster v6.7.0
    Application files will be generated in folder: C:\JHipster\myApp
     _______________________________________________________________________________________________________________
    
      Documentation for creating an application is at https://www.jhipster.tech/creating-an-app/
      If you find JHipster useful, consider sponsoring the project at https://opencollective.com/generator-jhipster
     _______________________________________________________________________________________________________________
    
    ? May JHipster anonymously report usage statistics to improve the tool over time? (Y/n)
    C:\JHipster\myApp>
    
    C:\JHipster\myApp>yo
    'yo' is not recognized as an internal or external command,
    operable program or batch file.
    
    C:\JHipster\myApp>jHipster
    INFO! Using JHipster version installed globally
    INFO! Running default command
    INFO! Executing jhipster:app
    INFO! Options: from-cli: true
    
    
            ██╗ ██╗   ██╗ ████████╗ ███████╗   ██████╗ ████████╗ ████████╗ ███████╗
            ██║ ██║   ██║ ╚══██╔══╝ ██╔═══██╗ ██╔════╝ ╚══██╔══╝ ██╔═════╝ ██╔═══██╗
            ██║ ████████║    ██║    ███████╔╝ ╚█████╗     ██║    ██████╗   ███████╔╝
      ██╗   ██║ ██╔═══██║    ██║    ██╔════╝   ╚═══██╗    ██║    ██╔═══╝   ██╔══██║
      ╚██████╔╝ ██║   ██║ ████████╗ ██║       ██████╔╝    ██║    ████████╗ ██║  ╚██╗
       ╚═════╝  ╚═╝   ╚═╝ ╚═══════╝ ╚═╝       ╚═════╝     ╚═╝    ╚═══════╝ ╚═╝   ╚═╝
    
                                https://www.jhipster.tech
    
    Welcome to JHipster v6.7.0
    Application files will be generated in folder: C:\JHipster\myApp
     _______________________________________________________________________________________________________________
    
      Documentation for creating an application is at https://www.jhipster.tech/creating-an-app/
      If you find JHipster useful, consider sponsoring the project at https://opencollective.com/generator-jhipster
     _______________________________________________________________________________________________________________
    
    ? May JHipster anonymously report usage statistics to improve the tool over time? No
    ? Which *type* of application would you like to create? Monolithic application (recommended for simple projects)
    ? [Alpha] Do you want to make it reactive with Spring WebFlux? (y/N)
    C:\JHipster\myApp>
    
    C:\JHipster\myApp>
    
    C:\JHipster\myApp>jHipster
    INFO! Using JHipster version installed globally
    INFO! Running default command
    INFO! Executing jhipster:app
    INFO! Options: from-cli: true
    
    
            ██╗ ██╗   ██╗ ████████╗ ███████╗   ██████╗ ████████╗ ████████╗ ███████╗
            ██║ ██║   ██║ ╚══██╔══╝ ██╔═══██╗ ██╔════╝ ╚══██╔══╝ ██╔═════╝ ██╔═══██╗
            ██║ ████████║    ██║    ███████╔╝ ╚█████╗     ██║    ██████╗   ███████╔╝
      ██╗   ██║ ██╔═══██║    ██║    ██╔════╝   ╚═══██╗    ██║    ██╔═══╝   ██╔══██║
      ╚██████╔╝ ██║   ██║ ████████╗ ██║       ██████╔╝    ██║    ████████╗ ██║  ╚██╗
       ╚═════╝  ╚═╝   ╚═╝ ╚═══════╝ ╚═╝       ╚═════╝     ╚═╝    ╚═══════╝ ╚═╝   ╚═╝
    
                                https://www.jhipster.tech
    
    Welcome to JHipster v6.7.0
    Application files will be generated in folder: C:\JHipster\myApp
     _______________________________________________________________________________________________________________
    
      Documentation for creating an application is at https://www.jhipster.tech/creating-an-app/
      If you find JHipster useful, consider sponsoring the project at https://opencollective.com/generator-jhipster
     _______________________________________________________________________________________________________________
    
    ? Which *type* of application would you like to create? Monolithic application (recommended for simple projects)
    ? [Alpha] Do you want to make it reactive with Spring WebFlux? No
    ? What is the base name of your application? mmtechsoftjhipster
    ? What is your default Java package name? com.mmtech.jhipster
    ? Do you want to use the JHipster Registry to configure, monitor and scale your application? Yes
    ? Which *type* of database would you like to use? SQL (H2, MySQL, MariaDB, PostgreSQL, Oracle, MSSQL)
    ? Which *production* database would you like to use? MariaDB
    ? Which *development* database would you like to use? MariaDB
    ? Do you want to use the Spring cache abstraction? Yes, with the Ehcache implementation (local cache, for a single node)
    ? Do you want to use Hibernate 2nd level cache? Yes
    ? Would you like to use Maven or Gradle for building the backend? Maven
    ? Which other technologies would you like to use? (Press <space> to select, <a> to toggle all, <i> to invert selection)
    ? Which *Framework* would you like to use for the client? Angular
    ? Would you like to use a Bootswatch theme (https://bootswatch.com/)? Default JHipster
    ? Would you like to enable internationalization support? Yes
    ? Please choose the native language of the application English
    ? Please choose additional languages to install (Press <space> to select, <a> to toggle all, <i> to invert selection)
    ? Besides JUnit and Jest, which testing frameworks would you like to use? (Press <space> to select, <a> to toggle all, <i> to invert selection)
    ? Would you like to install other generators from the JHipster Marketplace? No
    
    Installing languages: en
    Git repository initialized.
    
    KeyStore 'src/main/resources/config/tls/keystore.p12' generated successfully.
    
       create .prettierrc
       create .prettierignore
       create src\main\jib\entrypoint.sh
       create checkstyle.xml
       create mvnw
       create mvnw.cmd
       create .mvn\wrapper\maven-wrapper.jar
       create .mvn\wrapper\maven-wrapper.properties
       create .mvn\wrapper\MavenWrapperDownloader.java
       create pom.xml
       create src\main\resources\banner.txt
       create src\main\resources\templates\error.html
       create src\main\resources\logback-spring.xml
       create src\main\resources\i18n\messages.properties
       create src\main\resources\config\liquibase\changelog\00000000000000_initial_schema.xml
       create src\main\resources\config\liquibase\master.xml
       create src\main\java\com\mmtech\jhipster\security\SpringSecurityAuditorAware.java
       create src\main\java\com\mmtech\jhipster\security\SecurityUtils.java
       create src\main\java\com\mmtech\jhipster\security\AuthoritiesConstants.java
       create src\main\java\com\mmtech\jhipster\security\package-info.java
       create src\test\java\com\mmtech\jhipster\security\SecurityUtilsUnitTest.java
       create src\main\java\com\mmtech\jhipster\security\jwt\TokenProvider.java
       create src\main\java\com\mmtech\jhipster\security\jwt\JWTFilter.java
       create src\main\java\com\mmtech\jhipster\security\jwt\JWTConfigurer.java
       create src\main\java\com\mmtech\jhipster\config\SecurityConfiguration.java
       create src\main\java\com\mmtech\jhipster\security\DomainUserDetailsService.java
       create src\main\java\com\mmtech\jhipster\security\UserNotActivatedException.java
       create src\main\java\com\mmtech\jhipster\web\rest\vm\LoginVM.java
       create src\main\java\com\mmtech\jhipster\web\rest\UserJWTController.java
       create src\main\java\com\mmtech\jhipster\MmtechsoftjhipsterApp.java
       create src\main\java\com\mmtech\jhipster\ApplicationWebXml.java
       create src\test\java\com\mmtech\jhipster\ArchTest.java
       create src\main\java\com\mmtech\jhipster\aop\logging\LoggingAspect.java
       create src\main\java\com\mmtech\jhipster\config\package-info.java
       create src\main\java\com\mmtech\jhipster\config\AsyncConfiguration.java
       create src\main\java\com\mmtech\jhipster\config\DateTimeFormatConfiguration.java
       create src\main\java\com\mmtech\jhipster\config\LoggingConfiguration.java
       create src\main\java\com\mmtech\jhipster\config\ApplicationProperties.java
       create src\main\java\com\mmtech\jhipster\config\JacksonConfiguration.java
       create src\main\java\com\mmtech\jhipster\config\LocaleConfiguration.java
       create src\main\java\com\mmtech\jhipster\config\LoggingAspectConfiguration.java
       create src\main\java\com\mmtech\jhipster\config\WebConfigurer.java
       create src\main\java\com\mmtech\jhipster\config\Constants.java
       create src\main\java\com\mmtech\jhipster\config\CacheConfiguration.java
       create src\main\java\com\mmtech\jhipster\config\CloudDatabaseConfiguration.java
       create src\main\java\com\mmtech\jhipster\config\DatabaseConfiguration.java
       create src\main\java\com\mmtech\jhipster\config\audit\package-info.java
       create src\main\java\com\mmtech\jhipster\config\audit\AuditEventConverter.java
       create src\main\java\com\mmtech\jhipster\config\LiquibaseConfiguration.java
       create src\main\java\com\mmtech\jhipster\domain\package-info.java
       create src\main\java\com\mmtech\jhipster\domain\AbstractAuditingEntity.java
       create src\main\java\com\mmtech\jhipster\domain\PersistentAuditEvent.java
       create src\main\java\com\mmtech\jhipster\repository\package-info.java
       create src\main\java\com\mmtech\jhipster\service\EmailAlreadyUsedException.java
       create src\main\java\com\mmtech\jhipster\service\InvalidPasswordException.java
       create src\main\java\com\mmtech\jhipster\service\UsernameAlreadyUsedException.java
       create src\main\java\com\mmtech\jhipster\service\package-info.java
       create src\main\java\com\mmtech\jhipster\web\rest\errors\package-info.java
       create src\main\java\com\mmtech\jhipster\web\rest\errors\BadRequestAlertException.java
       create src\main\java\com\mmtech\jhipster\web\rest\errors\ErrorConstants.java
       create src\main\java\com\mmtech\jhipster\web\rest\errors\ExceptionTranslator.java
       create src\main\java\com\mmtech\jhipster\web\rest\errors\FieldErrorVM.java
       create src\main\java\com\mmtech\jhipster\web\rest\errors\EmailAlreadyUsedException.java
       create src\main\java\com\mmtech\jhipster\web\rest\errors\InvalidPasswordException.java
       create src\main\java\com\mmtech\jhipster\web\rest\errors\LoginAlreadyUsedException.java
       create src\main\java\com\mmtech\jhipster\web\rest\vm\package-info.java
       create src\main\java\com\mmtech\jhipster\web\rest\package-info.java
       create src\main\java\com\mmtech\jhipster\web\rest\ClientForwardController.java
       create src\test\java\com\mmtech\jhipster\web\rest\TestUtil.java
   create src\test\java\com\mmtech\jhipster\web\rest\errors\ExceptionTranslatorIT.java
   create src\test\java\com\mmtech\jhipster\web\rest\errors\ExceptionTranslatorTestController.java
   create src\test\java\com\mmtech\jhipster\web\rest\ClientForwardControllerTest.java
   create src\test\java\com\mmtech\jhipster\config\timezone\HibernateTimeZoneIT.java
   create src\test\java\com\mmtech\jhipster\repository\timezone\DateTimeWrapper.java
   create src\test\java\com\mmtech\jhipster\repository\timezone\DateTimeWrapperRepository.java
   create src\test\resources\logback.xml
   create src\test\java\com\mmtech\jhipster\config\WebConfigurerTest.java
   create src\test\java\com\mmtech\jhipster\config\WebConfigurerTestController.java
   create src\test\java\com\mmtech\jhipster\security\DomainUserDetailsServiceIT.java
   create src\main\resources\config\liquibase\data\user.csv
   create src\main\resources\config\liquibase\data\authority.csv
   create src\main\resources\config\liquibase\data\user_authority.csv
   create src\main\resources\templates\mail\activationEmail.html
   create src\main\resources\templates\mail\creationEmail.html
   create src\main\resources\templates\mail\passwordResetEmail.html
   create src\main\java\com\mmtech\jhipster\domain\Authority.java
   create src\main\java\com\mmtech\jhipster\repository\AuthorityRepository.java
   create src\main\java\com\mmtech\jhipster\repository\PersistenceAuditEventRepository.java
   create src\main\java\com\mmtech\jhipster\service\AuditEventService.java
   create src\main\java\com\mmtech\jhipster\web\rest\AuditResource.java
   create src\main\java\com\mmtech\jhipster\repository\CustomAuditEventRepository.java
   create src\main\java\com\mmtech\jhipster\domain\User.java
   create src\main\java\com\mmtech\jhipster\repository\UserRepository.java
   create src\main\java\com\mmtech\jhipster\service\UserService.java
   create src\main\java\com\mmtech\jhipster\service\MailService.java
   create src\main\java\com\mmtech\jhipster\service\dto\package-info.java
   create src\main\java\com\mmtech\jhipster\service\dto\UserDTO.java
   create src\main\java\com\mmtech\jhipster\service\dto\PasswordChangeDTO.java
   create src\main\java\com\mmtech\jhipster\web\rest\vm\ManagedUserVM.java
   create src\main\java\com\mmtech\jhipster\web\rest\AccountResource.java
   create src\main\java\com\mmtech\jhipster\web\rest\UserResource.java
   create src\main\java\com\mmtech\jhipster\web\rest\vm\KeyAndPasswordVM.java
   create src\main\java\com\mmtech\jhipster\service\mapper\package-info.java
   create src\main\java\com\mmtech\jhipster\service\mapper\UserMapper.java
   create src\test\java\com\mmtech\jhipster\security\jwt\TokenProviderTest.java
   create src\test\java\com\mmtech\jhipster\security\jwt\JWTFilterTest.java
   create src\test\java\com\mmtech\jhipster\web\rest\UserJWTControllerIT.java
   create src\test\java\com\mmtech\jhipster\web\rest\AuditResourceIT.java
   create src\test\java\com\mmtech\jhipster\service\AuditEventServiceIT.java
   create src\test\java\com\mmtech\jhipster\repository\CustomAuditEventRepositoryIT.java
   create src\test\resources\templates\mail\testEmail.html
   create src\test\resources\i18n\messages_en.properties
   create src\test\java\com\mmtech\jhipster\service\MailServiceIT.java
   create src\test\java\com\mmtech\jhipster\service\UserServiceIT.java
   create src\test\java\com\mmtech\jhipster\service\mapper\UserMapperTest.java
   create src\test\java\com\mmtech\jhipster\web\rest\AccountResourceIT.java
   create src\test\java\com\mmtech\jhipster\web\rest\UserResourceIT.java
   create .eslintrc.json
   create .eslintignore
   create webpack\utils.js
   create webpack\webpack.common.js
   create webpack\webpack.dev.js
   create webpack\webpack.prod.js
   create postcss.config.js
   create webpack\logo-jhipster.png
   create .huskyrc
   create .lintstagedrc.js
   create src\main\webapp\content\images\jhipster_family_member_0.svg
   create src\main\webapp\content\images\jhipster_family_member_1.svg
   create src\main\webapp\content\images\jhipster_family_member_2.svg
   create src\main\webapp\content\images\jhipster_family_member_3.svg
   create src\main\webapp\content\images\jhipster_family_member_0_head-192.png
   create src\main\webapp\content\images\jhipster_family_member_1_head-192.png
   create src\main\webapp\content\images\jhipster_family_member_2_head-192.png
   create src\main\webapp\content\images\jhipster_family_member_3_head-192.png
   create src\main\webapp\content\images\jhipster_family_member_0_head-256.png
   create src\main\webapp\content\images\jhipster_family_member_1_head-256.png
   create src\main\webapp\content\images\jhipster_family_member_2_head-256.png
   create src\main\webapp\content\images\jhipster_family_member_3_head-256.png
   create src\main\webapp\content\images\jhipster_family_member_0_head-384.png
   create src\main\webapp\content\images\jhipster_family_member_1_head-384.png
   create src\main\webapp\content\images\jhipster_family_member_2_head-384.png
   create src\main\webapp\content\images\jhipster_family_member_3_head-384.png
   create src\main\webapp\content\images\jhipster_family_member_0_head-512.png
   create src\main\webapp\content\images\jhipster_family_member_1_head-512.png
   create src\main\webapp\content\images\jhipster_family_member_2_head-512.png
   create src\main\webapp\content\images\jhipster_family_member_3_head-512.png
   create src\main\webapp\content\images\logo-jhipster.png
   create src\main\webapp\swagger-ui\index.html
   create src\main\webapp\swagger-ui\dist\images\throbber.gif
   create src\main\webapp\WEB-INF\web.xml
   create src\main\webapp\favicon.ico
   create src\main\webapp\robots.txt
   create src\main\webapp\404.html
   create src\main\webapp\index.html
   create src\main\webapp\manifest.webapp
   create package.json
   create src\main\docker\app.yml
   create src\main\docker\sonar.yml
   create src\main\docker\monitoring.yml
   create src\main\docker\prometheus\prometheus.yml
   create src\main\docker\grafana\provisioning\dashboards\dashboard.yml
   create src\main\docker\grafana\provisioning\dashboards\JVM.json
   create src\main\docker\grafana\provisioning\datasources\datasource.yml
   create src\main\docker\mariadb.yml
   create src\main\docker\central-server-config\README.md
   create src\main\docker\jhipster-registry.yml
   create src\main\docker\central-server-config\docker-config\application.yml
   create src\main\docker\central-server-config\localhost-config\application.yml
   create src\main\resources\config\application.yml
   create src\main\resources\config\application-dev.yml
   create src\main\webapp\app\home\home.component.html
   create src\main\resources\config\application-tls.yml
   create src\main\resources\config\application-prod.yml
   create src\main\resources\config\bootstrap.yml
   create src\main\resources\config\bootstrap-prod.yml
   create src\test\resources\config\application.yml
   create src\test\resources\config\bootstrap.yml
   create proxy.conf.json
   create tsconfig.json
   create tsconfig-aot.json
   create tslint.json
   create angular.json
   create src\main\webapp\content\scss\_bootstrap-variables.scss
   create src\main\webapp\content\scss\global.scss
   create src\main\webapp\content\scss\vendor.scss
   create src\main\webapp\content\css\loading.css
   create src\main\webapp\app\app.main.ts
   create src\main\webapp\app\layouts\main\main.component.html
   create src\main\webapp\app\layouts\navbar\navbar.component.html
   create src\main\webapp\app\app.module.ts
   create src\main\webapp\app\layouts\footer\footer.component.html
   create src\main\webapp\app\layouts\error\error.component.html
   create src\main\webapp\app\app-routing.module.ts
   create src\main\webapp\app\app.constants.ts
   create src\main\webapp\app\polyfills.ts
   create src\main\webapp\app\vendor.ts
   create src\main\webapp\app\blocks\config\prod.config.ts
   create src\main\webapp\app\blocks\config\uib-pagination.config.ts
   create src\main\webapp\app\blocks\interceptor\errorhandler.interceptor.ts
   create src\main\webapp\app\blocks\interceptor\notification.interceptor.ts
   create src\main\webapp\app\blocks\interceptor\auth-expired.interceptor.ts
   create src\main\webapp\app\blocks\interceptor\auth.interceptor.ts
   create src\main\webapp\app\entities\entity.module.ts
   create src\main\webapp\app\home\home.module.ts
   create src\main\webapp\app\home\home.route.ts
   create src\main\webapp\app\home\home.component.ts
   create src\main\webapp\app\layouts\profiles\page-ribbon.component.ts
   create src\main\webapp\app\account\activate\activate.component.html
   create src\main\webapp\app\account\password\password.component.html
   create src\main\webapp\app\account\register\register.component.html
   create src\main\webapp\app\account\password-reset\init\password-reset-init.component.html
   create src\main\webapp\app\account\password-reset\finish\password-reset-finish.component.html
   create src\main\webapp\app\layouts\profiles\profile.service.ts
   create src\main\webapp\app\layouts\profiles\profile-info.model.ts
   create src\main\webapp\app\layouts\main\main.component.ts
   create src\main\webapp\app\layouts\navbar\navbar.component.ts
   create src\main\webapp\app\layouts\navbar\navbar.route.ts
   create src\main\webapp\app\layouts\footer\footer.component.ts
   create src\main\webapp\app\layouts\error\error.route.ts
   create src\main\webapp\app\layouts\error\error.component.ts
   create src\main\webapp\app\layouts\navbar\active-menu.directive.ts
   create src\main\webapp\app\layouts\profiles\page-ribbon.scss
   create src\main\webapp\app\layouts\navbar\navbar.scss
   create src\main\webapp\app\home\home.scss
   create src\main\webapp\app\account\account.route.ts
   create src\main\webapp\app\account\account.module.ts
   create src\main\webapp\app\account\activate\activate.route.ts
   create src\main\webapp\app\account\activate\activate.component.ts
   create src\main\webapp\app\account\settings\settings.component.html
   create src\main\webapp\app\admin\configuration\configuration.component.html
   create src\main\webapp\app\admin\docs\docs.component.html
   create src\main\webapp\app\admin\health\health.component.html
   create src\main\webapp\app\admin\health\health-modal.component.html
   create src\main\webapp\app\account\activate\activate.service.ts
   create src\main\webapp\app\account\password\password.route.ts
   create src\main\webapp\app\account\password\password-strength-bar.component.ts
   create src\main\webapp\app\account\password\password.component.ts
   create src\main\webapp\app\account\password\password.service.ts
   create src\main\webapp\app\account\register\register.route.ts
   create src\main\webapp\app\account\register\register.component.ts
   create src\main\webapp\app\account\register\register.service.ts
   create src\main\webapp\app\account\password-reset\init\password-reset-init.route.ts
   create src\main\webapp\app\account\password-reset\init\password-reset-init.component.ts
   create src\main\webapp\app\account\password-reset\init\password-reset-init.service.ts
   create src\main\webapp\app\account\password-reset\finish\password-reset-finish.route.ts
   create src\main\webapp\app\account\password-reset\finish\password-reset-finish.component.ts
   create src\main\webapp\app\account\password-reset\finish\password-reset-finish.service.ts
   create src\main\webapp\app\account\settings\settings.route.ts
   create src\main\webapp\app\account\settings\settings.component.ts
   create src\main\webapp\app\admin\logs\logs.component.html
   create src\main\webapp\app\admin\metrics\metrics.component.html
   create src\main\webapp\app\account\password\password-strength-bar.scss
   create src\main\webapp\app\admin\audits\audits.component.html
   create src\main\webapp\app\admin\admin-routing.module.ts
   create src\main\webapp\app\admin\configuration\configuration.route.ts
   create src\main\webapp\app\admin\configuration\configuration.module.ts
   create src\main\webapp\app\admin\configuration\configuration.component.ts
   create src\main\webapp\app\admin\configuration\configuration.service.ts
   create src\main\webapp\app\admin\docs\docs.route.ts
   create src\main\webapp\app\admin\docs\docs.module.ts
   create src\main\webapp\app\admin\docs\docs.component.ts
   create src\main\webapp\app\admin\health\health.route.ts
   create src\main\webapp\app\admin\health\health.module.ts
   create src\main\webapp\app\admin\health\health.component.ts
   create src\main\webapp\app\admin\health\health-modal.component.ts
   create src\main\webapp\app\admin\health\health.service.ts
   create src\main\webapp\app\admin\logs\logs.route.ts
   create src\main\webapp\app\admin\logs\logs.module.ts
   create src\main\webapp\app\admin\user-management\user-management.component.html
   create src\main\webapp\app\admin\user-management\user-management-detail.component.html
   create src\main\webapp\app\admin\user-management\user-management-update.component.html
   create src\main\webapp\app\admin\user-management\user-management-delete-dialog.component.html
   create src\main\webapp\app\admin\logs\log.model.ts
   create src\main\webapp\app\admin\logs\logs.component.ts
   create src\main\webapp\app\admin\logs\logs.service.ts
   create src\main\webapp\app\admin\metrics\metrics.route.ts
   create src\main\webapp\app\admin\metrics\metrics.module.ts
   create src\main\webapp\app\admin\metrics\metrics.component.ts
   create src\main\webapp\app\admin\metrics\metrics.service.ts
   create src\main\webapp\app\admin\audits\audits.route.ts
   create src\main\webapp\app\admin\audits\audits.module.ts
   create src\main\webapp\app\admin\audits\audit-data.model.ts
   create src\main\webapp\app\admin\audits\audit.model.ts
   create src\main\webapp\app\admin\audits\audits.component.ts
   create src\main\webapp\app\admin\audits\audits.service.ts
   create src\main\webapp\app\admin\user-management\user-management.route.ts
   create src\main\webapp\app\admin\user-management\user-management.module.ts
   create src\main\webapp\app\admin\user-management\user-management.component.ts
   create src\main\webapp\app\shared\login\login.component.html
   create src\test\javascript\jest.conf.js
   create src\main\webapp\app\admin\user-management\user-management-detail.component.ts
   create src\main\webapp\app\admin\user-management\user-management-update.component.ts
   create src\main\webapp\app\admin\user-management\user-management-delete-dialog.component.ts
   create src\main\webapp\app\core\core.module.ts
   create src\main\webapp\app\core\login\login.service.ts
   create src\main\webapp\app\core\user\account.model.ts
   create src\main\webapp\app\core\icons\font-awesome-icons.ts
   create src\main\webapp\app\core\login\login.model.ts
   create src\main\webapp\app\core\login\login-modal.service.ts
   create src\main\webapp\app\core\user\user.service.ts
   create src\main\webapp\app\core\user\user.model.ts
   create src\main\webapp\app\core\language\language.constants.ts
   create src\main\webapp\app\shared\shared.module.ts
   create src\main\webapp\app\shared\shared-libs.module.ts
   create src\main\webapp\app\shared\constants\error.constants.ts
   create src\main\webapp\app\shared\constants\input.constants.ts
   create src\main\webapp\app\shared\constants\pagination.constants.ts
   create src\main\webapp\app\shared\util\request-util.ts
   create src\main\webapp\app\shared\alert\alert.component.ts
   create src\main\webapp\app\shared\alert\alert-error.component.ts
   create src\main\webapp\app\shared\alert\alert-error.model.ts
   create src\main\webapp\app\shared\util\datepicker-adapter.ts
   create src\main\webapp\app\shared\login\login.component.ts
   create src\main\webapp\app\shared\language\find-language-from-key.pipe.ts
   create src\main\webapp\app\core\auth\csrf.service.ts
   create src\main\webapp\app\core\auth\state-storage.service.ts
   create src\main\webapp\app\shared\auth\has-any-authority.directive.ts
   create src\main\webapp\app\core\auth\account.service.ts
   create src\main\webapp\app\core\auth\user-route-access-service.ts
   create src\main\webapp\app\core\auth\auth-jwt.service.ts
   create src\test\javascript\jest.ts
   create src\test\javascript\jest-global-mocks.ts
   create src\test\javascript\spec\test.module.ts
   create src\test\javascript\spec\app\admin\configuration\configuration.component.spec.ts
   create src\test\javascript\spec\app\admin\configuration\configuration.service.spec.ts
   create src\test\javascript\spec\app\admin\health\health.component.spec.ts
   create src\test\javascript\spec\app\admin\logs\logs.component.spec.ts
   create src\test\javascript\spec\app\admin\logs\logs.service.spec.ts
   create src\test\javascript\spec\app\admin\metrics\metrics.component.spec.ts
   create src\test\javascript\spec\app\admin\metrics\metrics.service.spec.ts
   create src\test\javascript\spec\app\core\user\account.service.spec.ts
   create src\test\javascript\spec\app\layouts\main\main.component.spec.ts
   create src\test\javascript\spec\helpers\spyobject.ts
   create src\test\javascript\spec\helpers\mock-account.service.ts
   create src\test\javascript\spec\helpers\mock-route.service.ts
   create src\test\javascript\spec\helpers\mock-login.service.ts
   create src\test\javascript\spec\helpers\mock-event-manager.service.ts
   create src\test\javascript\spec\helpers\mock-active-modal.service.ts
   create .gitignore
   create .gitattributes
   create src\test\javascript\spec\helpers\mock-state-storage.service.ts
   create .editorconfig
   create sonar-project.properties
   create src\test\javascript\spec\helpers\mock-alert.service.ts
   create src\test\javascript\spec\app\account\activate\activate.component.spec.ts
   create src\test\javascript\spec\app\account\password\password.component.spec.ts
   create src\test\javascript\spec\app\account\password\password-strength-bar.component.spec.ts
   create src\test\javascript\spec\app\account\password-reset\init\password-reset-init.component.spec.ts
   create src\test\javascript\spec\app\account\password-reset\finish\password-reset-finish.component.spec.ts
   create src\test\javascript\spec\app\account\register\register.component.spec.ts
   create src\test\javascript\spec\app\account\settings\settings.component.spec.ts
   create src\test\javascript\spec\app\shared\login\login.component.spec.ts
   create src\test\javascript\spec\app\shared\alert\alert-error.component.spec.ts
   create src\test\javascript\spec\app\admin\audits\audits.component.spec.ts
   create src\test\javascript\spec\app\admin\audits\audits.service.spec.ts
   create src\test\javascript\spec\app\admin\user-management\user-management.component.spec.ts
   create src\test\javascript\spec\app\admin\user-management\user-management-detail.component.spec.ts
   create src\test\javascript\spec\app\admin\user-management\user-management-update.component.spec.ts
   create src\main\resources\i18n\messages_en.properties
   create src\test\javascript\spec\app\admin\user-management\user-management-delete-dialog.component.spec.ts
   create src\test\javascript\spec\app\core\user\user.service.spec.ts
   create src\test\javascript\spec\helpers\mock-language.service.ts
   create README.md
   create src\main\webapp\i18n\en\audits.json
   create src\main\webapp\i18n\en\configuration.json
   create src\main\webapp\i18n\en\error.json
   create src\main\webapp\i18n\en\login.json
   create src\main\webapp\i18n\en\home.json
   create src\main\webapp\i18n\en\metrics.json
   create src\main\webapp\i18n\en\logs.json
   create src\main\webapp\i18n\en\password.json
   create src\main\webapp\i18n\en\register.json
   create src\main\webapp\i18n\en\sessions.json
   create src\main\webapp\i18n\en\settings.json
   create src\main\webapp\i18n\en\user-management.json
   create src\main\webapp\i18n\en\activate.json
   create src\main\webapp\i18n\en\global.json
   create src\main\webapp\i18n\en\health.json
   create src\main\webapp\i18n\en\reset.json


I'm all done. Running npm install for you to install the required dependencies. If this fails, try running the command yourself.


npm WARN deprecated core-js@1.2.7: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
npm WARN deprecated left-pad@1.3.0: use String.prototype.padStart()
npm WARN deprecated core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
npm WARN deprecated cross-spawn-async@2.2.5: cross-spawn no longer requires a build toolchain, use it instead

> husky@3.1.0 install C:\JHipster\myApp\node_modules\husky
> node husky install

husky > Setting up git hooks
husky > Done

> core-js@2.6.11 postinstall C:\JHipster\myApp\node_modules\babel-runtime\node_modules\core-js
> node -e "try{require('./postinstall')}catch(e){}"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> core-js-pure@3.6.4 postinstall C:\JHipster\myApp\node_modules\core-js-pure
> node -e "try{require('./postinstall')}catch(e){}"


> core-js@3.6.4 postinstall C:\JHipster\myApp\node_modules\global-agent\node_modules\core-js
> node -e "try{require('./postinstall')}catch(e){}"


> spawn-sync@1.0.15 postinstall C:\JHipster\myApp\node_modules\spawn-sync
> node postinstall


> yo@3.1.1 postinstall C:\JHipster\myApp\node_modules\yo
> yodoctor


Yeoman Doctor
Running sanity checks on your system

√ No .bowerrc file in home directory
√ Global configuration file is valid
√ NODE_PATH matches the npm root
√ No .yo-rc.json file in home directory
√ Node.js version
√ npm version
√ yo version

Everything looks all right!

> @angular/cli@8.3.20 postinstall C:\JHipster\myApp\node_modules\@angular\cli
> node ./bin/postinstall/script.js

? Would you like to share anonymous usage data with the Angular Team at Google under
Google’s Privacy Policy at https://policies.google.com/privacy? For more details and
how to change this setting, see http://angular.io/analytics. No

> core-js@3.5.0 postinstall C:\JHipster\myApp\node_modules\core-js
> node -e "try{require('./postinstall')}catch(e){}"


> husky@3.1.0 postinstall C:\JHipster\myApp\node_modules\husky
> opencollective-postinstall || exit 0

Thank you for using husky!
If you rely on this package, please consider supporting our open collective:
> https://opencollective.com/husky/donate


> ngx-infinite-scroll@8.0.1 postinstall C:\JHipster\myApp\node_modules\ngx-infinite-scroll
> opencollective-postinstall || exit 0

Thank you for using ngx-infinite-scroll!
If you rely on this package, please consider supporting our open collective:
> https://opencollective.com/ngx-infinite-scroll/donate

npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN @angular/core@8.2.14 requires a peer of zone.js@~0.9.1 but none is installed. You must install peer dependencies yourself.
npm WARN bootstrap@4.4.1 requires a peer of jquery@1.9.1 - 3 but none is installed. You must install peer dependencies yourself.
npm WARN bootstrap@4.4.1 requires a peer of popper.js@^1.16.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules\fork-ts-checker-webpack-plugin\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

added 2256 packages from 1119 contributors and audited 918133 packages in 239.497s

45 packages are looking for funding
  run `npm fund` for details

found 1 high severity vulnerability
  run `npm audit fix` to fix them, or `npm audit` for details
Application successfully committed to Git from C:\JHipster\myApp.

If you find JHipster useful consider sponsoring the project https://www.jhipster.tech/sponsors/

Server application generated successfully.

Run your Spring Boot application:
./mvnw (mvnw if using Windows Command Prompt)

Client application generated successfully.

Start your Webpack development server with:
 npm start


> mmtechsoftjhipster@0.0.1-SNAPSHOT cleanup C:\JHipster\myApp
> rimraf target/classes/static/ target/classes/aot

INFO! Congratulations, JHipster execution is complete!

C:\JHipster\myApp>npm start

> mmtechsoftjhipster@0.0.1-SNAPSHOT start C:\JHipster\myApp
> npm run webpack:dev


> mmtechsoftjhipster@0.0.1-SNAPSHOT webpack:dev C:\JHipster\myApp
> npm run webpack-dev-server -- --config webpack/webpack.dev.js --inline --hot --port=9060 --watch-content-base --env.stats=minimal


> mmtechsoftjhipster@0.0.1-SNAPSHOT webpack-dev-server C:\JHipster\myApp
> node --max_old_space_size=4096 node_modules/webpack-dev-server/bin/webpack-dev-server.js "--config" "webpack/webpack.dev.js" "--inline" "--hot" "--port=9060" "--watch-content-base" "--env.stats=minimal"

Webpack: Starting ...
Starting type checking service...
Webpack: Starting ...

  √ Compile modules
  > Build modules (1%)
    → 3 of 3 modules ::
[HPM] Proxy created: [
  '/api',
  '/services',
  '/management',
  '/swagger-resources',
  '/v2/api-docs',
  '/h2-console',
  '/auth'
Webpack: Starting ...

  √ Compile modules
  √ Build modules
  √ Optimize modules
  √ Emit files

Webpack: Finished after 21.773 seconds.



 DONE  Compiled successfully in 21800ms                                                                                                                                                                  7:58:57 PM

No type errors found
Version: typescript 3.4.5
Time: 6150ms
i ｢wdm｣:    623 modules
i ｢wdm｣: Compiled successfully.
[Browsersync] Proxying: http://localhost:9060
[Browsersync] Access URLs:
 -------------------------------------
       Local: http://localhost:9000
    External: http://192.168.56.1:9000
 -------------------------------------
          UI: http://localhost:3001
 UI External: http://localhost:3001
 -------------------------------------
[HPM] Error occurred while trying to proxy request /api/account from localhost:9000 to http://localhost:8080 (ECONNREFUSED) (https://nodejs.org/api/errors.html#errors_common_system_errors)
[HPM] Error occurred while trying to proxy request /management/info from localhost:9000 to http://localhost:8080 (ECONNREFUSED) (https://nodejs.org/api/errors.html#errors_common_system_errors)
[HPM] Error occurred while trying to proxy request /api/account from localhost:9000 to http://localhost:8080 (ECONNREFUSED) (https://nodejs.org/api/errors.html#errors_common_system_errors)
[HPM] Error occurred while trying to proxy request /management/info from localhost:9000 to http://localhost:8080 (ECONNREFUSED) (https://nodejs.org/api/errors.html#errors_common_system_errors)
[HPM] Error occurred while trying to proxy request /api/authenticate from localhost:9000 to http://localhost:8080 (ECONNREFUSED) (https://nodejs.org/api/errors.html#errors_common_system_errors)
[HPM] Error occurred while trying to proxy request /api/authenticate from localhost:9000 to http://localhost:8080 (ECONNREFUSED) (https://nodejs.org/api/errors.html#errors_common_system_errors)
[HPM] Error occurred while trying to proxy request /api/authenticate from localhost:9000 to http://localhost:8080 (ECONNREFUSED) (https://nodejs.org/api/errors.html#errors_common_system_errors)
[HPM] Error occurred while trying to proxy request /api/authenticate from localhost:9000 to http://localhost:8080 (ECONNREFUSED) (https://nodejs.org/api/errors.html#errors_common_system_errors)
[HPM] Error occurred while trying to proxy request /api/account from localhost:9000 to http://localhost:8080 (ECONNREFUSED) (https://nodejs.org/api/errors.html#errors_common_system_errors)
[HPM] Error occurred while trying to proxy request /management/info from localhost:9000 to http://localhost:8080 (ECONNREFUSED) (https://nodejs.org/api/errors.html#errors_common_system_errors)
[HPM] Error occurred while trying to proxy request /api/register from localhost:9000 to http://localhost:8080 (ECONNREFUSED) (https://nodejs.org/api/errors.html#errors_common_system_errors)
[HPM] Error occurred while trying to proxy request /management/info from localhost:9060 to http://localhost:8080 (ECONNREFUSED) (https://nodejs.org/api/errors.html#errors_common_system_errors)
[HPM] Error occurred while trying to proxy request /api/account from localhost:9060 to http://localhost:8080 (ECONNREFUSED) (https://nodejs.org/api/errors.html#errors_common_system_errors)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

