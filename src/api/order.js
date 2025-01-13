import request from '@/utils/request'
// mode:cart=>obj:{cartIds}
// mode:cart=>obj:{goodsIds godsNum goodsSkuId}
export const checkOrder = (mode, obj) => {
  return request.get('/checkout/order', {
    params: {
      mode, // cart buynow
      delivery: 0, // 10快递配送  20 门店自取
      couponId: 0, // 优惠券id 传0 不使用
      isUsePoints: 0, // 积分 传0 不使用
      ...obj// 将传递过来的参数对象，动态展开
    }
  })
}
// 提交订单
export const submitOrder = (mode, obj) => {
  return request.post('/checkout/submit', {
    mode,
    delivery: 10, // 物流方式  配送方式 (10快递配送 20门店自提)
    couponId: 0, // 优惠券 id
    payType: 10, // 余额支付
    isUsePoints: 0, // 是否使用积分
    // mode:cart=>obj:{cartIds remark}
    // mode:cart=>obj:{goodsIds godsNum goodsSkuId}
    ...obj
  })
}
// 订单列表
export const getMyOrderList = (dataType, page) => {
  return request.get('/order/list', {
    params: {
      dataType,
      page
    }
  })
}
