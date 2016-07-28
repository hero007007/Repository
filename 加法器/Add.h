//
//  Add.h
//  加法器
//
//  Created by qianfeng on 15-9-28.
//  Copyright (c) 2015年 qianfeng. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface Add : NSObject
{
    int _num1;
    int _num2;
}

- (void)setNum1:(int)num1 andNum2:(int)num2;
- (int)sum;

@end

// 同一个类的.h和.m切换快捷键：  control+command+⬆️/⬇️





