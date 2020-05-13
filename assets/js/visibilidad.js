$(".btnCarga").on('change',function(){
	var id = this.id;
	if(this.value != ''){
		$('#label_'+id).removeClass('btn-primary');
		$('#label_'+id).addClass('btn-secondary');
		$('#label_'+id).html(' Reemplazar');
	}
	// alert(this.value);
});