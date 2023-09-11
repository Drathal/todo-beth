import '@kitajs/html/htmx'
import Elysia from 'elysia'
import { html } from '@elysiajs/html'
import { staticPlugin } from '@elysiajs/static'

import { Index } from './fragments/index'
import { Todos } from './fragments/todos'

const app = new Elysia()
    .use(html())
    .use(staticPlugin({ prefix: '/public' }))
    .get('/', Index)
    .get('/todos', Todos)
    .listen(3000)

console.log(
    `🦊 Server is running at http://${app.server?.hostname}:${app.server?.port}`
)
