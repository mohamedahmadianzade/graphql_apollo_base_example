import { RESTDataSource } from '@apollo/datasource-rest';
export class ProductDataSource extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://dummyjson.com/'
    }

    async getProducts({ productId }) {
        let query = "products"
        if (productId)
            query += `/${productId}`
        let res = await this.get(query)
        return res.products ? res.products : [res]

    }

}