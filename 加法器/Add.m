//
//  Add.m
//  加法器
//
//  Created by qianfeng on 15-9-28.
//  Copyright (c) 2015年 qianfeng. All rights reserved.
//

#import "Add.h"

@implementation Add

- (void)setNum1:(int)num1 andNum2:(int)num2
{
    _num1 = num1;
    _num2 = num2;
}

- (int)sum
{
    return _num2 + _num1;
}

@end
