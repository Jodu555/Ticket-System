<template>
	<nav
		:class="{
			navbar: true,
			'navbar-expand-lg': true,
			'navbar-dark': dark,
			'bg-dark': dark,
			'navbar-light': !dark,
			'bg-light': !dark,
		}"
	>
		<div class="container-fluid">
			<a class="navbar-brand" href="#">Ticket System</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link class="nav-link" exact-active-class="active" to="/">Dashboard</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" exact-active-class="active" to="/list">Liste</router-link>
					</li>
				</ul>
				<div class="d-flex">
					<button @click="changeTheme()" class="btn btn-outline-info">Dark / Light</button>
				</div>
			</div>
		</div>
	</nav>
</template>
<script>
export default {
	data() {
		return {
			dark: false,
		};
	},
	methods: {
		changeTheme() {
			this.dark = !this.dark;
			document.body.classList.toggle('dark');
			// darkmode.toggleDarkMode();
			// document.documentElement.getAttribute('data-theme') == 'light'
			// 	? document.documentElement.setAttribute('data-theme', 'dark')
			// 	: document.documentElement.setAttribute('data-theme', 'light');
		},
	},
};
</script>
<style lang=""></style>
