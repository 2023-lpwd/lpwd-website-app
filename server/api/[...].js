import { createRouter, defineEventHandler, useBase } from 'h3'
import * as ProductController from '@/server/controllers/products'

const router = createRouter()

/**
 * Products routes
 */
router.get('/products', defineEventHandler(async () => {
    return await ProductController.find()
}))

router.get('/products/:slug', defineEventHandler( async ({ req, res, context}) => {
    const { params } = context
    return await ProductController.findOne(params.slug)
}))

/**
 * Any other routes
 */
router.get('/custom', defineEventHandler(async () => {
	return { foo: 'bar' }
}))

export default useBase('/api', router.handler);
