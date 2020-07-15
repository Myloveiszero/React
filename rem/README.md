em: 相对于自己的font-size (相对于父元素的font-size 是错误的)
rem: HTML的font-size
1.  font-size 设置多少
2.  如何由设计稿快速还原

DPR: device piex ratio 设备像素比  设备的真实像素 / 1px = 2 || 3
css 1px 在不同的设备上面， 渲染出来的像素是不一样的 2px (iphone6) 3(iphone7)

想要 1px 
1.  meta init-cale : 0.5 所有元素缩小0.5 倍
    写元素宽高 按照扩大两倍之后的写
    一个元素原本 20 * 20
    必须写成 40 * 40
    所以我们设计稿 就需要 扩大两倍， 这样量取的是多少就是多少

2.  等比缩放
    屏幕划分10等分
    750 / 10 = 75
    1125 / 10 = 112.5
    一份就是1rem html font-size 75px 或者是 112.5px
    
