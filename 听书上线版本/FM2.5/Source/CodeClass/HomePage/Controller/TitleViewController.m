//
//  TitleViewController.m
//  FM2.5
//
//  Created by Xcord-LS on 15/11/13.
//  Copyright © 2015年 李帅. All rights reserved.
//

#import "TitleViewController.h"

@interface TitleViewController ()

@end

@implementation TitleViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    UILabel *lable = [[UILabel alloc]initWithFrame:CGRectMake(20, 44, CGRectGetWidth(self.view.frame) - 30, CGRectGetHeight(self.view.frame) - 50)];
    [self.view addSubview:lable];
    lable.numberOfLines = 0;
    lable.text = self.str;
    
    
    
    
    
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
