import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/user/signup', (c) => {
  return c.text('signup route')
})

app.post('/api/v1/user/signin', (c) => {
  return c.text('signin route')
})

app.post('/api/v1/blog', (c) => {
  return c.text('blog route')
})

app.put('/api/v1/blog', (c) => {
  return c.text('edit blog route')
})

app.get('/api/v1/blog/:id', (c) => {
  const id = c.req.param('id');
  return c.text('get blog route')
})

app.post('/api/v1/blog/bulk', (c) => {
  return c.text('blog bulk route')
})



export default app
