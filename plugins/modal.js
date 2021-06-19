function _createModal(options){
    let title = options.title;
    const closable = options.closable;
    let closeBtn = '';
    if(closable){
        closeBtn = '<span class="modal-close">&times;</span>'
    }
    let content = options.content;
    let width = options.width;

    const modal = document.createElement('div');
    modal.classList.add('__modal');
    modal.insertAdjacentHTML('afterbegin',`
        <div class="modal-overlay">
            <div class="modal-window">
                <div class="modal-header">
                    <span class="modal-title">
                        ${title}
                    </span>
                    ${closeBtn}
                </div>
                <div class="modal-body">
                    ${content}
                </div>
                <div class="modal-footer">
                    <button><strong>Ok</strong></button>
                    <button><strong>Cancel</strong></button>
                </div>
            </div>
        </div>   
    `);
    modal.querySelector('.modal-window').style.width = width;
    document.body.appendChild(modal);

    return modal
}

$.modal = function(options){
    const $modal = _createModal(options);
    const ANIMATION_SPEED = 200;
    let closing = false;

    return{
        open(){
            if(!closing){
                $modal.classList.add('open')
                
            }
        },
        close(){
            closing = true;
            $modal.classList.add('hide')
            setTimeout(()=>{
                $modal.classList.remove('open');
                $modal.classList.remove('hide');
                closing=false;
            },ANIMATION_SPEED)
        },
        destroy(){
            $modal.remove();
        }
    }
}