<template>
  <view class="my-search-container">
    <!-- 使用 view 组件模拟 input 输入框的样式 -->
    <view class="my-search-box" @click="searchBoxHandler">
      <text class="placeholder">前端基础教程来袭！！</text>
	  <uni-icons type="search" size="30" class="searchIcon"></uni-icons>
    </view>
	<view class="my-search-message" @click="offInformation">
		<image class="messageImage" mode="aspectFit" src="../../static/image/index-image/消息.png"></image>
	</view>
	
  </view>
</template>

<script>
	export default {
		name:"mid-searchbox",
		data() {
			return {
				
			};
		},
		methods: {
			searchBoxHandler(){
			 	uni.navigateTo({
			 		url:'/pages/search/search'
			 	})
			},
			offInformation(){
			 	uni.navigateTo({
			 		url:'/pages/demo1/demo1'
			 	})
			}
		  // 点击了模拟的 input 输入框
		  /* searchBoxHandler() {
		    // 触发外界通过 @click 绑定的 click 事件处理函数
		    this.$emit('click')
		  },
		  offInformation(){
			this.$emit('click')
		  } */
		  
		}
	}
</script>

<style lang="scss" scoped>
	.my-search-container {
	  background-color: #5478F9;
	  height: 148rpx;
	  padding: 28rpx 30rpx;
	  padding-right: 0rpx;
	  display: flex; 
	  border-radius: 10rpx;
	  justify-content: center;
	  flex-wrap:nowrap;
	  flex-direction: row;
	  position:fixed;
	  .my-search-box {
	    height: 86rpx;
	    width: 600rpx;
	    background-color: #ffffff;
	    border-radius: 10rpx;
	    display: flex;
	    align-items:center;
	    /* justify-content: center; */
	    flex-wrap:nowrap;
	    flex-direction: row;
	    padding:0 24rpx;
	    .placeholder {
	  	color: #9A9A9A;
	      font-size: 28rpx;
	    }
		.searchIcon{
			margin-left: auto;
		}
	  }
	  .my-search-message{
		  height: 86rpx;
		  width:120rpx;
		  justify-content: center;
		  align-items:center;
		  .messageImage{
			  height: 70rpx;
			  width:70rpx;
		  }
	  }
	  
	}
	
</style>