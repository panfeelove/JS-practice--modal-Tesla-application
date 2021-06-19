function _createModal(options){
    const modal = document.createElement('div');
    modal.classList.add('__modal');
    modal.insertAdjacentHTML('afterbegin',`
        <div class="modal-overlay">
            <div class="modal-window">
                <div class="modal-header">
                    <span class="modal-title">
                        Modal-title
                    </span>
                    <span class="modal-close">&times;</span>
                </div>
                <div class="modal-body">
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Quidem distinctio vero enim doloremque quia.</p>
                </div>
                <div class="modal-footer">
                    <button><strong>Ok</strong></button>
                    <button><strong>Cancel</strong></button>
                </div>
            </div>
        </div>   
    `);
    document.body.appendChild(modal);

    return modal
}

$.modal = function(options){
    const $modal = _createModal(options);
    
    return{
        open(){
            $modal.classList.add('open')
        },
        close(){
            $modal.classList.remove('open')
        },
        destroy(){}
    }
}