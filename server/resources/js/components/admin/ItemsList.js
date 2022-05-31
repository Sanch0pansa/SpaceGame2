import React, { useEffect, useState } from 'react';
import request from '../../api/Request';
import Item from './Item';
import ItemForm from './ItemForm';

const ItemsList = ({content, reloadEvent, ...props}) => {
    
    // all items
    const [items, setItems] = useState([]);

    const reload = () => {
        request(`/api/${content.api}/`, {}, r => {
            setItems(r.content);
        }, "GET");
    }

    // Selected items
    const [selectedItem, setSelectedItem] = useState({});

    useEffect(() => {
        if (Object.keys(selectedItem).length == 0) {
            reload();
        }
    }, [selectedItem]);

    useEffect(() => {
        reload();
        setSelectedItem({});
    }, [content, reloadEvent]); 

    // Removing items
    const removeItem = (item) => {
        request(`/api/${content.api}/${item.id}`, {}, reload, "DELETE");
    }
    

    return (
        <div className="mt-5">
            <h3 className='mb-3'>{content.items.title}</h3>
            <div className='row gy-3'>
                {
                    Object.keys(selectedItem).length == 0 ?
                    items.map(item => 
                        <Item key={`item_${item.id}`} items={content.items} item={item} api={content.api} actions={content.actions} setSelectedItem={setSelectedItem} removeItem={removeItem}></Item>
                    ) :
                    <ItemForm item={selectedItem} content={content} setSelectedItem={setSelectedItem} reload={reload}></ItemForm>
                }
            </div>
        </div>
        
    );
};

export default ItemsList;