//
//  VoiceViewController.m
//  FM2.5
//
//  Created by Xcord-LS on 15/11/12.
//  Copyright © 2015年 李帅. All rights reserved.
//

#import "VoiceViewController.h"
#import "VoiceView.h"
#import "PalyTools.h"

@interface VoiceViewController ()<PlayToolsDelegate,VoicePlayViewDelegate>

@property (nonatomic,strong)VoiceView *VC ;
@property (nonatomic,strong)PalyTools *aa;

@end


static VoiceViewController *mp = nil;

@implementation VoiceViewController



-(void)loadView
{
    self.VC = [[VoiceView alloc]initWithFrame:[[UIScreen mainScreen] bounds]];
    //self.VC.backgroundColor = [UIColor yellowColor];
    self.view = _VC;
}

+(instancetype)shareVoicePlay
{
    if (mp == nil) {
        static dispatch_once_t once_token;
        dispatch_once(&once_token, ^{
            mp = [[VoiceViewController alloc] init];
        });
    }
    return mp;
}


- (void)viewDidLoad
{
    //self.view.backgroundColor = [UIColor redColor];
    [super viewDidLoad];
//    if ([self respondsToSelector:@selector(setEdgesForExtendedLayout:)]) {
//        self.edgesForExtendedLayout = UIRectEdgeNone;
//    }
//    
   
    self.aa = [PalyTools shareVoicePlay];
    [PalyTools shareVoicePlay].delegate = self;
    
    self.VC.delegate = self;
    
    [self.VC.nextButton addTarget:self action:@selector(nextButtonAction:) forControlEvents:(UIControlEventTouchUpInside)];
    [self.VC.progressSlider addTarget:self action:@selector(progressSliderAction:) forControlEvents:(UIControlEventValueChanged)];
    [self.VC.playButton addTarget:self action:@selector(playPauseButtonAction:) forControlEvents:(UIControlEventTouchUpInside)];

    
    [[PalyTools shareVoicePlay].player addObserver:self forKeyPath:@"rate" options:(NSKeyValueObservingOptionNew|NSKeyValueObservingOptionOld) context:nil];

}

// 观察播放速率的相应方法: 速率==0 表示没有暂停.
// 速率不为0 表示播放中.
-(void)observeValueForKeyPath:(NSString *)keyPath ofObject:(id)object change:(NSDictionary *)change context:(void *)context
{
    if ([keyPath isEqualToString:@"rate"])
    {
        if ([[change valueForKey:@"new"] integerValue] == 0)
        {
            [self.VC.playButton setBackgroundImage:[UIImage imageNamed:@"play.png"] forState:UIControlStateNormal];
        }
        else
        {
            [self.VC.playButton setBackgroundImage:[UIImage imageNamed:@"pause.png"] forState:UIControlStateNormal];
        }
    }
}




-(void)viewWillAppear:(BOOL)animated
{
        [self p_play];
}

-(void)p_play
{
    
    NSUserDefaults * ud = [NSUserDefaults standardUserDefaults];
    
    if ([[ud valueForKey:@"NetWorkStatus"]isEqualToString:@"NotReachable"]) {
        UIAlertView * alert = [[UIAlertView alloc]initWithTitle:@"提示" message:@"当前网络有误,请检查网络连接..." delegate:nil cancelButtonTitle:nil otherButtonTitles:nil, nil];
        [alert show];
        [self performSelector:@selector(myaction:) withObject:alert afterDelay:2];
    }else
    {
        if ([[PalyTools shareVoicePlay].model isEqual:[[GetDataTools shareGetData] getModelWithIndex:self.index]] )
        {
            return;
        }
        NSLog(@"%ld",self.index);
        [PalyTools shareVoicePlay].model = [[GetDataTools shareGetData] getModelWithIndex:self.index];
        [self.VC.picView sd_setImageWithURL:[NSURL URLWithString:[PalyTools shareVoicePlay].model.coverLarge]];
        
        [[PalyTools shareVoicePlay] voicePrePlay];
    }

  
    
}
-(void)myaction:(UIAlertView *)sender
{
    [sender dismissWithClickedButtonIndex:0 animated:YES];
}
-(void)getCurTiem:(NSString *)curTime Totle:(NSString *)totleTime Progress:(CGFloat)progress
{
    self.VC.curTimeLabel.text = curTime;
    self.VC.totleTiemLabel.text = totleTime;
    self.VC.progressSlider.value = progress;
    self.VC.picView.transform = CGAffineTransformRotate(self.VC.picView.transform, M_PI/360);
     
}
-(void)lastVoiceAction
{
    if (self.index > 0) {
        self.index --;
    }else{
        self.index = [GetDataTools shareGetData].arr.count;
    }
    [self p_play];
}

-(void)endOfPlayAction
{
    [self nextButtonAction:nil];
}
-(void)nextButtonAction:(UIButton *)sender
{
    if (self.index == [GetDataTools shareGetData].arr.count -1) {
        self.index = 0;
    }else
    {
        self.index ++;
    }
    
    //[[MusicPlayTools shareMusicPlay] musicPause];
    [self p_play];
}
// 滑动slider
-(void)progressSliderAction:(UISlider *)sender
{
    [[PalyTools shareVoicePlay] seekToTimeWithValue:sender.value];
}

// 暂停播放方法
-(void)playPauseButtonAction:(UIButton *)sender
{
    // 根据AVPlayer的rate判断.
    if ([PalyTools shareVoicePlay].player.rate == 0) {
        [[PalyTools shareVoicePlay] voicePlay];
    }else
    {
        [[PalyTools shareVoicePlay] voicePause];
    }
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
