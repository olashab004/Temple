# security_spec.md

This specification details the security rules, invariants, and testing strategy for our Firebase architecture.

## 1. Data Invariants

### Temples
* **Read Access**: Authenticated or unauthenticated users can read/list any Temple document (temples are public).
* **Write Access**: Restricted strictly to admin users.
* **Bootstrapped Admin**: A user whose email is verified and matches `sahilola44@gmail.com`.
* **Structural validations**:
  * `id` must be a valid ID matching the document ID.
  * Fields like `name`, `deity`, `history`, `timings`, `dressCode`, `image` must be strings within safe size limits.
  * `location` must be a map with `state` and `city` as strings.
  * `nearby` must be a map with `accommodation` and `transport` as strings.
  * `rituals` and `festivals` must be lists of strings with maximum sizes.

---

## 2. The "Dirty Dozen" Payloads (Malicious Drafts)

Here are 12 specific payloads representing forbidden attempts to bypass or corrupt our database:

1. **Unauthenticated Write**: Write to a temple doc with no credentials.
2. **Standard User Write**: Non-admin authenticated user attempts to write to `/temples/{templeId}`.
3. **Admin Identity Spoofing**: A user claims email `sahilola44@gmail.com` but has `email_verified: false`.
4. **Id Mismatch**: Inserting or updating a temple document where payload `id` doesn't match the document's path ID.
5. **String Size Exhaustion**: A malicious script attempts to write a 10MB string to a text field (e.g. `history`).
6. **Array Overflow**: Writing a list of `rituals` containing 10,000 items.
7. **Invalid Map Structure**: `location` misses the mandatory `state` property.
8. **Shadow Field Injection**: Inserting a hidden ghost field like `isVerified: true` when it's not part of the schema.
9. **Type Coercion Attack**: Supplying an integer for `name` or a boolean for `history`.
10. **Empty Name**: Standard admin update but setting `name` with empty string or blank space.
11. **Inject Malicious ID**: Bypassing with an ID containing special unsafe/exploit characters.
12. **Malformed Array Elements**: Injecting an object instead of strings under the `rituals` list.

---

## 3. Test Runner Specification (`firestore.rules.test.ts`)

Below is the design of the unit tests validating the "Dirty Dozen" payload rejections:

```typescript
import { assertFails, assertSucceeds, initializeTestEnvironment } from "@firebase/rules-unit-testing";

// Standard Firestore rules test suite verifying permission exclusions
// and confirming malicious payload blocks.
```
