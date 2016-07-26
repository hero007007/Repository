//
//  PalyTools.m
//  FM2.5
//
//  Created by Xcord-LS on 15/11/12.
//  Copyright © 2015年 李帅. All rights reserved.
//

#import "PalyTools.h"

static PalyTools * mp = nil;

@interface PalyTools()
@property(nonatomic,strong)NSTimer * timer;
@end



@implementation PalyTools


+(instancetype)shareVoicePlay
{
    if (mp == nil) {
        static dispatch_once_t once_token;
        dispatch_once(&once_token, ^{
            mp = [[PalyTools alloc] init];
        });
    }
    return mp;
}


- (instancetype)init
{
    self = [super init];
    if (self) {
        _player = [[AVPlayer alloc] init];
        
        [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(endOfPlay:) name:AVPlayerItemDidPlayToEndTimeNotification object:nil];
    }
    return self;
}


-(void) endOfPlay:(NSNotification *)sender
{
    
    [self voicePause];
    [self.delegate endOfPlayAction];
}

-(void)voicePrePlay
{
    // 通过下面的逻辑,只要AVPlayer有currentItem,那么一定被添加了观察者.
    // 所以上来直接移除之.
    if (self.player.currentItem) {
        [self.player.currentItem removeObserver:self forKeyPath:@"status"];
    }
    
    
    AVPlayerItem * item = [[ AVPlayerItem alloc] initWithURL:[NSURL URLWithString:self.model.playUrl64]];
   
    
    // 为item的status添加观察者.
    [item addObserver:self forKeyPath:@"status" options:(NSKeyValueObservingOptionNew|NSKeyValueObservingOptionOld) context:nil];
   
   
    [self.player replaceCurrentItemWithPlayerItem:item];
}

// 观察者的处理方法
-(void)observeValueForKeyPath:(NSString *)keyPath ofObject:(id)object change:(NSDictionary *)change context:(void *)context
{
    if ([keyPath isEqualToString:@"status"]) {
        switch ([[change valueForKey:@"new"] integerValue]) {
            case AVPlayerItemStatusUnknown:
                NSLog(@"错误");
                break;
            case AVPlayerItemStatusReadyToPlay:
                // 只有观察到status变为这种状态,才会真正的播放.
                [self voicePlay];
                break;
            case AVPlayerItemStatusFailed:
                // mini设备不插耳机或者某些耳机会导致准备失败.
                NSLog(@"准备失败");
                break;
            default:
                break;
        }
    }
}

// 播放
-(void)voicePlay
{
    // 如果计时器已经存在了,说明已经在播放中,直接返回.
    // 对于已经存在的计时器,只有musicPause方法才会使之停止和注销.
    if (self.timer != nil)
    {
        return;
    }
    
    // 播放后,我们开启一个计时器.
    self.timer = [NSTimer scheduledTimerWithTimeInterval:0.1f target:self selector:@selector(timerAction:) userInfo:nil repeats:YES];
    
    [self.player play];
}

-(void)timerAction:(NSTimer * )sender
{
    // 重点!!! 计时器的处理方法中,不断的调用代理方法,将播放进度返回出去.
    // 一定要掌握这种形式.
    [self.delegate getCurTiem:[self valueToString:[self getCurTime]] Totle:[self valueToString:[self getTotleTime]] Progress:[self getProgress]];
}

// 暂停方法
-(void)voicePause
{
    [self.timer invalidate];
    self.timer = nil;
    [self.player pause];
}

// 跳转方法
-(void)seekToTimeWithValue:(CGFloat)value
{
    // 先暂停
    [self voicePause];
    
    // 跳转
    [self.player seekToTime:CMTimeMake(value * [self getTotleTime], 1) completionHandler:^(BOOL finished)
     {
         if (finished == YES)
         {
             [self voicePlay];
         }
     }];
}

// 获取当前的播放时间
-(NSInteger)getCurTime
{
    if (self.player.currentItem)
    {
        // 用value/scale,就是AVPlayer计算时间的算法. 它就是这么规定的.
        // 下同.
        return self.player.currentTime.value / self.player.currentTime.timescale;
    }
    return 0;
}
// 获取总时长
-(NSInteger)getTotleTime
{
    CMTime totleTime = [self.player.currentItem duration];
    if (totleTime.timescale == 0)
    {
        
        // 为啥要return  1 ?
        return 1;
    }
    else
    {
        
        return totleTime.value /totleTime.timescale;
        
    }
    
    
    
}
// 获取当前播放进度
-(CGFloat)getProgress
{
    return (CGFloat)[self getCurTime]/ (CGFloat)[self getTotleTime];
}

// 将整数秒转换为 00:00 格式的字符串
-(NSString *)valueToString:(NSInteger)value
{
    return [NSString stringWithFormat:@"%.2ld:%.2ld",value/60,value%60];
}







@end
