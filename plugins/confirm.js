$.confirm = function(options){
    return new Promise((resolve,reject)=>{
        const modal = $.modal({
            title:options.title,
            closable:true,
            width:'400px',
            content:options.content,
            onClose(){
                modal.destroy();
            },
            footerButtons:[
                {
                    text:'Delete',style:'danger',handler(){
                        modal.close();

                        resolve();
                    }
                },
                {
                    text:'Cancel',style:'primary',handler(){
                        modal.close();

                        reject()
                    }
                }
            ]
        })
        setTimeout(()=>modal.open(),100);
    })
}