//
//  GetDataTools.m
//  FM2.5
//
//  Created by Xcord-LS on 15/11/11.
//  Copyright © 2015年 李帅. All rights reserved.
//

#import "GetDataTools.h"
#import "ListModel.h"
#import "DetailModel.h"
#import "DetailModel2.h"
static GetDataTools * gd = nil;

@implementation GetDataTools

// 单例方法,创建单例要熟练掌握
+(instancetype)shareGetData
{
    if (gd == nil) {
        static dispatch_once_t once_token;
        dispatch_once(&once_token, ^{
            gd = [[GetDataTools alloc] init];
        });
    }
    return gd;
}

-(void)getDataWithURL:(NSString *)URL PassValue:(PassValue)passValue
{
    //[self.dataArray removeAllObjects];
    //问题
//    NSURL *url = [NSURL URLWithString:URL];
//    NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:url];
//    [NSURLConnection sendAsynchronousRequest:request queue:[NSOperationQueue mainQueue] completionHandler:^(NSURLResponse *response, NSData *data, NSError *connectionError) {
//       
//        
//        NSDictionary *dictionary = [NSJSONSerialization JSONObjectWithData:data options:NSJSONReadingAllowFragments error:nil];
//        for (NSDictionary *dic in [dictionary objectForKey:@"list"])
//        {
//            ListModel *list = [[ListModel alloc]init];
//            [list setValuesForKeysWithDictionary:dic];
//            [self.dataArray addObject:list];
//            
//        }
//        
//        passValue(self.dataArray);
//
//    
//    
//    
//    }];

    
    
    
    
    
    dispatch_queue_t globl_t = dispatch_get_global_queue(0, 0);
    
    // 定义子线程的内容.
    dispatch_async(globl_t, ^{
        [self.dataArray removeAllObjects];
        NSURL *url = [NSURL URLWithString:URL];
        
        NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:url];
        
        
        [request setHTTPMethod:@"GET"];
        
        NSData *data = [NSURLConnection sendSynchronousRequest:request returningResponse:nil error:nil];
        NSDictionary *dictionary = [NSJSONSerialization JSONObjectWithData:data options:NSJSONReadingAllowFragments error:nil];
        for (NSDictionary *dic in [dictionary objectForKey:@"list"])
        {
            ListModel *list = [[ListModel alloc]init];
            [list setValuesForKeysWithDictionary:dic];
            [self.dataArray addObject:list];
            
        }
        
        passValue(self.dataArray);
    });


}


-(void)GetWithURl:(NSString *)URL Detail:(Detail)detail
{
    
    
    dispatch_queue_t globl_t = dispatch_get_global_queue(0, 0);
    
    // 定义子线程的内容.
    dispatch_async(globl_t, ^{
        
    
        [self.arr removeAllObjects];
        [self.arr2 removeAllObjects];
        
        NSURL *url = [NSURL URLWithString:URL];
        
        NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:url];
        
        
        [request setHTTPMethod:@"GET"];
        
        NSData *data = [NSURLConnection sendSynchronousRequest:request returningResponse:nil error:nil];
        NSDictionary *dictionary = [NSJSONSerialization JSONObjectWithData:data options:NSJSONReadingAllowFragments error:nil];
        for (NSDictionary *dic in [[dictionary objectForKey:@"tracks"] objectForKey:@"list"])
        {
            DetailModel *detail = [[DetailModel alloc]init];
            [detail setValuesForKeysWithDictionary:dic];
            [self.arr addObject:detail];
            
        }
        
        
        NSDictionary *dic2 = [dictionary objectForKey:@"album"];
        DetailModel2 *d = [[DetailModel2 alloc]init];
        [d setValuesForKeysWithDictionary:dic2];
        [self.arr2 addObject:d];
        
        
        
        detail(self.arr,self.arr2);

    });

   

}





-(NSMutableArray *)dataArray
{
    if (_dataArray == nil)
    {
        _dataArray = [NSMutableArray array];
    }
    return _dataArray;
}


-(NSMutableArray *)arr
{
    if (_arr == nil)
    {
        _arr = [NSMutableArray array];
    }
    return _arr;
}
-(NSMutableArray *)arr2
{
    if (_arr2 == nil)
    {
        _arr2 = [NSMutableArray array];
    }
    return _arr2;
}

-(DetailModel *)getModelWithIndex:(NSInteger)index
{
    return self.arr[index];
}





@end
