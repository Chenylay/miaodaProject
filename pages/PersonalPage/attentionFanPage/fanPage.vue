<template>
	<view>
	    <view class="AF-main">
	      <view class="Af-top" style="flex: auto;">
	        <image class="backButton" style="width: 28px; height: 28px;" src="../../../static/image/personal-image/返回.png" mode="" bindtap="goBack"></image>
	        <text class="topText">我的</text>
	        <image class="topPicture" style="width: 24px; height: 24px;" src="../../../static/image/personal-image/搜索.png" mode=""></image>
	      </view>
	      <view class="AF-title">
	        <view class="title-botton">
	          <navigator url="/pages/PersonalPage/attentionFanPage/attentionPage">
	            <button type="default" style="color: #5473F9; background-color: transparent; color: #9A9A9A; border: none; font-size: 30rpx; border-radius: 80rpx; font-size: 30rpx;" hover-class="is-hover">关注</button>
	          </navigator>
	          <button type="default" style="color: #5473F9; background-color: transparent; color: #5478F9; border: none; font-size: 30rpx; border-radius: 80rpx; font-size: 30rpx;" hover-class="is-hover">粉丝</button>
	        </view>
	      </view>
	      <scroll-view>
	        <view class="AF-member" wx:for="{{6}}" wx:key="index">
	        <view class="avatar">
	          <image style="width: 60px; height: 60px; border-radius: 100rpx;" src="../../../static/image/personal-image/头像.jpg" mode="aspectFill"></image>
	        </view>
	        <view class="userInfo">
	          <view class="datails-name">
	            <text class="datails-name">柯布</text>
	          </view>
	          <text class="xxx">xxx</text>
	          <view class="datails-information">
	            <text class="datails-information">粉丝数：1648万</text>
	          </view>
	        </view>
	        <view class="member-botton">
	          <button type="default" style="color: #5478F9; background-color: #FFFFFF; border-color:#5478F9;border-radius: 50rpx; font-size: 26rpx;" hover-class="is-hover">发信息</button>
	        </view>
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
			goBack: function () {
			    wx.switchTab({
			      url: '/pages/PersonalPage/PersonalPage',
			    })
			  }
		}
	}
</script>

<style lang="scss" scoped>
	.AF-main {
	  background-color: #f9f9f9;
	}
	.Af-top {
	  position: sticky;
	  top: 0;
	  z-index: 1;
	  display: flex;
	  align-items: center;
	  justify-content: space-between;
	  flex-wrap: nowrap;
	  flex-direction: row;
	  width: 100%;
	  height: 80rpx;
	  background-color: #FFFFFF;
	}
	.Af-top .backButton {
	  /* display: flex;
	  box-sizing: border-box;
	  aspect-ratio: auto 67/24; */
	  margin-top: 30rpx;
	  /* width: 10rpx;
	  height: 10rpx; */
	  /* margin-right: 20rpx; */
	  /* margin-left: 100rpx; */
	}
	.Af-top .topText {
	  margin-top: 20rpx;
	  margin-left: 200rpx;
	  font-size: 40rpx;
	  color: #101010;
	  font-weight: bold;
	}
	.Af-top .topPicture {
	  margin-top: 20rpx;
	  margin-left: 200rpx;
	}
	.AF-title {
	
	  background-color: #FFFFFF;
	  height: 100rpx;
	  border-bottom: 1px solid #e6e6e6;
	}
	.AF-title .is-hover {
	  color: #5478F9;
	}
	.AF-title .title-botton {
	  padding-top: 15rpx;
	  display: flex;
	  flex-wrap: nowrap;
	  flex-direction: row;
	  margin-left: 220rpx;
	  margin-right: 170rpx;
	}
	.AF-member {
	  background-color: #FFFFFF;
	  display: flex;
	  flex-wrap: nowrap;
	  flex-direction: row;
	  margin-top: 30rpx;
	  margin-left: 26rpx;
	  width: 94%;
	  height: 200rpx;
	  border: 1rpx solid #9A9A9A;
	  border-radius: 30rpx;
	}
	.AF-member .avatar {
	  margin-top: 5rpx;
	  top: 10rpx;
	  left: 20rpx;
	  margin-right: 5rpx;
	}
	.AF-member .userInfo {
	  margin-bottom: 20rpx;
	  top: 0;
	  left: 20rpx;
	}
	.AF-member .userInfo .datails-name {
	  margin-top: 20rpx;
	  margin-left: 10rpx;
	  font-size: 32rpx;
	}
	.AF-member .userInfo .xxx {
	  margin-top: 5rpx;
	  margin-left: 24rpx;
	  font-size: 20rpx;
	  color: #9A9A9A;
	}
	.AF-member .userInfo .datails-information {
	  margin-top: 5rpx;
	  margin-left: 10rpx;
	  font-size: 25rpx;
	  color: #9A9A9A;
	}
	.AF-member .member-botton {
	  margin-top: 56rpx;
	  margin-left: 200rpx;
	}
</style>
