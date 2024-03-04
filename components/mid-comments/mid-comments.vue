<template>
	<view class="comments">
		<view class="image">
			<image class="comments-author" src="../../static/image/post/author.jpg" mode="aspectFit"></image>
		</view>
		<view class="text">
			<text class="name">柯布</text>
			<text class="contents">回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容</text>
			<view class="approve">
				<text class="time">21-12-12</text>
				<image  style="height: 34rpx;width: 34rpx;margin-left: auto;margin-right: 30rpx;" src="../../static/image/post/approve.png" mode="aspectFill"></image>
			</view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		name:"mid-comments",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.comments{
		width:750rpx;
		border-bottom: 4rpx solid #f8f8f8;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		background-color: #fff;
		padding-top: 30rpx ;
		padding-bottom: 30rpx;
		.image{
			.comments-author{
				height: 108rpx;
				width: 108rpx;
				border-radius: 50rpx;
				margin-left: 40rpx;
				margin-right: 30rpx;
			}
		}
		.text{
			width: 532rpx;
			display: flex;
			flex-direction: column;
			.name{
				margin-bottom: 10rpx;
				font-size: 32rpx;
				font-weight: bold;
			}
			.contents{
				font-size: 28rpx;
				line-height: 1.5em;
			}
			.approve{
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				.time{
					margin-top: 10rpx;
					font-size: 24rpx;
					color: #9a9a9a;
				}
			}
			
		}
	}
</style>