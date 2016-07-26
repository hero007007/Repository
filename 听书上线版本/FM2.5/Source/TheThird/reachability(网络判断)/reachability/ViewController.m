//
//  ViewController.m
//  reachability
//
//  Created by 李志强 on 15/10/21.
//  Copyright © 2015年 李志强. All rights reserved.
//

#import "ViewController.h"
#import "Reachability.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    NSUserDefaults * ud = [NSUserDefaults standardUserDefaults];
    
    // 检查网络状态并登记(登记到NSUserDefaults中的话,所有页面在使用网络之前,都可以来查看网络状态).
    Reachability * ability = [Reachability reachabilityForInternetConnection];
    if (ability.currentReachabilityStatus == ReachableViaWiFi) {
        [ud setValue:@"ReachableViaWiFi" forKey:@"NetWorkStatus"];
        [ud synchronize];
    }else if (ability.currentReachabilityStatus == ReachableViaWWAN){
        [ud setValue:@"ReachableViaWWAN" forKey:@"NetWorkStatus"];
        [ud synchronize];
    }else {
        [ud setValue:@"NotReachable" forKey:@"NetWorkStatus"];
        [ud synchronize];
    }
    
    // 网络状态改变之后的通知及事件.
    [ability startNotifier];
    
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(NetworkStatusChanged:) name:kReachabilityChangedNotification object:ability];
    
    /////////////////////////////////////////////////////////////
    // 网页是否通畅,这个可能会卡住UI
    Reachability *r = [Reachability reachabilityWithHostname:@"www.baidu.com"];
    switch ([r currentReachabilityStatus]) {
        case NotReachable:
            NSLog(@"无法打开该网页");
            break;
        case ReachableViaWWAN:
            NSLog(@"使用3g打开");
            break;
        case ReachableViaWiFi:
            NSLog(@"使用wifi打开");
            break;
    }
    
    // Do any additional setup after loading the view, typically from a nib.
}

// 网络状态改变的处理事件
-(void) NetworkStatusChanged:(NSNotification *) sender {
    Reachability * ability = [sender object];
    NSUserDefaults * ud = [NSUserDefaults standardUserDefaults];
    if (ability.currentReachabilityStatus == ReachableViaWiFi) {
        [ud setValue:@"ReachableViaWiFi" forKey:@"NetWorkStatus"];
        NSLog(@"当前网络状态:Wifi");
        [ud synchronize];
    }else if (ability.currentReachabilityStatus == ReachableViaWWAN){
        [ud setValue:@"ReachableViaWWAN" forKey:@"NetWorkStatus"];
        NSLog(@"当前网络状态:3g");
        [ud synchronize];
    }else {
        [ud setValue:@"NotReachable" forKey:@"NetWorkStatus"];
        [ud synchronize];
        NSLog(@"当前网络状态:断网");
    }
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
