//
//  ContentTableViewController.m
//  FM2.5
//
//  Created by Xcord-LS on 15/11/11.
//  Copyright © 2015年 李帅. All rights reserved.
//

#import "ContentTableViewController.h"
#import "ContentTableViewCell.h"
#import "GetDataTools.h"
#import "DetailModel.h"
#import "DetailModel2.h"
#import "VoiceViewController.h"
#import "TitleViewController.h"
@interface ContentTableViewController ()<MBProgressHUDDelegate>
@property (nonatomic,strong)NSArray *arr;
@property (nonatomic,strong)NSArray *arr2;
@property (nonatomic,strong)NSString *strTitle;
@property (nonatomic,strong)MBProgressHUD *hud;
@end

@implementation ContentTableViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    self.hud = [[MBProgressHUD alloc]init];
    self.hud = [MBProgressHUD showHUDAddedTo:self.tableView animated:YES];
    self.hud.delegate = self;
    
    self.arr = [NSArray array];
    self.arr2 = [NSArray array];
    [self.tableView registerClass:[ContentTableViewCell class] forCellReuseIdentifier:@"cell"];
    
    
    NSUserDefaults * ud = [NSUserDefaults standardUserDefaults];
    
    if ([[ud valueForKey:@"NetWorkStatus"]isEqualToString:@"NotReachable"]) {
        [self  tanchu];
    }else
    {
        [[GetDataTools shareGetData] GetWithURl:self.Url Detail:^(NSArray *arr, NSArray *arr2) {
            
            
            self.arr = arr;
            self.arr2 = arr2;
            dispatch_async(dispatch_get_main_queue(), ^{
                [self.tableView reloadData];
            });
            
        }];
    }

    
    
    
    
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

#pragma mark - Table view data source

- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView {

    return 1;
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {

    return self.arr.count;
}


- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
    ContentTableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:@"cell" forIndexPath:indexPath];
    
    DetailModel *deta = self.arr[indexPath.row];
    
    DetailModel2 *m = self.arr2[0];
    
    
    cell.textLabel.text = deta.title;
    self.tableView.tableHeaderView = cell.backView;
    cell.nameLab.text = m.nickname;
    self.strTitle = m.intro;
    [cell.introBtn setTitle:@"简介 >>" forState:UIControlStateNormal];
    [cell.introBtn addTarget:self action:@selector(introBtnAction:) forControlEvents:UIControlEventTouchUpInside];
    [cell.contitPic sd_setImageWithURL:[NSURL URLWithString:m.avatarPath]];
    [cell.contPic sd_setImageWithURL:[NSURL URLWithString:m.coverLarge]];
    
    [self.hud hide:YES];
    
    return cell;
}

-(void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath
{
    
    VoiceViewController *voiceVC = [VoiceViewController shareVoicePlay];
    voiceVC.index = indexPath.row;
    [self.navigationController pushViewController:voiceVC animated:YES];
    
}

-(void)introBtnAction:(UIButton *)sender
{
    TitleViewController *titVC = [[TitleViewController alloc]init];
    titVC.str = self.strTitle;
    [self.navigationController pushViewController:titVC animated:YES];
    
}
// 无网络时候,弹出提示框
-(void)tanchu
{
    UIAlertView * alert = [[UIAlertView alloc]initWithTitle:@"提示" message:@"当前网络有误,请检查网络连接..." delegate:nil cancelButtonTitle:nil otherButtonTitles:nil, nil];
    [alert show];
    [self performSelector:@selector(myaction:) withObject:alert afterDelay:2];
}

-(void)myaction:(UIAlertView *)sender
{
    [sender dismissWithClickedButtonIndex:0 animated:YES];
}

/*
// Override to support conditional editing of the table view.
- (BOOL)tableView:(UITableView *)tableView canEditRowAtIndexPath:(NSIndexPath *)indexPath {
    // Return NO if you do not want the specified item to be editable.
    return YES;
}
*/

/*
// Override to support editing the table view.
- (void)tableView:(UITableView *)tableView commitEditingStyle:(UITableViewCellEditingStyle)editingStyle forRowAtIndexPath:(NSIndexPath *)indexPath {
    if (editingStyle == UITableViewCellEditingStyleDelete) {
        // Delete the row from the data source
        [tableView deleteRowsAtIndexPaths:@[indexPath] withRowAnimation:UITableViewRowAnimationFade];
    } else if (editingStyle == UITableViewCellEditingStyleInsert) {
        // Create a new instance of the appropriate class, insert it into the array, and add a new row to the table view
    }   
}
*/

/*
// Override to support rearranging the table view.
- (void)tableView:(UITableView *)tableView moveRowAtIndexPath:(NSIndexPath *)fromIndexPath toIndexPath:(NSIndexPath *)toIndexPath {
}
*/

/*
// Override to support conditional rearranging of the table view.
- (BOOL)tableView:(UITableView *)tableView canMoveRowAtIndexPath:(NSIndexPath *)indexPath {
    // Return NO if you do not want the item to be re-orderable.
    return YES;
}
*/

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
