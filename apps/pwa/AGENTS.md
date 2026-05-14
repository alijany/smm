# PWA — Frontend Application

Next.js 15 progressive web application with domain-driven architecture, SSR/RSC support, and built-in auth.

## Architecture Overview

- **Domain-based organization**: Each business domain is self-contained under `src/app/<domain>/`
- **Server/Client component separation**: Optimized for Next.js App Router
- **Type-safe API layer**: All HTTP via the shared fetcher in `src/libs/api/`
- **SSR-first**: Server Components fetch initial data; SWR handles client-side hydration
- **Role-based auth**: JWT + OTP with multi-role support and route protection

## Project Structure

```
src/
  app/            Next.js App Router — domain containers and pages
  components/     Shared components reused across 2+ domains
    auth/         Authentication system (global by design)
    dashboard/    Dashboard shell (navbar, sidebar)
  ui/             Design system (atoms, molecules, organisms)
  libs/           Shared utilities
    api/          Fetcher, SWR helpers, response types
    format/       Formatting utilities
    style/        Style helpers
  assets/         Static assets
```

Domain-local code stays inside `src/app/<domain>/`. Only move code to `src/libs/` or `src/components/` when it is used by two or more domains.

## File Naming Convention

Pattern: `domain.type.purpose.ext`

```
# Components
auth.component.login-form.tsx
dashboard.component.stats-card.tsx
items.component.list.tsx

# Services (API calls)
items.service.list.ts
items.service.detail.ts

# Hooks
items.hook.use-list.ts
items.hook.use-detail.ts

# Types
items.types.item.ts
api.types.response.ts

# Utilities
date.util.format.ts
validation.util.form.ts

# Constants
auth.constants.roles.ts
api.constants.endpoints.ts
```

## Development Workflow

### Adding a New Domain

```bash
mkdir -p src/app/items
touch src/app/items/page.tsx                           # route entry (Server Component)
touch src/app/items/items.types.item.ts                # domain types
touch src/app/items/items.service.list.ts              # API service
touch src/app/items/items.hook.use-list.ts             # SWR hook
touch src/app/items/items.component.list-server.tsx    # Server Component
touch src/app/items/items.component.list-client.tsx    # Client Component
```

### API Integration Pattern

```typescript
// 1. Define domain types
// src/app/items/items.types.item.ts
export interface Item {
  id: string;
  name: string;
}

// 2. Create service using shared fetcher
// src/app/items/items.service.list.ts
import { fetcher } from '@/libs/api/fetcher';
export const itemsService = {
  getAll: () => fetcher<Item[]>('/items'),
  getById: (id: string) => fetcher<Item>(`/items/${id}`),
};

// 3. Create SWR hook
// src/app/items/items.hook.use-list.ts
import useSWR from 'swr';
export function useItems(initialData?: Item[]) {
  return useSWR('/items', itemsService.getAll, {
    fallbackData: initialData,
    revalidateOnMount: !initialData,
  });
}

// 4. Server Component (SSR)
// src/app/items/items.component.list-server.tsx
export async function ItemsListServer() {
  const items = await itemsService.getAll();
  return <ItemsListClient initialData={items} />;
}

// 5. Client Component (interactivity)
// src/app/items/items.component.list-client.tsx
'use client';
export function ItemsListClient({ initialData }: { initialData: Item[] }) {
  const { data, isLoading } = useItems(initialData);
  // ...
}
```

## Authentication

The auth system (`src/components/auth/`) is global and included in every project.

### Auth Context

```tsx
// Already in root layout — no setup needed
import { AuthProvider } from '@/components/auth/auth.context.provider';
```

### Using Auth in Components

```tsx
'use client';
import { useAuth } from '@/components/auth/auth.context.provider';

export function MyComponent() {
  const { user, isAuthenticated, isLoading, logout, hasRole } = useAuth();
  // ...
}
```

### Route Protection

```tsx
// Any authenticated user
import ProtectedRoute from '@/components/auth/auth.component.protected-route';

export default function DashboardPage() {
  return <ProtectedRoute><DashboardContent /></ProtectedRoute>;
}

// Specific roles only
import RoleProtectedRoute from '@/components/auth/auth.component.role-protected-route';
import { Role } from '@/components/auth/auth.constants.roles';

export default function AdminPage() {
  return (
    <RoleProtectedRoute allowedRoles={[Role.ADMIN]}>
      <AdminContent />
    </RoleProtectedRoute>
  );
}
```

### Role System

```typescript
export enum Role {
  ADMIN = 'admin',
  USER = 'user',
  MODERATOR = 'moderator',
  GUEST = 'guest',
}
```

### Auth API Methods

```typescript
const { sendOtp, verifyOtpAndLogin, logout, refreshProfile } = useAuth();

await sendOtp('09123456789');
await verifyOtpAndLogin('09123456789', '123456');
logout();
```

## SSR / RSC Strategy

- **Server Components**: initial data fetching, SEO, no client JS overhead
- **Client Components**: user interactions, real-time updates, hooks
- **SWR**: client-side caching with server-side `fallbackData` for instant first render
- Mark Client Components with `'use client'` at the top; default to Server Components

## Key Technologies

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data Fetching**: SWR + custom fetcher
- **Forms**: React Hook Form + Zod
- **Auth**: Custom JWT/OTP with RBAC
- **Icons**: Tabler Icons, Hugeicons
- **Carousel**: Embla Carousel

## Commands

```bash
pnpm --filter pwa dev          # dev server on :8000
pnpm --filter pwa build        # production build
pnpm --filter pwa lint         # ESLint check
pnpm --filter pwa type-check   # TypeScript check
```

## Troubleshooting

- **Hydration errors**: check Server/Client component boundaries — data must be serializable
- **SWR cache issues**: verify SWR key consistency between server and client
- **Type errors**: ensure domain types are imported from the correct domain — avoid cross-domain type imports
- **Build errors**: check for circular dependencies between domains
- **Auth token issues**: clear localStorage and re-login; check JWT expiration settings
- **Role errors**: verify the user's invitation status is `accepted` and the role is assigned
