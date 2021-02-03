import { CUSTOMER_META_DATA } from '../actionConstants';

const onGetCustomerMetaData = (data) => ({
    type: CUSTOMER_META_DATA,
    data
});

export { onGetCustomerMetaData };
