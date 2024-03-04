<template>
	<view class="load-main">
		<view class="load-box">
			<view class="load-text">
				<text class="titleLine">账号密码登录</text>
			</view>
			<view class="load-input">
				<input type="text" placeholder-class="load-place" placeholder="请输入您的手机号" :value="username"/>
			</view>
			<view class="load-input">
				<input type="text" placeholder-class="load-place" placeholder="请输入密码" :password="password"/>
			</view>
			<view class="load-button">
				<button class="load-button-style" size="default" @click="navigateToTab">登 录</button>
			</view>
		</view>
		<view class="load-message">
			<text class="title">短信登陆</text>
		</view>
		<view class="load-password">
			<text class="title">忘记密码?</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username:'',
				password:'',
			}
		},
		methods: {
			navigateToTab() {
			      uni.switchTab({
			        url: '/pages/index/index'  
			      })
			    }
		}
	}
</script>

<style>
.load-main{
	height: 100%;
	flex: auto;
	display: flex;
	flex-direction: column;
/* 	justify-content: center; */
	align-items: center;
	
	
/* 	background-color: palegreen; */
}
.load-box{
	display: flex;
	width: 90%;
	height: 550rpx;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
/* 	background-color: antiquewhite; */
}
.load-text{
	height: 80rpx;
	margin-top: 100rpx;
}
.titleLine{
	font-size:40rpx;
	color: #101010;
	font-weight: bold;
	/* 	line-height: 90rpx;
		font-size: 40rpx; */
}
.load-input{
	display: flex;
	border-bottom:1px solid #9A9A9A;

	width: 80%;
	height: 49rpx;
	margin-top: 40rpx;
	align-items: center;

}
.load-place{
	padding-left:20px;
	font-size: 15px;
}
.load-button{
	margin-top: 70rpx;
}
.load-button-style{
	padding-right:100px;
	padding-left:100px;
}
.load-message{
	position: fixed;
	margin-top: 290px;
	margin-left: 8px;
}
.load-password{
	position: fixed;
	margin-top: 290px;
	margin-left: 280px;
}
.title{
	color: #54739A;
}
</style>
