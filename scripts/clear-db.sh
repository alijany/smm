#!/usr/bin/env bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="$SCRIPT_DIR/../.devcontainer/.env.example"

# Load DB credentials from devcontainer env file
if [ -f "$ENV_FILE" ]; then
  # shellcheck disable=SC2046
  export $(grep -E '^(POSTGRES_USER|POSTGRES_PASSWORD|POSTGRES_DB|POSTGRES_PORT)=' "$ENV_FILE" | xargs)
fi

DB_USER="${POSTGRES_USER:-postgres}"
DB_PASS="${POSTGRES_PASSWORD:-pass123}"
DB_NAME="${POSTGRES_DB:-app}"

# Find the running Postgres container (the devcontainer db service)
DB_CONTAINER=$(docker ps -q --filter "label=com.docker.compose.service=db" --filter "status=running" | head -1)

if [ -z "$DB_CONTAINER" ]; then
  echo "Error: no running 'db' container found. Is the devcontainer up?"
  exit 1
fi

run_psql() {
  docker exec -e PGPASSWORD="$DB_PASS" "$DB_CONTAINER" \
    psql -U "$DB_USER" -d postgres -c "$1"
}

echo "Dropping database '$DB_NAME'..."
run_psql "SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = '$DB_NAME' AND pid <> pg_backend_pid();"
run_psql "DROP DATABASE IF EXISTS \"$DB_NAME\";"

echo "Recreating database '$DB_NAME'..."
run_psql "CREATE DATABASE \"$DB_NAME\";"

echo ""
echo "Done — '$DB_NAME' has been cleared. Restart the API to re-run migrations."
