# coding=utf-8

import cv2


# 底板图案
bottom_pic = '/Users/chenguowei01/PycharmProjects/PaddleSeg/my_program/aachen_000020_000019_leftImg8bit.png'
# 上层图案
top_pic = '/Users/chenguowei01/PycharmProjects/PaddleSeg/my_program/aachen_000020_000019_gtFine_labelTrainIds.png'

import cv2
bottom = cv2.imread(bottom_pic)
top = cv2.imread(top_pic)
# 权重越大，透明度越低
overlapping = cv2.addWeighted(bottom, 0.6, top, 0.4, 0)
# 保存叠加后的图片
cv2.imwrite('overlap.jpg', overlapping)