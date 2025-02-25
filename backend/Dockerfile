FROM eclipse-temurin:17-jdk AS build
WORKDIR /workspace/app

# Copy
COPY pom.xml .

# Copy source code
COPY . .

#
RUN chmod +x ./mvnw


# Build the application with Maven
RUN ./mvnw package -DskipTests || \
    (apt-get update && \
     apt-get install -y maven && \
     mvn package -DskipTests)

# Create a smaller runtime image
FROM eclipse-temurin:17-jre
VOLUME /tmp
WORKDIR /app

# Copy the built jar file from the build stage
COPY --from=build /workspace/app/target/*.jar app.jar

# Make port available to the world outside this container
EXPOSE 5000

# Run the application with environment variables
ENTRYPOINT ["java", "-jar", "app.jar"]