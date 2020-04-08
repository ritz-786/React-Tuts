import React from 'react'

function MemoComp(props) {
    const {name}  = props;
    console.log('Rendering Memo Component')
    return (
        <div>
            {name}
        </div>
    )
}

//for rendering component only when there is change just like pureComponent class
export default React.memo(MemoComp)
