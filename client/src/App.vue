<template>
	<div id="app">
		<el-menu class="el-menu-demo" mode="horizontal">
			<el-menu-item><router-link to="/">Home</router-link></el-menu-item>
			<el-menu-item><router-link to="/about">About</router-link></el-menu-item>
		</el-menu>
		<el-container>
			<router-view></router-view>
		</el-container>
	</div>
</template>

<script>
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

export default {
	name: 'app',
	components: {
		Home,
		About,
	},
};
</script>

<style>
a {
	text-decoration: none;
}
</style>
