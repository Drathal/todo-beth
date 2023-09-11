import Html from '@kitajs/html'

export const LoadApp = ({ children }: Html.PropsWithChildren) => (
    <body
        class="flex w-full h-screen justify-center items-center"
        hx-get="/todos"
        hx-swap="innerHTML"
        hx-trigger="load"
    >
        {children}
    </body>
)
