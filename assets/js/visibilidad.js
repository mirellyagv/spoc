$(".btnCarga").on('change',function(){
	var id = this.id;
	if(this.value != ''){
		$('#label_'+id).removeClass('btn-primary');
		$('#label_'+id).addClass('btn-secondary');
		$('#label_'+id).html(' Reemplazar');
	}
	// alert(this.value);
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
	console.log(cant);
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