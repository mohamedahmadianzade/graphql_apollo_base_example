import { DataLayer } from "./dataLayer.js"
let dataLayer = new DataLayer();
export const resolvers = {
    Query: {
        person: () => {
            return dataLayer.getPerson()
        }
    }

}