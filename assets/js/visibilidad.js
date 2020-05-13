$("#carga1").on('change',function(){
	var id = this.id;
	if(this.value != ''){
		$('#label_'+id).removeClass('btn-primary');
		$('#label_'+id).addClass('btn-secondary');
	}
	// alert(this.value);
});