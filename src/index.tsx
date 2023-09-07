import Elysia from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import * as elements from "typed-html";

const app = new Elysia()
    .use(html())
    .use(staticPlugin({ prefix: '/public' }))
    /* @ts-ignore - ignore until elysiajs/html is fixed */
    .get("/", ({ html })  => 
        html(
            <BaseHtml>
                <body
                class="flex w-full h-screen justify-center items-center"
                hx-get="/todos"
                hx-swap="innerHTML"
                hx-trigger="load"
                >loading...</body>
            </BaseHtml>
        )
    )
    .listen(3000);

console.log(`🦊 Server is running at http://${app.server?.hostname}:${app.server?.port}`);

const BaseHtml = ({ children }: elements.Children) => (
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
            <title>THE BETH STACK</title>
            <script src="https://unpkg.com/htmx.org@1.9.3"></script>
            <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
            <link href="public/index.css" rel="stylesheet"/>
        </head>
        {children}
    </html>
);