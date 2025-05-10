import type { ServerBuild } from '@remix-run/cloudflare';
import { createPagesFunctionHandler } from '@remix-run/cloudflare-pages';

// This tells TypeScript that this module exists at runtime even if it can't find it during compilation
// @ts-ignore: Build directory not available during type checking
declare module '../build/server' {
  const server: ServerBuild;
  export = server;
}

export const onRequest: PagesFunction = async (context) => {
  // @ts-ignore: Build directory exists at runtime but not during type checking
  const serverBuild = (await import('../build/server')) as unknown as ServerBuild;

  const handler = createPagesFunctionHandler({
    build: serverBuild,
  });

  return handler(context);
};
