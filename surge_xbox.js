#!name=xbox购物车
#!desc=购物车
#!category=xbox

[Body Rewrite]
http-request https://www.microsoft.com/store/purchase/purchaseui/(cart|checkout) market=[^&amp;]* market=NG

[Script]
cart = type=http-request,pattern=^https://cart.production.store-web.dynamics.com/v\d+\.\d+/cart/loadCart,requires-body=1,max-size=0,binary-body-mode=0,timeout=90,script-path=https://raw.githubusercontent.com/iidamie/xbox/main/cart.js,script-update-interval=0

[MITM]
hostname = %APPEND% *.microsoft.com,*.dynamics.com
