import { GET_ORDER_LIST, GET_ORDER_DETAILS , UPDATE_ORDER_STATUS } from '../actionConstants';

const onGetOrderList = (data) => ({
    type: GET_ORDER_LIST,
    data
});
const onGetOrderDetails=(data)=>({
    type:GET_ORDER_DETAILS,
    data
});
const onUpdateOrderStatus=(data)=>({
    type:UPDATE_ORDER_STATUS,
    data
})

export {onGetOrderDetails,onGetOrderList,onUpdateOrderStatus};
