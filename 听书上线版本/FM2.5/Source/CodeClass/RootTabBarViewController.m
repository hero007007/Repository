//
//  RootTabBarViewController.m
//  MyLife1.0
//
//  Created by Xcord-LS on 15/11/4.
//  Copyright © 2015年 李帅. All rights reserved.
//

#import "RootTabBarViewController.h"
#import "HomePageTableViewController.h"

@interface RootTabBarViewController ()

@end

@implementation RootTabBarViewController

- (void)viewDidLoad {
    [super viewDidLoad];
   
    HomePageTableViewController *myController = [[HomePageTableViewController alloc]init];
    UINavigationController *MyVC = [[UINavigationController alloc]initWithRootViewController:myController];
    
    MyVC.tabBarItem = [[UITabBarItem alloc]initWithTitle:@"听书" image:[UIImage imageNamed:@"homePage.png"] tag:100];
    
    
    
    
    
    
    self.viewControllers = @[MyVC];
    
    
    
    
    
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
