// JsFromRoutes CacheKey 4f46bd57a92850cb7a34351786fe11a4
//
// DO NOT MODIFY: This file was automatically generated by JsFromRoutes.
import { definePathHelper } from '@js-from-routes/axios'

export default {
  list: definePathHelper('get', '/tasks'),
  create: definePathHelper('post', '/tasks'),
  update: definePathHelper('patch', '/tasks/:id'),
}
