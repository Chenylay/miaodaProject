<template >
	<view class="status_bar" style="{height: var(--status-bar-height); width: 100%;}"></view>
	<scroll-view>
		<view class="container" >
			<mid-searchbox ></mid-searchbox>
			<view class="layout">
				<view class="box" v-for="items in 3" >
					<text class="title">计算机组成原理</text>
					<view class="fire">
						<image class="image" mode="aspectFit" lazy-load src="../../static/image/index-image/热度.png"></image>
						<text class="fireText">热度值3000</text>
					</view>
					<view class="questionTitle" v-for="item in 3">
						<template class="littleTitleAnswer">
							<text class="littleTitle">什么是并行计算?</text>
							<text class="answer">同时使用多个处理器，提高计算速度和计算速度</text>
						</template>
						<view class="praise">
							<image class="praiseImage" mode="aspectFit" lazy-load src="../../static/image/index-image/点赞.png"></image>
							<text class="praiseText">2.3w</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	var computersub=[]
	
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			network:function(){
				uni.request({
					url:"https://mock.apifox.com/m1/3949969-0-default/space/question/get",
					data:{
						limit:5
					},
					success:(res)=>{
						console.log(res)
					}
				})
			}
		}
	}
	
</script>

<style lang="scss" scoped>
	.container{
		.layout{
			margin-top: 148rpx;
			padding: 14rpx 46rpx;
			width:100%;
			.box{
				width: 660rpx;
				height: 550rpx;
				background-image:linear-gradient(to bottom,#B886F8,#fff);
				border-radius: 20rpx;
				margin:16rpx 0;
				padding:14rpx 35rpx;
				.title{
					margin: 15rpx 0;
					font-size:40rpx;
					color: #fff;
					font-weight: bold;
				}
				.fire{
					height: 34rpx;
					flex-wrap:nowrap;
					flex-direction: row;
					.image{
						height: 34rpx;
						width:34rpx;
						margin-right: 5rpx;
					}
					.fireText{
						font-size: 24rpx;
						color: red;
					}
				}
				.questionTitle{
					width:588rpx;
					height: 120rpx;
					background-color: #efefef;
					border-radius: 15rpx;
					margin: 5rpx 0;
					flex-wrap:nowrap;
					flex-direction: row;
					align-items: center;
					.littleTitleAnswer{
						width: 430rpx;
						padding:10rpx 20rpx;
						.littleTitle{
							font-size: 28rpx;
							font-weight: bold;
							margin: 5rpx 0;
						}
						.answer{
							margin-top: 10rpx;
							font-size: 24rpx;
							height: 27rpx;
						}
					}
					
					.praise{
						flex-wrap:nowrap;
						flex-direction: row;
						height:30rpx;
						margin: 45rpx 0;
						margin-left: 20rpx;
						.praiseImage{
							height: 30rpx;
							width: 30rpx;
						}
						.praiseText{
							margin:0 10rpx;
							font-size: 26rpx;
						}
					}
				}
			}
		}
	}
</style>
