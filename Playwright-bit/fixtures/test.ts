import { test as base } from "@playwright/test";

export const test = base.extend<{ persistAuthentication: void }>({
  persistAuthentication: [async ({ context, storageState }, use) => {
    await use();

    // Preserve refreshed cookies for the next isolated test context.
    // This shared account runs with one worker in playwright.config.ts.
    if (typeof storageState !== "string") return;
    const cookies = await context.cookies();
    const authorization = cookies.find(cookie => cookie.name === "Authorization");
    if (authorization && (authorization.expires === -1 || authorization.expires > Date.now() / 1000)) {
      await context.storageState({ path: storageState });
    }
  }, { auto: true }],
});

export { expect } from "@playwright/test";
