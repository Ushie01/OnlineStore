export default function validatePostDetail(values) {
    let error = {};

    // if (!values.size) {
    //     error.size = 'Size Required' 
    // }

    if (!values.quanlity) {
        error.quanlity = 'Quantity Required'
    }

    return error;
}