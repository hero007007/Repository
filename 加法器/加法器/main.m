//
//  main.m
//  加法器
//
//  Created by qianfeng on 15-9-28.
//  Copyright (c) 2015年 qianfeng. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "Add.h"

//@interface Add : NSObject
//{
//    int _num1;
//    int _num2;
//}
//- (void)setNum1:(int)num1 andNum2:(int)num2;
//- (int)sum;
//@end
//
//@implementation Add
//
//- (void)setNum1:(int)num1 andNum2:(int)num2
//{
//    _num1 = num1;
//    _num2 = num2;
//}
//
//- (int)sum
//{
//    return _num1 + _num2;
//}
//
//@end


int main(int argc, const char * argv[]) {
    @autoreleasepool {
        
        Add *add = [Add alloc]; // 创建一个加法器对象;
        
        [add setNum1:100 andNum2:200];
        NSLog(@"%d", [add sum]);
        
//        [对象 方法名]
        
    }
    return 0;
}


















