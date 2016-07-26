//
//  AppDelegate.m
//  FM2.5
//
//  Created by Xcord-LS on 15/11/11.
//  Copyright © 2015年 李帅. All rights reserved.
//

#import "AppDelegate.h"
#import "RootTabBarViewController.h"
@interface AppDelegate ()

@end

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    
    
//    设置window 和根视图
    self.window  = [[UIWindow alloc]initWithFrame:[[UIScreen mainScreen] bounds]];
    self.window.backgroundColor = [UIColor whiteColor];
    [self.window makeKeyAndVisible];
    
    
    RootTabBarViewController *RootVC = [[RootTabBarViewController alloc]init];
    self.window.rootViewController = RootVC;
    
//    设置userdefault
    NSUserDefaults * ud = [NSUserDefaults standardUserDefaults];
    
    if ([ud valueForKey:@"bool"] == nil) {
        [ud setValue:@"yes" forKey:@"bool"];
    }
    if ([[ud valueForKey:@"bool"]isEqualToString:@"yes"] ) {
        [self show];
    }
    
    
    Reachability  * ablity = [Reachability reachabilityForInternetConnection];
    
    if (ablity.currentReachabilityStatus == ReachableViaWiFi) {
        [ud setValue:@"ReachableViaWiFi" forKey:@"NetWorkStatus"];
        [ud synchronize];
    }else if (ablity.currentReachabilityStatus == ReachableViaWWAN)
    {
        [ud  setValue:@"ReachableViaWWAN" forKey:@"NetWorksStatus"];
        [ud synchronize];
    }else
    {
        [ud setValue:@"NotReachable" forKey:@"NetWorkStatus"];
        [ud synchronize];
        
        UIAlertView * alert = [[UIAlertView alloc]initWithTitle:@"提示" message:@"当前没有网络!" delegate:nil cancelButtonTitle:nil otherButtonTitles:nil, nil];
        [alert show ];
        
        [self performSelector:@selector(myaction:) withObject:alert afterDelay:2];
    }
    [ablity startNotifier];
    
    [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(NetworkStatusChanged:) name:kReachabilityChangedNotification object:ablity];
    
    return YES;
}
-(void)myaction:(UIAlertView *)sender
{
    [sender dismissWithClickedButtonIndex:0 animated:YES];
}
-(void)show
{
    EAIntroPage * page1 = [EAIntroPage page];
    
    page1.title = @"";
    
    page1.desc = @"每天都迈着匆匆的脚步...是否有时间静静的看会书...";
    page1.descFont = [UIFont systemFontOfSize:20];
    page1.bgImage = [UIImage imageNamed:@"xingkong1"];
    page1.titleImage = [UIImage imageNamed:@"original"];
    
    EAIntroPage *page2 = [EAIntroPage page];
    page2.title = @"";
    page2.descFont = [UIFont systemFontOfSize:20];
    
    page2.desc = @"等有了时间是否还愿意去看会书...";
    page2.bgImage = [UIImage imageNamed:@"xingkong3"];
    page2.titleImage = [UIImage imageNamed:@"supportcat"];
    
    EAIntroPage *page3 = [EAIntroPage page];
    page3.title = @"";
    page3.descFont = [UIFont systemFontOfSize:20];
    
    page3.desc = @"在这里,只需一点,随时随地...";
    page3.bgImage = [UIImage imageNamed:@"xingkong2"];
    page3.titleImage = [UIImage imageNamed:@"femalecodertocat"];
    
    EAIntroPage * page4 = [EAIntroPage page];
    page4.title = @"";
    page4.descFont = [UIFont systemFontOfSize:20];
    
    page4.desc = @"....听.......书...!";
    page4.bgImage = [UIImage imageNamed:@"xingkong4"];
    
    
    
    
    
    
    EAIntroView *intro = [[EAIntroView alloc] initWithFrame:self.window.rootViewController.view.bounds andPages:@[page1,page2,page3,page4]];
    
    [intro setDelegate:self];
    
    [intro showInView:self.window.rootViewController.view animateDuration:0.0];

}
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

- (void)applicationWillResignActive:(UIApplication *)application {
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game.
    [[UIApplication sharedApplication] beginReceivingRemoteControlEvents]; // 让后台可以处理多媒体的事件
    
    AVAudioSession *session = [AVAudioSession sharedInstance];
    [session setActive:YES error:nil];
    [session setCategory:AVAudioSessionCategoryPlayback error:nil]; //后台播放
}
- (void)applicationDidEnterBackground:(UIApplication *)application {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}

- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the inactive state; here you can undo many of the changes made on entering the background.
}

- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}

- (void)applicationWillTerminate:(UIApplication *)application {
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}

@end
