import React, {useEffect, useState} from "react";
import FileBase64 from "react-file-base64";
import axios from "axios";

export default function Sidebar() {
    const [item, setItem] = useState({ title: '', image: '' });
    const [items, setItems] = useState([])

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        console.log(items)
        // const result = await createItem(item);
        // setItems([...items, result]);
    }

    useEffect(() => {
        axios.get("http://localhost:8093/photos").then(response => {
            console.log(response)
            setItems(response.data)
        }).catch(error => {
            console.log(error)
        })
        
    }, [])


    return (
        <div className="container">
            <pre>{JSON.stringify(items, null, '\t')}</pre>
            <form action="" onSubmit={onSubmitHandler}>
                <input type="text" className="input-field"
                       onChange={e => setItem({ ...item, title: e.target.value })}
                />
                {/*<FileBase64*/}
                {/*    type="file"*/}
                {/*    multiple={false}*/}
                {/*    onDone={({ base64 }) => setItem({ ...item, image: base64 })}*/}
                {/*/>*/}
                <div className="right-align">
                    <button className="btn">submit</button>
                </div>

            </form>
            {items?.map(item => (
                <div className="card" key={item.id}>
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" style={{ width: 300, height: 300 }} src={item.image}  alt={""}/>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">{item.title}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}