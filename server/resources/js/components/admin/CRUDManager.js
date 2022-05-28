import React from 'react';
import CreateForm from './CreateForm';
import ItemsList from './ItemsList';
import { useState } from 'react';

const CRUDManager = ({children, content, ...props}) => {

    const [reload, setReload] = useState(false);

    return (
        <div className='mt-5'>
            {/* Rendering creating form */}
            {content.actions.includes('create') ? 
                <CreateForm content={content} setReload={setReload}></CreateForm>
                : ""
            }
            {/* Rendering item list */}
            {content.actions.includes('get') ? 
                <ItemsList content={content} reloadEvent={reload}></ItemsList>
                : ""
            }
        </div>    
    );
};

export default CRUDManager;