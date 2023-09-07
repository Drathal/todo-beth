import * as elements from "typed-html";

export const LoadApp = ({ children }: elements.Children) => (
    <body
    class="flex w-full h-screen justify-center items-center"
    hx-get="/todos"
    hx-swap="innerHTML"
    hx-trigger="load"
    >{children}</body>
);