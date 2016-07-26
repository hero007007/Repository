//
//  GetDataTools.h
//  FM2.5
//
//  Created by Xcord-LS on 15/11/11.
//  Copyright © 2015年 李帅. All rights reserved.
//

#import <Foundation/Foundation.h>

typedef void(^PassValue)(NSArray *array);
typedef void(^Detail)(NSArray *arr,NSArray *arr2);


@interface GetDataTools : NSObject

@property(nonatomic,strong)NSMutableArray * dataArray;
@property(nonatomic,strong)NSMutableArray * arr;
@property(nonatomic,strong)NSMutableArray * arr2;

// 单例
+(instancetype)shareGetData;


//处理数据
-(void)getDataWithURL:(NSString *)URL PassValue:(PassValue)passValue;




-(void)GetWithURl:(NSString *)URL Detail:(Detail)detail;


-(DetailModel *)getModelWithIndex:(NSInteger)index;



@end
