<template>
	<view class="container">
	  <view class="person-information">
	    <view class="person-details">
	      <view class="avatar">
	        <image style="width: 70px; height: 70px; background-color: #ffffff; border-radius: 100rpx;" src="../../static/image/personal-image/头像.jpg" mode="aspectFill"></image>
	      </view>
	      <view class="userInfo">
	        <view class="datails-name">
	          <text class="datails-name">姓名</text>
	        </view>
	        <view class="datails-information">
	          <text class="datails-information">华南师范大学 计算机学院 网络工程</text>
	        </view>
	      </view>
	    </view>
	    <view class="person-social">
	      <view class="social-number">
	        <view class="number-attenioon">
	          <text class="numbersetting">20</text>
	        </view>
	        <view class="number-fan">
	          <text class="numbersetting">200</text>
	        </view>
	        <view class="number-dynamic">
	          <text class="numbersetting">240</text>
	        </view>
	        <view class="number-praise">
	          <text class="numbersetting">1000</text>
	        </view>
	      </view>
	      <view class="social-text">
	        <view class="social-attenioon">
	          <navigator url="/pages/PersonalPage/attentionFanPage/attentionPage">
	            <text class="textsetting">关注</text>
	          </navigator>
	        </view>
	        <view class="social-fan">
	          <navigator url="/pages/PersonalPage/attentionFanPage/fanPage">
	            <text class="textsetting">粉丝</text>
	          </navigator>
	        </view>
	        <view class="social-dynamic">
	          <text class="textsetting">动态</text>
	        </view>
	        <view class="social-praise">
	          <text class="textsetting">获赞</text>
	        </view>
	      </view>
	    </view>
	  </view>
	  <view class="person-fuction">
	    <view class="fuctionPicture">
	      <image class="picture" style="width: 20px; height: 20px;" src="../../static/image/personal-image/提问.png" mode="aspectFill"></image>
	      <image class="picture" style="width: 20px; height: 20px;" src="../../static/image/personal-image/课程.png" mode="aspectFill"></image>
	      <image class="picture" style="width: 20px; height: 20px;" src="../../static/image/personal-image/收藏.png" mode="aspectFill"></image>
	      <image class="picture" style="width: 20px; height: 20px;" src="../../static/image/personal-image/历史记录.png" mode="aspectFill"></image>
	    </view>
	    <view class="fuctionText">
	      <text class="fuc-text">我的提问</text>
	      <text class="fuc-text">我的课程</text>
	      <text class="fuc-text">我的收藏</text>
	      <text class="fuc-text">历史记录</text>
	    </view>
	  </view>
	  <view class="person-tools">
	    <view class="Text">
	      <text class="toolsText">常用工具</text>
	    </view>
	    <view class="toolPicture">
	      <image class="toolpicture" style="width: 20px; height: 20px;" src="../../static/image/personal-image/信息.png" mode="aspectFill"></image>
	      <image class="toolpicture" style="width: 23px; height: 25px;" src="../../static/image/personal-image/发帖.png" mode="aspectFill"></image>
	      <image class="toolpicture" style="width: 20px; height: 20px;" src="../../static/image/personal-image/帮助与反馈.png" mode="aspectFill"></image>
	      <image class="toolpicture" style="width: 23px; height: 20px;" src="../../static/image/personal-image/系统设置.png" mode="aspectFill"></image>
	    </view>
	    <view class="toolText">
	      <text class="tooltext">我的消息</text>
	      <text class="tooltext">我的发帖</text>
	      <text class="tooltext">帮助与反馈</text>
	      <text class="tooltext">系统设置</text>
	    </view>
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
	.person-information {
	  width: 880rpx;
	  height: 300rpx;
	  border-radius: 20rpx;
	  margin: 16rpx 0;
	  padding: 14rpx 35rpx;
	  position: relative;
	}
	.person-information .person-details {
	  display: flex;
	  flex-wrap: nowrap;
	  flex-direction: row;
	}
	.person-information .person-details .avatar {
	  margin-top: 5rpx;
	  margin-right: 5rpx;
	}
	.person-information .person-details .userInfo {
	  left: 20rpx;
	}
	.person-information .person-details .userInfo .datails-name {
	  margin-top: 58rpx;
	  margin-left: 18rpx;
	  font-size: 36rpx;
	}
	.person-information .person-details .userInfo .datails-information {
	  margin-top: 10rpx;
	  margin-left: 18rpx;
	  font-size: 28rpx;
	  color: #9A9A9A;
	}
	.person-information .person-social .social-number {
	  margin-top: 20rpx;
	  display: flex;
	  flex-wrap: nowrap;
	  flex-direction: row;
	}
	.person-information .person-social .social-number .numbersetting {
	  display: flex;
	  justify-content: space-between;
	  /* margin-top: 20rpx; */
	  font-size: 32rpx;
	  padding: 10rpx;
	  padding-left: 92rpx;
	}
	.person-information .person-social .social-text {
	  display: flex;
	  flex-wrap: nowrap;
	  flex-direction: row;
	}
	.person-information .person-social .social-text .textsetting {
	  display: flex;
	  justify-content: space-between;
	  padding-left: 78rpx;
	  padding-right: 22rpx;
	  font-size: 30rpx;
	  color: #9A9A9A;
	}
	.person-fuction {
	  width: 110%;
	  height: 170rpx;
	  border-bottom: 1px solid #e2e2e2;
	}
	.person-fuction .fuctionPicture {
	  display: flex;
	  flex-wrap: nowrap;
	  flex-direction: row;
	}
	.person-fuction .fuctionPicture .picture {
	  margin: 20rpx;
	  margin-left: 106rpx;
	  justify-content: space-between;
	}
	.person-fuction .fuctionText {
	  margin-top: 5rpx;
	  display: flex;
	  flex-wrap: nowrap;
	  flex-direction: row;
	}
	.person-fuction .fuctionText .fuc-text {
	  margin-left: 68rpx;
	  justify-content: space-between;
	  font-size: 26rpx;
	  color: #101010;
	}
	.person-tools .toolsText {
	  margin: 20rpx;
	  margin-left: 40rpx;
	  margin-top: 40rpx;
	  font-size: 26rpx;
	  color: #101010;
	}
	.person-tools .toolPicture {
	  margin-top: 10rpx;
	  display: flex;
	  flex-wrap: nowrap;
	  flex-direction: row;
	}
	.person-tools .toolPicture .toolpicture {
	  margin: 20rpx;
	  margin-left: 108rpx;
	  justify-content: space-between;
	}
	.person-tools .toolText {
	  margin-top: 5rpx;
	  display: flex;
	  flex-wrap: nowrap;
	  flex-direction: row;
	}
	.person-tools .toolText .tooltext {
	  margin-left: 83rpx;
	  justify-content: space-between;
	  font-size: 22rpx;
	  color: #101010;
	}
</style>