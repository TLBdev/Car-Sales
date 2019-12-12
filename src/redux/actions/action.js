export const addFeature = (payload) => {
    return { type: 'ADD_ITEM', payload: payload }
}
export const removeFeature = (payload) => {
    return { type: 'REMOVE_ITEM', payload: payload }
}