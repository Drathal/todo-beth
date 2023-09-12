import Html from '@kitajs/html'

export const LoadApp = ({ children }: Html.PropsWithChildren) => (
    <body
        hx-get="/todos"
        hx-swap="innerHTML"
        hx-trigger="load"
        hx-boost="true"
        class="bg-gray-50 dark:bg-gray-900"
    >
        {children}
    </body>
)
