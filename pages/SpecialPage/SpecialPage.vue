<template>
	<view class="container">
		<mid-searchbox ></mid-searchbox>
		<view class="title">
			<view class="xueke">
				<text class="xueKe">学科</text>
			</view>
			<view class="kecheng">
				<text class="keCheng">课程</text>
			</view>
		</view>
		<view class="special-scroll">
			<scroll-view scroll-y class="special-left">
			<view class="special" v-for="item in 15">
				<text>文学</text>
			</view>
			</scroll-view>	
			<scroll-view scroll-y class="special-right">
			<view class="course" v-for="item in 15">
				<text>文学</text>
			</view>
			</scroll-view>	
		</view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		background-color: #fff;
		.title{
			margin-top:148rpx;
			height: 120rpx;
			flex-wrap:nowrap;
			flex-direction: row;
			.xueke{
				height: 120rpx;
				width:260rpx;
				align-items: center;
				justify-content: center;
				.xueKe{
					font-size: 40rpx;
					font-weight: bold;
				}
			}
			.kecheng{
				height: 120rpx;
				width:490rpx;
				align-items: center;
				justify-content: center;
				.keCheng{
					font-size: 40rpx;
					font-weight: bold;
				}
			}
		}
		.special-scroll{
			width:100%;
			height:900rpx;
			display:flex;
			flex-wrap:nowrap;
			flex-direction: row;
			.special-left{
				height: 900rpx;
				width:260rpx;
				.special{
					background: #F6F9FA;
					height: 90rpx;
					align-items: center;
					justify-content: center;
				}
			}
			.special-right{
				height: 900rpx;
				width:490rpx;
				.course{
					height:90rpx;
					background: #fff;
					align-items: center;
					justify-content: center;
					border: 1px solid #F6F9FA;
					margin:0;
				}
			}
		}
	}

</style>
