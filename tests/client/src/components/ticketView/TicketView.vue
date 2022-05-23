<template>
	<div style="height: 85vh" class="py-4" id="ticketView">
		<div class="row h-100" style="margin-right: 0px">
			<div class="col-1" style="width: 4.333333%"></div>
			<div class="h-100 col-4 shadow-sm p-3 mb-5 bg-body rounded">
				<h2 class="justify-content-center text-center">Chat</h2>
			</div>
			<div class="col-1" style="width: 2.333333%"></div>
			<div class="col-3">
				<div class="h-30 shadow-sm p-3 mb-5 bg-body rounded">
					<h3 class="justify-content-center text-center">Informationen</h3>
					<div class="row">
						<dt class="col-sm-4">Ticket:</dt>
						<dd class="col-sm-8">#{{ currentViewed.ID }}</dd>
						<dt class="col-sm-4">Kategorie:</dt>
						<dd class="col-sm-8">{{ currentViewed.category }}</dd>
						<dt class="col-sm-4">N-Tags:</dt>
						<dd class="col-sm-8">
							<span class="badge rounded-pill bg-danger">Wichtig</span>
						</dd>
						<dt class="col-sm-4">I-Tags:</dt>
						<dd class="col-sm-8">
							<span class="badge rounded-pill bg-warning">Eher Wichtig</span>
						</dd>
					</div>
				</div>
				<div style="height: 63% !important" class="shadow-sm p-3 mb-5 bg-body rounded">
					<h3 class="text-center">Notizen / Entwürfe</h3>
				</div>
			</div>
			<div class="col-3">
				<div class="h-25 shadow-sm p-3 mb-5 bg-body rounded">
					<h3 class="text-center">Nutzer Informationen</h3>
					<div class="row">
						<dt class="col-sm-4">Name:</dt>
						<dd class="col-sm-8">
							{{ currentViewed.user.username }} <a href="#id">#{{ currentViewed.user.ID }}</a>
						</dd>
						<dt class="col-sm-4">E-Mail:</dt>
						<dd class="col-sm-8">
							{{ currentViewed.user.email }}
						</dd>
					</div>
				</div>
				<div style="height: 63% !important" class="shadow-sm p-3 mb-5 bg-body rounded">
					<h3 class="text-center">Participiants / Teilnehmer</h3>
					<h5>Teilnehmer</h5>
					<ul class="list-group">
						<li class="list-group-item">Du</li>
						<li class="list-group-item">Supporter #1</li>
					</ul>
					<div class="py-4">
						<h5>Einladen</h5>
						<form>
							<div class="row justify-content-between">
								<div class="col-1" style="width: 0px; padding-right: 0px"></div>
								<input class="col form-control" type="text" name="name" />
								<div class="col-1" style="width: 0px; padding-right: 0px"></div>
								<button class="col-auto btn btn-primary btn-round" type="submit">
									<i class="fas fa-plus-circle"></i>
								</button>
								<div class="col-1" style="width: 0.333333%"></div>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div class="col-1"></div>
		</div>
	</div>
</template>
<script>
import { mapState } from 'vuex';
export default {
	name: 'TicketView',
	computed: {
		...mapState('tm', ['currentViewed']),
	},
};
</script>
<style lang=""></style>
