FROM openjdk:22-jdk-slim

WORKDIR /app

COPY . /app
RUN ./mvnw clean package

COPY target/backend.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
