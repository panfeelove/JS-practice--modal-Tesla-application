const modal = $.modal({
    title:'some title',
    closable:true,
    content:'<p>new content</p>',
    width:'400px',
    footerButtons:[
        {
            text:'Ok',style:'primary',handler(){
                modal.close();
            }
        },
        {
            text:'Cancel',style:'danger',handler(){
                modal.close();
            }
        }
    ]
});

