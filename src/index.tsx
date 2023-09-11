import Elysia from 'elysia'
import { html } from '@elysiajs/html'
import Html from '@kitajs/html'
import { staticPlugin } from '@elysiajs/static'


import { Index } from './fragments/index'

const app = new Elysia()
    .use(html())
    .use(staticPlugin({ prefix: '/public' }))
    /* @ts-ignore - ignore until elysiajs/html is fixed */
    .get('/', ({ html })  => html(<Index />))
    .listen(3000)

console.log(`🦊 Server is running at http://${app.server?.hostname}:${app.server?.port}`)
