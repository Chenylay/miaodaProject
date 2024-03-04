<template>
	<scroll-view>
	<view class="container">
		<scroll-view style="flex:1">
		<view class="thecomments">
			<mid-comments></mid-comments>
			<mid-comments></mid-comments>
			<mid-comments></mid-comments>
			<mid-comments></mid-comments>
			<mid-comments></mid-comments>
			<mid-comments></mid-comments>
			<mid-comments></mid-comments>
			<mid-comments></mid-comments>
		</view>
		</scroll-view>
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
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		.thecomments{
			width: 100%;
			display: flex;
			align-items: center;
			margin-bottom: 150rpx;
		}
		.position{
			height: 150rpx;
			width: 100%;
			position: fixed;
			z-index: 999;
			background-color: #fff; 
			justify-content: center;
			bottom: 0;
			border-top: 2rpx solid #ccc;
			.comments{
				/* height: 150rpx; */
				
				
				/* bottom: 50rpx; */
				width: 100%;
				background-color: #fff;
				display: flex;
				flex-direction: row;
				align-items: center;
				flex-wrap: nowrap;
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
					flex-direction: row;
					flex-wrap: nowrap;
					align-items: center;
					.icon{
						height: 48rpx;
						width: 48rpx;
						margin: 0 10rpx 0 20rpx;
					}
				}
			}
		}
		
	}
	
</style>
