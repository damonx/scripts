#!/bin/bash

# Check if the script received an argument
if [ -z "$1" ]; then
    echo "Usage: $0 <gradle-task>"
    echo "Example: $0 :micro-services:utility-services:search-service-v2:build"
    exit 1
fi

# Store the input Gradle task
GRADLE_TASK=$1

# Run the Gradle task
echo "Running Gradle task: $GRADLE_TASK..."
./gradlew "$GRADLE_TASK" && fortune | ponysay
