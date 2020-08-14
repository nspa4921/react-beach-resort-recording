import * as contentful from 'contentful'

const SPACE_ID = '123456'
const ACCESS_TOKEN = 'ABCGDEFG'

const contentclient = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})
export default contentclient