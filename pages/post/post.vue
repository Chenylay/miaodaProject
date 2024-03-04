<template>
	<scroll-view>
	<view class="container">
		<view class="question">
			<text class="title">
				计算机组成原理中中断的分类具体是我整理的这些吗？（见图）
			</text>
			<view class="author">
				<image class="image" src="../../static/image/post/author.jpg" mode="aspectFit"></image>
				<view class="nanxuejie">
					<text style="font-weight: bold;font-size: 28rpx;margin-bottom: 10rpx;">南学姐</text>
				<text style="font-size: 24rpx;color: #9a9a9a;">2020-05-21</text>
				</view>
				<view class="concern">
					<text style="font-size: 24rpx;color: #fff;">关注</text>
				</view>
			</view>
			<text class="detail">
				      个人觉得：《计算机组成原理》这门课，应该设置为大学公共必修课（起码理工科）！      学这门课之前，小编在学习ARM架构，结果越看越迷糊，就果断转入这门课程的学习！       本文食用说明：对于考研学子，说真的，建议学完一遍计组，再做题，因为王道这本书里面习题编排的不是很严谨！（前面很多题目，到后面章节才可以找到答案！）。本文的章节序号完全按照《2021年计算机组成原理考研复习指导（王道论坛版）》记录的，与视频有点出入！
			</text>
			<view class="pics">
				<image class="pic" src="../../static/image/post/pic1.jpg" mode="scaleToFill"></image>
				<image class="pic" src="../../static/image/post/pic2.jpg" mode="scaleToFill"></image>
				<image class="pic" src="../../static/image/post/pic3.jpg" mode="scaleToFill"></image>
			</view>
			<view class="exegesis">
				<text style="font-size: 24rpx;color: #9a9a9a;margin: 10rpx;">888分享</text>
			</view>
		</view>
		<view class="answer">
			<view class="answer-title">
				<text class="pinglun">评论</text>
				<text class="light" @click="seeComments">查看全部评论</text>
				<image class="to" src="../../static/image/post/to.png" mode="aspectFit"></image>
			</view>
		</view>
		
		<view class="position">
			<view class="comments">
				<view class="write">
					<image class="pen" src="../../static/image/post/pen.png" mode="aspectFit"></image>
					<text style="font-size: 24rpx; color:#9a9a9a;">添加评论</text>
				</view>
				<view class="icons">
					<image class="icon" src="../../static/image/post/good.png" mode="aspectFit"></image>
					<text>1199</text>
					<image class="icon" src="../../static/image/post/talk.png" mode="aspectFit"></image>
					<text>20K</text>
					<image class="icon" src="../../static/image/post/collect.png" mode="aspectFit"></image>
					<text>1.1K</text>
				</view>
			</view>
		</view>
		
	</view>
	<mid-comments></mid-comments>
	<mid-comments></mid-comments>
	<mid-comments></mid-comments>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			seeComments(){
				uni.navigateTo({
					url:"/pages/comments/comments"
				})
			}
		}
	}
	
</script>

<style lang="scss" scoped>
	.container{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		.question{
			margin: 15rpx 0;
			width: 100%;
			border-radius: 15rpx;
			background-color: white;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			padding: 30rpx;
			box-sizing: border-box;
			/* box-shadow: 0px 0px 10rpx 2rpx rgba(0, 0, 0, 0.1); */
			.author{
				height: 160rpx;
				width: 100%;
				display:flex;
				flex-direction: row;
				flex-wrap: nowrap;
				align-items: center;
				.nanxuejie{
					display:flex;
					flex-direction: column;
				}
				.image{
					border-radius: 50rpx;
					height: 108rpx;
					width: 108rpx;
					margin: 0 30rpx 0 20rpx;
				}
				.concern{
					height: 50rpx;
					width: 130rpx;
					background-color: #1296db;
					border-radius: 30rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-left: auto;
					margin-right: 20rpx;
					text{
						color: white;
						font-size: 24rpx;
					}
				}
			}
			.title{
				font-size: 32rpx;
				font-weight: bold;
				line-height: 1.7em;
			}
			.detail{
				font-size: 28rpx;
				line-height: 1.7em;
			}
			.pics{
				display: flex;
				flex-direction: row;
				.pic{
					width: 210rpx; 
					height: 200rpx;
					border-radius: 10rpx;
					margin: 20rpx 10rpx 10rpx;
				}
			}
			
			.exegesis{
				margin-left: auto;
				margin-right: 20rpx;
			}
		}
		.answer{
			background-color: #fff;
			border-radius: 15rpx;
			width: 100%;
			.answer-title{
				height: 100rpx;
				border-bottom: #9a9a9a;
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				align-items: center;
				border-bottom: 4rpx solid #f8f8f8;
				.pinglun{
					margin:0 40rpx;
					font-size: 32rpx;
					font-weight: bold;
				}
				.light{
					margin-left: auto;
					color: #9a9a9a;
					font-size: 26rpx;
				}
				.to{
					height: 20rpx;
					width: 20rpx;
					margin-right: 40rpx;
					margin-left: 20rpx;
				}
			}
		}
		.position{
			height: 150rpx;
			width: 100%;
		}
		.comments{
			height: 150rpx;
			width: 100%;
			/* position: fixed; */
			/* position: sticky; */
			/* position: absolute; */
			background-color: #fff;
			/* z-index:999; */
			/* position: relative; */
			/* bottom:0; */
			/* border: #9a9a9a; */
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			align-items: center;
			.write{
				margin-left: 30rpx;
				margin-right: 10rpx;
				height: 72rpx;
				width:240rpx;
				background-color: #F8F8F8;
				border-radius: 30rpx;
				display: flex;
				align-items: center;
				flex-direction: row;
				.pen{
					margin:0 15rpx;
					height: 34rpx;
					width:34rpx;
				}
				
			}
			.icons{
				height: 72rpx;
				display: flex;
				align-items: center;
				flex-direction: row;
				.icon{
					height: 48rpx;
					width: 48rpx;
					margin: 0 10rpx 0 20rpx;
				}
			}
		}
	}
</style>
