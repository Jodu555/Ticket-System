<template>
	<div>
		<ul class="nav nav-tabs" id="tab-list">
			<li class="nav-item">
				<a class="nav-link active" @click="changeView('')" href="#">Liste</a>
			</li>
			<li class="nav-item">
				<span class="nav-link"
					><a href="#" @click="changeView('1254')">Ticket #1254</a>
					<a href="#del" class="btn-close del">&times;</a></span
				>
			</li>

			<li class="nav-item">
				<span class="nav-link"
					><a href="#" @click="changeView('4897')">Ticket #4897</a>
					<a href="#del" class="btn-close del">&times;</a></span
				>
			</li>
		</ul>
		<div v-if="view == ''" style="height: 85vh" class="py-4 container" id="ticketList">
			<table
				:class="{
					table: true,
					'table-dark': dark,
				}"
			>
				<thead>
					<tr>
						<th scope="col">#ID</th>
						<th scope="col">Typ</th>
						<th scope="col">Last</th>
						<th scope="col">Handle</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row"><a href="">#1254</a></th>
						<td>Bug</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<th scope="row"><a href="">#4897</a></th>
						<td>Anfrage</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div v-else>
			<h1>OTHER</h1>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			view: '--',
		};
	},
	methods: {
		changeView(view) {
			this.view = view;
		},
	},
};
</script>
<style lang="scss"></style>
