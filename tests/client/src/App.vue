<template>
	<div id="app">
		<Navigation />
		<router-view />
	</div>
</template>

<script>
import Navigation from './components/Navigation.vue';
export default {
	components: {
		Navigation,
	},
};
</script>

<style lang="scss">
@import '~bootstrap/scss/_functions';
@import '~bootstrap/scss/_variables';
@import '~bootstrap/scss/mixins/_breakpoints';

// .dark {
// 	@import './assets/_variables';
// 	@import '~bootstrap/scss/bootstrap';
// 	@import './assets/_bootswatch';
// }

// @import '~bootstrap/scss/bootstrap';

.dark {
	$enable-gradients: true;

	@import './assets/_variables';

	$theme-colors: (
		'primary': $primary,
		'secondary': $secondary,
		'success': $success,
		'danger': $danger,
		'info': $info,
		'dark': $dark,
		'light': #aaa,
	);

	/* redefine theme color variables */
	@each $color, $value in $theme-colors {
		--#{$variable-prefix}#{$color}: #{$value};
	}

	$theme-colors-rgb: map-loop($theme-colors, to-rgb, '$value');

	@each $color, $value in $theme-colors-rgb {
		--#{$variable-prefix}#{$color}-rgb: #{$value};
	}

	--#{$variable-prefix}body-color: #{$body-color};
	--#{$variable-prefix}body-bg: #{$body-bg};

	// @import 'bootstrap';
	@import '~bootstrap/scss/bootstrap';
}
@import '~bootstrap/scss/bootstrap';
</style>
