#!/bin/bash

# Create the tech-icons directory if it doesn't exist
mkdir -p public/tech-icons

# Download icons from Simple Icons CDN
declare -A icons=(
  ["react"]="https://cdn.simpleicons.org/react"
  ["typescript"]="https://cdn.simpleicons.org/typescript"
  ["javascript"]="https://cdn.simpleicons.org/javascript"
  ["java"]="https://cdn.simpleicons.org/java"
  ["aws"]="https://cdn.simpleicons.org/amazonaws"
  ["nodejs"]="https://cdn.simpleicons.org/nodedotjs"
  ["html5"]="https://cdn.simpleicons.org/html5"
  ["css3"]="https://cdn.simpleicons.org/css3"
  ["git"]="https://cdn.simpleicons.org/git"
  ["docker"]="https://cdn.simpleicons.org/docker"
  ["mongodb"]="https://cdn.simpleicons.org/mongodb"
  ["postgresql"]="https://cdn.simpleicons.org/postgresql"
)

for icon in "${!icons[@]}"; do
  curl -o "public/tech-icons/${icon}.svg" "${icons[$icon]}"
  echo "Downloaded ${icon}.svg"
done

echo "All icons have been downloaded!"
