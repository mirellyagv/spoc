$(".btnCarga").on('change',function(){
	var id = this.id;
	if(this.value != ''){
		$('#label_'+id).removeClass('btn-primary');
    $('#label_'+id).addClass('btn-secondary');
    $('#texto_'+id).removeClass('bx-upload');
		$('#texto_'+id).addClass('bx-refresh');
		$('#texto_'+id).html(' ');
	}
	// alert(this.id);
});

$(".radio_vis").on('click',function(){
	var id = this.id;
	var valor = this.value;
	aux = id.split('_')[2]
	if(valor == 'option1'){
		$('#label_prop_vis_'+aux).removeClass('btn-secondary');
		$('#label_prop_vis_'+aux).removeClass('btn-light');
    $('#label_prop_vis_'+aux).addClass('btn-primary');
    $('#texto_prop_vis_'+aux).removeClass('bx-refresh');
		$('#texto_prop_vis_'+aux).addClass('bx-upload');
		$("#prop_vis_"+aux).prop('disabled',false);
	}else{
		$('#label_prop_vis_'+aux).removeClass('btn-primary');
		$('#label_prop_vis_'+aux).addClass('btn-light');
		$("#prop_vis_"+aux).prop('disabled',true);
    $('#texto_prop_vis_'+aux).html(' Cargar');
    $('#texto_prop_vis_'+aux).removeClass('bx-upload');
		$('#texto_prop_vis_'+aux).addClass('bx-refresh');
		$("#prop_vis_"+aux).val();
	}
	console.log(valor);
});

function borrarFila(compo){
    Swal.fire({
      title: '',
      text: "¿Eliminar fila?",
      showCancelButton: true,
      type: "question",
      showCancelButton:!0,
      confirmButtonText: "Si",
      cancelButtonText:"No"
    }).then((result) => {
      if (result.value) { 
      	$(compo).parents('div .filit').remove();
      	var cant = $(".bloqueform2 .filit").length;
      	if ((cant) < 5) {
		    $(".btn-anadir").prop('hidden',false);
		}
      }
    })
}

$(".btn-anadir").on('click',function(){
	var cant = $(".bloqueform2 .filit").length;
	var fila = '<div class="filit">'+
                  '<div class="row">'+
                        '<div class="col-6 col-lg-4">'+
                          '<input class="form-control texto" type="text" name="">'+
                        '</div>'+
                        '<div class="col-6 col-lg-5 selec">'+
                          '<select id="my-select" class="custom-select suiche2" name="">'+
                            '<option selected>Elementos visuales</option>'+
                            '<option value="">Promociones cruzadas</option>'+
                            '<option value="">jalavistas</option>'+
                            '<option value="">marco de góndola</option>'+
                            '<option value="">volantes</option>'+
                            '<option value="">canjes</option>'+
                          '</select>'+
                        '</div>'+
                        '<div class="input-group btn-group filefot col-8 col-md-6 col-lg-3">'+
                          '<label for="carga_'+(cant+1)+'" class="btn btn-sm upcarga btn-primary" id="label_carga_'+(cant+1)+'"><i class="bx bx-upload" id="texto_carga_'+(cant+1)+'"> Cargar</i><input id="carga_'+(cant+1)+'" class="form-control-file btnCarga" type="file" accept=".jpeg, .jpg, .png" name="" hidden></label>'+
                          '<label class="btn btn-sm upcarga btn-danger bx bxs-x-circle" for="borrarFila_'+(cant+1)+'"> Borrar<button id="borrarFila_'+(cant+1)+'" onclick="borrarFila(this);" type="button" hidden></button></label>'+
                        '</div>'+                                 
                  '</div>';
    document.getElementById("bloqueform2").insertAdjacentHTML("beforeEnd" ,fila);
	if ((cant+1) >= 5) {
        $(".btn-anadir").prop('hidden',true);
    }
});