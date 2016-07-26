//
//  VoiceView.h
//  FM2.5
//
//  Created by Xcord-LS on 15/11/12.
//  Copyright © 2015年 李帅. All rights reserved.
//

#import <UIKit/UIKit.h>


@protocol VoicePlayViewDelegate <NSObject>

-(void)lastVoiceAction;


@end




@interface VoiceView : UIView




@property(nonatomic,strong)UIImageView * headImageView;
@property(nonatomic,strong)UIImageView *picView;
@property(nonatomic,strong)UILabel * curTimeLabel;
@property(nonatomic,strong)UISlider * progressSlider;
@property(nonatomic,strong)UILabel * totleTiemLabel;



@property (nonatomic,strong)UIButton *lastButton;
@property (nonatomic,strong)UIButton *nextButton;
@property (nonatomic,strong)UIButton *playButton;


@property(nonatomic,weak)id<VoicePlayViewDelegate>delegate;






@end
