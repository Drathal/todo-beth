import Elysia from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import * as elements from "typed-html";

import { BaseHtml } from "./components/BaseHtml";
import { LoadApp } from "./components/LoadApp";

const app = new Elysia()
    .use(html())
    .use(staticPlugin({ prefix: '/public' }))
    /* @ts-ignore - ignore until elysiajs/html is fixed */
    .get("/", ({ html })  => 
        html(
            <BaseHtml>
                <LoadApp>loading...</LoadApp>
            </BaseHtml>
        )
    )
    .listen(3000);

console.log(`🦊 Server is running at http://${app.server?.hostname}:${app.server?.port}`);