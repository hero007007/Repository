//
//  HomePageTableViewCell.m
//  FM2.5
//
//  Created by Xcord-LS on 15/11/11.
//  Copyright © 2015年 李帅. All rights reserved.
//

#import "HomePageTableViewCell.h"

@implementation HomePageTableViewCell


-(UIImageView *)titPic
{
    if (_titPic == nil)
    {
        self.titPic = [[UIImageView alloc]initWithFrame:CGRectMake(10, 10, 80, 80)];
        self.titPic.backgroundColor = [UIColor redColor];
        [self.contentView addSubview:_titPic];
    }
  
    return _titPic;
}


-(UILabel *)titLab
{
    if (_titLab == nil)
    {
        self.titLab = [[UILabel alloc]initWithFrame:CGRectMake(CGRectGetMaxX(self.titPic.frame) + 10, 20, CGRectGetWidth(self.frame) - 100, 50)];
        //self.titLab.backgroundColor = [UIColor orangeColor];
        [self.contentView addSubview:_titLab];
    }
    return _titLab;
}







- (void)awakeFromNib {
    // Initialization code
}

- (void)setSelected:(BOOL)selected animated:(BOOL)animated {
    [super setSelected:selected animated:animated];

    // Configure the view for the selected state
}

@end
