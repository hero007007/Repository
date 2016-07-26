//
//  PalyTools.h
//  FM2.5
//
//  Created by Xcord-LS on 15/11/12.
//  Copyright © 2015年 李帅. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <AVFoundation/AVFoundation.h>

@protocol PlayToolsDelegate <NSObject>

-(void)getCurTiem:(NSString *)curTime Totle:(NSString *)totleTime Progress:(CGFloat)progress;

-(void)endOfPlayAction;


@end



@interface PalyTools : NSObject

@property(nonatomic,strong)AVPlayer * player;
// 本类中的,播放中的"歌曲信息模型"
@property(nonatomic,strong)DetailModel *model;
// 代理
@property(nonatomic,weak)id<PlayToolsDelegate> delegate;

// 单例方法
+(instancetype)shareVoicePlay;

// 播放
-(void)voicePlay;

// 暂停
-(void)voicePause;

// 准备播放
-(void)voicePrePlay;


// 跳转
-(void)seekToTimeWithValue:(CGFloat)value;












@end
