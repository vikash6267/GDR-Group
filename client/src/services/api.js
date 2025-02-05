const BASE_URL = process.env.REACT_APP_BASE_URL
export const admin = {
    CREATE_GALLERY: BASE_URL + "/gallery/create",
    IMAGE_UPLOAD: BASE_URL + "/image/multi",
    CREATE_PRODUCT: BASE_URL + "/product/create",
    GET_ALL_PRODUCT: BASE_URL + "/product/getAll",
    DELETE_PRODUCT: BASE_URL + "/product/delete",
}