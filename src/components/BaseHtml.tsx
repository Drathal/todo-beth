import * as elements from 'typed-html'

export const BaseHtml = ({ children }: elements.Children) => (
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
            <title>THE BETH STACK</title>
            <script src="https://unpkg.com/htmx.org@1.9.5"></script>
            <link href="public/index.css" rel="stylesheet"/>
        </head>
        {children}
    </html>
)