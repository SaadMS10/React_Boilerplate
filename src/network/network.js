import { doPost, doPatch, doGet, doPostProfilePictureUpload, doPostCommonApi, doGetCommonApi, doPut, doPostSignup, doDelete } from "./config";

/*
**IMPORTANT! READ IT
 If API contains basic token like auth API's or public APIs then dont send any token
 example:
 return doPost(`contact-us?lang=${lang}`, data)
*\




// // image upload
// export const imageUpload = (data, token) => {
//     return doPostProfilePictureUpload(`user/upload-image`, data, token)
// }

//Sample Patch Request Method
// export const doPostUserSelectedCategories = (data, token) => {
//     console.warn(`in network`, data)
//     return doPatch(`category/add-user-categories`, data, token)
// }

//Sample Put Request Method
// export const changePassword = (data, token) => {
//     console.warn(`in network`, data)
//     return doPut(`password?lang=${lang}`, data, token)
// }

//Sample Post Request Method
// export const doPostContactUS = (token, data) => {
//     console.warn(`contact us data`, data);
//     return doPost(`contact-us?lang=${lang}`, data, token)
// }

//sample Get request method
// export const doGetSearchMentors = (token, query) => {
//     console.warn(`Api Token `, token)
//     return doGet(`mentor/search?search=${query}`, token)
// }

