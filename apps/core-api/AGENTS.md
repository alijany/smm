# Core API

NestJS backend service providing RESTful APIs for authentication, user management, notifications, and file storage.

## Architecture Overview

Modular NestJS architecture — each feature is an isolated module, designed to make future migration to microservices straightforward.

### Key Features

- **Authentication & Authorization**: JWT-based auth with OTP verification and role-based access control
- **User Management**: User profiles, account verification, role assignments
- **Notification System**: Multi-channel notifications (SMS, Email, Push)
- **File Storage**: S3-compatible storage with presigned URL support
- **Background Jobs**: Redis + BullMQ for async job processing

## Technology Stack

- **Framework**: NestJS with TypeScript
- **Database**: PostgreSQL with MikroORM
- **Cache/Queue**: Redis + BullMQ
- **Authentication**: Passport.js with JWT
- **File Storage**: AWS S3 SDK (MinIO for dev)
- **Testing**: Jest, Playwright

## Module Structure

Each module follows this layout:

```
src/<feature>/
  <feature>.module.ts      NestJS module and DI wiring
  <feature>.controller.ts  HTTP request handlers
  <feature>.service.ts     business logic
  <feature>.entity.ts      MikroORM entity definition
  dtos/                    request/response validation DTOs
  # Optional sub-folders based on module needs:
  providers/               custom providers
  strategies/              Passport strategies
  guards/                  auth/role guards
  channels/                notification delivery channels
```

### Core Modules

- **`auth/`**: OTP-based authentication, JWT token management, role-based access control — [details](src/auth/README.md)
- **`user/`**: User registration, profile management, account verification
- **`notification/`**: Multi-channel notifications (SMS, Email, Push) — [details](src/notification/README.md)
- **`storage/`**: S3-compatible file storage with presigned URLs
- **`roles/`**: Role definitions and permission management
- **`sms/`**: SMS provider integration

### Shared Libraries (`src/libs/`)

Always use these — don't reimplement:

- `orm/orm.entity.base.ts` — base entity with common fields (id, createdAt, updatedAt, soft-delete)
- `orm/orm.provider.base.ts` — DI providers for MikroORM entity managers
- `orm/orm.repository.service.base.ts` — reusable CRUD and transaction helpers
- `orm/orm.service.migration.ts` — migration generation and execution
- `orm/orm.types.factory.ts` — shared DB/TypeScript type helpers

## Environment Variables

Copy `apps/core-api/.env.example` → `apps/core-api/.env`.

## Commands

```bash
pnpm --filter core-api start:dev     # dev server with watch mode
pnpm --filter core-api build         # compile to dist/
pnpm --filter core-api lint          # ESLint check
pnpm --filter core-api migration:create  # generate MikroORM migration
pnpm --filter core-api migration:up      # run pending migrations
```

Tests are currently unstable — use `lint` + `build` as the verification loop.

## API

- **Base URL**: `http://localhost:4000/api/v1`
- **Authentication**: `Authorization: Bearer <jwt-token>`
- **Content-Type**: `application/json`

## Database Operations

Extend the base classes from `src/libs/orm/` in your entities and services. For schema changes always generate a migration — do not modify the schema directly.

```typescript
// Extend base entity
import { BaseEntity } from '@/libs/orm/orm.entity.base';

@Entity()
export class Item extends BaseEntity {
  @Property()
  name: string;
}
```

## File Naming Conventions

- Lowercase with dots as separators
- `<feature>.<role>.ts` pattern: `user.service.ts`, `user.entity.ts`, `user.controller.ts`
- Test files: `<feature>.spec.ts` or `<feature>.test.ts`
- DTOs: `create-item.dto.ts`, `update-item.dto.ts`
- Interfaces: `jwt-payload.interface.ts`
- Types: `notification-channel.type.ts`
- Index files: `index.ts` as module entry point

## Error Handling

Extend `HttpException` for custom application errors:

```typescript
import { HttpException, HttpStatus } from '@nestjs/common';

export class ItemNotFoundException extends HttpException {
  constructor(id: string) {
    super(`Item ${id} not found`, HttpStatus.NOT_FOUND);
  }
}
```

Use NestJS built-in exceptions (`BadRequestException`, `UnauthorizedException`, etc.) for standard HTTP errors. Implement global exception filters to standardize error response shapes.

## Adding a New Module

1. Create `src/<feature>/` with the standard files
2. Define entity extending `BaseEntity` from `src/libs/orm/orm.entity.base.ts`
3. Create DTOs with `class-validator` decorators
4. Implement service injecting `EntityManager` or extending the base repository service
5. Register the module in `src/app.module.ts`
6. Generate a migration: `pnpm --filter core-api migration:create`

## Code Organization

- Each module is self-contained — import only from `src/libs/` or other modules' exported services
- Use DTOs for all request/response boundaries
- Use guards for authentication (`JwtAuthGuard`) and authorization (`RolesGuard`)
- Use `@Public()` decorator on endpoints that skip JWT auth
- Use `@CurrentUser()` decorator to access the authenticated user in controllers
